# 反射

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 反射相关的概念
2. 反射的基本操作



# 一、反射相关的概念

## 1.什么是反射

反射即反向探知，有点像考古学家根据发掘的物品来探知以前的事情。

![image-20201223150020014](img\image-20201223150020014.png)

Java中的反射指的是程序在运行状态中

1. 对于给定的一个类(Class)对象，可以获取到这个类(Class)对象的所有的属性和方法
2. 对于给定的一个对象(new XXXClassName<? extends Object>),都能够调用它的任意一个属性和方法

这种动态获取类的内容以及动态调用对象的方法和属性的机制，就叫做Java的反射机制。



Java反射的优缺点：

优点：

1. 增加程序的灵活性，避免将固有的逻辑程序写死在代码里面。
2. 代码简洁，可读性增强，可提高代码的复用率



缺点：

1. 相较于直接调用在量大的情况下反射性能下降厉害
2. 内部暴露和安全隐患





## 2.Class的组成

一个Class实例包含的内容有哪些呢？

![image-20201223151107030](img\image-20201223151107030.png)

我们在程序运行的时候获取到Class类型，我们要根据Class类型来获取相关的内容





# 二、Class的基本操作

## 1.怎么获取Class对象

```java
package com.bobo.reflection;

public class ReflectionDemo01 {


    /**
     * 获取Class对象的方式
     * @param args
     */
    public static void main(String[] args) throws ClassNotFoundException {
        // 获取Person对应的Class对象
        Class<Person> class1 = Person.class;
        System.out.println(class1);
        Class class2 = Class.forName("com.bobo.reflection.Person");
        System.out.println(class2);
        // 还可以通过 Person对象中的getClass方法获取
        Person p = new Person();
        Class<? extends Person> class3 = p.getClass();
        System.out.println(class3);
        // 系统提供的一些类型获取 Class对象
        Class<String> stringClass = String.class;
        Class<Integer> integerClass = int.class;
        Class<int[]> aClass = int[].class;
        System.out.println(stringClass);
        System.out.println(integerClass);
        System.out.println(aClass);
        Class<double[]> aClass1 = double[].class;
        System.out.println(aClass1);
        // 获取包装类对应的Class对象
        Class<Integer> integerClass1 = Integer.class;
        Class<Integer> type = Integer.TYPE;
        // 我要获取void 没有返回结果的 Class类型
        Class<Void> type1 = Void.TYPE;
        Class<Void> voidClass = Void.class;
        System.out.println(integerClass1);
        System.out.println(type);
        System.out.println(type1);
        System.out.println(voidClass);



    }
}

```

输出结果:

```txt
class com.bobo.reflection.Person
class com.bobo.reflection.Person
class com.bobo.reflection.Person
class java.lang.String
int
class [I
class [D
class java.lang.Integer
int
void
class java.lang.Void
```



## 2.Class对象中的常用方法

### 2.1 getName

​         获取当前类型的全类路径名称

### 2.2 newInstance()

​		通过无参构造方法获取对应的实例对象，如果无参构造方法被覆盖的话，会抛出NoSuchMethodException: com.bobo.reflection.Student.<init>() 异常

### 2.3 getSuperclass()

​      获取当前类型的父类，如果没有显示的继承父类，那么返回的是Object

### 2.4 getInterfaces()

​      获取当前类型实现的所有的接口

```java
package com.bobo.reflection;

import java.util.Arrays;

public class ReflectionDemo02 {
    /**
     * 反射中的常用方法
     * @param args
     */
    public static void main(String[] args) throws IllegalAccessException, InstantiationException {
        // 获取一个Student的类对象
        Class<Student> studentClass = Student.class;
        // getName()  完整包名+类名
        System.out.println(studentClass.getName());
        // 通过类型获取一个Student对象 newInstance() 调用的是无参的构造方法
        // 如果没有无参的构造方法那么会抛 NoSuchMethodException: com.bobo.reflection.Student.<init>() 异常
        Student student = studentClass.newInstance();
        System.out.println(student);
        // 获取当前类对象的父类对象
        Class<? super Student> superclass = studentClass.getSuperclass();
        System.out.println(superclass);
        System.out.println(superclass.getSuperclass());
        // 获取当前类型实现的接口
        Class<?>[] interfaces = studentClass.getInterfaces();
        System.out.println(Arrays.toString(interfaces));

    }
}
```



输出结果:

```txt
com.bobo.reflection.Student
com.bobo.reflection.Student@4554617c
class com.bobo.reflection.Person
class java.lang.Object
[interface com.bobo.reflection.InterfaceDemo01, interface com.bobo.reflection.InterfaceDemo02]
```



### 2.5 获取属性

```java
Field	getField(String name)
//返回一个 Field对象，它反映此表示的类或接口的指定公共成员字段 类对象。
Field[]	getFields()
//返回包含一个数组 Field对象反射由此表示的类或接口的所有可访问的公共字段 类对象。
Field	getDeclaredField(String name)
//返回一个 Field对象，它反映此表示的类或接口的指定已声明字段 类对象。
Field[]	getDeclaredFields()
//返回的数组 Field对象反映此表示的类或接口声明的所有字段 类对象。
```

```java
package com.bobo.reflection;

import java.lang.reflect.Field;

public class ReflectionDemo03 {


    /**
     * 反射获取 属性的方法
     * @param args
     */
    public static void main(String[] args) {
        Class<Student> studentClass = Student.class;
        // 获取相关的属性方法 Class中的每一个属性会被封装会一个Field对象
        // getFields() 获取当前类型和父类中的所有的public权限的字段
        Field[] fields = studentClass.getFields();
        for(Field field:fields){
            System.out.println(field.getName());
        }
        System.out.println("---------");
        // getDeclaredFields() 表示的获取当前类中的所有的 属性，包括私有的
        Field[] declaredFields = studentClass.getDeclaredFields();
        for (Field field:declaredFields){
            System.out.println(field.getName());
        }


    }
}

```



针对属性的操作：Field的操作

```java
package com.bobo.reflection;

import java.lang.reflect.Field;

public class ReflectionDemo04 {


    /**
     * 反射获取 属性的方法
     * @param args
     */
    public static void main(String[] args) throws Exception{
        Class<Student> studentClass = Student.class;
        // 获取Student对象
        Student student = studentClass.newInstance();
        student.gender = "男";
        // 通过类型获取gender属性
        Field gender = studentClass.getDeclaredField("gender");

        System.out.println(gender.getName());
        // 获取对应的访问权限修饰符 1表示 public 2表示 private 4 表示 protected
        System.out.println(gender.getModifiers());
        // 获取或设置属性的信息
        System.out.println(gender.get(student));
        // 修改属性值
        gender.set(student,"女");
        System.out.println(gender.get(student));
        // 操作私有属性
        Field stuNum = studentClass.getDeclaredField("stuNum");
        // 在反射中是不允许直接操作私有属性的，如果一定要操作必须放开权限
        stuNum.setAccessible(true); // 允许对私有属性的操作
        System.out.println(stuNum.get(student));
        // 修改私有属性的信息
        stuNum.set(student,10001);
        System.out.println(stuNum.get(student));
        // 养成好的习惯，操作属性完成后，把权限关闭
        stuNum.setAccessible(false);

    }
}

```

输出结果：

```txt
gender
1
男
女
null
10001
```





### 2.6 获取方法

```java
Method	getDeclaredMethod(String name, 类<?>... parameterTypes)
// 返回一个 方法对象，它反映此表示的类或接口的指定声明的方法 类对象。
Method[]	getDeclaredMethods()
// 返回包含一个数组 方法对象反射的类或接口的所有声明的方法，通过此表示 类对象，包括公共，保护，默认（包）访问和私有方法，但不包括继承的方法。
    
Method	getMethod(String name, 类<?>... parameterTypes)
//返回一个 方法对象，它反映此表示的类或接口的指定公共成员方法 类对象。
Method[]	getMethods()
//返回包含一个数组 方法对象反射由此表示的类或接口的所有公共方法 类对象，包括那些由类或接口和那些从超类和超接口继承的声明。
```

案例代码

```java
package com.bobo.reflection;

import java.lang.reflect.Method;

public class ReflectionDemo05 {

    /**
     * 反射 获取相关方法
     * @param args
     */
    public static void main(String[] args) {
        // 获取Student的类对象
        Class<Student> studentClass = Student.class;
        // 获取相关的方法 getMethod获取当前类及父类中的所有的共有的方法
        Method[] methods = studentClass.getMethods();
        for (Method method :methods){
            System.out.println(method.getName());
        }
        System.out.println("----");
        // getDeclaredMethods 获取的是当前类中的所有的方法 包括 private
        Method[] declaredMethods = studentClass.getDeclaredMethods();
        for(Method method:declaredMethods){
            System.out.println(method);
        }

    }
}

```

Method的操作

```java
package com.bobo.reflection;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.Arrays;

public class ReflectionDemo06 {


    /**
     * Method对象
     * @param args
     */
    public static void main(String[] args) throws Exception{
        Class<Student> studentClass = Student.class;
        //  获取特定的 方法 say
        Method say = studentClass.getDeclaredMethod("say", String.class);
        // 方法的调用  方法属性普通方法，那么我们要通过对象类调用
        Student student = new Student();
        // 第一个参数 要调用哪个对象的say方法  第二个参数 是一个参数列表  调用方法的实际参数
        Object obj = say.invoke(student,"bobo");
        System.out.println(obj);
        // 私有方法的调用
        Method eat = studentClass.getDeclaredMethod("eat");
        // 调用私有的方法，我们需要放开权限
        eat.setAccessible(true);
        Object obj1 = eat.invoke(student);
        System.out.println(obj1);
        // 调用完成后记得收回权限
        eat.setAccessible(false);
        // 获取方法的返回值类型
        System.out.println(say.getReturnType());
        System.out.println(eat.getReturnType());
        // 获取方法显示抛出的异常
        Class<?>[] exceptionTypes = say.getExceptionTypes();
        System.out.println(Arrays.toString(exceptionTypes));
        // 获取方法声明的参数
        Parameter[] parameters = say.getParameters();
        for (Parameter parameter : parameters){
            // Parameter封装的是 属性的对象
            System.out.println(parameter.getName()+ " " +parameter.getModifiers() + " " + parameter.toString() );
        }
    }
}

```





### 2.7 获取构造方法

```java
Constructor<T>	getConstructor(类<?>... parameterTypes)
返回一个 Constructor对象，该对象反映 Constructor对象表示的类的指定的公共 类函数。
Constructor<?>[]	getConstructors()
返回包含一个数组 Constructor对象反射由此表示的类的所有公共构造 类对象。
Constructor<T>	getDeclaredConstructor(类<?>... parameterTypes)
返回一个 Constructor对象，该对象反映 Constructor对象表示的类或接口的指定 类函数。
Constructor<?>[]	getDeclaredConstructors()
返回一个反映 Constructor对象表示的类声明的所有 Constructor对象的数组 类 。
```





```java
    /**
     * 反射中的构造方法
     * @param args
     */
    public static void main(String[] args) {
        Class<Student> studentClass = Student.class;
        // 获取对应的构造器 getConstructors 获取的是当前类中的所有的public构造器
        Constructor<?>[] constructors = studentClass.getConstructors();
        for(Constructor constructor:constructors){
            System.out.println(constructor.getName() + " " + Arrays.toString(constructor.getParameters()));
        }
        System.out.println("-----------------");
        // 获取当前类中的所有的 构造方法 包括private 修饰的
        Constructor<?>[] declaredConstructors = studentClass.getDeclaredConstructors();
        for(Constructor constructor:declaredConstructors) {
            System.out.println(constructor.getName()+ " " + Arrays.toString(constructor.getParameters()));
        }

    }
```

Constructor操作

```java
package com.bobo.reflection;

import java.lang.reflect.Constructor;
import java.util.Arrays;

public class ReflectionDemo08 {

    /**
     * 反射 构造器的操作
     * @param args
     */
    public static void main(String[] args) throws Exception {
        Class<Student> studentClass = Student.class;
        // 一个构造器
        Constructor<Student> c = studentClass.getDeclaredConstructor(Integer.class);
        System.out.println(c.getName());
        System.out.println(c.getModifiers());
        System.out.println(c.getParameterCount());
        // 操作private修饰的构造方法 我们同样需要放开权限
        c.setAccessible(true);
        // 通过构造器创建实例对象
        Student s = c.newInstance(1009);
        // 操作完成后同样需要关闭权限
        c.setAccessible(false);
        System.out.println(s);
        // 获取构造方法显示抛出的异常
        Class<?>[] exceptionTypes = c.getExceptionTypes();
        System.out.println(Arrays.toString(exceptionTypes));


    }
}

```





### 2.8 静态属性和静态方法操作

```java
    /**
     * 反射 静态属性和静态方法的调用
     * @param args
     */
    public static void main(String[] args) throws Exception {
        Class<Student> studentClass = Student.class;
        // 静态属性的操作
        Field s1 = studentClass.getDeclaredField("s1");
        System.out.println(s1.get("s1"));
        s1.set(null,"hahaha");
        System.out.println(s1.get("s1"));
        // 静态方法的调用
        Method fun1 = studentClass.getDeclaredMethod("fun1");
        fun1.invoke(null);

    }
```



# 三、单例的漏洞

​		我们之前介绍过单例的使用，保证一个类只有一个实例存在，但是我们将了反射后发现，私有的构造器也能够被获取到，进而可以创建出很多个实例对象，这显然和我们的期望不一致。那么针对这个漏洞，我们应该怎么办呢？

Bug还原

单例代码

```java
package com.bobo.reflection;

public class SingletonTest {

    // 声明一个静态的 单例属性
    private static SingletonTest instance;

    // 私有化构造器
    private SingletonTest(){

    }

    // 对外提供一个静态的共有的方法来获取单例对象
    public static SingletonTest getInstance(){
        if(instance == null){
            synchronized (SingletonTest.class){
                if(instance == null){
                    instance = new SingletonTest();
                }
            }
        }
        return instance;
    }
}

```

测试代码

```java
package com.bobo.reflection;

import java.lang.reflect.Constructor;

public class ReflectionDemo11 {

    /**
     * 反射 静态代码块的执行
     * @param args
     */
    public static void main(String[] args) throws Exception {
        SingletonTest i1 = SingletonTest.getInstance();
        System.out.println(i1);
        SingletonTest i2 = SingletonTest.getInstance();
        System.out.println(i2);
        // 通过反射的方式来获取对象  获取私有的构造器
        Constructor<SingletonTest> c = SingletonTest.class.getDeclaredConstructor();
        c.setAccessible(true); //放开权限
        SingletonTest i3 = c.newInstance();
        SingletonTest i4 = c.newInstance();
        c.setAccessible(false);
        System.out.println(i3);
        System.out.println(i4);

    }
}

```

输出结果

```txt
com.bobo.reflection.SingletonTest@4554617c // 正常获取
com.bobo.reflection.SingletonTest@4554617c // 正常获取
com.bobo.reflection.SingletonTest@74a14482 // 反射获取
com.bobo.reflection.SingletonTest@1540e19d // 反射获取
```



我们发现造成这个bug的根本原因是private的构造方法多次执行了，那么我们就只需要在私有构造方法中添加逻辑即可

![image-20201223174302713](img\image-20201223174302713.png)



如果要创建多个就会抛异常，从而不能成功

![image-20201223174331343](img\image-20201223174331343.png)

