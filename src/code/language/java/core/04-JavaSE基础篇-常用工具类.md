# Java中常用的工具类介绍

> 讲师：波波



​        Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



API：应用程序编程接口(Application Programming interface)  等价的可以看出现实生活中的操作说明说或者使用说明书

JavaAPI： Java API 指的是JDK中提供的各种功能的Java类



# 课程内容的介绍

1. Object
2. String
   - StringBuffer
   - StringBuilder
3. 包装类
4. Math
5. Random
6. System
7. BigInteger
8. BigDecimal
9. Date
   - SimpleDateFormate
   - Calender



# 一、Object

## 1. Object概述

​	类 `Object` 是类层次结构的根类。每个类都使用 `Object` 作为超类。所有对象（包括数组）都实现这个类的方法，就是说Object是所有Java类的超类，如果一个Java类没有显示的声明它的父类是谁，那么其实隐含的就 extends Object；

![image-20201202110436623](img\image-20201202110436623.png)



![image-20201202110515799](img\image-20201202110515799.png)



构造方法

```java
public Object(){}
```

任何一个类都会调用这个方法，访问子类构造方法首先会访问父类无参的构造方法



## 2.Object常用方法

### 2.1 hashCode方法

实际上，由 `Object` 类定义的 hashCode 方法确实会针对不同的对象返回不同的整数。（这一般是通过将该对象的内部地址转换成一个整数来实现的）

```java
package com.bobo.object;

public class ObjectDemo02 {

	/**
	 *  366712642
		366712642
		***********
		1829164700
		1829164700
		***********
		2018699554
		2018699554
	 * @param args
	 */
	public static void main(String[] args) {
		User user1 = new User();
		User user2 = new User();
		User user3 = new User();
		System.out.println(user1.hashCode());
		System.out.println(user1.hashCode());
		System.out.println("***********");
		System.out.println(user2.hashCode());
		System.out.println(user2.hashCode());
		System.out.println("***********");
		System.out.println(user3.hashCode());
		System.out.println(user3.hashCode());
		/**
		 * == 比较基本数据类型  比较的就是数值本身是否相等
		 *    比较引用数据类型 比较的是变量中存放的地址值
		 */
		System.out.println(user1 == user2); // false
		User user4 = user1;
		System.out.println(user4 == user1); // true

	}

}

class User{
	
}
```

### 2.2 getClass方法

​        返回此 `Object` 的运行时类<反射中我们会详细介绍 Class>

```java
public final native Class<?> getClass();
```



```java
package com.bobo.object;

public class ObjectDemo03 {

	public static void main(String[] args) {
		Car car = new Car();
		Object o1 = new Car();
		Class c1 = car.getClass();
		Class c2 = o1.getClass(); 
		System.out.println(c1.getName()); // com.bobo.object.Car
		System.out.println(c2.getName()); // com.bobo.object.Car

	}

}

class Car{

}
```





### 2.3 toString方法

返回该对象的字符串表示

```java
public String toString() {
    return this.getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

```txt
com.bobo.object.User1@15db9742
com.bobo.object.User1@6d06d69c
```

toString方法默认返回的是 全类路径名称 + @ + hashCode的十六进制 



```java
System.out.println(u1);
System.out.println(u2);
```

输出语句输出一个引用类型的时候，默认调用了引用类型的toString方法输出



因为默认的toString方法输出的内容并没有太大的意义，而且toString方法本身就是Object中的一个普通的成员方法，所以我们可以尝试自己重写该方法

```java
package com.bobo.object;

public class ObjectDemo04 {

	public static void main(String[] args) {
		User1 u1 = new User1("张三",18);
		User1 u2 = new User1("李四",20);
		System.out.println(u1.toString());
		System.out.println(u1.toString());
		System.out.println(u1.toString());
		System.out.println(u2.toString());
		
		// 我们经常会在打印语句中直接输出对象
		System.out.println("***********");
		System.out.println(u1);
		System.out.println(u2);

	}

}
class User1{
	
	private String name;
	
	private int age;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public User1(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}

	public User1() {
		super();
	}

	@Override
	public String toString() {
		return "User1 [name=" + name + ", age=" + age + "]";
	}
	
	/*@Override
	public String toString() {
		// TODO Auto-generated method stub
		return this.name + "|" + this.age;
	}*/
}

```



### 2.4 equals方法

​       指示其他某个对象是否与此对象“相等”。

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

​		通过源码我们发现，Object方法中的equals方法比较的是地址值，比较两个对象是否相等，比较地址值其实就没有太大的意义。那么我们可以根据我们自己的需求来重写该方法

我们自己重写equals方法

```java
	/**
	 * 重写的equals方法
	 *    我们定义当两个对象的name和age属性相等的情况下就认为两个对象是同一个对象
	 *    u1.equals(u2)
	 *    在当前方法中 u1-->this
	 *              u2 ---> obj
	 */
	public boolean equals(Object obj){
		
		// 考虑程序的健壮性  在方法的形参是引用类型的时候，都建议做非null处理
		if(obj == null){
			return false;
		}
		
		if(obj instanceof User2){
			// 我们比较的是具体的属性，所以Object要向下转型
			User2 user = (User2) obj;
			// 判断name和age是否相同
			if(this.name.equals(user.getName()) && this.getAge() == user.getAge()){
				// name和age都相同的情况下
				return true;
			}
		}
		return false;
	}

```

通过Eclipse重写的方法

```java
	/**
	 * 通过Eclipse重写的equals方法
	 */
	@Override
	public boolean equals(Object obj) {
		// 如果比较的是自己本身，我们就不需要做强转和判断了，提升程序的执行效率
		if (this == obj)
			return true;
		// 提升程序的健壮性
		if (obj == null)
			return false;
		// 两个对象的类型都不一致，对象肯定不一致
		if (getClass() != obj.getClass())
			return false;
		
		// 执行到此处，说明比较的两个对象是同一类型
		User2 other = (User2) obj;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
```



String中的equals方法

```java
private final char value[];
// “abc”。equals("abcd")
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value; // abc
            char v2[] = anotherString.value; // abc
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    // 比较对应位置的字符是否相同
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```

通过源码分析我们发现String中重写了equals方法，比较的是字符串的值是否全都相等

面试题：介绍下Java中的equals方法



### 2.5 clone方法

​          创建并返回此对象的一个副本。

```java
protected native Object clone() throws CloneNotSupportedException;
```

```java
package com.bobo.object;

public class ObjectDemo06 {

	public static void main(String[] args) throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		Student1 s1 = new Student1("张三",18);
		Student1 s2 = (Student1) s1.clone();
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(s2==s1);
		System.out.println(s2.equals(s1));
		// 克隆出来的对象和原对象是两个完全有独立内存地址的对象
	}

}

class Student1 implements Cloneable{
	
	private String name;
	
	private int age;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Student1(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}

	public Student1() {
		super();
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		return super.clone();
	}
	
	
}
```

面试题：深克隆和浅克隆

> 深克隆和浅克隆的原理及实现介绍：
>
> https://blog.csdn.net/qq_38526573/article/details/87633257?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160689377119724816685771%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=160689377119724816685771&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v1~rank_blog_v1-3-87633257.pc_v1_rank_blog_v1&utm_term=%E5%85%8B%E9%9A%86&spm=1018.2118.3001.4450



### 2.6 finalize方法

​         当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。



```java
protected void finalize() throws Throwable { }
```

面试题： 介绍下final ，finally 和 finalize三者的区别





# 二、String类

## 1. String类型的特点

`String` 类代表字符串。Java 程序中的所有字符串字面值（如 `"abc"` ）都作为此类的实例实现。

```java
/**
	 * String 类代表字符串。
	 * Java 程序中的所有字符串字面值（如 "abc" ）都作为此类的实例实现。
	 *    字面值
	 *       1  3 5.6 true "abc"
	 * @param args
	 */
public static void main(String[] args) {
    // TODO Auto-generated method stub
    String name = "zhangsan";
}
```



字符串是常量；它们的值在创建之后不能更改。字符串缓冲区支持可变的字符串。因为 String 对象是不可变的，所以可以共享



![image-20201202165234348](img\image-20201202165234348.png)



![image-20201202165254489](img\image-20201202165254489.png)





String类型的特点：

1. 如果发现在方法区中没有对应的字符串，会自动开辟内存存储新的字符串
2. 字符串一旦创建了，是不能够被修改的
3. 字符串虽然不能够被修改，但是可以共享
4. 如果字符串频繁的拼接字符串，都会在方法区开辟空间，这样是非常消耗内存空间的，所有如果字符串拼接比较频繁不建议使用String类型，这时我们可以改用StringBuffer或者StringBuilder



## 2. String中的构造方法

重载的构造方法比较多

![image-20201202171935750](img\image-20201202171935750.png)

```java
package com.bobo.string;

public class StringDemo02 {

	/**
	 * String 类型的构造方法
	 * @param args
	 */
	public static void main(String[] args) {
		String name1 = "zhangsan";
		// String 类型是一个引用类型，那么必然会有对应的构造方法
		String name2 = new String();
		System.out.println("-->" + name2);
		String name3 = new String("abc");
		System.out.println(name3);
		char[] c1 = {'a','b','c'};
		String name4 = new String(c1);
		System.out.println(name4);
		byte[] b1 = "abc".getBytes();
		String name5 = new String(b1);
		System.out.println(name5);
		/**
		 *  字符串索引越界:java.lang.StringIndexOutOfBoundsException
		 *  产生的原因：访问了超过字符串所对应的字符串数组的索引范围
		 *  解决办法：自己检查索引是否超出了范围
		 */
		String name6 = new String(c1, 1, 2);
		System.out.println(name6);
		
	}

}

```



通过构造器获取的String类型和通过字符串字面值获取的字符串的区别

![image-20201202172547551](img\image-20201202172547551.png)



## 3.String中的常用方法

### 3.1 常用的基础操作方法



```java
package com.bobo.string;

public class StringDemo04 {

	/**
	 *  char charAt(int index) // 返回指定索引处的 char 值
		int indexOf(int ch) // 返回指定字符在此字符串中第一次出现处的索引
		int indexOf(String str) // 返回指定子字符串在此字符串中第一次出现处的索引。
		int indexOf(int ch,int fromIndex)  // 返回在此字符串中第一次出现指定字符处的索引，从指定的索引开始搜索。
		int indexOf(String str,int fromIndex) //返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始。
		int lastIndexOf(int ch)  // 返回指定字符在此字符串中最后一次出现处的索引。
		// 返回指定字符在此字符串中最后一次出现处的索引，从指定的索引处开始进行反向搜索。  
		int lastIndexOf(int ch,int fromIndex) 
		// 返回指定子字符串在此字符串中最右边出现处的索引。 
		int lastIndexOf(String str)
		// 返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索。 
		int lastIndexOf(String str,int fromIndex) 
		// 返回一个新的字符串，它是此字符串的一个子字符串。
		String substring(int start)
		// 返回一个新字符串，它是此字符串的一个子字符串。
		String substring(int start,int end)
		int length() // 返回一个新字符串，它是此字符串的一个子字符串。
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "HelloWorld";
		System.out.println(str.charAt(0));
		// 返回-1 表示不存在
		System.out.println(str.indexOf('a'));
		System.out.println(str.indexOf("llor"));
		System.out.println(str.indexOf('o',4));
		System.out.println(str.indexOf("orl",11));
		System.out.println(str.lastIndexOf('o'));
		System.out.println(str.lastIndexOf('o',6));
		System.out.println(str.substring(5));
		// 5 <= index < 7 包含左边不包含右边  左开右闭
		System.out.println(str.substring(5,7)); 
		System.out.println(str.length());
	}

}
```



面试题： length、length()、size()的区别

1. length:是数组的属性
2. length():是字符串或者其他类的一个方法
3. size():是集合或者其他类的一个长度



课堂案例：

从键盘输入一个字符串，统计这个字符串中的大写字母，小写字母及数字的个数

```java
import java.util.Scanner;

public class StringDemo05 {

	/**
	 * 从键盘输入一个字符串，统计这个字符串中的大写字母，小写字母及数字的个数
	 * 分析：
	 *    1.获取键盘输入的字符串  HelloWorld123456
	 *    2.循环获取字符串中的每一个字符
	 *    3.判断字符是数字还是大写字母或者小写字母
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("请输入一个字符串:");
		String str = in.next();
		int bigCount = 0;
		int smallCount = 0;
		int numCount = 0;
		for(int i = 0 ; i < str.length(); i ++){
			// 获取对应下标的字符
			char ch = str.charAt(i);
			if(ch >= 'a' && ch <= 'z'){
				smallCount ++;
			}else if(ch >= 'A' && ch <= 'Z'){
				bigCount ++;
			}else if(ch >= '0' && ch <= '9'){
				numCount ++;
			}

		}
		System.out.println("输入的字符串是：" + str);
		System.out.println("大写字符的个数:" + bigCount);
		System.out.println("小写字符的个数:" + smallCount);
		System.out.println("数字的个数:" + numCount);
	}

}
```



```java
package com.bobo.string;

import java.util.Scanner;

public class StringDemo05 {

	/**
	 * 从键盘输入一个字符串，统计这个字符串中的大写字母，小写字母及数字的个数
	 * 分析：
	 *    1.获取键盘输入的字符串  HelloWorld123456
	 *    2.循环获取字符串中的每一个字符
	 *    3.判断字符是数字还是大写字母或者小写字母
	 * @param args
	 */
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.println("请输入一个字符串:");
		String str = in.next();
		int bigCount = 0;
		int smallCount = 0;
		int numCount = 0;
		for(int i = 0 ; i < str.length(); i ++){
			// 获取对应下标的字符
			char ch = str.charAt(i);
			/*if(ch >= 'a' && ch <= 'z'){
				smallCount ++;
			}else if(ch >= 'A' && ch <= 'Z'){
				bigCount ++;
			}else if(ch >= '0' && ch <= '9'){
				numCount ++;
			}*/
			if(Character.isLowerCase(ch)){
				smallCount ++;
			}else if(Character.isUpperCase(ch)){
				bigCount ++ ;
			}else if(Character.isDigit(ch)){
				numCount ++;
			}

		}
		System.out.println("输入的字符串是：" + str);
		System.out.println("大写字符的个数:" + bigCount);
		System.out.println("小写字符的个数:" + smallCount);
		System.out.println("数字的个数:" + numCount);
	}

}

```



### 3.2  返回结果为boolean的方法

```java
package com.bobo.string;

public class StringDemo06 {

	/**
	 * 返回结果为boolean类型的方法
	 *  boolean isEmpty()：判断字符串是否为空。 "" 而不能判断是否是null
		boolean equals(Object obj)：将此字符串的内容与指定的对象比较,区分大小写。
		boolean equalsIgnoreCase(String str)：将此 String 与另一个 String 比较,忽略大小写。
		boolean contains(String str)：判断字符串中是否包含方法传入的字符串。
		boolean startsWith(String str)：判断字符串是否以某个指定的字符串开头。
		boolean endsWith(String str)：判断字符串是否以某个指定的字符串结尾。
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "HelloWorld123";
		String str1 = null;
		String str2 = "";
		System.out.println(str.isEmpty());
		// System.out.println(str1.isEmpty());
		System.out.println(str2.isEmpty());
		// 在实际开发中我们如何判断一个字符串是否为空
		if("".equals(str1) || str1 == null){
			// 这个就表示str1为空
			System.out.println("str1 为空");
		}
		/*if(!"".equals(str1) && str1 != null){
			// 表示str1不为空
			System.out.println("str1 不为空...");
		}*/
		String str3 = "abC";
		String str4 = "Abc";
		System.out.println(str3.equals(str4));
		System.out.println(str3.equalsIgnoreCase(str4));
		System.out.println(str+ ":"+str.contains("1234"));
		System.out.println(str + ":" + str.startsWith("Hello1"));
		System.out.println(str + ":" + str.endsWith("123"));

	}

}
```



课堂案例：

ATM取款机案例，插入银行卡后我们需要输入密码，超过5次锁定密码，如果密码正确就显示登陆成功！

```java
package com.bobo.string;

import java.util.Scanner;

public class StringDemo07 {

	/**
	 * ATM取款机案例，插入银行卡后我们需要输入密码，超过5次锁定密码，如果密码正确就显示登陆成功！
	 * 分析：
	 *    1.定义一个正确的密码
	 *    2.通过循环录入5次密码
	 *    3.判断密码是否正确，正确结束
	 *    4.如果密码不正确且超过了5次，锁定密码
	 * @param args
	 */
	public static void main(String[] args) {
		// 1.定义一个正确的密码
		String password = "123456";
		System.out.println("******欢迎光临中国银行*******");
		Scanner in = new Scanner(System.in);
		// 2.通过循环控制输入的次数
		for(int i = 0 ; i < 5 ; i ++){
			System.out.println("请输入密码:");
			String pwd = in.next();
			if(pwd.equals(password)){
				// 表示账号正确
				System.out.println("登录成功");
				// 结束循环
				break;
			}
			
			// 判断当前的次数 如果 i = 4 就表示使用完了5次机会
			if(i == 4){
				System.out.println("账号被锁定...");
				
			}else{
				System.out.println("你还有" + (4 - i ) + "次机会");
			}
		}

	}

}

```

![image-20201203105023439](img\image-20201203105023439.png)





### 3.3 类型转换的相关方法

```java
package com.bobo.string;

public class StringDemo08 {

	/**
	 *  byte[] getBytes() ：将字符串转化为字节数组。
		char[] toCharArray()： 将字符串转化为字符数组。
		static String valueOf(char[] chs)： 返回 char 数组参数的字符串表示形式。
		static String valueOf(int i) ：返回 int 参数的字符串表示形式。
		String toLowerCase() ：将此 String 中的所有字符都转换为小写。
		String toUpperCase() ：将此 String 中的所有字符都转换为大写。
		String concat(String str)： 将指定字符串连接到此字符串的结尾。
	 * @param args
	 */
	public static void main(String[] args) {
		String s1 = "aaBBccDDeeFF12345";
		byte[] bys = s1.getBytes();
		System.out.println(bys);
		for(byte b:bys){
			System.out.println(b + " : " +(char)b);
		}
		System.out.println("********************");
		char[] c1 = s1.toCharArray();
		for(char ch : c1){
			System.out.println(ch + " " + (int)ch);
		}
		System.out.println("********************");
		System.out.println(String.valueOf(c1));
		System.out.println(String.valueOf(97));
		System.out.println(""+97);
		System.out.println(s1.toLowerCase());
		System.out.println(s1.toUpperCase());
		System.out.println(s1.concat("666666"));
		System.out.println(s1 + "666666");

	}

}

```

课堂案例：

将一个字符串的首字母转换为大写，其他字母转换为小写，同时将每个字符使用_ 下划线分割开

```java
package com.bobo.string;

public class StringDemo009 {

	/**
	 * 将一个字符串的首字母转换为大写，其他字母转换为小写，同时将每个字符使用_ 下划线分割开
	 * 分析：
	 *    原字符串：helloWorldHahahaA
	 *    转换后的字符串：H_e_l_l_o_w_o_r_l_d_h_a_h_a_h_a_a
	 *  思路：
	 *     第一种思路：  
	 *        1.将字符串转换为字符数组
	 *        2.变量字符数组
	 *        3.判断如果i=0 将字符转换为大写 然后拼接_
	 *        4.如果i!=0 将字符转换为小写 如果i != length-1 拼接_
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "helloWorld2HahahaA";
		char[] ch1 = str.toCharArray();
		// 记录最终的结果
		String result = "";
		for(int i = 0 ; i < ch1.length ; i++){
			char c = ch1[i];
			String s = String.valueOf(c);
			if(i == 0){
				// 将字符串转换为大写
				result += s.toUpperCase();
				result += "_";
			}else if(i == ch1.length - 1){
				result += s.toLowerCase();
			}else{
				result += s.toLowerCase();
				result += "_";
			}
		}

		System.out.println(str);
		System.out.println(result);
		System.out.println("-------------");
		String first = str.substring(0,1).toUpperCase();
		String other = str.substring(1).toLowerCase();
		System.out.println(first.concat(other));
	}

}

```

输出结果

![image-20201203111433490](img\image-20201203111433490.png)





### 3.4 String其他的常用方法

```java
package com.bobo.string;

public class StringDemo09 {

	/**
	 *  String replace(char old,char new) ：替换功能。
		String replace(String old,String new) ：替换功能。
		String trim()：去除字符串两空格。
		int compareTo(String str) ：按字典顺序比较两个字符串。
		int compareToIgnoreCase(String str)：按字典顺序比较两个字符串，忽略大小写。
		public String[] split(String regex)：分隔字符串成字符数组。

	 * @param args
	 */
	public static void main(String[] args) {
		String str = "HelloWorld";
		System.out.println(str.replace('o', 'Z'));
		System.out.println(str.replace("World", "bobo"));
		System.out.println(str.replace("abc", "aaa"));
		String str2 = " 123 s asf adf23   s  a   ";
		System.out.println(str2.trim());
		String s1 = "aaba";
		String s2 = "aabd";
		// 两个字符串比较 根据数据字典的顺序比较 大 返回负数 小返回正数  相等返回 0
		System.out.println(s1.compareTo(s2));
		System.out.println("abDe".compareToIgnoreCase("ABDE"));
		String s3 = "ab,ed,sss,dsf,sfaas,dfssd";
		String[] s4 = s3.split(",");
		for (String s : s4) {
			System.out.print(s + " ");
		}

	}

}

```



课堂案例：

1.字符串倒置

```java
package com.bobo.string;

public class StringDemo10 {

	/**
	 * 字符串倒置
	 *    比如有一个字符串  abcdefg
	 *    输出的格式为 gfedcba
	 * @param args
	 */
	public static void main(String[] args) {
		String s1 = "abcdefg";
		String result = "";
		char[] ch = s1.toCharArray();
		for(int i = ch.length-1 ; i >=0 ; i--){
			String s = String.valueOf(ch[i]);
			result += s;
		}
		System.out.println(s1 + " 倒置后的为：" + result);

	}

}

```



![image-20201203113531669](img\image-20201203113531669.png)





2. 获取输入字符串中要找的字符串的个数

   输入一个原始的字符串： 我的祖国是中国，我在中国长沙，我是一个中国人，欢迎大家来到中国

   查找 中国 在上面的字符串中出现的次数

   

   ```java
   package com.bobo.string;
   
   public class StringDemo11 {
   
   	/**
   	 * 获取输入字符串中要找的字符串的个数
   
   		输入一个原始的字符串： 我的祖国是中国，我在中国长沙，我是一个中国人，欢迎大家来到中国
   		
   		查找 中国 在上面的字符串中出现的次数
   	 * @param args
   	 */
   	public static void main(String[] args) {
   		// 原始的内容
   		String context = "我的祖国是中国，我在中国长沙，我是一个中国人，欢迎大家来到中国";
   		// 要查找的字符串
   		String findStr = "中国";
   		// 记录下标的值
   		int index = 0 ;
   		// 记录次数的值
   		int count = 0 ;
   		/*while( (index = context.indexOf(findStr,index)) != -1){
   			// 表示是存在 要查找的关键字的
   			count ++;
   			index ++;
   		}*/
   		while( (index = context.indexOf(findStr)) != -1){
   			// 表示是存在 要查找的关键字的
   			count ++;
   			// ，我在中国长沙，我是一个中国人，欢迎大家来到中国
   			context = context.substring(index+findStr.length());
   		}
   		System.out.println(count);
   		
   		
   
   	}
   
   }
   
   ```

   

# 三、StringBuffer和StringBuilder

​      String在频繁拼接的场景是不推荐使用，因为这种情况下会在方法区中开辟很多空间，浪费资源，面对这种情况我可以使用StringBuffer或者StringBuilder来解决这种问题

## 1.StringBuffer

​           **线程安全**的可变字符序列。一个类似于 [`String`](https://tool.oschina.net/uploads/apidocs/jdk-zh/java/lang/String.html) 的字符串缓冲区，但不能修改。虽然在任意时间点上它都包含某种特定的字符序列，但通过某些方法调用可以改变该序列的长度和内容。

### 1.1 构造方法

```java
StringBuffer()
          //构造一个其中不带字符的字符串缓冲区，其初始容量为 16 个字符。
StringBuffer(CharSequence seq)
         //构造一个字符串缓冲区，它包含与指定的 CharSequence 相同的字符。
StringBuffer(int capacity)
         // 构造一个不带字符，但具有指定初始容量的字符串缓冲区。
StringBuffer(String str)
         // 构造一个字符串缓冲区，并将其内容初始化为指定的字符串内容。
```



```java
	/**
	 * StringBuffer
	 * @param args
	 */
	public static void main(String[] args) {
		//  创建了一个默认容量为16的 字符数组
		StringBuffer sb = new StringBuffer();
		System.out.println("capacity:" + sb.capacity());
		StringBuffer sb1 = new StringBuffer('a');
		System.out.println(sb1.capacity()+ " : " +sb1.toString());
		StringBuffer sb2 = new StringBuffer("Hello");
		System.out.println(sb2.capacity()+ " : " +sb2.toString());
		StringBuffer sb3 = new StringBuffer(30);
		System.out.println(sb3.capacity()+ " : " +sb3.toString());

	}
```



### 1.2 StringBuffer中的常用方法

```java
package com.bobo.stringbuffer;

public class StringBufferDemo02 {

	/**
	 * StringBuffer的操作
	 * @param args
	 */
	public static void main(String[] args) {
		/*String s1 = "hello";
		String s2 = s1 + "aaa";*/
		StringBuffer sb = new StringBuffer();
		// 添加数据  追加数据
		sb.append("Hello");
		sb.append("World");
		sb.append("bobo");
		String str = sb.toString();
		System.out.println(str);
		// 链式写法
		sb.append("a")
			.append("b")
			.append("c");
		System.out.println(sb.toString());
		// HelloWorldboboabc
		sb.insert(5, "你好啊");
		System.out.println(sb.toString());
		// 想要删除某部分内容
		sb.deleteCharAt(4);
		System.out.println(sb.toString());
		sb.delete(3, 9);
		System.out.println(sb.toString());
		// 替换
		sb.replace(0, 4, "x");
		System.out.println(sb.toString());
		
	}
}

```

小案例：将字符串倒序输出

```java
	/**
	 * 将一个字符串倒序
	 * abcd -- > dcba
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "abcd";
		StringBuffer sb = new StringBuffer(str);
		System.out.println(sb.reverse().toString());

	}
```

![image-20201203140224368](img\image-20201203140224368.png)







## 2.StringBuilder

​    一个可变的字符序列。此类提供一个与 `StringBuffer` 兼容的 API，但**不保证同步**。该类被设计用作 `StringBuffer` 的一个简易替换，用在字符串缓冲区被单个线程使用的时候（这种情况很普遍）。如果可能，建议优先采用该类，因为在大多数实现中，它比 `StringBuffer` 要快。



经典面试题：

​    String、StringBuffer、StringBuilder的区别

1. String 的特点：线程不安全，一旦在方法区创建就不会被更改，可以给多个引用共享，在做大量字符串拼接的时候效率很低
2. StringBuffer,StringBuilder 可以改变字符串的长度和内容，是一个字符串缓冲区，在做大量字符串拼接的时候不会开辟新的空间
3. StringBuffer和StringBuilder对比
   - StringBuffer线程安全，效率低
   - StringBuilder 线程不安全，效率高





# 四、包装类

问题引入：

​       1.如何判断一个字符是大写还是小写或者是数字字符？  char

​       2.如何计算65的二进制，八进制，十六进制  int 



## 1. 基本数据类型的包装类

| 基本数据类型 | 对应的包装类 |
| ------------ | ------------ |
| byte         | Byte         |
| short        | Short        |
| int          | Integer      |
| long         | Long         |
| double       | Double       |
| float        | Float        |
| char         | Character    |
| boolean      | Boolean      |



## 2.Integer

`Integer` 类在对象中包装了一个基本类型 `int` 的值。`Integer` 类型的对象包含一个 `int` 类型的字段。

此外，该类提供了多个方法，能在 `int` 类型和 `String` 类型之间互相转换，还提供了处理 `int` 类型时非常有用的其他一些常量和方法。

### 2.1 属性和构造方法

```java
package com.bobo.integer;

public class IntegerDemo01 {

	/**
	 * 包装类 Integer
	 * @param args
	 */
	public static void main(String[] args) {
		// 获取Integer能够存储的最大值和最小值
		System.out.println(Integer.MAX_VALUE);
		System.out.println(Integer.MIN_VALUE);
		
		Integer i1 = new Integer(100);
		Integer i2 = new Integer("99");
		System.out.println(i1 + " --- " + i2);
		// 构造器中传递的字符串只能是数字字符串，否则抛java.lang.NumberFormatException
		Integer i3 = new Integer("abc");

	}

}

```



### 2.2 常用方法

String类型和int类型的换行问题：

```java
package com.bobo.integer;

public class IntegerDemo02 {

	/**
	 * String和int之间的转换问题
	 * @param args
	 */
	public static void main(String[] args) {
		// int 转换为 String
		int i = 100;
		String str1 = i + "";
		String str2 = String.valueOf(i);
		String str3 = Integer.toString(i);
		System.out.println(str1 + " " + str2 + " " + str3);
		
		// String 转换为 int 类型
		String str = "666";
		int int1 = Integer.parseInt(str);
		int int2 = new Integer(str).intValue();
		int int3 = Integer.valueOf(str).intValue();
		System.out.println(int1 + " " + int2 + " " + int3);
	}

}
```



### 2.3 Integer的进制转换

```java
package com.bobo.integer;

public class IntegerDemo03 {

	/**
	 * Integer中的进制转换问题
	 * @param args
	 */
	public static void main(String[] args) {
		int i = 100;
		// 十进制转换为其他进制
		System.out.println(Integer.toBinaryString(i));
		System.out.println(Integer.toHexString(i));
		System.out.println(Integer.toOctalString(i));
		System.out.println(Integer.toString(i));
		// 其他进制转换为十进制
		System.out.println(Integer.parseInt("100", 8));
		System.out.println(Integer.parseInt("ZZ", 36));

	}

}

```



```java
1100100
64
144
100
64
1295
```



###  2.4 自动装箱和拆箱

JDK1.5之后的特性

自动拆箱：将包装类转换为对应的基本数据类型 int1.intValue();

自动装箱：将基本数据类型转换成对应的包装类类型  Integer int1 = new Integer.valueOf(100);

作用：我们在使用基本数据类型和包装类的时候可以不用我们自己来转换，提高了开发效率

```java
package com.bobo.integer;

public class IntegerDemo04 {

	/**
	 * JDK1.5之后的特性
		自动拆箱：将包装类转换为对应的基本数据类型 int1.intValue();
		自动装箱：将基本数据类型转换成对应的包装类类型  Integer int1 = new Integer.valueOf(100);
	 * @param args
	 */
	public static void main(String[] args) {
		int i = 100;
		Integer i1 = new Integer(i); // 标准的装箱
		
		Integer i2 = 100; // Integer i2 = Integer.valueOf(100) 自动装箱
		System.out.println(i2); // 有一个拆箱操作 i2 = i2.intValue();
		
		i2 += 200; // Integer.valueOf( i2.intValue()+200 )
		System.out.println(i2);
		
		Double d1 = new Double(2.5);
		System.out.println(d1);
		d1 = 3.3;
		
		Boolean b1 = new Boolean(true);
		System.out.println(b1.booleanValue());

	}

}

```



在此处我们就以Integer来介绍了包装的相关的方法和属性，其他的类型的API是相似的



# 五、其他常用的API

## 1. Math

`Math` 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数

```java
//成员方法
	public static int abs(int a)  //求绝对值
    public static double sqrt(double a) // 开根号
    public static double ceil(double a)  //向上取整
    public static double floor(double a)  //向下取整
    public static int max(int a,int b)  //求最大值
    public static int min(int a,int b) // 求最小值
    public static double pow(double a,double b)  //求a的b次幂
    public static double random()  //生成随机数
    public static int round(float a)  //四舍五入
```



```java
package com.bobo.other;

public class MathDemo01 {

	/**
	 * 	public static int abs(int a)  //求绝对值
	    public static double sqrt(double a) // 开根号
	    public static double ceil(double a)  //向上取整
	    public static double floor(double a)  //向下取整
	    public static int max(int a,int b)  //求最大值
	    public static int min(int a,int b) // 求最小值
	    public static double pow(double a,double b)  //求a的b次幂
	    public static double random()  //生成随机数
	    public static int round(float a)  //四舍五入
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println(Math.abs(-99));
		System.out.println(Math.sqrt(4));
		System.out.println(Math.ceil(5.2));
		System.out.println(Math.ceil(-5.7));
		System.out.println(Math.floor(5.2));
		System.out.println(Math.floor(-5.7));
		System.out.println(Math.max(4, 8));
		System.out.println(Math.min(4, 8));
		System.out.println(Math.pow(2, 3));
		System.out.println(Math.random());
		System.out.println(Math.round(5.5));
		System.out.println(getRandomNum(1, 10));
	}

	/**
	 * 获取 start 和 end 之间的随机值
	 * @param start
	 * @param end
	 * @return
	 */
	public static int getRandomNum(int start,int end){
		// Math.random()*(10+1) // 0 ~ 10
		return (int)(Math.random()* (end - start + 1) + start);
	}
}

```



## 2.Random

此类的实例用于生成伪随机数流

```java
package com.bobo.other;

import java.util.Random;

public class RandomDemo01 {

	public static void main(String[] args) {
		Random r1 = new Random(13);
		System.out.println(r1.nextDouble()); // 和 Math.random() 一样 0.0到1.0之间的数
		System.out.println(r1.nextInt()); // 获取int的最大值和最小值之间的数
		System.out.println(r1.nextLong());
		System.out.println(r1.nextInt(20)); // 生成0-20之间的随机数
	}

}

```



## 3. System

`System` 类包含一些有用的类字段和方法。它不能被实例化。

```java
public class SystemDemo01 {

	/**
	 * System
	 * @param args
	 */
	public static void main(String[] args) {
		long time = System.currentTimeMillis();
		System.out.println(time);
		Date date = new Date(time);
		System.out.println(date);
		System.gc(); // 显示的调用GC
		System.exit(1); // 终止JVM的运行
		System.out.println("------------");
	}
}
```



## 4.BigInteger

​    对于超出int范围的数据进行运算

```java
package com.bobo.other;

import java.math.BigInteger;

public class BigIntegerDemo01 {

	public static void main(String[] args) {
		/*System.out.println(Integer.MAX_VALUE);
		Integer integer = Integer.MAX_VALUE + 1;
		System.out.println(integer);*/
		
		BigInteger bigInteger = new BigInteger("2147483647");
		BigInteger addResult = bigInteger.add(new BigInteger("1"));
		System.out.println(addResult.longValue());
		
	}

}

```



## 5. BigDecimal

​       float和double在计算的时候很容易出现精度丢失的情况，Java设计了BigDecimal，不可变的，任意精度的有符号十进制数

```java
package com.bobo.other;

import java.math.BigDecimal;

public class BigDecimalDemo01 {

	public static void main(String[] args) {
		float d1 = 10.2f;
		float d2 = 100f;
		System.out.println(d1/d2);
		System.out.println(1.0 - 0.33);
		System.out.println(0.01 + 0.09);
		
		System.out.println("*************");
		BigDecimal bd1 = new BigDecimal("0.01");
		BigDecimal bd2 = new BigDecimal("0.09");
		System.out.println(bd1.add(bd2));
		System.out.println(bd1.multiply(bd2));
		System.out.println(bd2.divide(bd1));
		System.out.println(bd2.subtract(bd1));

		
	}

}

```



## 6. Date

类 `Date` 表示特定的瞬间，精确到毫秒

```java
	public static void main(String[] args) {
		// 根据当前默认的毫秒值创建日期对象
		Date date = new Date();
		System.out.println(date);
		Date date2 = new Date(123213421434l);
		System.out.println(date2);

	}

```



## 7.SimpleDateFormat

`SimpleDateFormat` 是一个以与语言环境有关的方式来格式化和解析日期的具体类。它允许进行格式化（日期 -> 文本）、解析（文本 -> 日期）和规范化。

```java
package com.bobo.other;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormateDemo {

	/**
	 * Date 和 String类型的相互转换
	 * @param args
	 * @throws ParseException 
	 */
	public static void main(String[] args) throws ParseException {
		
		Date date = new Date();
		System.out.println(date);
		// SimpleDateFormat
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		SimpleDateFormat sdf = new SimpleDateFormat("MM-dd ");
		System.out.println(sdf.format(date));
		// 字符串转换为时间类型
		String str = "2020-10-21 12:12:21";
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		System.out.println(sdf1.parse(str));
	}

}

```



## 8.Calendar

`Calendar` 类是一个抽象类，它为特定瞬间与一组诸如 `YEAR`、`MONTH`、`DAY_OF_MONTH`、`HOUR` 等 [`日历字段`](https://tool.oschina.net/uploads/apidocs/jdk-zh/java/util/Calendar.html#fields)之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法。瞬间可用毫秒值来表示，它是距*历元*（即格林威治标准时间 1970 年 1 月 1 日的 00:00:00.000，格里高利历）的偏移量。

```java
package com.bobo.other;

import java.util.Calendar;

public class CalendarDemo01 {

	/**
	 * 日历类
	 * @param args
	 */
	public static void main(String[] args) {
		Calendar c = Calendar.getInstance();
		System.out.println(c);
		System.out.println(c.get(Calendar.YEAR));
		System.out.println(c.get(Calendar.MONTH));
		System.out.println(c.get(Calendar.DAY_OF_MONTH));
		System.out.println(c.get(Calendar.DAY_OF_WEEK));
		System.out.println(c.get(Calendar.DAY_OF_YEAR));
		System.out.println(c.get(Calendar.HOUR));
		System.out.println(c.get(Calendar.HOUR_OF_DAY));
		System.out.println(c.get(Calendar.MINUTE));
		System.out.println(c.get(Calendar.SECOND));

	}

}

```

