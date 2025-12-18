# 异常

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 异常的概述
2. 异常的处理
3. 异常的相关关键字介绍
4. 自定义异常实现



# 一、异常的概述

## 1. 生活中的异常案例：

1. 每天上班坐公交车去，正常的话半个小时，但是有时候会出现堵车(一定会出现的)，或者遇到
   交通事故等，就有可能造成上班迟到的情况，这就是一种异常情况
2. 睡觉的时候，睡的正香，突然一个电话过来，吵醒了
3. 在大街上走着，突然一个篮球飞过来
4. ...



## 2. 程序中的异常

比如两个数相除，除数为0，或者引用类型没有指定具体的实例

```java
package com.bobo.exception;

public class ExceptionDemo01 {

	public static void main(String[] args) {
		int i = 10;
		// java.lang.ArithmeticException
	    System.out.println(i/0);
		String str = null;
		// java.lang.NullPointerException
		System.out.println(str.length());

	}

}

```



异常的定义：异常指的是在程序的运行过程中发生的不正常的事件，它会中断正在运行的程序，简单的来说就是程序出现了不正常的情况。异常的本身就是Java当中对可能出现的问题进行描述的一种对象体现

常见的异常：

1. 除数不能为0(ArithmeticException)
2. 空指针异常(NullPointException)
3. 数组下标越界(ArrayIndexOutOfBoundsException)
4. 类型转换异常(ClassCastException)



## 3.异常的分类

举个栗子来分类

> 出门前：看看天气，如果下雨就不去了  找到燃气卡
>
> 出门后：等公交
>
> ​               坐公交 --> 堵车
>
> ​                           --> 发生地震
>
> 到达燃气公司  排队取号
>
> ​                       排队人太多  --> 不充了
>
> ​                       很快排到 --> 充值  回家



异常的分离

1. 编译时异常【Exception】：程序在编译过程中发现的异常，受检异常
2. 运行时异常【RuntimeException】：又称为非受检异常，
3. 错误【Error】:有Java虚拟机生成并抛出的异常，程序对其不做处理



```java
package com.bobo.exception;

public class ExceptionDemo02 {

	public static void main(String[] args) {
		// 1. 编译时异常
		int i ;
		System.out.println(i);
		// 2.运行时异常
		System.out.println(10/0);
		// 3.Error 错误 java.lang.StackOverflowError
		show();
	}
	
	public static void show(){
		System.out.println("show .... ");
		String[] s = new String[1024*1024];
		show();
	}

}

```



![image-20201205151449590](img\image-20201205151449590.png)





http://assets.processon.com/chart_image/5fcb28c70791293970bbd248.png

![image-20201205151554057](img\image-20201205151554057.png)





# 二、异常的处理

## 1.自己处理异常

通过 try cathc 语句块来处理

### 1.1 单个异常处理

语法规则

```java
try{
    // 放置程序可能出现问题的代码
}catch(异常类型  异常名称){
    // 放置处理异常的代码
}finally{
    // 释放资源
}
```

catch中声明的异常类型应该和实际抛出的异常类型要么相同要么有继承关系才能捕获到



```java
package com.bobo.exception;

public class ExceptionDemo03 {

	/**
	 * 当程序执行的时候出现了异常，那么Java虚拟机会帮助我们处理
	 * 但是Java虚拟机处理的方式会比较武断，直接终止了程序的执行
	 * 
	 * try{
		    // 放置程序可能出现问题的代码
		}catch(异常类型  异常名称){
		    // 放置处理异常的代码
		}finally{
		    // 释放资源
		}
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("第一段代码");
		int i = 10;
		try{
			// NullPointerException e = new ArithmeticException()
			// Exception e = new ArithmeticException()
			System.out.println(i/0);  // System.exit();
		}catch(ArithmeticException e){
			System.out.println("除数为0");
		}/*catch(NullPointerException e){
			System.out.println("空指针异常");
		}*//*catch(RuntimeException e){
			System.out.println("Exception异常");
		}*/
		System.out.println("第二段代码");

	}

}

```



### 1.2 多个异常处理

​       try块中有多行代码，都有可能出现异常信息，程序执行的时候是从上往下执行的，当碰到异常情况的时候就会跳出try块，从而try块中剩余的代码就不会执行了,

```java
try{
    // 放置程序可能出现问题的代码
}catch(子异常类型  异常名称){
    // 放置处理异常的代码
}catch(子异常类型  异常名称){
    // 放置处理异常的代码
}...
catch(Exception  异常名称){
    // 放置处理异常的代码
}finally{
    // 释放资源
}
```



```java
package com.bobo.exception;

public class ExceptionDemo04 {

	/**
	 * 当程序执行的时候出现了异常，那么Java虚拟机会帮助我们处理
	 * 但是Java虚拟机处理的方式会比较武断，直接终止了程序的执行
	 * 
	 * try{
		    // 放置程序可能出现问题的代码
		}catch(异常类型  异常名称){
		    // 放置处理异常的代码
		}finally{
		    // 释放资源
		}
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("第一段代码");
		int i = 10;
		String str = null;
		int[] arr = new int[3];
		try{
			System.out.println(str.length());
			System.out.println(i/0);  // 
			arr[10] = 100;
		}catch(NullPointerException e){
			System.out.println("空指针异常");
		}catch(ArrayIndexOutOfBoundsException e){
			System.out.println("数组下标越界异常");
		}catch(ArithmeticException e){
			System.out.println("除数为0");
		}catch(Exception e){
			e.printStackTrace();
		}
		System.out.println("第二段代码");

	}
}
```



案例中例句的是运行时异常，那么编译时异常和错误怎么办？

错误我们处理不了

编译时异常，我们在写代码的时候就应该要处理掉

## 2.将异常抛出

通过throws关键字将异常交给调用者来处理

throws作用：在定义一个方法的时候可以使用throws关键字声明，使用throws关键字声明的方法表示此方法不处理异常，而交给方法的调用者进行处理

```java
package com.bobo.exception;

public class ExceptionDemo06 {

	
	public static void main(String[] args) {
		try{
			calc();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		System.out.println("******");
		
	}
	
	/**
	 * 
	 * @return
	 * @throws ArithmeticException 谁调用本方法，本方法就有可能抛出该异常
	 */
	public static int calc() throws ArithmeticException,NullPointerException,Exception{
		int a = 10;
		int b = 0;
		int result = a/b;
		return result;
	}

}

```

throws的使用格式

```java
[修饰符] 返回值类型 方法名(参数列表) [throws 异常类1,异常类2....]{
}
```

注意：

1. 如果一个方法声明的是编译时异常，则在调用这个方法之处必须处置这个异常(谁调用谁处理)
2. 重写一个方法的时候，它所声明的异常范围不能被扩大



![image-20201205164922534](img\image-20201205164922534.png)





# 三、throw关键字

面试题：介绍下 throw throws 和 Throwable的区别

throw和throws的区别

1. throws用在方法名后面，跟的是异常类名，throw是用在方法体重，跟的异常对象
2. throws可以跟多个异常类名，用逗号隔开，throw只能抛出一个异常对象
3. throws表示抛出异常，由该方法的调用者来处理，throw表示抛出异常，由方法体内的语句处理
4. throws表示出现异常的一种可能性，并不一定发生这些异常，throw则是抛出了具体的异常，真是的产生了一个Exception对象



```java
package com.bobo.exception;

import java.text.ParseException;

public class ExceptionDemo09 {

	
	public static void main(String[] args) {
		try {
			calc();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		System.out.println("******");
		try {
			show();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 
	 * @return
	 * @throws ArithmeticException 谁调用本方法，本方法就有可能抛出该异常
	 */
	public static int calc() throws ArithmeticException{
		int a = 10;
		int b = 0;
		if(b == 0){
			throw new ArithmeticException("除数为0，不能运算...");
		}
		int result = a/b;
		return result;
	}
	
	static void show() throws ParseException{
		int a = 10;
		if(a == 10){
			throw new ParseException("解析 出错",1);
		}
	}
	

}

```







# 四、finally关键字

语法格式

```java
try{
    // 放置程序可能出现问题的代码
}catch(异常类型  异常名称){
    // 放置处理异常的代码
}finally{
    // 释放资源
}
```

finally:修饰的代码一定会执行，除非在执行到finally之前程序异常退出或者调用了系统的退出方法

```java
package com.bobo.exception;

public class ExceptionDemo10 {

	/**
	 * finally关键字
	 * @param args
	 */
	public static void main(String[] args) {
		int a = 10;
		int b = 0;
		if(a == 10){
			// return ;
		}
		try{
			if(a == 10){
				return ;
			}
			//System.exit(1);
			System.out.println(a/b);
			
		}catch(Exception e){
			System.out.println("除数不能为0");
		}finally{
			// 只有程序执行了try块中的代码，finally就都会执行 前提是没有执行 System.exit()  ;
			System.out.println("finally .....");
		}
		
		System.out.println("**********");

	}

}

```



经典面试题：

```java
package com.bobo.exception;

/*
* finally碰到return
* finally一定会执行
* 执行顺序?
*
* 在try语句中，在执行return语句时，要返回的结果已经准备好了，就在此时，程序转到finally执行了。
       在转去之前，try中先把要返回的结果存放到不同于x的局部变量中去，执行完finally之后，在从中取出返回结果，
       因此，即使finally中对变量x进行了改变，但是不会影响返回结果。它应该使用栈保存返回值。
*/
public class ExceptionDemo11 {
	public static void main(String[] args) {

		System.out.println(test());
	}

	public static int test() {
		int x = 1;
		try {
			x++;
			return x; // return 2;
		} finally {
			// 在finally中是改变不了 返回结果的
			++x;
			System.out.println(x); // 3
		}
	}
}

```

输出结果

```txt
3
2
```



面试题2： final finally finalize三者的区别

- final 修饰的类能被继承 修饰的方法不能被重写  修饰的变量变常量
- finally 是try catch语句中的一部分，表示要最终执行的代码，常用来做资源的释放
- finalize： Object中的方法，在垃圾回收的时候会用到的方法





# 五、自定义异常

​       Java中的异常都是Throwable或者Exception或者RuntimeException的子类，那么我们要创建一个自定义的异常，其实就是创建其对应的子类。

案例：编写一个分数必须在0~100之间的异常，并且使用这个异常

```java
/**
 * 自定义异常
 * @author dpb
 *
 */
class ScoreException extends Exception{
	
	public ScoreException(){
		
	}
	
	public ScoreException(String message){
		super(message);
	}
}
```



应用：

```java
public class ExceptionDemo12 {

	/**
	 * 编写一个分数必须在0~100之间的异常，并且使用这个异常
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			System.out.println(getScore());
		} catch (ScoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println("***************");
	}
	
	/**
	 * 获取一个分数
	 * @return
	 * @throws ScoreException 
	 */
	public static double getScore() throws ScoreException{
		double score = 999;
		if(score < 0 || score > 100){
			// 说明分数有问题
			throw new ScoreException("分数不合法....");
		}
		return score;
	}

}
```



​    

![image-20201205174041972](img\image-20201205174041972.png)

















