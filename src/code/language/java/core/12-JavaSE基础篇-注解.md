# 注解

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 注解的相关概念
2. 预定义注解介绍
3. 自定义注解



# 一、注解相关的概念

## 1.概念介绍

注释：用文字描述程序，给程序看的。帮助程序员理解代码的作用

注解：说明程序的，给计算机看的。

定义：注解（Annotation），也叫元数据。一种代码级别的说明。它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进行说明，注释。



特点：

1. JDK1.5之后的新特性
2. 说明程序的
3. 使用注解： @注解的名称



## 2.注解的分类

### 2.1 编写文档

通过代码中的标识的注解，生成文档

```java
package com.bobo.anno;

/**
 * 注解 JavaDoc 描述
 * @author bobo
 * @version 1.0
 * @since jdk1.5
 */
public class AnnotationDemo01 {
    /**
     * 编号
     */
    private Integer id;

    /**
     * 姓名
     */
    private String userName;

    /**
     * 注解的描述
     * @param args
     */
    public static void main(String[] args) {

    }

    /**
     * 两个int类型的数据求和
     * @param a 第一个整数
     * @param b 第二个整数
     * @return
     *   a + b 的结果
     */
    public int add(int a,int b){
        return a+b;
    }

    @Override
    public String toString() {
        return "AnnotationDemo01{}";
    }
}

```

![image-20201224140525549](img\image-20201224140525549.png)



![image-20201224140547261](img\image-20201224140547261.png)



![image-20201224140425259](img\image-20201224140425259.png)



### 2.2 代码分析

通过代码里面的标识注解进行分析(反射) 



### 2.3 编译检查

通过代码里面的标识的注解让编译器狗能实现基本的编译检查(Override)

![image-20201224142113908](img\image-20201224142113908.png)





# 二、JDK中预定义的注解

@Override

检测被该注解标注的方法是否是继承自父类(接口)的，如果是就编译通过，如果不是编译报错



@Deprecated

该注解标识的内容，表示已经过时了。



![image-20201224143520952](img\image-20201224143520952.png)



@SuppressWarnings

压制警告
一般传递参数 all 压制所有的警告

```txt
all to suppress all warnings （抑制所有警告）
boxing to suppress warnings relative to boxing/unboxing operations（抑制装箱、拆箱操作时候的警告）
cast to suppress warnings relative to cast operations （抑制映射相关的警告）
dep-ann to suppress warnings relative to deprecated annotation（抑制启用注释的警告）
deprecation to suppress warnings relative to deprecation（抑制过期方法警告）
fallthrough to suppress warnings relative to missing breaks in switch statements（抑制确在switch中缺失breaks的警告）
finally to suppress warnings relative to finally block that don’t return （抑制finally模块没有返回的警告）
hiding to suppress warnings relative to locals that hide variable（）
incomplete-switch to suppress warnings relative to missing entries in a switch statement (enum case)(忽略没有完整的switch语句)
nls to suppress warnings relative to non-nls string literals(忽略非nls格式的字符)
null to suppress warnings relative to null analysis(忽略对null的操作)
rawtypes to suppress warnings relative to un-specific types when using generics on class params(使用generics时忽略没有指定相应的类型)
restriction to suppress warnings relative to usage of discouraged or forbidden references
serial to suppress warnings relative to missing serialVersionUID field for a serializable class(忽略在serializable类中没有声明serialVersionUID变量)
static-access to suppress warnings relative to incorrect static access（抑制不正确的静态访问方式警告)
synthetic-access to suppress warnings relative to unoptimized access from inner classes（抑制子类没有按最优方法访问内部类的警告）
unchecked to suppress warnings relative to unchecked operations（抑制没有进行类型检查操作的警告）
unqualified-field-access to suppress warnings relative to field access unqualified （抑制没有权限访问的域的警告）
unused to suppress warnings relative to unused code  （抑制没被使用过的代码的警告）

```





# 三、自定义注解

## 1.注解的格式

```java
元注解
public @interface 注解名称{
    属性列表;
}
```



## 2.注解中的属性列表

​		注解的本质其实就是一个接口，该接口继承自Annotation接口

### 2.1 注解的本质

创建第一个自定义注解

```java
package com.bobo.anno;

public @interface MyAnnotation1 {
}

```



然后拷贝出来

![image-20201224151108602](img\image-20201224151108602.png)



然后通过javac 编译该Java文件

![image-20201224151142431](img\image-20201224151142431.png)



然后再通过 javap 反编译该class文件，得到到反编译的内容如下

![image-20201224151235229](img\image-20201224151235229.png)



​	那么我们通过反编译的文件可以看出我们自定义的注解本质上就是一个继承自Annotation接口的一个接口。

### 2.2 属性列表

​	 搞清楚了注解的本质，那么我就应该清楚在注解中我们能够写什么内容。

属性：注解中的方法我们称为属性

属性的返回值有哪些？

1. 基本数据类型(包装类不行)
2. String类型
3. 枚举类型
4. 注解
5. 以上类型对应的数组

```java
package com.bobo.anno;

/**
 * 自定义的 注解
 * 本质上是一个接口
 *     常量
 *     抽象方法
 */
public @interface MyAnnotation1 {

    String show();
    // 不支持 void
    //  void show2();
    // 注解中不支持返回自定义类型
    // PersonstudentUSER show3();
    int show4();
    // 包装类也不行
    // Integer show5();
    MyAnnotation2 show6();

    PersonEnum show7();
    String[] show8();
    int[] show9();
    MyAnnotation2[] show10();

}

```



属性的赋值

1. 如果定义属性时，使用default关键字给属性默认初始化值，则使用注解时，可以不进行属性的复制
2. 如果只有一个属性需要赋值(在注解中可以有多个属性，但是其他属性都有default默认值)，并且属性的名称是value,则value可以省略，直接定义值即可
3. 数组赋值时，值使用{}包裹，如果数组中只有一个元素，那么{}可以省略掉



```java
public @interface MyAnnotation2 {

    String show1();

    // default 给属性设置默认值，如果使用注解的时候没有指定对应的数值，就会用默认值来代替
    int age() default 18;

    String address();

}

public @interface MyAnnotation3 {

    String value();

    int age() default 18;

    String[] games();
}

```



![image-20201224153327764](img\image-20201224153327764.png)



## 3.元注解

​     用于描述注解的注解我们称为元注解

### 3.1 @Target

描述注解能够作用的位置。

ElementType的取值：

​	TYPE：可以作用在类上

​	METHOD：可以作用在方法上

​	FIELD：可以作用在成员变量上

### 3.2 @Retention

描述注解被保留的阶段

​	RetentionPolicy.SOURCE:当前描述的注解保留到编码阶段

​	RetentionPolicy.CLASS:当前描述的注解保留到编译节点(class文件字节码中)

​    RetentionPolicy.RUNTIME:当前描述的注解保留到运行节点阶段，JVM会读取到。 我们自定义的注解 基本都是RUNTIME

### 3.3 @Documented

​		描述注解是否被抽取到api文档中





### 3.4 @Inherited

​		描述注解是否被子类继承







## 4. 自定义注解案例

​      实现一个自定义的注解，该注解作用在方法上，有被该注解标注的方法，在执行之前在控制台输出日志信息。

自定义注解：

```java
package com.bobo.anno2;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
public @interface MyAnno1 {

    String value();
}

```

```java
package com.bobo.anno2;

public class User {


    public void fun1(){
        System.out.println("fun1 ....");
    }
    @MyAnno1("1111")
    public void fun2(){
        System.out.println("fun2 ....");
    }
}

```



功能实现

```java
package com.bobo.anno2;

import java.lang.reflect.Method;
import java.util.Date;

public class TestMain {

    /**
     *  实现一个自定义的注解，该注解作用在方法上，有被该注解标注的方法，在执行之前在控制台输出日志信息。
     * @param args
     */
    public static void main(String[] args) throws Exception {
        User user = new User();
        methodBefore(user,"fun1");
        user.fun1();
        methodBefore(user,"fun2");
        user.fun2();
    }

    /**
     * 注解功能的实现
     * @param user
     */
    private static void methodBefore(User user,String mehtodName) throws Exception {
        Class<? extends User> aClass = user.getClass();
        // 通过类对象获取对应的方法是否有相关注解
        Method declaredMethod = aClass.getDeclaredMethod(mehtodName);
        // 通过Method对象获取添加在方法中的 注解
        MyAnno1 annotation = declaredMethod.getAnnotation(MyAnno1.class);
        if(annotation != null){
            System.out.println(annotation.value());
            System.out.println(declaredMethod.getName() + " 在 " + new Date() + "时执行了...");
        }
    }
}

```



通过案例的实现，我们发现注解和反射是紧密结合在一块的。













