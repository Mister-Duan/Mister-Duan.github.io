# 网络编程

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 计算机网络基础
2. Socket和ServerSocket
3. TCP Socket通信模型
4. UDP编程



# 一、计算机网络基础

## 1.什么是计算机网络

​        把分布在不同地理区域的计算机与专门的外部设备用通信线路互连成一个规模大  、功能强的网络系统，从而使众多的计算机可以方便地互相传递信息，共享硬件、软件、数据信息等资源。



![image-20201221193922889](img\image-20201221193922889.png)





## 2.了解网络通信协议

### 2.1.网络通信协议

​		要使计算机连成的网络能够互通信息，需要对数据传输速率、传输代码、代码结构、传输控制步骤、出错控制等制定一组标准，这一组共同遵守的通信标准就是网络通信协议，不同的计算机之间必须使用相同的通讯协议才能进行通信。

![image-20201221195009516](img\image-20201221195009516.png)





### 2.2 常见的网络通信协议

TCP/IP,使用最为广泛的通讯协议

TCP/IP是英文Transmission Control Protocol/Internet Protocol的缩写，意思是“传输控制协议/网际协议”。

![image-20201221195038697](img\image-20201221195038697.png)





#### 2.2.1三次握手

TCP协议建立连接需要三次会话(握手)



![image-20201221195532441](img\image-20201221195532441.png)



1. 第一次握手，客户端连接服务器
2. 第二次握手，服务器接收了客户端的连接请求，服务器发送给客户端的确认消息
3. 第三次握手，客户端获取到了服务器的确认信息，知道了服务已经知道我要连接他了，但是服务器还不知道客户端已经知道了，所以客户端发送给服务器消息说我们已经接受到了你的确认信息

经过这三次握手，那么客户端和服务器都知道了要连接。



#### 2.2.2四次挥手

​    在TCP协议中如果客户端要断开连接那么需要进行四次挥手操作

![image-20201221200015909](img\image-20201221200015909.png)



1. 第一次，客户端发送请求关闭的消息给服务器
2. 第二次，服务器接受到了客户端的消息，服务器发送消息给客户端确认（我收到了你的关闭请求，但是我数据还没有传完，等我传会告诉你的）
3. 第三次，服务器给客户端要传输的数据以及传完了，服务器发送消息给客户端数据传完了，客户端你可以断开连接了
4. 第四次，客户端发送消息给服务器，我要断开了，你也断开吧。



## 3.IP和端口号

### 3.1 什么是IP

​      网络中每台计算机的一个标识号，是一个逻辑地址，127.0.0.1或 localhost 代表本机地址

​      IP地址由四段组成，每个字段是一个字节，8位，最大值是255，

​      IP地址由两部分组成，即`网络地址`和`主机地址`。网络地址表示其属于互联网的哪一个网络，主机地址表示其属于该网络中的哪一台主机。二者是主从关系。IP地址的四大类型标识的是网络中的某台主机。IPv4的地址长度为32位，共4个字节，但实际中我们用`点分十进制`记法。192.168.1.1

### 3.2 分类

IP地址根据网络号和主机号来分，分为A、B、C三类及特殊地址D、E。  全0和全1的都保留不用。

**A类**：(1.0.0.0-126.0.0.0)（默认子网掩码：255.0.0.0或 0xFF000000）第一个字节为网络号，后三个字节为主机号。该类IP地址的最前面为“0”，所以地址的网络号取值于1~126之间。一般用于大型网络。

**B类**：(128.0.0.0-191.255.0.0)（默认子网掩码：255.255.0.0或0xFFFF0000）前两个字节为网络号，后两个字节为主机号。该类IP地址的最前面为“10”，所以地址的网络号取值于128~191之间。一般用于中等规模网络。

**C类**：(192.0.0.0-223.255.255.0)（子网掩码：255.255.255.0或 0xFFFFFF00）前三个字节为网络号，最后一个字节为主机号。该类IP地址的最前面为“110”，所以地址的网络号取值于192~223之间。一般用于小型网络。

**D类**：是多播地址。该类IP地址的最前面为“1110”，所以地址的网络号取值于224~239之间。一般用于多路广播用户[1] 。

**E类**：是保留地址。该类IP地址的最前面为“1111”，所以地址的网络号取值于240~255之间。

![image-20201221201924946](img\image-20201221201924946.png)

![image-20201221201945601](img\image-20201221201945601.png)



Java中对IP的操作

```java
package com.bobo.ip;

import java.net.InetAddress;

public class IpDemo01 {

    /**
     * Java中对IP的封装操作
     * @param args
     */
    public static void main(String[] args) throws Exception {
        System.out.println(InetAddress.getLocalHost());
        System.out.println(InetAddress.getByName("127.0.0.1"));

    }
}

```



科普：为什么局域网中的ip地址都是192.168开头的？

私有地址

A类地址：10.0.0.0 - 10.255.255.255

B类地址：172.16.0.0 - 172.31.255.255

C类地址：192.168.0.0 - 192.168.255.255

### 3.3 IPv4和IPv6

>目前的全球因特网所采用的协议族是TCP/IP协议族。IP是TCP/IP协议族中网络层的协议，是TCP/IP协议族的核心协议。目前IP协议的版本号是4(简称为IPv4)，发展至今已经使用了30多年。
>IPv4的地址位数为32位，也就是最多有2的32次方的电脑可以联到Internet上。
>近十年来由于互联网的蓬勃发展，IP位址的需求量愈来愈大，使得IP位址的发放愈趋严格，各项资料显示全球IPv4位址可能在2005至2008年间全部发完。
>
>什么是IPv6?
>    IPv6是下一版本的互联网协议，也可以说是下一代互联网的协议，它的提出最初是因为随着互联网的迅速发展，IPv4定义的有限地址空间将被耗尽，地址空间的不足必将妨碍互联网的进一步发展。为了扩大地址空间，拟通过IPv6重新定义地址空间。IPv6采用128位地址长度，几乎可以不受限制地提供地址。按保守方法估算IPv6实际可分配的地址，整个地球的每平方米面积上仍可分配1000多个地址。在IPv6的设计过程中除了一劳永逸地解决了地址短缺问题以外，还考虑了在IPv4中解决不好的其它问题，主要有端到端IP连接、服务质量（QoS）、安全性、多播、移动性、即插即用等。
>
>IPv6与IPv4相比有什么特点和优点？ 
>
>更大的地址空间。IPv4中规定IP地址长度为32，即有2^32-1个地址；而IPv6中IP地址的长度为128，即有2^128-1个地址。 
>更小的路由表。IPv6的地址分配一开始就遵循聚类(Aggregation)的原则，这使得路由器能在路由表中用一条记录(Entry)表示一片子网，大大减小了路由器中路由表的长度，提高了路由器转发数据包的速度。 
>增强的组播(Multicast)支持以及对流的支持(Flow-control)。这使得网络上的多媒体应用有了长足发展的机会，为服务质量(QoS)控制提供了良好的网络平台. 
>加入了对自动配置(Auto-configuration)的支持。这是对DHCP协议的改进和扩展，使得网络(尤其是局域网)的管理更加方便和快捷. 
>更高的安全性.在使用IPv6网络中用户可以对网络层的数据进行加密并对IP报文进行校验,这极大的增强了网络安全.



### 3.4 端口号

​     具有网络功能的应用软件的标识号

特点：

1. 端口是一个软件结构，被客户程序或服务程序用来发送和接收数据，一台服务器有256*256个端口。
2. 0-1023是公认端口号，即已经公认定义或为将要公认定义的软件保留的
3. 1024-65535是并没有公共定义的端口号，用户可以自己定义这些端口的作用。
4. 端口与协议有关：TCP和UDP的端口互不相干



# 二、网络通信

## 1.Socket和ServerSocket

### 1.1 什么是Socket

​      两个应用程序可以通过一个双向的网络通信连接实现数据的交换，这个双向的链路的一端我们称为一个Socket。



### 1.2 Socket案例

#### 1.2.1 基本连接操作

服务端的创建

```java
public class TestServerSocket {

    /**
     * Socket的第一个案例
     *
     * @param args
     */
    public static void main(String[] args) {

        try {
            // 创建一个ServerScoket对象  如果服务器关闭了，那么我们是连接不上的
            ServerSocket ss = new ServerSocket(8888);
            System.out.println("服务器启动了....");
            // 接受客户端的访问
            while(true){
                Socket s = ss.accept(); // 这是一个阻塞的方法，等待客户端的访问。
                System.out.println(s.getInetAddress().getHostAddress() + " : 客户端来访问了");
                s.close();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

客户端的创建

```java
package com.bobo.socket01;

import java.net.Socket;
import java.rmi.server.ExportException;

public class TestClientSocket {

    /**
     * Socket 客户端程序
     * @param args
     */
    public static void main(String[] args) {
        try{
            // 127.0.0.1 / localhost 表示的当前的主机
            // 获取一个Socket对象 指定要访问的服务器 ip+端口 可以定位到要访问的是哪台计算机上的服务
            Socket socket = new Socket("192.168.8.71",8888);
            System.out.println("客户端开始链接了...");
            socket.close();
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}

```



当前计算机的描述

1. 127.0.0.1
2. localhost
3. 当前电脑分配的IP(192.168.8.71)

#### 1.2.2 客户端发送消息给服务器

通过字节输入输出流实现

服务端代码

```java
package com.bobo.socket02;

import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端 接收客户端的消息
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(8899);
            while(true){
                // 等待获取客户端的连接
                Socket s = ss.accept();
                System.out.println(s.getInetAddress().getHostAddress()+"连接了...");
                // 获取一个字节输入流，获取客户端传递的信息
                InputStream inputStream = s.getInputStream();
                byte[] b = new byte[1024];
                int num = 0 ;
                while((num = inputStream.read(b)) != -1){
                    System.out.println(new String(b,0,num));
                }
                // 关闭相关的资源
                inputStream.close();
                s.close();
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}

```

客户端代码

```java
package com.bobo.socket02;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端
     *    发送消息到服务器
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",8899);
            // 通过socket对象获取一个字节输出流
            OutputStream outputStream = socket.getOutputStream();
            outputStream.write("服务器，你好啊，我是XXXXX".getBytes());
            outputStream.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

效果：

![image-20201222153259685](img\image-20201222153259685.png)



用缓冲流来操作

服务端：

```java
package com.bobo.socket03;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端 接收客户端的消息
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(8899);
            while(true){
                // 等待获取客户端的连接
                Socket s = ss.accept();
                System.out.println(s.getInetAddress().getHostAddress()+"连接了...");
                BufferedReader bufferedReader = new BufferedReader(
                        new InputStreamReader(s.getInputStream()));
                System.out.println(bufferedReader.readLine());
                bufferedReader.close();
                s.close();
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}

```



客户端代码

```java
package com.bobo.socket03;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端
     *    发送消息到服务器
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",8899);
            // 通过socket对象获取一个字节输出流
            BufferedWriter bufferedWriter = new BufferedWriter(
                    new OutputStreamWriter(socket.getOutputStream()));
            bufferedWriter.write("哈哈哈哈哈....");
            bufferedWriter.newLine(); // 必须要显示的调用
            bufferedWriter.flush();
            bufferedWriter.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```



输出效果

![image-20201222153949442](img\image-20201222153949442.png)





#### 1.2.3 服务端发送消息给客户端

服务端代码：

```java
package com.bobo.socket04;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端
     *    发送消息给客户端
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(8989);
            while(true){
                Socket s = ss.accept();
                System.out.println(s.getInetAddress().getHostAddress()+" 连接了");
                // 服务器发送消息给客户端
                BufferedWriter bufferedWriter = new BufferedWriter(
                        new OutputStreamWriter(s.getOutputStream()));
                bufferedWriter.write(s.getInetAddress().getHostAddress()+" 你好啊，你的连接我已经收到了");
                bufferedWriter.newLine();
                bufferedWriter.flush();
                bufferedWriter.close();
                s.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

客户端代码

```java
package com.bobo.socket04;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端 接收服务的消息
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket s  = new Socket("localhost",8989);
            System.out.println("客户端启动了...");
            BufferedReader bufferedReader = new BufferedReader(
                    new InputStreamReader(s.getInputStream()));
            System.out.println(bufferedReader.readLine());
            bufferedReader.close();
            s.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

输出结果：

![image-20201222154554984](img\image-20201222154554984.png)



#### 1.2.4 课堂案例

客户端接收键盘输入信息，然后将该信息发送给服务器，服务器读取客户端发送来的信息

服务端代码

```java
package com.bobo.socket05;

import java.io.*;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端接收键盘输入信息，然后将该信息发送给服务器，服务器读取客户端发送来的信息
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",9999);
            System.out.println("客户端启动了，请输入要发送的消息:");
            // 接收键盘输入
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

            // 客户端发送消息
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            bufferedWriter.write(bufferedReader.readLine());
            bufferedWriter.newLine();
            bufferedWriter.flush();
            bufferedWriter.close();
            bufferedReader.close();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

客户端代码

```java
package com.bobo.socket05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端
     *     接收客户端的消息
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(9999);
            while(true){
                Socket s = ss.accept();
                BufferedReader bufferedReader = new BufferedReader(
                        new InputStreamReader(s.getInputStream()));
                System.out.println(s.getInetAddress().getHostAddress()+":"+bufferedReader.readLine());
                bufferedReader.close();
                s.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```



效果

![image-20201222160626200](img\image-20201222160626200.png)

![image-20201222160645198](img\image-20201222160645198.png)



#### 1.2.5 一对一聊天实现

实现一个客户端发送消息给服务器，然后服务器获取到消息后再返还消息给客户端，一对一通信的效果

服务端代码：

```java
package com.bobo.socket06;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(8080);
            while(true){
                Socket s = ss.accept();
                // 服务端通过键盘录入的方式 返回消息给客户端
                BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
                // 读取客户端传递的消息
                BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream()));
                // 返回消息给客户端
                BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
                // 实现频繁读取写入的效果
                while(true){
                    System.out.println(s.getInetAddress().getHostAddress()+":" + br.readLine()) ;
                    // 返回信息给客户端
                    bw.write(input.readLine());
                    bw.newLine();
                    bw.flush();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

客户端代码：

```java
package com.bobo.socket06;

import java.io.*;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端
     *    实现和服务器一对一的聊天
     *
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",8080);
            // 接收键盘输入
            BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
            // 读取信息
            BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            // 写入信息
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));

            while(true){
                bw.write(input.readLine());
                bw.newLine();
                bw.flush();
                System.out.println("服务器说:" + br.readLine());
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

效果：

![image-20201222163150082](img\image-20201222163150082.png)

![image-20201222163207904](img\image-20201222163207904.png)

效果虽然是实现了，但是总的体验还是不是很好，因为是在读写在一个线程中，就造成了读写操作的阻塞



#### 1.2.6 自由聊天的实现

​		在上面的案例中客户端和服务器的读写操作同一个线程中进行的，所以会造成消息的阻塞，那么我们可以结合前面讲过的多线程的知识来解决当前的问题。将读的操作交给一个线程，将写的操作交给一个线程，那么读写之间就没有阻塞现象了。具体实现如下：

读操作的线程：

```java
package com.bobo.socket07.thread;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

/**
 * 专门用来负责读取数据的线程
 *     线程只需要获取到对应的Socket对象
 *     就可以获取Socket中的数据及向Socket中写入数据
 */
public class ReadSocketThread implements Runnable{

    private Socket socket;

    public ReadSocketThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            while(true){
                String str = br.readLine();
                System.out.println(str);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

写操作的线程

```java
package com.bobo.socket07.thread;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

/**
 * 专门用来发送数据的线程
 */
public class WriterSocketThread implements Runnable {

    private Socket socket;

    public WriterSocketThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try{
            // 获取键盘数据
            BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
            // 输出信息
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            while(true){
                String str = input.readLine();
                bw.write(str);
                bw.newLine();
                bw.flush();
            }
        }catch (Exception e){

        }
    }
}

```



服务端代码

```java
package com.bobo.socket07;


import com.bobo.socket07.thread.ReadSocketThread;
import com.bobo.socket07.thread.WriterSocketThread;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务器
     *    客户端和服务器实现自由聊天
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(7891);
            while(true){
                Socket s = ss.accept();
                // 读客户端数据和写客户端数据都交给子线程去处理
                // 读取数据的线程
                new Thread(new ReadSocketThread(s)).start();
                // 写入数据的线程
                new Thread(new WriterSocketThread(s)).start();
                // 读写操作分别交给两个不同的线程来处理，就不会出现 读取必须要等待输入完成后再执行的情况
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

客户端代码

```java
package com.bobo.socket07;

import com.bobo.socket07.thread.ReadSocketThread;
import com.bobo.socket07.thread.WriterSocketThread;

import java.io.IOException;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 实现客户端和服务自由聊天
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",7891);
            // 读取数据的线程
            new Thread(new ReadSocketThread(socket)).start();
            new Thread(new WriterSocketThread(socket)).start();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

效果

![image-20201222170343899](img\image-20201222170343899.png)



![image-20201222170400467](img\image-20201222170400467.png)



#### 1.2.7 有退出的自由聊天

上面的案例除了显示的把服务关掉之外程序会一直运行，那么如果我们要显示的断开聊天，我们只需要在读写线程中添加断开的逻辑即可

读取数据的线程

```java
package com.bobo.socket08.thread;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class ReadSocketThread implements Runnable{

    private Socket socket;

    public ReadSocketThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            while(true){
                String str = br.readLine();
                System.out.println(socket.getInetAddress().getHostAddress()+":" + str);
                // 添加退出聊天的逻辑
                if("exit".equals(str)){ // 表示退出
                    System.out.println(socket.getInetAddress().getHostAddress()+"退出了...");
                    br.close();
                    break; // 结束循环，终止线程
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```



写入数据的线程

```java
package com.bobo.socket08.thread;

import java.io.*;
import java.net.Socket;

public class WriterSocketThread implements Runnable{

    private Socket socket;

    public WriterSocketThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {

        try {
            BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
            while(true){
                String str = input.readLine();
                bw.write(str);
                bw.newLine();
                bw.flush();
                // 如果我发送的是 exit 的话，那么读到这个信息的 会退出，此时发送也应该要退出
                if("exit".equals(str)){
                    // 读取数据的线程也要退出
                    System.out.println(socket.getInetAddress().getHostAddress()+"退出了");
                    bw.close();
                    input.close();
                    break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```





# 三、TCP Socket 通信模型

## 1.通信原理

![image-20201222191048777](img\image-20201222191048777.png)



## 2.课堂案例

​      实现TCP通信模型实现客户端1对1的通信，实现案例

读写的线程和上面案例是一样的，就不再复制了

客户端代码

```java
package com.bobo.socket09;

import com.bobo.socket09.thread.ReadSocketThread;
import com.bobo.socket09.thread.WriterSocketThread;

import java.io.IOException;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 实现客户端对客户端的一对一聊天
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",7799);
            new Thread(new ReadSocketThread(socket)).start(); // 启动读取信息的线程
            new Thread(new WriterSocketThread(socket)).start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```



服务器代码

```java
package com.bobo.socket09;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

public class TestServerSocket {

    /**
     * ServerSocket
     *    模拟客户端和客户端一对一的聊天
     * @param args
     */
    public static void main(String[] args) {
        // 记录以及建立连接的Socket
        List<Socket> list = new ArrayList<>();
        try {
            ServerSocket ss = new ServerSocket(7799);
            for(int i = 0 ; i < 2 ; i++){
                Socket s = ss.accept();
                // 客户端建立连接后 将连接对应的Socket对象保存起来
                list.add(s);
            }
            // 第一个Socket接收到信息之后 应该将信息在第二个Socket中输出
            // 第二个Socket接收到信息之后 应该将信息在第一个Socket中输出
            new Thread(new ServerThread(list.get(0),list.get(1))).start();
            new Thread(new ServerThread(list.get(1),list.get(0))).start();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

/**
 * ServerSocket端的线程
 *   专门处理信息的中转
 */
class ServerThread implements  Runnable{

    private Socket s1 ; // 发送者
    private Socket s2 ; // 接收者

    public ServerThread(Socket s1, Socket s2) {
        this.s1 = s1;
        this.s2 = s2;
    }

    @Override
    public void run() {
        try {
            while(true){
                BufferedReader br = new BufferedReader(new InputStreamReader(s1.getInputStream()));
                // 获取 发送者发送的消息
                String str = br.readLine();
                // 将消息转发给另一个客户端
                BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(s2.getOutputStream()));
                bw.write(str);
                bw.newLine();
                bw.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```



在IDEA中默认是不支持同一个主方法执行多次的，要并发执行需要如下设置。

![image-20201222192925272](img\image-20201222192925272.png)



![image-20201222192946067](img\image-20201222192946067.png)





## 3.文件上传下载

文件上传：客户端将File传输给服务器，File会保存在服务中

文件下载：客户端从服务器获取File。

第一种实现的方式：

```java
package com.bobo.socket10;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * ServerSocket
     *    接收客户端传递的文件
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(9999);
            while(true){
                Socket s = ss.accept();
                // 读取文件
                BufferedInputStream bi = new BufferedInputStream(s.getInputStream());
                // 将上传的文件保存到服务指定的位置
                BufferedOutputStream bo = new BufferedOutputStream(new FileOutputStream("D:/aaa.txt"));
                // 又是一个文件复制
                byte[] b = new byte[1024*1024];
                int num = 0;
                while((num = bi.read(b)) != -1){
                    bo.write(b,0,num);
                }
                bi.close();
                bo.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

```java
package com.bobo.socket10;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.Socket;

public class TestClientSocket {


    /**
     * Client
     *    发送文件到服务器中  上传操作
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",9999);
            // 先读取某个文件
            BufferedInputStream bi = new BufferedInputStream(new FileInputStream("d:/IO/1.mp4"));
            // 将读取的文件写入到Socket中
            BufferedOutputStream bo = new BufferedOutputStream(socket.getOutputStream());
            // 文件的复制
            byte[] b = new byte[1024*1024];
            int num = 0 ;
            while((num = bi.read(b)) != -1){
                bo.write(b,0,num);
            }
            bo.close();
            bi.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}

```



这种实现方式我们发现服务端可以获取到客户端传递的数据，但是并不清楚传递的是什么类型的数据，名称叫什么也不知道，所以处理起来比较麻烦。

```java
package com.bobo.socket11;

import java.io.*;
import java.net.Socket;

public class TestClientSocket {

    /**
     * 客户端
     * @param args
     */
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost",9988);
            File file = new File("d:/IO/1.mp4");
            // 读取文件
            BufferedInputStream bi = new BufferedInputStream(new FileInputStream(file));
            // 文件写入Socket ObjectOutputStream
            ObjectOutputStream oos = new ObjectOutputStream(socket.getOutputStream());
            // 先写入文件名称
            oos.writeUTF(file.getName());
            oos.writeLong(file.length());
            // 文件的传输
            byte[] b = new byte[1024*1024];
            int num = 0;
            while((num = bi.read(b)) != -1){
                oos.write(b,0,num);
            }
            // 关闭资源
            oos.close();
            bi.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

```java
package com.bobo.socket11;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServerSocket {

    /**
     * 服务端
     * @param args
     */
    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(9988);
            while(true){
                Socket s = ss.accept();
                // 读取文件 ObjectInputStream
                ObjectInputStream bis = new ObjectInputStream(s.getInputStream());
                // 获取文件名称
                String fileName = bis.readUTF();
                // 获取文件的大小
                long length = bis.readLong();
                System.out.println("文件名称:" + fileName + "文件大小：" + length);

                // 保存文件到服务器
                BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(new File("d:/", fileName)));
                byte[] b = new byte[1024*1024];
                int num = 0;
                int i = 1 ;
                while((num = bis.read(b)) != -1){
                    bos.write(b,0,num);
                    System.out.println("保存的进入：" + (1024*1024*i)/length * 100 + "%" );
                    i++;
                }
                bis.close();
                bos.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```





# 四、了解UDP

## 1.UDP协议

UDP(User Datagram Protocol)用户数据报协议，UDP和TCP位于同一层-传输层，但它对于数据包的顺序错误或重发没有TCP来的可靠、

TCP:相当于打电话.

UDP:相当于发电报.



UDP是一种面向无连接的通信协议。

UDP向应用程序提供了一种发送封装的原始IP数据报的方法，并且发送时无需建立连接，不保证可靠数据的传输。



## 2.TCP协议和UDP协议的差别

![image-20201222201817535](img\image-20201222201817535.png)

面向无连接的数据传输，不可靠的，但效率高

一次发送的数据不能超过**64KB**



