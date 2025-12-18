---
title: Java 历史
icon: time
date: 2025-12-18
category: Java
tag:
  - 介绍
  - JDK
  - JRE
---

## 1. Java核心概念

### 1.1 Java的历史

Java是由Sun公司开发出来的，2009年被甲骨文Oracle收购了



![1605001125089](..\assets\img\1605001125089.png)





詹姆斯·高斯林  James Gosling    `Java之父`  Oak语言-->Java

![img](..\assets\img\268)



Java演变的各个版本

| 版本             | 发布时间      |
| ---------------- | ------------- |
| JDK Beta         | 1995年        |
| JDK 1.0          | 1996 年 1 月  |
| JDK 1.1          | 1997 年 2 月  |
| J2SE 1.2         | 1998 年 12 月 |
| J2SE 1.3         | 2000 年 5 月  |
| J2SE 1.4         | 2002 年 2 月  |
| J2SE 5.0         | 2004 年 9 月  |
| Java SE 6        | 2006 年 12 月 |
| Java SE 7        | 2011 年 7 月  |
| Java SE 8 (LTS)  | 2014 年 3 月  |
| Java SE 9        | 2017 年 9 月  |
| Java SE 10       | 2018 年 3 月  |
| Java SE 11 (LTS) | 2018 年 9 月  |
| Java SE 12       | 2019 年 3 月  |
| Java SE 13       | 2019 年 9 月  |
| Java SE 14       | 2020 年 3 月  |
| Java SE 15       | 2020 年 9 月  |
| Java SE 16       | 2021 年 3月   |
| Java SE 17       | 2021 年 9 月  |
| Java SE 18       | 2022 年3 月   |
| Java SE 19       | 2022 年 9 月  |
| Java SE 20       | 开发中        |

https://openjdk.org/projects/jdk/

### 1.2 Java的三大版本

#### 1.2.1 J2SE

​         标准版，Java的基础版本，其他两个版本都是要依赖于此的  Java 2Standard Edition

#### 1.2.2 J2EE

​		企业版，我们要学习的就是J2EE 企业级的Web应用解决方案 Java 2 Enterprise Edition

- 定位在服务端应用
- 主要用于企业Web服务器应用

#### 1.2.3 J2ME

​       微型版  Java 2 Micro Edition

- 定位于电子产品
- 移动设备、TV、手机



### 1.3 Java跨平台的原理

平台：操作系统

跨平台：书写的一份代码可以在各个平台上面运行  www.oracle.com



![1605099234384](..\assets\img\1605099234384.png)



## 2.Java特点分析

1. Java是跨平台的
2. Java是简单的
3. Java是安全的 取消了指针，垃圾回收机制
4. Java是完全面向对象的
5. Java是健壮





## 3.傻傻分不清的JDK、JRE、JVM

![1605010467878](..\assets\img\1605010467878.png)

### JVM

Java Virtual Marchin Java虚拟机

1. JVM是一种规范，Oracle实现了这种规范
2. JVM是跨平台的基础
3. 一次编译到处运行

### JRE

Java Runtime Environment Java运行时环境

1. JRE 中提供了Java程序运行时需要用到的核心的Jar(类，接口等)
2. 如果我们希望一个Java程序能够运行的话，那么我们必须要安装JRE



### JDK

Java Development Kit Java开发工具包

1. 提供了很多像java.exe,javac.exe,javap.exe等开发工具，帮助我们开发Java程序
2. 如果我们希望在自己的电脑上面开发Java程序，那么我们就必须安装JDK

JDK包含了JRE，JRE包含了JVM。所以我们开发的时候就只需要安装JDK即可





![1605011025454](..\assets\img\1605011025454.png)





## 3.JDK操作

### 3.1 卸载JDK

​         如果我们电脑上已经安装的有JDK了，那么我们需要先卸载掉原来有的再安装新的JDK

#### 1.在控制面板中卸载

![1605101007398](..\assets\img\1605101007398.png)

#### 2.删除掉遗留的文件

之前是安装在默认路径下面的，所以我们去到 C盘下的 Program File 目录下找到 java 删除即可





#### 3.移除环境变量的配置

选中"计算机"--> 右键 属性 --> 删除相关信息



![1605174112595](..\assets\img\1605174112595.png)

移除path路径后的相关信息

![1605174153006](..\assets\img\1605174153006.png)

删除classpath 配置

![1605174204620](..\assets\img\1605174204620.png)



可以重启下电脑。

### 3.2 安装JDK

首先需要获取对应的操作系统的JDK安装文件

![1605174407048](..\assets\img\1605174407048.png)

安装路径可以自定义，也可以使用默认的。推荐使用自定义的路径

![1605174478601](..\assets\img\1605174478601.png)



![1605174537792](..\assets\img\1605174537792.png)

安装过程稍等片刻

![1605101424338](..\assets\img\1605101424338.png)



JRE的安装

![1605174637739](..\assets\img\1605174637739.png)



![1605174657676](..\assets\img\1605174657676.png)



等待安装完成即可

![1605181466153](..\assets\img\1605181466153.png)



测试是否安装成功 在cmd 窗口输入 java 能看到如下的输出信息表示安装是成功

![1605181543837](..\assets\img\1605181543837.png)

### 3.3 JDK安装路径介绍

 ![1605102202751](..\assets\img\1605102202751.png)



JDK的安装成功表示当前的电脑已经初步具备了开发Java程序的条件



## 4.HelloWorld

### 4.1 HelloWorld程序的实现

​      在JDK的安装路径的bin目录下创建一个HelloWorld.java文件，如果你是把JDK安装在了c盘的Program File 文件夹下的话，有可能因为系统的原因，不能在该目录下创建文件，那么你可以在其他位置创建好文件然后复制过去即可。

![1605245260406](..\assets\img\1605245260406.png)



打开该文件，在文件中写下如下内容:

```java
public class HelloWorld
{
    public static void main(String[] args) 
    {
        System.out.println("HelloWorld .... ");
    }
}
```



代码写完也就意味着我们的开发完成了。接下来我们就可以借助JDK中提供的开发工具来执行我们程序。

javac.exe 将我们的Java文件编译成为class文件

```cmd
javac HelloWorld.java
```



![1605245614365](..\assets\img\1605245614365.png)



​        如果出现了"拒绝访问"的错误提示，那么一般是权限的原因。所以这个时候我们需要通过"系统管理员身份"来打开命令行窗口

![1605103054274](..\assets\img\1605103054274.png)



编译成功后我们就可以借助另一个开发工具 "java.exe"来执行我们的class文件

```cmd
java HelloWorld
```

注意：java后面跟的不是class文件名称而是我们在代码中定义的类名

![1605245854805](..\assets\img\1605245854805.png)



![1605103528257](..\assets\img\1605103528257.png)





### 4.2 课堂练习

​      自己去写一个HelloWorld程序，然后看看自己能够碰到什么错误！ 



### 4.3 大家可能踩到的坑

#### 1.文件扩展名的问题

​     因为操作系统的原因，造成文件扩展名隐藏，那么创建的 HelloWorld.java其实是 HelloWorld.java.txt文件，当然就没法编译了



![1605246599499](..\assets\img\1605246599499.png)





![1605246673651](..\assets\img\1605246673651.png)





#### 2.文件名和类名要一致



​	我们的类名和文件名称不一致的请求下，同样的是编译不过去的

![1605246842135](..\assets\img\1605246842135.png)



![1605246906694](..\assets\img\1605246906694.png)



#### 3. Java中是严格区分大小写的

```java
public Class HelloWorld999
{
    public Static void main(String[] args)
    {
        system.out.println("Hello Wrold ... 666");
    }
}
```



![1605247004206](..\assets\img\1605247004206.png)



#### 4.非法字符

在代码中，每行代码的结束必须有英文状态";"结尾，方法中的字符串我们必须用英文状态的"  " " 来包含，不能是中文状态 或者 单引号

```java
public class HelloWorld666
{
    public static void main(String[] args)
    {
        System.out.println("Hello Wrold ... 666“)；
        System.out.println('Hello Wrold ... 666');
    }
}
```



![1605247423570](..\assets\img\1605247423570.png)



#### 5.括号匹配

​    在程序中出现括号都是成对出现的 {} [] ()

```java
public class HelloWorld666
{
    public static void main(String[] args
    {
        System.out.println("Hello Wrold ... 666");
        System.out.println("Hello Wrold ... 666");
    
}
```



![1605247527753](..\assets\img\1605247527753.png)



#### 6.找不到主方法

​	 程序的入口是 main方法，而主方法的格式必须是 `public static void main(String[] args){ ... }`

```java
public class HelloWorld666
{
    public static void man(String[] args)
    {
        System.out.println("Hello Wrold ... 666");
        System.out.println("Hello Wrold ... 666");
        System.out.println("....");
        System.out.println("...");
    }
    
}
```

main方法写错了，编译是能通过的，表示它还是一个普通的方法，只是在程序执行的时候就找不到入口方法了



![1605247782539](..\assets\img\1605247782539.png)



### 4.4 课堂练习

1.写一个Java程序，向控制台输出"世界你好，Java我来了！！！"

2.写一个Java程序，向控制台输出你的 姓名，年龄，爱好。





### 4.5 HelloWorld案例小结

1. Java对大小写敏感，如果出现了大小写拼写错误的情况，程序是没法执行的
2. 关键字 class 表明Java程序中的全部内容都包含在类中，Java是一种面向对象的语言
3. main方法是Java程序的入口，它的固定写法是`public static void main(String[] args){....}`
4. 在Java中，程序被包裹的情况下 {} [] () 都是成对出现的。



![1605248100154](..\assets\img\1605248100154.png)



刚开始学习大家要注意编程风格

1.注意缩进， “Tab”键，不推荐用键盘的 空格

2.成对编程，括号，引号 我们都应该直接写完然后再往里面添加内容

3.见名知意，我们命名的时候比如 类名，我们不要随便取 "aa" "bb" "cc" 让人看不懂的名称，我们应该取一些别人一眼能看明白的名称





## 5.配置系统环境变量

​     想要在JDK的安装目录之外执行我们的Java程序，那么这时我们就需要在环境变量中配置Jdk的目录信息

> 右键点击桌面计算机→选择属性→选择高级系统设置→选择高级选项卡→点击环境变量→下方系统变量中查找path→双击path

![1605249035359](..\assets\img\1605249035359.png)



### 5.1 JAVA_HOME

内容是Jdk的安装路径，在bin目录的上一级

```cmd
E:\java\jdk
```



![1605249183014](..\assets\img\1605249183014.png)

### 5.2 Path

​     我们只需要将JDK的bin目录追加到Path的录制之后，注意！！！ 不要删除原来的内容

```cmd
%JAVA_HOME%\bin
```

![1605249319200](..\assets\img\1605249319200.png)



### 5.3 classpath

在jdk1.5之后我们在通过开发工具编程的时候可以不加classpath，但是我们在直接通过文本操作的时候还要添加下的

```cmd
.;%JAVA_HOME%\jar;%JAVA_HOME%\lib\tools.jar;
```

![1605249422665](..\assets\img\1605249422665.png)





![1605249489438](..\assets\img\1605249489438.png)



这样就表示我们的JDK的环境变量是配置好了，那么我们就可以在当前电脑上来写我们的Java程序了