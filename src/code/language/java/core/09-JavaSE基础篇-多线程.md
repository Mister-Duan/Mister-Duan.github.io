# Java多线程

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 线程中的概念
2. 多线程的实现方式
3. 线程中的常用方法
4. 线程的生命周期
5. 线程同步
6. 其他



# 一、线程的相关概念

## 1.进程和线程

进程：一个独立的正在执行的程序

线程：一个进程的最基本的执行单位，执行路径

![image-20201216153122518](img\image-20201216153122518.png)



多进程：在操作系统中，同时运行多个程序

​               多进程的好处：可以充分利用CPU，提高CPU的使用率

多线程：在同一个进程(应用程序)中同时执行多个线程

​               多线程的好处：提高进程的执行使用率，提高了CPU的使用率



注意：

1. 在同一个时间点一个CPU中只可能有一个线程在执行
2. 多线程不能提高效率、反而会降低效率，但是可以提高CPU的使用率
3. 一个进程如果有多条执行路径，则称为多线程程序
4. Java虚拟机的启动至少开启了两条线程，主线程和垃圾回收线程
5. 一个线程可以理解为进程的子任务



![image-20201216155158786](img\image-20201216155158786.png)



# 二、线程的实现方式

*线程*是程序中执行的线程。 Java虚拟机允许应用程序同时执行多个执行线程。

## 1.第一种创建方式

实现的步骤：

1. 创建Thread类的子类
2. 重写run方法
3. 创建线程对象
4. 启动线程

案例代码

```java
package com.bobo.thread;

public class ThreadDemo02 {

    /**
     * 线程的第一种实现方式
     *     通过创建Thread类的子类来实现
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("main方法执行了1...");
        // Java中的线程 本质上就是一个Thread对象
        Thread t1 = new ThreadTest01();
        // 启动一个新的线程
        t1.start();
        for(int i = 0 ; i< 100 ; i++){
            System.out.println("main方法的循环..."+i);
        }
        System.out.println("main方法执行结束了3...");
    }
}

/**
 * 第一个自定义的线程类
 *    继承Thread父类
 *    重写run方法
 */
class ThreadTest01 extends Thread{

    @Override
    public void run() {
        System.out.println("我们的第一个线程执行了2....");
        for(int i = 0 ; i < 10 ; i ++){
            System.out.println("子线程："+i);
        }
    }
}

```



输出结果

```txt
main方法执行了1...
main方法的循环...0
// 省略
main方法的循环...8
我们的第一个线程执行了2....
main方法的循环...9
main方法的循环...10
// 省略
main方法的循环...53
子线程：0
main方法的循环...54
子线程：1
main方法的循环...55
子线程：2
main方法的循环...56
子线程：3
main方法的循环...57
子线程：4
main方法的循环...58
子线程：5
main方法的循环...59
子线程：6
main方法的循环...60
// 省略
main方法的循环...74
main方法的循环...75
子线程：7
main方法的循环...76
// 省略
main方法的循环...83
子线程：8
main方法的循环...84
main方法的循环...85
main方法的循环...86
main方法的循环...87
子线程：9
main方法的循环...88
// 省略
main方法的循环...99
main方法执行结束了3...
```



通过输出结果我们也能看出来 子线程中的代码和主线程中的代码是**并行**执行的。



![image-20201216163051156](img\image-20201216163051156.png)



注意点：

1. 启动线程是使用start方法而不是run方法
2. 线程不能启动多次，如果要创建多个线程，那么就需要创建多个Thread对象



![image-20201216163703251](img\image-20201216163703251.png)



课堂案例

​     在主线程中打印1到100，然后创建一个子线程实现大文件的复制工作。



```java
package com.bobo.thread;

import java.io.*;

public class ThreadDemo03 extends Thread{

    /**
     * 在主线程中打印1到100，然后创建一个子线程实现大文件的复制工作。
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("主线程开始了...");
        // 创建线程对象
        ThreadDemo03 t1 = new ThreadDemo03();
        t1.start();
        printNum(1,100);
        System.out.println("主线程结束了...");
    }

    @Override
    public void run() {
        long start = System.currentTimeMillis();
        System.out.println("子线程开始文件复制...");
        // 实现文件的复制
        try {
            copyFile(new File("d:/IO/1.mp4"),new File("d:/NewIO/1.mp4"));
        } catch (Exception e) {
            e.printStackTrace();
        }
        long end = System.currentTimeMillis();
        System.out.println("子线程结束文件复制...耗时：" + (end-start));
    }

    /**
     * 通过循环打印数字
     * @param start
     * @param end
     */
    public static void printNum(int start , int end){
        for (int i = start ; i <= end ; i ++){
            System.out.print(i + "\t");
            if(i % 5 == 0){
                System.out.println();
            }
        }
    }

    /**
     * 实现文件的复制操作
     * @param srcFile  要复制的源文件
     * @param descFile  要复制到的目标文件
     */
    public static void copyFile(File srcFile,File descFile) throws  Exception{

        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(descFile));
        byte[] bytes = new byte[1024*1024];
        int num = 0 ;
        while((num = bis.read(bytes)) != -1){
            bos.write(bytes,0,num);
        }
        bos.flush();;
        bos.close();
        bis.close();

    }
}

```



通过内部类的方式简化我们的线程的创建

```java
    /**
     * 如果我们创建的线程类 在程序中我们只需要创建一个线程就不需要再使用的情况下
     *    我们可以通过内部类的方式来简化操作
     * @param args
     */
    public static void main(String[] args) {
        Thread t1 = new Thread(){
            @Override
            public void run() {
                System.out.println("子线程执行了...");
            }
        };
        t1.start();
    }
```

或者

```java
    public static void main(String[] args) {
        new Thread(){
            @Override
            public void run() {
                System.out.println("子线程执行了.......");
            }
        }.start();
    }
```





## 2.第二种创建方式

​     在第一种实现方式中，我们是将线程的创建和线程执行的业务都封装在了Thread对象中，我们可以通过Runable接口来实现线程程序代码和数据有效的分离。

```java
Thread(Runnable target)
分配一个新的 Thread对象。
```



实现的步骤：

1. 创建Runable的实现类
2. 重写run方法
3. 创建Runable实例对象(通过实现类来实现)
4. 创建Thread对象，并把第三部的Runable实现作为Thread构造方法的参数
5. 启动线程



```java
package com.bobo.runable;

public class RunableDemo01 {

    /**
     * 线程的第二种方式
     *     本质是创建Thread对象的时候传递了一个Runable接口实现
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("main执行了...");
        // 创建一个新的线程  Thread对象
        Runnable r1 = new RunableTest();
        Thread t1 = new Thread(r1);
        // 启动线程
        t1.start();
        System.out.println("main结束了...");
    }
}

/**
 * 线程的第二种创建方式
 *   创建一个Runable接口的实现类
 */
class RunableTest implements Runnable{

    @Override
    public void run() {
        System.out.println("子线程执行了...");
    }
}

```

输出结果:

```txt
main执行了...
main结束了...
子线程执行了...
```


有别于第一种实现方式，通过Runable接口实现的线程可以多个线程同时操作一个Runable接口对象

```java
    /**
     * 线程的第二种方式
     *     本质是创建Thread对象的时候传递了一个Runable接口实现
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("main执行了...");
        // 创建一个新的线程  Thread对象
        Runnable r1 = new RunableTest();
        Thread t1 = new Thread(r1);
        // 启动线程
        t1.start();
        // 创建一个新的线程
        Thread t2 = new Thread(r1);
        t2.start();
        System.out.println("main结束了...");
    }
```



实现Runable接口的好处：

1. 可以避免Java单继承带来的局限性
2. 适合多个相同的程序代码处理同一个资源的情况，把线程同程序的代码和数据有效的分离，较好的体现了面向对象的设计思想





通过Runable接口实现的简写方式：

```java
    /**
     * 通过Runable接口的方式实现的线程的简写方式  内部类方式
     * @param args
     */
    public static void main(String[] args) {
        Runnable r1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("子线程执行了..");
            }
        };
        Thread t1 = new Thread(r1);
        t1.start();

        Thread t2 = new Thread(r1);
        t2.start();
    }
```

更简洁的方式

```java
    /**
     * 通过Runable接口的方式实现的线程的简写方式  内部类方式
     * @param args
     */
    public static void main(String[] args) {

        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("子线程执行了..");
            }
        });
        t1.start();

        // 更加的简洁
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("子线程执行了..");
            }
        }).start();
    }
```





课堂案例

​     在主线程中打印1到100，然后创建一个子线程实现大文件的复制工作。

```java
package com.bobo.runable;

import java.io.*;

public class RunableDemo04 {

    /**
     * 课堂案例
     *
     *   在主线程中打印1到100，然后创建一个子线程实现大文件的复制工作。
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("main方法执行了");
        printNum(1,100);
        new Thread(new Runnable() {
            @Override
            public void run() {
                long start = System.currentTimeMillis();
                System.out.println("子线程开始执行");
                try {
                    RunableDemo04.copyFile(new File("d:/IO/1.mp4"),new File("d:/NewIO/2.mp4"));
                }catch (Exception e){
                    e.printStackTrace();
                }
                long end = System.currentTimeMillis();
                System.out.println("子线程执行结束,耗时：" + (end - start));
            }
        }).start();
        System.out.println("main方式执行结束");
    }

    /**
     * 通过循环打印数字
     * @param start
     * @param end
     */
    public static void printNum(int start , int end){
        for (int i = start ; i <= end ; i ++){
            System.out.print(i + "\t");
            if(i % 5 == 0){
                System.out.println();
            }
        }
    }

    /**
     * 实现文件的复制操作
     * @param srcFile  要复制的源文件
     * @param descFile  要复制到的目标文件
     */
    public static void copyFile(File srcFile, File descFile) throws  Exception{

        BufferedInputStream bis = new BufferedInputStream(new FileInputStream(srcFile));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(descFile));
        byte[] bytes = new byte[1024*1024];
        int num = 0 ;
        while((num = bis.read(bytes)) != -1){
            bos.write(bytes,0,num);
        }
        bos.flush();;
        bos.close();
        bis.close();

    }
}

```



## 3.第三种创建方式

​     前面我们介绍的两种创建线程的方式都是重写run方法，而且run方法是没有返回结果的，也就是main方法是不知道开启的线程什么时候开始执行，什么时候结束执行，也获取不到对应的返回结果。而且run方法也不能把可能产生的异常抛出。在JDK1.5之后推出了通过实现Callable接口的方式来创建新的线程，这种方式可以获取对应的返回结果

```java
package com.bobo.callable;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

public class CallableDemo01 {

    /**
     * 创建线程的第三种实现方式：
     *    Callable方式
     */
    public static void main(String[] args) throws  Exception {
        // 创建一个Callable实例
        Callable<Integer> callable = new MyCallable();
        FutureTask<Integer> futureTask = new FutureTask<>(callable);
        // 获取一个线程 肯定是要先创建一个Thread对象  futureTask本质上是Runable接口的实现
        Thread t1 = new Thread(futureTask);
        System.out.println("main方法start....");
        t1.start(); // 本质还是执行的 Runable中的run方法，只是 run方法调用了call方法罢了
        // 获取返回的结果
        System.out.println(futureTask.get()); // 获取开启的线程执行完成后返回的结果
        System.out.println("main方法end ....");

    }
}

/**
 * 创建Callable的实现类
 *    我们需要指定Callable的泛型，这个泛型是返回结果的类型
 */
class MyCallable implements Callable<Integer>{

    /**
     * 线程自动后会执行的方法
     * @return
     * @throws Exception
     */
    @Override
    public Integer call() throws Exception {
        int sum = 0;
        for(int i = 1 ; i <= 100 ; i ++){
            sum += i;
        }
        return sum;
    }
}

```

输出结果：

```txt
main方法start....
5050
main方法end ....
```



实现**Runnable**接口和实现**Callable**接口的区别:

1. Runnable是自从java1.1就有了，而Callable是1.5之后才加上去的
2. Callable规定的方法是call(),Runnable规定的方法是run()
3. Callable的任务执行后可返回值，而Runnable的任务是不能返回值(是void)
4. call方法可以抛出异常，run方法不可以
5. 运行Callable任务可以拿到一个Future对象，表示异步计算的结果。它提供了检查计算是否完成的方法，以等待计算的完成，并检索计算的结果。通过Future对象可以了解任务执行情况，可取消任务的执行，还可获取执行结果。
6. 加入线程池运行，Runnable使用ExecutorService的execute方法，Callable使用submit方法。



其实Callable接口底层的实现就是对Runable接口实现的封装，线程启动执行的也是Runable接口实现中的run方法，只是在run方法中有调用call方法罢了



# 三、线程中常用的方法

## 1.start方法

​		start方法是我们开启一个新的线程的方法，但是并不是直接开启，而是告诉CPU我已经准备好了，快点运行我，这是启动一个线程的唯一入口。

```java
void	start()
// 导致此线程开始执行; Java虚拟机调用此线程的run方法。
```



## 2.run方法

​       线程的线程体，当一个线程开始运行后，执行的就是run方法里面的代码，我们不能直接通过线程对象来调用run方法。因为这并没有产生一个新的线程。仅仅只是一个普通对象的方法调用。

```java
void	run()
// 如果这个线程使用单独的Runnable运行对象构造，则调用该Runnable对象的run方法; 否则，此方法不执行任何操作并返回。
```





## 3.getName方法

​     获取线程名称的方法

```java
String	getName()
返回此线程的名称。
```

案例代码

```java
package com.bobo.fun;

public class ThreadFunDemo01 {

    /**
     * 线程中的常用的方法
     * @param args
     */
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName() + " main执行了");
        Runnable runnable = new MyRunable();
        // 创建并启动多个线程
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
    }
}

class MyRunable implements  Runnable{
    @Override
    public void run() {
        // Thread.currentThread() 获取当前线程对象
        System.out.println(Thread.currentThread().getName() + "  执行了...");
    }
}

```

输出结果:

```txt
main main执行了
Thread-0  执行了...
Thread-1  执行了...
Thread-3  执行了...
Thread-2  执行了...
Thread-4  执行了...
Thread-5  执行了...
Thread-6  执行了...
```

​		默认的主方法的线程名称是 main,而其他子线程的名称默认的是 Thread-编号，我们不难发现默认的线程名称的识别度不高，那么我们是否可以自定义线程名称呢？显然是可以的

继承Thread类

```java
package com.bobo.fun;

public class ThreadFunDemo02{

    /**
     * 线程中的常用的方法
     * @param args
     */
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName() + " main执行了");
        // 创建并启动多个线程
        Thread t1 = new MyThread01("线程A");
        t1.start();
        Thread t2 = new MyThread01("线程B");
        t2.start();
        Thread t3 = new MyThread01("线程C");
        t3.start();


    }
}

class MyThread01 extends Thread{


    public MyThread01(String threadName){
        // 指定线程的名称
        super(threadName);
    }
    @Override
    public void run() {
        System.out.println(this.getName() + " 执行了...");
    }
}
```

输出结果：

```txt
main main执行了
线程A 执行了...
线程B 执行了...
线程C 执行了...
```



实现Runable接口，本质还是Thread有参的构造方法实现的名称重命名

```java
package com.bobo.fun;

public class ThreadFunDemo03 {

    public static void main(String[] args) {
        Runnable runnable = new MyRunable01();
        // 重命名 线程的名称
        Thread t1 = new Thread(runnable,"线程I");
        t1.start();
        Thread t2 = new Thread(runnable,"线程II");
        t2.start();
        Thread t3 = new Thread(runnable,"线程III");
        t3.start();
    }
}

class MyRunable01 implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + "  执行了...");
    }
}

```

输出结果

```txt
线程III  执行了...
线程II  执行了...
线程I  执行了...
```



## 4.优先级

​      我们创建的多个线程的执行顺序是由CPU决定的。Java中提供了一个线程调度器来监控程序中启动后进入就绪状态的所有的线程，优先级高的线程会获取到比较多**运行机会**



```java
    /**
     * 最小的优先级是 1
     */
    public final static int MIN_PRIORITY = 1;

   /**
     * 默认的优先级都是5
     */
    public final static int NORM_PRIORITY = 5;

    /**
     * 最大的优先级是10
     */
    public final static int MAX_PRIORITY = 10;
```



案例代码

```java
package com.bobo.fun;

public class ThreadDemo05 {

    /**
     * 线程的优先级
     * @param args
     */
    public static void main(String[] args) {
        Runnable runnable = new MyRunable02();
        for(int i = 1 ; i <= 10 ; i ++){
            Thread t1 = new Thread(runnable,"" + i);
            t1.setPriority(i); // 设置优先级大小 
            t1.start();
        }
    }
}

class MyRunable02 implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName()+" 执行了 优先级：" + Thread.currentThread().getPriority());
    }
}

```

输出结果：

```txt
1 执行了 优先级：1
4 执行了 优先级：4
3 执行了 优先级：3
2 执行了 优先级：2
6 执行了 优先级：6
5 执行了 优先级：5
7 执行了 优先级：7
8 执行了 优先级：8
9 执行了 优先级：9
10 执行了 优先级：10
```



​        大家会发现，设置了优先级后输出的结果和我们预期的并不一样，这是为什么呢？优先级在CPU调动线程执行的时候会是一个参考因数，但不是决定因数，



## 5.sleep方法

​      将当前线程暂定指定的时间，

```java
static void	sleep(long millis)
// 使当前正在执行的线程以指定的毫秒数暂停（暂时停止执行），具体取决于系统定时器和调度程序的精度和准确性。
```

演示案例

```java
package com.bobo.fun;

public class ThreadFunDemo06 {

    /**
     * sleep 方法
     *    休眠
     * @param args
     */
    public static void main(String[] args) throws Exception{
        System.out.println("main ... start");
        Thread.sleep(1000);
        Runnable runnable = new MyRunable03();
        new Thread(runnable).start();
        Thread.sleep(1000);
        System.out.println("main .... end ");
    }
}

class MyRunable03 implements Runnable{

    @Override
    public void run() {
        for (int i = 1 ; i < 50 ; i ++){
            // 每循环一次 休眠 100毫秒
            try {
                // 将当前线程休眠指定的时间
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + " :" + i);
        }
    }
}

```





课堂案例：

练习1：设计一个线程类：创建3个子线程，每个线程分别打印数字，分别睡100,200,300

```java
package com.bobo.fundemo;

public class FunDemo01 {

    /**
     * 练习1：设计一个线程类：创建3个子线程，每个线程分别打印数字，分别睡100,200,300
     * @param args
     */
    public static void main(String[] args) {
        new Thread(new MyRunable01(100),"A").start();
        new Thread(new MyRunable01(200),"B").start();
        new Thread(new MyRunable01(300),"C").start();
    }
}

class MyRunable01 implements Runnable{

    private int sleepTime;

    public MyRunable01(int sleepTime){
        this.sleepTime = sleepTime;
    }

    @Override
    public void run() {
        for(int i = 0 ; i < 10; i ++){
            System.out.println(Thread.currentThread().getName() + " :" + i);
            // 休眠指定的时间
            try {
                Thread.sleep(sleepTime);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

```

输出结果：

```txt
A :0
B :0
C :0
A :1
B :1
A :2
C :1
A :3
B :2
A :4
A :5
C :2
B :3
A :6
A :7
B :4
A :8
C :3
A :9
B :5
C :4
B :6
B :7
C :5
B :8
C :6
B :9
C :7
C :8
C :9
```



练习2：设计一个线程：运行10秒后被终止(掌握线程的终止方法)

```java
package com.bobo.fundemo;

import java.util.Date;

public class FunDemo02 {

    /**
     * 练习2：设计一个线程：运行10秒后被终止(掌握线程的终止方法)
     * @param args
     */
    public static void main(String[] args)  throws Exception{
        MyRunable02 runnable = new MyRunable02();
        new Thread(runnable).start();
        Thread.sleep(10000); // 主线程休眠10秒钟
        runnable.flag = false;
        System.out.println("main、  end ...");
    }
}

class MyRunable02 implements Runnable{

    boolean flag = true;

    @Override
    public void run() {
        while(flag){
            try {
                Thread.sleep(1000);
                System.out.println(new Date());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(Thread.currentThread().getName() + " 执行完成");
    }
}

```



练习3：设计一个线程类，启动2个子线程，一个子线程每打印10个数字睡眠，另一个线程每打印20个睡眠。。

```java
package com.bobo.fundemo;

public class FunDemo03 {

    /**
     * 练习3：设计一个线程类，启动2个子线程，一个子线程每打印10个数字睡眠，另一个线程每打印20个睡眠。。
     * @param args
     */
    public static void main(String[] args) {
        new Thread(new MyRunableO3(),"A").start();
        new Thread(new MyRunableO3(),"B").start();
    }
}

class MyRunableO3 implements Runnable{

    private int i = 0;

    @Override
    public void run() {
        String name = Thread.currentThread().getName();
        while (i <  1000){
            if("A".equals(name)){
                if(i % 10==0 && i != 0){
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }else if("B".equals(name)){
                if(i%20 ==0 && i!= 0){
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
            System.out.println(name + "\t" + i++);
        }


    }
}

```



## 6.isAlive

​     获取线程的状态。

```java
package com.bobo.fundemo;

public class FunDemo04 {

    /**
     * isAlive方法
     * @param args
     */
    public static void main(String[] args) {

        System.out.println("main  start ...");
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + " .... ");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        System.out.println("线程的状态："+t1.isAlive());
        t1.start();
        System.out.println("线程的状态："+t1.isAlive());
        System.out.println("main  end ...");
    }
}

```

输出结果

```txt
main  start ...
线程的状态：false
线程的状态：true
main  end ...
Thread-0 .... 
```





## 7.join

   调用某线程的该方法，将当前线程和该线程合并，即等待该线程结束，在恢复当前线程的运行

```java
package com.bobo.fundemo;

public class FunDemo05 {

    /**
     * 线程的合并
     *     join方法
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("main  start ...");
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                for(int i = 0 ; i < 10; i++){
                    System.out.println(Thread.currentThread().getName() + " 子线程执行了...");
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }

            }
        });
        t1.start();
        try {
            t1.join(); // 线程的合并，和主线程合并  相当于我们直接调用了run方法
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("main end ...");
    }
}

```

输出结果：

```txt
main  start ...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
Thread-0 子线程执行了...
main end ...

```



## 8.yield

​    让出CPU，当前线程进入就绪状态

```java
package com.bobo.fundemo;

public class FuneDemo06 extends Thread{

    public FuneDemo06(String threadName){
        super(threadName);
    }

    /**
     * yield方法  礼让
     *
     * @param args
     */
    public static void main(String[] args) {
        FuneDemo06 f1 = new FuneDemo06("A1");
        FuneDemo06 f2 = new FuneDemo06("A2");
        FuneDemo06 f3 = new FuneDemo06("A3");

        f1.start();
        f2.start();
        f3.start();
    }

    @Override
    public void run() {
        for(int i = 0 ; i < 100; i ++){
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            if(i%10 == 0 && i != 0){
                System.out.println(Thread.currentThread().getName()+" 礼让：" + i);
                Thread.currentThread().yield(); // 让出CPU
            }else{
                System.out.println(this.getName() + ":" + i);
            }
        }
    }
}

```



## 9.wait和notify/notifyAll

阻塞和唤醒的方法，是Object中的方法，我们在数据同步的时候会介绍到



# 四、线程的生命周期

## 1. 生命周期

生命周期：对象从创建到销毁的全过程

线程的生命周期：线程对象(Thread)从开始到销毁的全过程



![image-20201217142636415](img\image-20201217142636415.png)



线程的状态：

1. 创建  Thread对象
2. 就绪状态  执行start方法后线程进入可运行的状态
3. 运行状态 CPU运行
4. 阻塞状态  运行过程中被中断(等待阻塞，对象锁阻塞，其他阻塞)
5. 终止状态  线程执行完成





## 2. 线程的中断

### 2.1 设置标志位

​       如果线程的run方法中执行的是一个重复执行的循环，可以提供一个标记来控制循环是否继续



```java
public class FunDemo02 {

    /**
     * 练习2：设计一个线程：运行10秒后被终止(掌握线程的终止方法)
     * @param args
     */
    public static void main(String[] args)  throws Exception{
        MyRunable02 runnable = new MyRunable02();
        new Thread(runnable).start();
        Thread.sleep(10000); // 主线程休眠10秒钟
        runnable.flag = false;
        System.out.println("main、  end ...");
    }
}

class MyRunable02 implements Runnable{

    boolean flag = true;

    @Override
    public void run() {
        while(flag){
            try {
                Thread.sleep(1000);
                System.out.println(new Date());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(Thread.currentThread().getName() + " 执行完成");
    }
}
```





### 2.2 利用中断标志位

​     在线程中有个中断的标志位，默认是false，当我们显示的调用 interrupted方法或者isInterrupted方法是会修改标志位为true。我们可以利用此来中断运行的线程。

```java
package com.bobo.fundemo;

public class FunDemo07 extends Thread{

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new FunDemo07();
        t1.start();
        Thread.sleep(3000);
         t1.interrupt(); // 中断线程 将中断标志由false修改为了true
        // t1.stop(); // 直接就把线程给kill掉了
        System.out.println("main .... ");
    }

    @Override
    public void run() {
        System.out.println(this.getName() + " start...");
        int i = 0 ;
        // Thread.interrupted() 如果没有被中断 那么是false 如果显示的执行了interrupt 方法就会修改为 true
        while(!Thread.interrupted()){
            System.out.println(this.getName() + " " + i);
            i++;
        }

        System.out.println(this.getName()+ " end .... ");

    }
}

```

### 2.3 利用InterruptedException

​    如果线程因为执行join(),sleep()或者wait()而进入阻塞状态，此时要想停止它，可以让他调用interrupt(),程序会抛出InterruptedException异常。我们利用这个异常可以来终止线程。

```java
package com.bobo;

public class FunDemo08 extends Thread{

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new FunDemo08();
        t1.start();
        Thread.sleep(3000);
         t1.interrupt(); // 中断线程 将中断标志由false修改为了true
        // t1.stop(); // 直接就把线程给kill掉了
        System.out.println("main .... ");
    }

    @Override
    public void run() {
        System.out.println(this.getName() + " start...");
        int i = 0 ;
        // Thread.interrupted() 如果没有被中断 那么是false 如果显示的执行了interrupt 方法就会修改为 true
         while(!Thread.interrupted()){
        //while(!Thread.currentThread().isInterrupted()){
             try {
                 Thread.sleep(10000);
             } catch (InterruptedException e) {
                 e.printStackTrace();
             }
             System.out.println(this.getName() + " " + i);
            i++;
        }

        System.out.println(this.getName()+ " end .... ");

    }
}

```

![image-20201217151458589](img\image-20201217151458589.png)



利用异常InterruptedException来中断线程

![image-20201217151634499](img\image-20201217151634499.png)







# 五、线程数据安全问题

​       多个线程操作同一份数据会出现的安全问题。

## 1. 数据安全问题分析

### 1.1 继承Thread方式

   通过继承Thread父类的方式，多个子线程操作对象的成员变量不会出现数据共享的问题

```java
package com.bobo.thread1;

public class ThreadDemo01 {

    /**
     * 数据安全问题
     *     线程的创建方式有两种
     *        继承自Thread类实现
     *        实现Runable接口
     * @param args
     */
    public static void main(String[] args) {
        MyThread01 t1 = new MyThread01();
        t1.setName("A");
        MyThread01 t2 = new MyThread01();
        t2.setName("B");
        MyThread01 t3 = new MyThread01();
        t3.setName("C");

        t1.start();
        t2.start();
        t3.start();
    }


}

class MyThread01 extends Thread{

    private Integer count = 0;

    @Override
    public void run() {
        //System.out.println(Thread.currentThread().getName()+ "  执行了");
        // 操作count
        while(count < 10){
            count++;
            System.out.println(Thread.currentThread().getName()+ "  执行了" + count);
        }

    }
}



```

线程之间相互操作的是独立的数据

![image-20201218162009748](img\image-20201218162009748.png)



![image-20201218162121200](img\image-20201218162121200.png)



如果多个子线程操作的是静态属性，那么这时多个线程会共享该数据

```java
package com.bobo.thread1;

public class ThreadDemo02{

    /**
     * 数据安全问题
     *     线程的创建方式有两种
     *        继承自Thread类实现
     *        实现Runable接口
     * @param args
     */
    public static void main(String[] args) {
        MyThread02 t1 = new MyThread02();
        t1.setName("A");
        MyThread02 t2 = new MyThread02();
        t2.setName("B");
        MyThread02 t3 = new MyThread02();
        t3.setName("C");

        t1.start();
        t2.start();
        t3.start();
    }


}

class MyThread02 extends Thread{

    private static Integer count = 0;

    @Override
    public void run() {
        //System.out.println(Thread.currentThread().getName()+ "  执行了");
        // 操作count
        while(count < 10){
            count++;
            System.out.println(Thread.currentThread().getName()+ "  执行了" + count);
        }

    }
}
```



输出结果

![image-20201218162355687](img\image-20201218162355687.png)





![image-20201218162519752](img\image-20201218162519752.png)





### 1.2 实现Runable接口

我们通过Runable接口的方式创建的线程，如果多个子线程操作的是同一个Runable对象那么同一个对象的普通成员变量是共享的。

```java
package com.bobo.thread1;

public class ThreadDemo03 {

    public static void main(String[] args) {
        Runnable runnable = new MyRunable();
        Runnable runnable1 = new MyRunable();
        Thread t1 = new Thread(runnable,"A");
        Thread t2 = new Thread(runnable,"B");
        Thread t3 = new Thread(runnable,"C");
        // t4 线程操作的是另外一个Runable对象
        Thread t4 = new Thread(runnable1,"D");

        t1.start();
        t2.start();
        t3.start();
        t4.start();
    }
}

class MyRunable implements Runnable{

    private Integer count = 0;

    @Override
    public void run() {
        while(count < 10){
            count ++;
            System.out.println(Thread.currentThread().getName() + " :" + count);
        }
    }
}

```

输出结果

```txt
B :2
D :1
C :3
A :2
C :5
D :2
B :4
D :3
C :7
A :6
C :9
D :4
B :8
D :5
A :10
D :6
D :7
D :8
D :9
D :10
```

前面三个线程共享第一个Runable对象的属性，第四个操作的是第二个Runable对象的属性

![image-20201218163543263](img\image-20201218163543263.png)





## 2.数据完全问题的原因

案例代码：

```java
package com.bobo.thread1;

public class ThreadDemo04 {

    /**
     * 通过多线程模拟火车站售票的场景
     *    有100张票  3个窗口售卖
     * @param args
     */
    public static void main(String[] args) {
        // 火车票资料
        Runnable runnable = new MyRunable04();
        Thread t1 = new Thread(runnable,"窗口A");
        Thread t2 = new Thread(runnable,"窗口B");
        Thread t3 = new Thread(runnable,"窗口C");

        t1.start();
        t2.start();
        t3.start();
    }
}

class MyRunable04 implements Runnable{

    // 火车票
    private Integer ticket = 10;

    @Override
    public void run() {

        while(ticket > 0){
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+" 卖出了第:" + ticket-- + "张票" );
        }
    }
}

```

输出结果

```txt
窗口A 卖出了第:10张票
窗口C 卖出了第:10张票
窗口B 卖出了第:10张票
窗口C 卖出了第:9张票
窗口B 卖出了第:9张票
窗口A 卖出了第:9张票
窗口B 卖出了第:8张票
窗口C 卖出了第:8张票
窗口A 卖出了第:7张票
窗口A 卖出了第:6张票
窗口B 卖出了第:6张票
窗口C 卖出了第:5张票
窗口B 卖出了第:3张票
窗口A 卖出了第:4张票
窗口C 卖出了第:4张票
窗口A 卖出了第:2张票
窗口B 卖出了第:0张票
窗口C 卖出了第:1张票
```

我们一共只有10张票，但是确卖出去了18张票，这个显然出现了数据完全问题。

![image-20201218165822757](img\image-20201218165822757.png)



多个子线程操作飞原子的代码，出现的问题，其实就是不能保证原子性出现的问题。

在多线程中出现数据安全问题的本质原因有三个：

1. 原子性
2. 可见性
3. 有序性



原子性：多个操作要么同时执行要么都不执行

```java
try {
    Thread.sleep(1);
} catch (InterruptedException e) {
    e.printStackTrace();
}
System.out.println(Thread.currentThread().getName()+" 卖出了第:" + ticket-- + "张票" );
```



## 3.数据安全问题的解决方式

### 3.1 同步代码块

​         在我们需要保证原子性的代码前后加上同步代码块

```java
synchroized(obj){
    // 需要同步的代码
}
```



```java
package com.bobo.thread1;

public class ThreadDemo05 {

    /**
     * 通过多线程模拟火车站售票的场景
     *    有100张票  3个窗口售卖
     * @param args
     */
    public static void main(String[] args) {
        // 火车票资料
        Runnable runnable = new MyRunable05();
        Thread t1 = new Thread(runnable,"窗口A");
        Thread t2 = new Thread(runnable,"窗口B");
        Thread t3 = new Thread(runnable,"窗口C");

        t1.start();
        t2.start();
        t3.start();
    }
}

class MyRunable05 implements Runnable{

    // 火车票
    private Integer ticket = 10;

    private Object obj = new Object();

    @Override
    public void run() {

        while(ticket > 0){
            // 这个锁对象必须是 共享对象
            synchronized (obj){
                if(ticket <= 0) continue;
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName()+" 卖出了第:" + ticket-- + "张票" );
            }

        }
    }
}

```

输出结果

```txt
窗口A 卖出了第:10张票
窗口A 卖出了第:9张票
窗口A 卖出了第:8张票
窗口A 卖出了第:7张票
窗口A 卖出了第:6张票
窗口A 卖出了第:5张票
窗口A 卖出了第:4张票
窗口A 卖出了第:3张票
窗口A 卖出了第:2张票
窗口A 卖出了第:1张票
```



### 3.2 同步方法

​        在方法的声明中添加 `cynchronized`关键字，表示整个方法被同步，整个方法同一时间只能够被一个线程访问

```java
package com.bobo.thread1;

public class ThreadDemo06 {

    /**
     * 通过多线程模拟火车站售票的场景
     *    有100张票  3个窗口售卖
     * @param args
     */
    public static void main(String[] args) {
        // 火车票资料
        Runnable runnable = new MyRunable06();
        Thread t1 = new Thread(runnable,"窗口A");
        Thread t2 = new Thread(runnable,"窗口B");
        Thread t3 = new Thread(runnable,"窗口C");

        t1.start();
        t2.start();
        t3.start();
    }
}

class MyRunable06 implements Runnable{

    // 火车票
    private Integer ticket = 10;

    private Object obj = new Object();

    @Override
    public void run() {

        while(ticket > 0){
            sellTicket();
        }
    }

    /**
     * 同步方法
     *    同步普通方法 锁的是 this 
     *    同步静态方法  锁的是 类对象
     */
    public synchronized void sellTicket(){
        if(ticket <= 0) return;
        try {
            Thread.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName()+" 卖出了第:" + ticket-- + "张票" );
    }
}

```



同步方法和同步代码块的区别

1. 锁的对象不同，同步方法（普通方法this，静态方法 类对象） 同步代码块 指定的任意的对象
2. 性能，同步方法将整个方法锁定，而同步代码块更加的灵活





### 3.3 Lock

Lock是一种比Synchroized更加灵活的一种加锁方式，使用的时候我们必须显示的加锁`lock.lock`然后在释放锁的时候我们也需要显示的`lock.unlock`调用

```javva
package com.bobo.thread1;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ThreadDemo07 {

    /**
     * 通过多线程模拟火车站售票的场景
     *    有100张票  3个窗口售卖
     * @param args
     */
    public static void main(String[] args) {
        // 火车票资料
        Runnable runnable = new MyRunable07();
        Thread t1 = new Thread(runnable,"窗口A");
        Thread t2 = new Thread(runnable,"窗口B");
        Thread t3 = new Thread(runnable,"窗口C");

        t1.start();
        t2.start();
        t3.start();
    }
}

class MyRunable07 implements Runnable{

    // 火车票
    private  Integer ticket = 10;


    private Lock lock = new ReentrantLock();

    @Override
    public void run() {

        while(ticket > 0){
            // 加锁
            lock.lock();
            if(ticket <= 0) break;
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+" 卖出了第:" + ticket-- + "张票" );
            // 释放锁
            lock.unlock();
        }
    }


}

```

AQS源码分析：https://dpb-bobokaoya-sm.blog.csdn.net/article/details/106433739



## 4. 死锁

​       在多线程中要尽量避免**死锁**的情况出现，出现死锁程序就直接卡主了。造成死锁的原因是 线程1锁住了资源A等待资源B，线程2锁住了资源B等待资源A，两个线程都在等待自己需要的资源，而这些资源被另外的线程锁住，这些线程你等我，我等你，谁也不愿意让出资源，这样死锁就产生了。

案例代码

```java
package com.bobo.thread1;

public class ThreadDemo08 {

    /**
     * 同步的嵌套
     * @param args
     */
    public static void main(String[] args) throws InterruptedException {
        MyRunable08 runnable = new MyRunable08();
        Thread t1 = new Thread(runnable,"A");

        Thread t2 = new Thread(runnable,"B");
        runnable.flag = true;
        t1.start();
        Thread.sleep(10);
        runnable.flag = false; // 改变状态
        t2.start();
    }
}

class MyRunable08 implements Runnable{

    private Object obj1 = new Object();
    private Object obj2 = new Object();

    public boolean flag = false;

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " 执行了");
        if(flag){
            while(true){
                synchronized (obj1){ // 加一把锁
                    System.out.println(Thread.currentThread().getName() + " 执行了1 ** start");

                    synchronized (obj2){
                        System.out.println(Thread.currentThread().getName() + " 执行了2 ** start");

                        System.out.println(Thread.currentThread().getName() + " 执行了2 ** end");
                    }
                    System.out.println(Thread.currentThread().getName() + " 执行了1 ** end");

                }
            }
        }else{
            while(true){
                synchronized (obj2){ // 加一把锁
                    System.out.println(Thread.currentThread().getName() + " 执行了1 -- start");

                    synchronized (obj1){
                        System.out.println(Thread.currentThread().getName() + " 执行了2 -- start");

                        System.out.println(Thread.currentThread().getName() + " 执行了2 -- end");
                    }
                    System.out.println(Thread.currentThread().getName() + " 执行了1 --  end");

                }
            }
        }


    }
}
```



![image-20201219142139271](img\image-20201219142139271.png)



原理分析图

![image-20201219142223829](img\image-20201219142223829.png)





## 5. ThreadLocal

​        这个类提供线程局部变量。 这些变量与其正常的对应方式不同，因为访问一个的每个线程（通过其`get`或`set`方法）都有自己独立初始化的变量副本。 `ThreadLocal`实例通常是希望将状态与线程关联的类中的私有静态字段（例如，用户ID或事务ID）。

案例代码

```java
package com.bobo.thread1;

public class ThreadDemo10 {

    /**
     * ThreadLocal
     *    线程变量
     * @param args
     */
    public static void main(String[] args) throws Exception{
        Runnable ru = new MyRunable10();
        Thread t1 = new Thread(ru,"A");
        Thread t2 = new Thread(ru,"B");
        t1.start();
        Thread.sleep(100);
        t2.start();

    }
}

class MyRunable10 implements Runnable{

    // 创建一个ThreadLocal变量
    private ThreadLocal<Users> myThreadLocal = new ThreadLocal<>();

    @Override
    public void run() {
        // 将User对象保存在了 当前线程的局部变量中
        myThreadLocal.set(new Users("root",((int)(Math.random()*100)) + ""));
        System.out.println(Thread.currentThread().getName() + ":" + myThreadLocal.get());
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // 从当前线程的局部变量中获取保存的对象
        System.out.println(Thread.currentThread().getName() + ":" + myThreadLocal.get());
        fun1();
    }

    public void fun1(){
        System.out.println(Thread.currentThread().getName() + ":" + myThreadLocal.get());
    }
}

class Users{
    private String userName;

    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Users(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

```

输出结果：

```txt
A:User{userName='root', password='51'}
B:User{userName='root', password='41'}
A:User{userName='root', password='51'}
A:User{userName='root', password='51'}
B:User{userName='root', password='41'}
B:User{userName='root', password='41'}
```



![image-20201219145835731](img\image-20201219145835731.png)



ThreadLocal的应用场景：ORM中的Session管理，Web服务中的Session管理



## 6.设计模式

### 6.1 什么是设计模式

  设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。通过对这些设计模式的合理使用能够是我们的系统更加的健壮。

### 6.2 六大设计原则

| 设计原则                    | 简单说明                                                     |
| --------------------------- | ------------------------------------------------------------ |
| 单一职责                    | 一个类只负责一项职责                                         |
| 里氏替换原则                | 子类可以扩展父类的功能，但不能改变父类原有的功能             |
| 依赖倒置原则                | 要依赖于抽象，不要依赖于具体，核心思想是面向接口编程         |
| 接口隔离原则                | 建立单一接口，不要建立庞大臃肿的接口， 尽量细化接口，接口中的方法尽量少 |
| 迪米特法则 （最少知道原则） | 一个对象应该对其他对象保持最少的了解                         |
| 开闭原则                    | 对扩展开放，对修改关闭                                       |





### 6.3 单例模式

​        保证一个类只有一个实例，并且提供一个访问实例的全局访问点。



#### 6.3.1 饿汉式

​      也就是类加载的时候立即实例化对象。

案例代码：

```java
package com.bobo.singleton;

public class SingetonInstance1 {

    /**
     * 单例的第一种实现方式
     *     饿汉式
     *  如果我们提供的有 共有的构造方法，那么外界可以随时的通过 new 构造器 的方式创建很多个实例对象
     *  饿汉式的实现步骤：
     *     1.私有化构造方法  不让外界直接创建对象
     * @param args
     */
    public static void main(String[] args) {
        User user1 = User.getUser();
        System.out.println(user1);
        User user2 = User.getUser();
        System.out.println(user2);
    }
}

class User{
    // 2. 声明类型的变量，并实例化，当类被加载的时候就完成了类的实例化，并保存在了内存中
    private static final User user = new User();

    /**
     * 1.私有化构造器 不让外界直接创建对象
     */
    private User(){

    }

    /**
     * 3.提供一个对外的静态方法来提供User实例
     * @return
     */
    public static User getUser(){
        return user;
    }
}

```

输出结果:

```txt
com.bobo.singleton.User@4554617c
com.bobo.singleton.User@4554617c
```

​        饿汉式单例模式代码，static变量会在类加载的时候初始化，此时不会涉及到多个线程对象访问该对象的问题，虚拟机保证只会装载一次该类，肯定不会发生并发问题，因此可以省略掉`synchroized`关键字



问题：如果只是加载了本类，而不是要调用getUser();甚至永远没有调用，那么就会造成资源的浪费。

#### 6.3.2 懒汉式

​         针对饿汉式的情况，懒汉式在声明静态变量的时候就不直接实例化了，而是在对外提供的方法中添加了逻辑判断。

```java
package com.bobo.singleton;

public class SIngetoInstance2 {

    /**
     * 懒汉式
     * @param args
     */
    public static void main(String[] args) {
        Student stu1 = Student.getStudent();
        System.out.println(stu1);
        Student stu2 = Student.getStudent();
        System.out.println(stu2);

    }
}

class Student{

     // 声明此类的实例变量，但是没有实例化
    private static  Student stu = null;

    // 私有化构造器 防止外界通过new 直接来实例化
    private Student(){

    }

    // 对外提供一个获取实例的方法
    public static Student getStudent(){
        if(stu == null){
            stu = new Student();
        }
        return stu;
    }
}

```



以上方式我们在单线程中是没有问题，但是在多线程中就会出现问题

```java
package com.bobo.singleton;

public class SingetonInstance3 {

    /**
     * 懒汉式
     * @param args
     */
    public static void main(String[] args) {
        // 线程1
        new Thread(){
            @Override
            public void run() {
                Student1 stu1 = Student1.getStudent();
                System.out.println(stu1);
            }
        }.start();
		// 线程2
        new Thread(){
            @Override
            public void run() {
                Student1 stu2 = Student1.getStudent();
                System.out.println(stu2);
            }
        }.start();


    }
}

class Student1{

     // 声明此类的实例变量，但是没有实例化
    private static  Student1 stu = null;

    // 私有化构造器 防止外界通过new 直接来实例化
    private Student1(){

    }

    // 对外提供一个获取实例的方法
    public static Student1 getStudent(){
        if(stu == null){
            stu = new Student1();
        }
        return stu;
    }
}

```



效果：

```txt
com.bobo.singleton.Student1@6423eb7d
com.bobo.singleton.Student1@1dbdc081
```

造成这个原因是因为多线程操作共享的数据

![image-20201219155451268](img\image-20201219155451268.png)



通过同步方法来解决



![image-20201219155556623](img\image-20201219155556623.png)



我们通过同步方法的方式来实现会造成每次获取实例对象都要同步，会对系统造成非常大的影响，针对这种情况我们可以使用同步代码块来解决

```java
package com.bobo.singleton;

public class SingetonInstance4 {

    /**
     * 懒汉式
     * @param args
     */
    public static void main(String[] args) {
        new Thread(){
            @Override
            public void run() {
                Student2 stu1 = Student2.getStudent();
                System.out.println(stu1);
            }
        }.start();

        new Thread(){
            @Override
            public void run() {
                Student2 stu2 = Student2.getStudent();
                System.out.println(stu2);
            }
        }.start();


    }
}

class Student2{

     // 声明此类的实例变量，但是没有实例化
    private static  Student2 stu = null;

    // 私有化构造器 防止外界通过new 直接来实例化
    private Student2(){

    }

    // 对外提供一个获取实例的方法
    public  static Student2 getStudent(){
        if(stu == null){
            synchronized (Student2.class){
                if(stu == null){
                    stu = new Student2();
                }
                return stu;
            }
        }
        return stu;
    }
}

```



```txt
com.bobo.singleton.Student2@4809778b
com.bobo.singleton.Student2@4809778b
```



# 六、生产者和消费者模型

## 1.案例代码实现

案例：

> 生产者(Producer)将产品交给店员(Clerk)，而消费者(Consumer)从店员处取走产品，店员一次只能持有固定数量的产品，如果生产者生产了过多的产品，店员叫生产者等一下，如果店中有空位放产品了再通知生产者继续生产；如果店中没有产品了，店员会告诉消费者等一下，如果店中有产品了再通知消费者来取走产品。



店员

```java
package com.bobo.thread2;

/**
 * 店员
 */
public class Clerk {

    // 属性  记录产品的数量
    private int product ;

    // 进货 从生产者处获取商品
    public synchronized void addProduct(){
        if(product >= 10){
            // 表示商品数量超过了店铺能够放下的容量
            System.out.println("货满了，暂停进货...");
            // 阻塞操作
            try {
                wait();// 阻塞
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }else{
            // 还有空间，继续进货
            product++;
            System.out.println(Thread.currentThread().getName() + "生产了一个商品:" + product);
            // 唤醒 阻塞的消费者
            notify();
        }
    }

    // 卖货 将商品售卖给消费者
    public synchronized void sellProduct(){
        if(product <=0){
            // 表示没有商品了
            System.out.println("没有商品了 .....");

            try {
                // 阻塞 当线程执行再此处的时候，那么就停住
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }else{
            // 表示有商品，那就可以售卖了
            System.out.println(Thread.currentThread().getName()+"消费了一个商品:" + product--);
            // 商品有减少  那么我们可以尝试 解除之前阻塞的线程 继续进货
            // 唤醒 阻塞的线程
            notify();

        }

    }
}

```



生产者

```java
package com.bobo.thread2;

import javax.management.relation.RoleUnresolved;

/**
 * 生产者
 *
 */
public class Producer implements Runnable {

    // 关联的店员
    private Clerk clerk;

    public Producer(Clerk clerk){
        this.clerk = clerk;
    }

    @Override
    public void run() {
        while(true){
            // 生产一个商品给店员
            clerk.addProduct();
            try {
                Thread.sleep((int)(Math.random()*1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
}

```



消费者

```java
package com.bobo.thread2;

/**
 * 消费者
 */
public class Consumer implements Runnable{

    // 关联店员
    private Clerk clerk;

    public Consumer(Clerk clerk) {
        this.clerk = clerk;
    }


    @Override
    public void run() {
        while(true){
            // 消费者购买了一个商品
            clerk.sellProduct();
            try {
                Thread.sleep((int)(Math.random()*1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
}

```



测试

```java
package com.bobo.thread2;

public class ProductTest {

    /**
     * 生产者(Producer)将产品交给店员(Clerk)，而消费者(Consumer)从店员处取走产品，
     * 店员一次只能持有固定数量的产品，如果生产者生产了过多的产品，店员叫生产者等一下，
     * 如果店中有空位放产品了再通知生产者继续生产；如果店中没有产品了，
     * 店员会告诉消费者等一下，如果店中有产品了再通知消费者来取走产品。
     *
     * 基于面向对象的分析：
     *    生产者 Producer
     *       功能：
     *          生产商品
     *
     *    消费者  Consumer
     *       功能:
     *          购买商品
     *
     *    店员  Clerk
     *      属性：
     *          商品的数量
     *      功能:
     *          进货
     *          卖货
     * @param args
     */
    public static void main(String[] args) throws InterruptedException {
        // 获取一个店员对象
        Clerk clerk = new Clerk();
        // 获取生产者对象
        Producer producer = new Producer(clerk);
        // 获取一个消费者对象
        Consumer consumer = new Consumer(clerk);

        // 创建两个线程
        Thread t1 = new Thread(producer,"生产者:");
        Thread t2 = new Thread(consumer,"消费者:");

        // 启动线程
        t1.start(); // 生产商品
        //Thread.sleep(10);
        t2.start(); // 消费商品
    }
}

```





## 2.线程的等待

​      线程等待【阻塞】的方式

### 2.1 sleep方法

​       阻塞到休眠时间结束

### 2.2 join和yield方法

​	   join合并，等待合并的线程执行完成，yield礼让的方法。

### 2.3 wait方法

​          Object类中的wait() throws InterruptedException方法，导致当前线程等待，直到其他线程调用notify方法或者notifyAll方法唤醒。wait方法和notify及notifyAll方法都必须写在同步代码块或者同步方法中。

| 方法      | 说明                   |
| --------- | ---------------------- |
| wait()    | 阻塞当前线程           |
| notify    | 随机唤醒一个阻塞的线程 |
| notifyAll | 唤醒所有的阻塞的线程   |



# 七、守护线程

## 1.守护线程的概念

​       在后台运行的线程，为其他的线程服务的线程。Daemon Thread,基于这个特点，当虚拟机中的用户线程全部退出的时候，守护线程没有服务的对象后，JVM也就退出了。

怎么得到一个守护线程呢？

```java
Runnable r1 = new MyRunable();
Thread t1 = new Thread(r1,"A");
// 将一个普通线程设置为一个守护线程
t1.setDaemon(true); // 这个设置必须在start方法执行之前设置
t1.start();
```



守护线程有什么作用：

经常可以用来作为任务结束后的善后处理工作

守护线程的优先级是非常低的。

如果没有`用户线程`在执行，JVM将退出，守护线程将被自动终止。我们在实际使用过程中应该避免通过守护线程来操作一些类似于文件、数据库等固有的资源。



## 2.TimerTask

​     守护线程的应用。在应用开发中，经常需要一些周期性的操作。比如没5分钟执行某些操作，或者每天晚上12点执行某些操作。对于这些操作最方便、高效的实现方式就是使用Java为我们提供的计时器的工具类，即Timer和TimerTask。

任务类

```java
class MyTimerTask extends TimerTask {

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + ":" + new Date());
    }
}
```

测试类

```java
package com.bobo.thread4;

import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

public class ThreadDemo01 {

    /**
     * Timer
     * @param args
     */
    public static void main(String[] args) throws Exception {
        // 获取一个Timer对象
        Timer timer = new Timer("A"); // 如果要将该Timer设置为守护线程 构造方法中添加true即可
        // 获取任务对象
        MyTimerTask myTimerTask = new MyTimerTask();
        // 任务调度 指定的任务  开始的时间  下次执行的间隔时间
        //timer.schedule(myTimerTask,1000,1000);
        timer.schedule(myTimerTask,getDate(),1000);
        Thread.sleep(5000);
        System.out.println("main 结束了");
    }

    /**
     * 获取定时任务执行的时间
     * @return
     */
    public static Date getDate(){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.HOUR_OF_DAY,14);
        c.set(Calendar.MINUTE,44);
        c.set(Calendar.SECOND,0);
        return c.getTime();
    }
}

/**
 * 定时器对应的要执行的任务
 */
class MyTimerTask extends TimerTask {

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + ":" + new Date());
    }
}

```



![image-20201220144531494](img\image-20201220144531494.png)







# 八、线程池

## 1.线程池的相关概念

​       线程池就是首先创建一些线程，使用线程池可以很好的提高性能，线程池在系统启动的时候创建了大量的空闲的线程。程序将一个任务传给线程池，线程池就会启动一个线程来执行这个任务，执行任务结束后，该线程不会消亡，而是返回线程池中状态为更新为空闲，等待执行下一个任务。

![image-20201220150413189](img\image-20201220150413189.png)





## 2.线程池的具体使用

### 2.1 newCachedThreadPool

​     可缓存的线程池，先看池中有没有以前建立的线程，如果有，就直接使用，如果没有的话，就新建一个新的线程加入线程池中，缓存型连接池通常用于一些生存很短的异步性的任务

```java
package com.bobo.threadpool;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolDemo01 {

    /**
     * 线程池的实现
     * @param args
     */
    public static void main(String[] args) {
        // 创建一个可缓存的线程池
        ExecutorService executorService = Executors.newCachedThreadPool();
        MyRunable myRunable = new MyRunable();
        // 从线程池中获取一个线程 执行 Runable任务
        executorService.execute(myRunable);
        executorService.execute(myRunable);
        executorService.execute(myRunable);
    }
}

class MyRunable implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + ":执行了...");
    }
}

```

![image-20201220151327627](img\image-20201220151327627.png)



### 2.2 newFixedThreadPool

​        创建一个可重用的固定个数的线程池，以共享的无界队列方式来运行这些线程。

```java
package com.bobo.threadpool;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolDemo02 {

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(5);
        for (int i = 0 ; i < 10; i++){
            executorService.execute(new MyRunable02());
        }
    }
}

class MyRunable02 implements Runnable{
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " 执行了...");
    }
}


```



![image-20201220151726011](img\image-20201220151726011.png)







### 2.3 newScheduledThreadPool

创建一个线程池，可以调度命令在给定的延迟之后运行，或定期执行。

```java
package com.bobo.threadpool;

import java.util.concurrent.*;

public class ThreadPoolDemo03 {

    public static void main(String[] args) {
        ScheduledExecutorService executorService = Executors.newScheduledThreadPool(5);
        for (int i = 0 ; i < 10 ; i ++){
            executorService.schedule(new Runnable() {
                @Override
                public void run() {
                    System.out.println(Thread.currentThread().getName() + ":延长一秒执行");
                }
            }, 1, TimeUnit.SECONDS);
        }
    }
}

```



![image-20201220153021206](img\image-20201220153021206.png)





### 2.4 newSingleThreadExecutor

创建一个单线程话的线程池，它只会用唯一的工作线程来执行任务，保证所有的任务按照指定的顺序执行.

```java
package com.bobo.threadpool;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolDemo04 {

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        for(int i =0 ;i < 5 ; i++){
            executorService.execute(new Runnable() {
                @Override
                public void run() {
                    System.out.println(Thread.currentThread().getName()+":执行了...");
                }
            });
        }
    }
}

```

![image-20201220153354740](img\image-20201220153354740.png)