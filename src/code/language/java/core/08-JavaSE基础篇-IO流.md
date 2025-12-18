# Java IO流

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. File类
2. IO流程
   - 字节流
   - 字符流
   - 其他流
3. NIO





# 一、File类

文件和目录路径名的抽象表示

## 1.静态属性

```java
static String	pathSeparator
//与系统相关的路径分隔符字符，为方便起见，表示为字符串。
static char	pathSeparatorChar
//与系统相关的路径分隔符。
static String	separator
//与系统相关的默认名称 - 分隔符字符，以方便的方式表示为字符串。
static char	separatorChar
//与系统相关的默认名称分隔符。
```



```java
/**
     * File
     *     静态属性
     * @param args
     */
public static void main(String[] args) {
    System.out.println(File.pathSeparator);
    System.out.println(File.pathSeparatorChar);
    System.out.println(File.separator);
    System.out.println(File.separatorChar);
}
```

输出结果：

```txt
;
;
\
\
```

举例：D:\tools\P4课程资料\011 IO流  Windows下的路径表示

​           D:/tools/P4课程资料/011 IO流  Linux操作系统下面路径的表示方式和Windows中的表示是不一样

​        





## 2.构造方法

```java
File(File parent, String child)
//从父抽象路径名和子路径名字符串创建新的 File实例。
File(String pathname)
//通过将给定的路径名字符串转换为抽象路径名来创建新的 File实例。
File(String parent, String child)
//从父路径名字符串和子路径名字符串创建新的 File实例。
File(URI uri)
//通过将给定的 file: URI转换为抽象路径名来创建新的 File实例。
```



```java
public static void main(String[] args) {
    File f1 = new File("D:\\tools\\io\\b.txt");
    System.out.println(f1);
    File f2 = new File("D:\\tools\\io\\","c.txt");
    System.out.println(f2);
    File f3 = new File("d:/tools/io");
    System.out.println(f3);
    File f4 = new File(f3,"d.txt");

}
```

```txt
D:\tools\io\b.txt
D:\tools\io\c.txt
d:\tools\io
```

相对路径和绝对路径的问题

绝对路径: 盘符开头(D:  http:  ftp:)

相对路径：不以盘符开头



```java
/**
     * File
     *    相对路径和绝对路径
     * @param args
     */
public static void main(String[] args) {
    // 绝对路径
    File f1 = new File("d:/tools/io/a.txt");
    // 相对路径
    File f2 = new File("a.txt");
    System.out.println(f2.getAbsolutePath());
    File f3 = new File("src/com/bobo/file/FileDemo03.java");
    System.out.println(f3.getAbsolutePath());
}
```



输出结果：

```txt
D:\workspace\IdeaWorkSpace\JavaSEProject14\a.txt
D:\workspace\IdeaWorkSpace\JavaSEProject14\src\com\bobo\file\FileDemo03.java
```



## 3.File操作

### 3.1 创建文件

```java
boolean	createNewFile()
//当且仅当具有该名称的文件尚不存在时，原子地创建一个由该抽象路径名命名的新的空文件。
boolean	mkdir()
//创建由此抽象路径名命名的目录。
boolean	mkdirs()
//创建由此抽象路径名命名的目录，包括任何必需但不存在的父目录。
```

```java
package com.bobo.file;

import java.io.File;
import java.io.IOException;

public class FileDemo04 {

    /**
     * File
     *    创建文件及文件夹
     * @param args
     */
    public static void main(String[] args) throws IOException {
        File f1 = new File("a.txt");
        // 如果路径有问题 那么就会创建失败  返回true 创建成功  false 说明文件存在创建失败
        boolean b1 = f1.createNewFile();
        System.out.println(b1);
        b1 = f1.createNewFile();
        System.out.println(b1);
        File f2 = new File("test");
        // createNewFile 只能够创建文件 不能够创建文件夹
        b1 = f2.createNewFile();
        System.out.println(b1);

        // 创建文件夹/目录
        File f3 = new File("a");
        b1 = f3.mkdir(); // 创建一个目录  创建成功true  存在 返回false
        System.out.println(b1);
        File f4 = new File("a/b/c/d");
        // 创建的目录的父目录不存在，那么 mkdir是不会创建成功的
        b1 = f4.mkdir();
        System.out.println(b1);
        // mkdirs 如果父目录不存在会先创建该目录
        b1 = f4.mkdirs();
        System.out.println(b1);
    }
}

```

![image-20201212151613435](img\image-20201212151613435.png)



### 3.2 删除文件

​    delete方法可以删除文件和目录，注意：delete不能删除非空的目录，这时我们就需要逐级的删除文件及文件夹

```java
boolean	delete()
// 删除由此抽象路径名表示的文件或目录
```

```java
/**
     * File
     *    删除
     * @param args
     */
public static void main(String[] args) {
    File f1 = new File("a.txt");
    System.out.println(f1.delete());
    File f2 = new File("test");
    System.out.println(f2.delete());
    File f3 = new File("a/b/c/d");
    System.out.println(f3.delete());
    File f4 = new File("a/b/c");
    System.out.println(f4.delete());
}
```





### 3.3 修改功能

​      在File中的修改其实就是修改File名称

```java
/**
     * File
     *     修改  renameTo
     * @param args
     */
public static void main(String[] args) throws IOException {
    // 修改目录的名称
    /*File f1 = new File("a");
        System.out.println(f1.renameTo(new File("hello")));
        // 修改文件的名称
        File f2 = new File("hello/a.txt");
        boolean newFile = f2.createNewFile();
        System.out.println(newFile);*/
    File f2 = new File("hello/a.txt");
    System.out.println(f2.renameTo(new File("User.java")));
}
```



### 3.4 文件的判断功能



```java
	public boolean isFile()  是否文件
    public boolean isDirectory()  是否目录
    public boolean canRead()  是否可读
    public boolean canWrite()  是否可写
    public boolean exists()  是否存在
    public boolean isHidden()  是否隐藏
    public long length()  长度
    public String getAbsolutePath()  绝对路径
    public String getPath()  定义的路径
    public String getName()  file名字
    public long lastModified()  最后一次修改时间
```



```java
public static void main(String[] args) {
    File f1 = new File("User.java");
    // 判断是否是文件
    System.out.println(f1.isFile());
    // 判断是否是目录
    System.out.println(f1.isDirectory());
    // 判断是否可读
    System.out.println(f1.canRead());
    // 判断是否可写
    System.out.println(f1.canWrite());
    // 判断是否存在
    System.out.println(f1.exists());
    // 判断是否隐藏
    System.out.println(f1.isHidden());
    // 长度
    System.out.println(f1.length());
    // 获取绝对路径
    System.out.println(f1.getAbsolutePath());
    // 定义的路径
    System.out.println(f1.getParent());
    // 获取文件名称
    System.out.println(f1.getName());
    // 获取最后一次修改时间
    System.out.println(f1.lastModified());
    Date d = new Date(f1.lastModified());
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    System.out.println(sdf.format(d));
}
```

输出结果

```txt
true
false
true
true
true
false
0
D:\workspace\IdeaWorkSpace\JavaSEProject14\User.java
null
User.java
1607758080631
2020-12-12 15:28:00
```





### 3.5 遍历功能

​       获取文件夹下的所有的文件

```java
String[]	list()
//返回一个字符串数组，命名由此抽象路径名表示的目录中的文件和目录。
String[]	list(FilenameFilter filter)
//返回一个字符串数组，命名由此抽象路径名表示的目录中满足指定过滤器的文件和目录。
File[]	listFiles()
//返回一个抽象路径名数组，表示由该抽象路径名表示的目录中的文件。
File[]	listFiles(FileFilter filter)
//返回一个抽象路径名数组，表示由此抽象路径名表示的满足指定过滤器的目录中的文件和目录。
File[]	listFiles(FilenameFilter filter)
//返回一个抽象路径名数组，表示由此抽象路径名表示的满足指定过滤器的目录中的文件和目录。
static File[]	listRoots()
// 列出可用的文件系统根。
```





```java
package com.bobo.file;

import java.io.File;

public class FileDemo08 {

    /**
     * File 遍历功能
     *
     * @param args
     */
    public static void main(String[] args) {
        File f1 = new File("D:\\tools\\io");
        // 遍历功能
        String[] list = f1.list();
        for(String fileName : list){
            System.out.println(fileName);
        }
        System.out.println("-----------------------");
        File[] files = f1.listFiles();
        for(File file:files){
            System.out.println(file.getAbsoluteFile());
            System.out.println(file.getName());
            System.out.println(file.length());
            System.out.println("***********");
        }
    }
}

```







```java
public class FileDemo09 {

    /**
     * File 遍历功能
     *
     * @param args
     */
    public static void main(String[] args) {
        File f1 = new File("D:\\tools\\io");
        String[] list = f1.list(new FilenameFilter() {
            /**
             * 添加过滤条件
             * @param dir  目录
             * @param name  文件名称
             * @return
             *    true 获取
             *    false  过滤
             */
            @Override
            public boolean accept(File dir, String name) {
                // System.out.println(dir.getName()+ "----" + name);
                if(name.endsWith(".txt")){
                    return true;
                }
                return false;
            }
        });

        for(String fileName:list){
            System.out.println(fileName);
        }

    }
}
```







```java
public class FileDemo10 {

    /**
     * File 遍历功能
     *
     * @param args
     */
    public static void main(String[] args) {
        File f1 = new File("D:\\tools\\io");
        File[] files = f1.listFiles(new FileFilter() {
            /**
             * 获取目录下的所有的File，然后对File过滤
             * @param pathname
             * @return
             */
            @Override
            public boolean accept(File pathname) {
                return pathname.getName().startsWith("a");
            }
        });
        for (File file:files){
            System.out.println(file.getName());
        }
    }
}
```





### 3.6 课堂案例

判断某个目录下是否有后缀为.java的文件，如果有，统计该文件的个数，并输出次文件名称



```java
package com.bobo.file;

import java.io.File;
import java.io.FileFilter;

public class FileDemo12 {

    /**
     * 判断某个目录下是否有后缀为.java的文件，如果有，统计该文件的个数，并输出次文件名称
     * @param args
     */
    public static void main(String[] args) {
        File path = new File("d:/tools/io/");
        System.out.println(getFileCount2(path,".java"));
    }

    /**
     * 获取目录下特定后缀文件的个数及名称
     * @param srcFile 目录
     * @param suffix  后缀名
     * @return
     */
    public static int getFileCount(File srcFile,String suffix){
        // 统计满足条件的文件的个数
        int count = 0 ;
        File[] files = srcFile.listFiles();
        // 遍历获取每一个文件
        for(File file:files){
            // 获取文件名称
            String fileName = file.getName();
            // 判断
            if(file.isFile() && fileName.endsWith(suffix)){
                // 满足条件  统计自增
                count ++;
                // 打印满足条件的信息
                System.out.println(fileName);
            }
        }
        return count;
    }
    /**
     * 获取目录下特定后缀文件的个数及名称
     * @param srcFile 目录
     * @param suffix  后缀名
     * @return
     */
    public static int getFileCount2(File srcFile,String suffix){
        // 该方式要比第一种方式效率高很多
        File[] files = srcFile.listFiles(new FileFilter() {
            @Override
            public boolean accept(File pathname) {

                return pathname.isFile() && pathname.getName().endsWith(suffix);
            }
        });
        for(File file : files){
            System.out.println(file.getName());
        }
        return files.length;
    }
}

```



输出结果：

```txt
FileDemo01.java
FileDemo02.java
FileDemo03.java
FileDemo04.java
FileDemo05.java
FileDemo06.java
6
```





## 4. File的批处理操作

### 4.1 批量查询

 把D盘下面某个文件夹下的所有的java文件输出到控制台上

```java
package com.bobo.file;

import java.io.File;

public class FileDemo13 {

    //记录总数的
    public static Integer count = 0 ;

    /**
     * 把D盘下面某个文件夹下的所有的java文件输出到控制台上
     *
     *    分析：
     *       1.封装文件的路径
     *       2.获取目录下的所有的目录和文件
     *       3.获取到的每个目录或者文件做相应的判断
     *       4.判断是文件还是文件夹
     *          文件
     *            判断是否是java文件  是输出  不是 不处理
     *          文件夹
     *            回到第二步  递归处理
     *
     * @param args
     */
    public static void main(String[] args) {
        getAllJavaFile(new File("d:/workspace/"),".java");
        System.out.println(getAllJavaFileCount(new File("d:/workspace/"),".java"));
    }

    /**
     * 递归获取Java文件的方法
     * @param srcFolder 传递的目录
     */
    public static void getAllJavaFile(File srcFolder,String suffix){
        // 获取该目录下的所有的文件及文件夹
        File[] files = srcFolder.listFiles();
        for(File file:files){
            // 判断是文件还是文件夹
            if(file.isFile()){
                // 是文件  判断是否是Java文件
                String fileName = file.getName();
                if(fileName.endsWith(suffix)){
                    // 输出文件的名称
                    System.out.println(fileName);
                }
            }else{
                // 是文件夹 递归处理
                getAllJavaFile(file,suffix);

            }
        }
    }

    /**
     * 统计文件的个数
     * @param srcFolder
     * @param suffix
     * @return
     */
    public static int  getAllJavaFileCount(File srcFolder,String suffix){
        // 获取该目录下的所有的文件及文件夹
        File[] files = srcFolder.listFiles();
        for(File file:files){
            // 判断是文件还是文件夹
            if(file.isFile()){
                // 是文件  判断是否是Java文件
                String fileName = file.getName();
                if(fileName.endsWith(suffix)){
                    // 输出文件的名称
                    // System.out.println(fileName);
                    FileDemo13.count++;
                }
            }else{
                // 是文件夹 递归处理
                getAllJavaFileCount(file,suffix);

            }
        }
        return count;
    }
}

```





### 4.2 批量删除

​    采用递归的方式删除指定文件夹里面的所有的内容

```java
package com.bobo.file;

import java.io.File;

public class FileDemo14 {

    /**
     * 通过递归的方式删除 d:/360downloads 下的所有的目录及文件
     *    1.封装目录为对应的File对象
     *    2.获取该目录下的所有的文件及文件夹
     *    3.遍历获取每个文件及文件夹
     *    4.判断该File是文件还是文件夹
     *    5.是文件  采用delete方法删除即可
     *    6.如果是空的文件夹  删除文件夹接口
     *    7.如果不是空的文件夹 回到第二步 递归处理
     * @param args
     */
    public static void main(String[] args) {
        deleteFolder(new File("d:/360downloads"));
    }

    /**
     * 递归删除目录下的所有的文件
     * @param srcFolder
     */
    public static void deleteFolder(File srcFolder){
        if(srcFolder == null){
            throw new NullPointerException("不能传递Null的目录！！！");
        }
        // 获取该目录下的所有的文件及文件夹
        File[] files = srcFolder.listFiles();
        if(files.length != 0){
            // 说明当前目录下是有文件及文件夹的
            for(File file :files){
                // 判断是文件还是文件夹
                if(file.isFile()){
                    // 是文件
                    System.out.println(file.delete() + " 已经删除了" + file.getName() + " 文件" );
                }else{
                    // 说明是文件夹
                    deleteFolder(file);
                }
            }
        }

        System.out.println(srcFolder.delete() + " 已经删除了" + srcFolder.getName() + " 文件夹" );

    }
}

```





## 5.作业讲解

一，已知文件的路径为c:\mygames.txt

要求得到：

是否存在

取得文件名

取得文件路径

得到绝对路径名

得到父文件夹名

判断文件是否存在

判断文件是否可写

判断文件是否可读

判断是否是目录

判断是否是文件

是否是绝对路径名称

文件最后的修改时间

文件的大小

```java
public static void main(String[] args) {
    File f = new File("d:/tools/io/a.txt");
    System.out.println("是否存在：" + f.exists());
    System.out.println("文件名：" + f.getName());
    System.out.println("文件路径：" + f.getPath());
    System.out.println("绝对路径：" + f.getAbsolutePath());
    System.out.println("父文件夹名称:" + f.getParent());
    System.out.println("是否存在:" + f.exists());
    System.out.println("是否可写:" + f.canRead());
    System.out.println("是否可读：" + f.canWrite());
    System.out.println("是否是目录:" + f.isDirectory());
    System.out.println("是否是文件：" + f.isFile());
    System.out.println("是否是绝对路径名称：" + f.isAbsolute());
    System.out.println("文件的最后修改时间：" + new Date(f.lastModified()));
    System.out.println("文件的大小：" + f.length());
}
```

输出结果

```txt
是否存在：true
文件名：a.txt
文件路径：d:\tools\io\a.txt
绝对路径：d:\tools\io\a.txt
父文件夹名称:d:\tools\io
是否存在:true
是否可写:true
是否可读：true
是否是目录:false
是否是文件：true
是否是绝对路径名称：true
文件的最后修改时间：Sat Dec 12 14:34:52 CST 2020
文件的大小：0
```



 

二、

1、在本地磁盘D盘中创建一个iotest文件夹

2、在文件夹中创建一个以自己名字的拼音组成的文件名

3、获取创建的这个文件的最后修改日期并打印到控制台

4、将创建的这些文件和文件夹全部删除。

 

```java
public static void main(String[] args) throws IOException {
    // 在本地磁盘D盘中创建一个iotest文件夹
    File file = new File("d:/iotest");
    if(!file.exists()){
        file.mkdirs();
    }
    //在文件夹中创建一个以自己名字的拼音组成的文件名
    File f1 = new File("d:/iotest/bobo");
    if(!f1.exists()){
        f1.createNewFile();
    }
    // 获取创建的这个文件的最后修改日期并打印到控制台
    long l = f1.lastModified();
    Date date = new Date(l);
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    System.out.println("最后的修改时间是：" + sdf.format(date));
    // 将创建的这些文件和文件夹全部删除。
    File[] files = file.listFiles();
    // 先删除文件
    if(files.length > 0){
        // 说明文件夹中有具体的文件，我们应该先删除
        for(File f : files){
            f.delete();
        }
    }
    file.delete();
}
```





三、

1、在本地磁盘上，选择某个有内容的txt文件，将文件 名修改为test.txt 

2、计算修改名字后的文件的大小，文件的最后修改日 期、文件的名称及文件的父级目录，将这些信息打印到  

控制台

3、删除这个文件



```java
public static void main(String[] args) {
    File file = new File("d:/tools/io/a.txt");
    File file1 = new File("d:/tools/io/test.txt");
    file.renameTo(file1);
    System.out.println("文件大小：" + file1.length());
    System.out.println("文件的修改日期：" + new Date(file1.lastModified()));
    System.out.println("文件名称:" + file1.getName());
    System.out.println("文件的父目录：" + file1.getParent());
    file1.delete();
}
```

输出结果：

```txt
文件大小：11
文件的修改日期：Sat Dec 12 21:34:28 CST 2020
文件名称:test.txt
文件的父目录：d:\tools\io
```



# 二、IO流

## 1. IO流的引入

 		程序中的基本数据类型，引用类型【数组，集合】存储的数据都是在内存中，当程序运行的时候存储在内存中，当程序执行完成后，数据就消失了，我们想要实现数据的持久化，那么我就得通过Java中提供的IO来实现数据持久化。

```java
    /**
     *  内存: 运行时存储
     *  缺点：在程序执行的时候动态的分配内存，程序执行结束后数据就消失了。
     *  File类：可以操作存储在硬盘中文件【创建，删除,修改文件的属性】
     *  持久化存储：存储在文件系统中(C: U盘  数据库 移动硬盘 远程电脑)
     * @param args
     */
    public static void main(String[] args) {
        int a = 10;
        int[] arr = {1,2,3,4,5};
        List<Integer> list = Arrays.asList(1,2,3,4,5);

    }
```

![image-20201214162247886](img\image-20201214162247886.png)   





## 2. IO流概念

​       IO流也称为数据流(Stream),数据通信的通道。Java程序对数据的输入、输出操作都是以**流**的形式进行的，JDK中提供了各种`流`类来获取不同种类的数据。流是Java内存中的一组有序数据序列。



![image-20201214162540262](img\image-20201214162540262.png)





## 3. IO流分类

### 3.1 按流向分类

输入流：程序可以从中读取数据

​			以`InputStream`和`Reader`为基类

输出流：程序能向其中写入数据

​			以`OutputStream`和`Writer`为基类

![image-20201214163122579](img\image-20201214163122579.png)





### 3.2 按传输单位分类

字节流：以字节为单位传输数据的流

​         以`InputStream`和`OutputSteam`为基类

字符流：以字符为单位传输数据的流

​		以`Reader`和`Writer`为基类



### 3.3 按功能分类

节点流：用于直接操作目标设备的流

​		节点流是直接从一个源读写数据的流【FileInputStream】

处理流：是对一个已存在的流的连接和封装，通过对数据的处理为程序提供更为强大、灵活的读写操作

​       是在节点流的基础上的一种流【BufferedInputStream】







### 3.4 IO抽象类

|        | 字节流       | 字符流 |
| ------ | ------------ | ------ |
| 输入流 | InputStream  | Reader |
| 输出流 | OutputStream | Writer |





![image-20201214170114597](img\image-20201214170114597.png)



## 4. File字节流

### 4.1 字节输出流

​      将数据从内存中写入到文件中。基类是OutputStream，我们通过FileOutputStream来介绍



构造方法

```java
FileOutputStream(File file)
//创建文件输出流以写入由指定的 File对象表示的文件。
FileOutputStream(File file, boolean append)
//创建文件输出流以写入由指定的 File对象表示的文件。
FileOutputStream(FileDescriptor fdObj)
//创建文件输出流以写入指定的文件描述符，表示与文件系统中实际文件的现有连接。
FileOutputStream(String name)
//创建文件输出流以指定的名称写入文件。
FileOutputStream(String name, boolean append)
//创建文件输出流以指定的名称写入文件。
```

案例代码：

```java
    /**
     * FileOutputStream
     *
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 如果文件不存在 会帮我们创建该文件
        OutputStream out = new FileOutputStream("a.txt");
        // 把 hello world 输出到 a.txt文件中
        out.write("hello world".getBytes());
        // 在IO操作的时候最后我们都得关闭流
        out.close();
        // 数据流关闭后就不能再做其他操作了 java.io.IOException: Stream Closed
        out.write("abc".getBytes());
    }
```



字节输出流注意实现：

1. 数据写入完成后记得调用close方法关闭流对象，如果没有关闭流对象并且还在继续使用会抛出异常， Stream closed
2. 如果要追加写入使用带有两个参数的构造方法 且为true
3. 不同的操作系统针对的换行符也不一致要注意(windows  \r\n  Linux \n  Mac \r )
4. 数据写入中存在两个异常 FileNotFoundException IOException



结合异常处理IO的标准写法

```java
package com.bobo.io.outputstream;

import java.io.*;

public class FileOutputSteamDemo05 {

    public static void main(String[] args)  {
        // 异常我们要自己处理
        OutputStream out = null;
        try{
            out = new FileOutputStream(new File("f:/b.txt"),true);
            // 把 hello world 输出到 a.txt文件中
            out.write("helloworld\r\n".getBytes());
            out.write("helloworld\r\n".getBytes());
            out.write("helloworld\r\n".getBytes());
            out.write(97);
            out.write("\r\n".getBytes());
            byte[] bytes = "abcdedfg".getBytes();
            // 在IO操作的时候最后我们都得关闭流
            out.write(bytes,3,4);
            out.close();
        }catch (FileNotFoundException e){
            e.printStackTrace();
        }catch (IOException e) {
            e.printStackTrace();
        }finally {
            // 关闭IO流程
            if(out != null){
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        }
        System.out.println("**********");

    }
}

```

JDK1.8提供的try catch新的语法可以简化我们的IO标准代码

```java
package com.bobo.io.outputstream;

import java.io.*;

public class FileOutputSteamDemo06 {

    /**
     * FileOutputStream
     *    windows \r\n
     *    Linux \n
     *    mac  \r
     * @param args
     */
    public static void main(String[] args)  {
        // 异常我们要自己处理

        try(OutputStream out = new FileOutputStream(new File("b.txt"),true)){
            out.write("abc".getBytes());
            // 不用我们自己显示的关闭IO流  try(){}catch(...){} 这个语句会自动帮助我们把 try()中声明IO关闭
        }catch (FileNotFoundException e){
            e.printStackTrace();
        }catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("**********");

    }
}

```



### 4.2 字节输入流

>`FileInputStream`从文件系统中的文件获取输入字节。 什么文件可用取决于主机环境。
>
>FileInputStream`用于读取诸如图像数据的原始字节流。 要阅读字符串，请考虑使用`FileReader

构造方法：如果读取的文件不存在会抛异常 FileNotFoundException异常

![image-20201214195936667](img\image-20201214195936667.png)



read()方法

1. 每次读取一个字节的数据

2. 将指针移动到下一个位置

3. 读取到文件的末尾会返回-1



![image-20201214200031159](img\image-20201214200031159.png)



案例代码

```java
package com.bobo.io.fileinputstream;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileInputStreamDemo02 {
    /**
     * FileInputStream
     *    字节输入流
     *    在字节输出流中，如果文件不存在系统会帮助我们创建该文件
     *    但是在字节输入流中，如果文件不存在那么会抛FileNotFoundException
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个字节输入流
        InputStream in = new FileInputStream("b.txt");
        // 读取数据
        // 当文本读取结束的时候返回-1
        int b = 0 ;
        while((b = in.read()) != -1){
            // 没有读取到文件的结尾
            System.out.print((char)b);
        }
        /*while(b != -1){
            b = in.read();
            if(b == -1){
                System.out.print(b );
            }else{
                System.out.print((char)b );
            }

        }*/
        System.out.println();
        System.out.println("文件读取结束...");
        // 关闭IO流
        in.close();

    }
}

```

输出结果

```txt
helloworld
文件读取结束...
```



通过read方法读取中文的时候会出现乱码

一次读取多个字节信息



```java
package com.bobo.io.fileinputstream;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileInputStreamDemo04 {
    /**
     * FileInputStream
     *    字节输入流
     *    英文字母占据的是一个字节而中文在GBK中一个中文汉字，占据的是两个字节，也就是一个字符
     *       read() 每次读取一个字节  把中文的两个字节拆开了，当然就乱码了，那这个时候怎么办?  字符流或者一次读取多个字节
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个字节输入流
        InputStream in = new FileInputStream("a.txt");
        // 读取数据
        // 当文本读取结束的时候返回-1
        byte[] b = new byte[3];
        int number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);
        
        System.out.println("文件读取结束...");
        // 关闭IO流
        in.close();

    }
}

```



输出结果

```txt
abc  : 3
dec  : 2
dec  : -1
文件读取结束...
```

原因分析：



![image-20201214203009409](img\image-20201214203009409.png)



```java
package com.bobo.io.fileinputstream;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileInputStreamDemo05 {
    /**
     * FileInputStream
     *    字节输入流
     *    英文字母占据的是一个字节而中文在GBK中一个中文汉字，占据的是两个字节，也就是一个字符
     *       read() 每次读取一个字节  把中文的两个字节拆开了，当然就乱码了，那这个时候怎么办?  字符流或者一次读取多个字节
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个字节输入流
        InputStream in = new FileInputStream("b.txt");
        // 读取数据
        // 当文本读取结束的时候返回-1
        byte[] b = new byte[1000];
        int num = 0; // 记录读取的长度，读到结尾返回的是-1
        while((num = in.read(b)) != -1){
            System.out.print(new String(b,0,num));
        }
        System.out.println("");
        System.out.println("文件读取结束...");
        // 关闭IO流
        in.close();

    }
}

```

输出结果：

```txt
hello
中国
abcdef

文件读取结束...
```





### 4.3 课堂案例

文件复制的课堂案例：

​       通过字节输入流和字节输出流将d:\IO目录下的文件(视频，图片，文本文件)拷贝到d:\NewIO目录下



```java
package com.bobo.io.fileinputstream;

import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.io.*;

public class FileInputStreamDemo07 {

    /**
     * 通过字节输入流和字节输出流将
     *     d:\IO目录下的文件(视频，图片，文本文件)拷贝到d:\NewIO目录下
     * @param args
     */
    public static void main(String[] args) throws IOException {
        copy02("d:/IO/1.txt","d:/NewIO/1.txt");
        copy02("d:/IO/1.mp4","d:/NewIO/1.mp4");
        copy02("d:/IO/1.png","d:/NewIO/1.png");
    }

    /**
     * 实现文件的复制操作
     * @param srcFile  源文件
     *          将源文件中的内容读取到内存中 byte[]
     * @param descFile  目标文件
     *           将内存中存储中 byte[] 中的信息输出到 目标文件中
     */
    public static void copy01(String srcFile ,String descFile) throws IOException {
        // 先读取到内存中，然后再从内存中将数据写入到另一个文件中
        // 获取读取文件的对象
        InputStream in = new FileInputStream(srcFile);
        // 获取文件写入的对象
        OutputStream out = new FileOutputStream(descFile);
        // 一个字节一个字节的读取
        int b = 0 ;
        while((b = in.read()) != -1){
            // 每读取到一个字节我们就把这个信息写入到另一个文件中去
            out.write(b);
        }
        // 千万不要忘了关闭流
        out.close();
        in.close();
    }

    /**
     * 实现文件的复制操作
     * @param srcFile  源文件
     *          将源文件中的内容读取到内存中 byte[]
     * @param descFile  目标文件
     *           将内存中存储中 byte[] 中的信息输出到 目标文件中
     */
    public static void copy02(String srcFile,String descFile) throws IOException {
        InputStream in = new FileInputStream(srcFile);
        OutputStream out = new FileOutputStream(descFile);
        byte[] bytes = new byte[1024*1024];
        int num = 0 ;
        while((num = in.read(bytes)) != -1){
            out.write(bytes,0,num);
        }
        // 关闭
        in.close();
        out.close();
    }
}

```



  

## 5. File字符流

​        字节流在处理文本的时候因为中文的问题，在处理的时候就不是很完美，Java是采用Unicode标准，默认是通过GBK编码的，一个字符占据2个字节，通过字节流去操作文本的时候就有可能出现分割中文两个字节的情况这时Java中给我们提供了字符流，也就是读写操作都是一个字符。字符流的两个基类 `Reader` 和 `Writer`



### 5.1 字符输出流

​      输出的时候以字符为单位

```java
    /**
     *  write方法 不是直接将字符串写入到文件中，而是先将要写入的文件缓存起来
     * @param args
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        Writer writer = new FileWriter("a.txt",true);
        writer.write("abcHelloWorld");
        writer.write("\r\n");
        // 刷新，将缓存中的信息一次性写入到 文本中
         writer.flush();
        writer.write("你好啊，中国");
        // close 方法是关闭IO流，如果缓存中还有没有写入的数据会再执行一次flush方法
        writer.close();

    }
```

写入结果：



​                

![image-20201214214115835](img\image-20201214214115835.png)





### 5.2 字符输入流

​      读取数据的时候以字符单位

```java
    /**
     * 字符输入流
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 创建读取文件的对象 如果文件不存在会抛异常
        Reader reader = new FileReader("a.txt");
        // 读取文件
        int n = 0 ;
        while((n = reader.read()) != -1){
            System.out.print((char)n);
        }
    }
```

输出结果

```txt
HelloWorld
你好啊，中国
```



一次读取多个字符操作

```java
package com.bobo.io.reader;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

public class ReaderDemo04 {

    /**
     * 字符输入流
     *    一次性读取多个字符
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 创建读取文件的对象 如果文件不存在会抛异常
        Reader reader = new FileReader("a.txt");
        // 读取文件
        char[] ch = new char[4];
        int num = 0;
        while((num = reader.read(ch)) != -1){
            System.out.print(new String(ch,0,num));
        }
    }
}

```

和字节输入流的操作没多大的区别，读取中文也没有问题了

```txt
HelloWorld
你好啊，中国
```





### 5.3 课堂案例

文件复制的课堂案例：

​       通过字符输入流和字符输出流将d:\IO目录下的文件(视频，图片，文本文件)拷贝到d:\NewIO目录下

```java
package com.bobo.io.reader;

import java.io.*;

public class ReaderDemo05 {

    /**
     * 文件复制的课堂案例：
     *
     *      通过字节输入流和字节输出流将d:\IO目录下的文件(视频，图片，文本文件)拷贝到d:\NewIO目录下
     * @param args
     */
    public static void main(String[] args) throws IOException {
        copy("d:/IO/1.txt","d:/NewIO/1.txt");
        copy("d:/IO/1.mp4","d:/NewIO/1.mp4");
        copy("d:/IO/1.png","d:/NewIO/1.png");
    }

    /**
     * 通过字符实现文件的复制操作
     * @param srcFile  源文件
     * @param descFile  目标文件
     */
    public static void copy(String srcFile,String descFile) throws IOException {
        // 获取对应的字符输入输出流对象
        Reader reader = new FileReader(srcFile);
        Writer writer = new FileWriter(descFile);
        // 保存每次读取的数据
        char[] ch = new char[1024*1024];
        // 记录每次读取的数据的长度
        int i = 0; // 每个10次 flush一次
        int num = 0;
        while((num = reader.read(ch)) != -1){
            writer.write(new String(ch,0,num));
            /*if( i %10 ==0){
                writer.flush();
            }
            i++;*/
        }
        // 关闭IO流
        reader.close();
        writer.close();
    }
}

```

​	   通过字符流对非文本文件读写操作的时候出现了意想不到的情况，对于非文本文件不推荐使用字符流！对于文本操作中的中文出现了乱码的情况，这个是什么原因呢？



## 6.编码和解码

​       有关编码的问题在有中文的Java开发中是一个大问题，但是其实解决起来是非常容易。

### 6.1 编码

​       编码是信息从一种形式或格式转换为另一种形式或格式的过程。

​       简单的来说，编码就是将看得懂的信息通过**编码表**转换为看不懂的信息



### 6.2 解码

​       解码是编码的逆过程

​       简单的来说，解码就是将看不懂的信息通过编码表转换为看得懂的信息





### 6.3 编码表

​      现实世界中的字符对应的数组组成的一张参照表



现实生活中的案例：电报

![image-20201215135435641](img\image-20201215135435641.png)





### 6.4 常见的编码表

1. ASCII 美国标准信息交换码
2. Unicode 国际标准码
3. UTF-8 最多用三个字节来表示一个字符
4. ISO-8859-1 拉丁码表，欧洲码表
5. GB2312、GBK、GB18030 中文码表
6. Java平台默认采用的编码方式GBK



![image-20201215135621271](img\image-20201215135621271.png)



 

造成中文乱码的原因就是因为编码和解码使用的编码表不一致造成的

![image-20201215140305430](img\image-20201215140305430.png)





Java中支持的编码方式

```java
public class EncodeDemo01 {

    /**
     * 编码和解码
     *     Java中支持的编码方式是非常多的，可以通过Charset来查看
     *     1、对字符进行编码和解码
     *     2、对字符串进行编码和解码
     *     3、对文件进行编码和解码
     * @param args
     */
    public static void main(String[] args) {
        // Java支持的编码方式有哪些？
        SortedMap<String, Charset> map = Charset.availableCharsets();
        Set<String> keys = map.keySet();
        for(String key:keys){
            System.out.println(key+":" + map.get(key));
        }

    }
}
```

字符串的编解码：

```java
package com.bobo.encode;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Set;
import java.util.SortedMap;

public class EncodeDemo02 {

    /**
     * 编码和解码
     *     Java中支持的编码方式是非常多的，可以通过Charset来查看
     *     1、对字符进行编码和解码
     *     2、对字符串进行编码和解码
     *     3、对文件进行编码和解码
     * @param args
     */
    public static void main(String[] args) throws Exception {
        // 1、对字符进行编码和解码
        char ch = 'a';
        System.out.println((int)ch);
        System.out.println(Integer.toBinaryString(ch));
        // 2、对字符串进行编码和解码
        String str = "中国，你好...";
        // 编码
        byte[] b1 = str.getBytes("GBK");
        System.out.println(Arrays.toString(b1));
        // 解码
        System.out.println(new String(b1,"GBK"));

        // 3、对文件进行编码和解码  在字节流和字符流中没有提供编码解码的方法 我们需要学习一种新的流来解决这个问题
    }
}

```

输出结果:

```txt
97
1100001
[-42, -48, -71, -6, -93, -84, -60, -29, -70, -61, 46, 46, 46]
中国，你好...
```





## 7.转换流

实现在字节流和字符流之间转换的流

### 7.1 InputStreamReader

​          是Reader的子类，将输入的字节流变为字符流，既：将一个字节流的输入对象变为字符输入流对象

案例代码：

使用默认的编码表来解码



```java
package com.bobo.io.convert;

import java.io.*;

public class InputStreamReaderDemo01 {

    /**
     * 输入转换流
     *   InputStreamReader
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 读取一个文件
        InputStream in = new FileInputStream("d:/IO/1.txt");
        // 通过输入转换流 将字节流转换为字符流  设置对应的编码表
        Reader reader = new InputStreamReader(in);
        char[] ch = new char[1024];
        int num = 0 ;
        while((num = reader.read(ch)) != -1){
            System.out.print(new String(ch,0,num));
        }
        reader.close();
        in.close();
    }
}

```

出现了乱码:

```txt

public class FileInputStreamDemo04 {
    /**
     * FileInputStream
     *    �ֽ�������
     *    Ӣ����ĸռ�ݵ���һ���ֽڶ�������GBK��һ�����ĺ��֣�ռ�ݵ��������ֽڣ�Ҳ����һ���ַ�
     *       read() ÿ�ζ�ȡһ���ֽ�  �����ĵ������ֽڲ��ˣ���Ȼ�������ˣ������ʱ����ô��?  �ַ�������һ�ζ�ȡ����ֽ�
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // ��ȡһ���ֽ�������
        InputStream in = new FileInputStream("a.txt");
        // ��ȡ����
        // ���ı���ȡ������ʱ�򷵻�-1
        byte[] b = new byte[3];
        int number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        System.out.println("�ļ���ȡ����...");
        // �ر�IO��
        in.close();

    }
}
```





设置对应的解码方式

```java
package com.bobo.io.convert;

import java.io.*;

public class InputStreamReaderDemo01 {

    /**
     * 输入转换流
     *   InputStreamReader
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 读取一个文件
        InputStream in = new FileInputStream("d:/IO/1.txt");
        // 通过输入转换流 将字节流转换为字符流  设置对应的编码表
        Reader reader = new InputStreamReader(in,"GBK");
        char[] ch = new char[1024];
        int num = 0 ;
        while((num = reader.read(ch)) != -1){
            System.out.print(new String(ch,0,num));
        }
        reader.close();
        in.close();
    }
}

```

```txt
package com.bobo.io.fileinputstream;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileInputStreamDemo04 {
    /**
     * FileInputStream
     *    字节输入流
     *    英文字母占据的是一个字节而中文在GBK中一个中文汉字，占据的是两个字节，也就是一个字符
     *       read() 每次读取一个字节  把中文的两个字节拆开了，当然就乱码了，那这个时候怎么办?  字符流或者一次读取多个字节
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个字节输入流
        InputStream in = new FileInputStream("a.txt");
        // 读取数据
        // 当文本读取结束的时候返回-1
        byte[] b = new byte[3];
        int number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        number = in.read(b);
        System.out.println(new String(b) + "  : " + number);

        System.out.println("文件读取结束...");
        // 关闭IO流
        in.close();

    }
}
```





### 7.2 OutputStreamWriter

​        是Writer的子类，将输出的字符流装换为字节流，即：将一个字符流的输出对象变为字节流的输出对象



```java
package com.bobo.io.convert;

import java.io.*;

public class OutputStreamWriterDemo01 {

    /**
     * 输出转换流
     *    OutputStreamWriter
     * @param args
     */
    public static void main(String[] args) throws IOException {
        String str = "你好啊，程序员";
        // 获取字节输出流
        OutputStream out = new FileOutputStream("b.txt");
        // 通过输出转换流 将字节流转换为字符流
        Writer writer = new OutputStreamWriter(out,"GBK");
        // 通过字符流来操作
        writer.write(str);
        writer.flush();
        writer.close();
    }
}

```

同样的在转换流中我们也需要指定对应的编码解码方式



### 7.3 字符流文件复制

前面我们通过字符流复制文件造成的中文乱码问题，这时我们就可以通过转换流的方式彻底的来解决了

```java
package com.bobo.io.convert;

import java.io.*;

public class ReaderDemo05 {

    /**
     * 文件复制的课堂案例：
     *
     *      通过字节输入流和字节输出流将d:\IO目录下的文件(视频，图片，文本文件)拷贝到d:\NewIO目录下
     * @param args
     */
    public static void main(String[] args) throws IOException {
        copy("d:/IO/1.txt","d:/NewIO/1.txt");
        /*copy("d:/IO/1.mp4","d:/NewIO/1.mp4");
        copy("d:/IO/1.png","d:/NewIO/1.png");*/
    }

    /**
     *  通过转换流的方式实现编解码的操作
     * @param srcFile  源文件
     * @param descFile  目标文件
     */
    public static void copy(String srcFile,String descFile) throws IOException {
        // 通过转换流来实现
        Reader reader = new InputStreamReader(new FileInputStream(srcFile),"GBK");
        Writer writer = new OutputStreamWriter(new FileOutputStream(descFile),"GBK");
        // 保存每次读取的数据
        char[] ch = new char[1024*1024];
        // 记录每次读取的数据的长度
        int i = 0; // 每个10次 flush一次
        int num = 0;
        while((num = reader.read(ch)) != -1){

            writer.write(ch,0,num);
            System.out.println(new String(ch,0,num));
            /*if( i %10 ==0){
                writer.flush();
            }
            i++;*/
        }
        // 关闭IO流
        reader.close();
        writer.close();
    }
}

```





## 8. 缓冲流

​     缓冲流是处理流的一种，是建立在相应的节点流之上，对读写的数据提供了缓冲的功能，提高了读写的效率，同时还新增了一些方法。

JDK中提供了四种缓冲流：

1. BufferedInputStream 对任何的InputStream流进行包装
2. BufferedOutputStream  对任何的OutputStream流进行包装
3. BufferedReader  对任何的Reader流进行了包装
4. BufferedWriter  对任何的Writer流进行了包装



BufferedInputStream案例

```java
package com.bobo.io.buffered;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class BufferedInputStreamDemo01 {

    /**
     * 缓冲字节输入流
     *    BufferedInputStream
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个对应的BufferedInputStream对象
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("b.txt"));
        byte[] bytes = new byte[1024];
        int num = 0 ;
        while((num = bis.read(bytes)) != -1){
            System.out.print(new String(bytes,0,num));
        }

        bis.close();
    }
}

```



BufferedOutputStream案例代码

```java
package com.bobo.io.buffered;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedOutputStreamDemo01 {

    /**
     * 字节输出缓冲流
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取缓冲字节输出流
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("c.txt"));
        String str = "你好啊....";
        bos.write(str.getBytes());
        // 同样的数据会被缓冲，所以写入一定的数据后我们需要通过flush方法来刷新
        bos.flush();
        bos.close();

    }
}

```



在字节缓冲流中没有提供特别的新的方法





BufferedReader

```java
package com.bobo.io.buffered;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderDemo01 {

    /**
     * 缓冲字符输入流
     *    BufferedReader  新增了一个单行读取的方法  readLine() 方法
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 获取一个BufferedReader实例
        BufferedReader br = new BufferedReader(new FileReader("a.txt"));
        String str = null;
        while((str = br.readLine()) != null){
            System.out.println(str);
        }
        /*String s = br.readLine();
        System.out.println(s);
        s = br.readLine();
        System.out.println(s);
        s = br.readLine();
        System.out.println(s);*/

        br.close();
    }
}

```

输出结果：

```txt
HelloWorld
你好啊，中国
```

中文出现乱码的情况如何处理



![image-20201215152956675](img\image-20201215152956675.png)





将字节流通过转换流转换为特定编码的字符流，然后再转换为对应的包装流

```java
package com.bobo.io.buffered;

import java.io.*;

public class BufferedReaderDemo02 {

    /**
     * 缓冲字符输入流
     *    BufferedReader  新增了一个单行读取的方法  readLine() 方法
     * @param args
     */
    public static void main(String[] args) throws IOException {
        //Reader reader = new FileReader("b.txt");
        // 将字节流转换为字符流
        Reader reader = new InputStreamReader(new FileInputStream("b.txt"),"GBK");
        // 获取一个BufferedReader实例  将字符流包装为缓冲流
        BufferedReader br = new BufferedReader(reader);
        String str = null;
        while((str = br.readLine()) != null){
            System.out.println(str);
        }
        br.close();
    }
}

```



![image-20201215153234500](img\image-20201215153234500.png)



BufferedWriter

```java
package com.bobo.io.buffered;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterDemo01 {

    /**
     * 字符输出缓冲流
     *    BufferedWriter 新增加了一个换行的方法
     * @param args
     */
    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter("d.txt"));
        bw.write("abcdefg");
        bw.newLine(); // 换行
        bw.write("你好啊");
        bw.flush();
        bw.close();
    }
}

```

BufferedWriter结合转换流

```java
package com.bobo.io.buffered;

import java.io.*;

public class BufferedWriterDemo02 {

    /**
     * 字符输出缓冲流
     *    BufferedWriter 新增加了一个换行的方法
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // 将字节输出流转换为字符输出流
        Writer writer = new OutputStreamWriter(new FileOutputStream("e.txt"),"UTF-8");
        // 字符输出流包装为对应的缓冲流
        BufferedWriter bw = new BufferedWriter(writer);
        bw.write("abcdefg---utf-8");
        bw.newLine(); // 换行
        bw.write("你好啊");
        bw.flush();
        bw.close();
    }
}

```





## 9.标准输入输出流(了解)

​     我们刚开始接触Java的时候，接收键盘输入的代码是如下：

```java
Scanner in = new Scanner(System.in);
```

在这里的`System.in`是什么含义呢？



```java
package com.bobo.io.system;

import java.io.IOException;
import java.io.InputStream;

public class SystemInDemo01 {

    /**
     * 标准的输入输出流
     *    System.in
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // System.in 从控制台读取信息
        InputStream in = System.in;
        byte[] b = new byte[1024];
        int num = 0 ;
        while((num = in.read(b)) != -1){
            System.out.println("--->" + new String(b,0,num));
        }
        in.close();
    }
}

```



![image-20201215155505831](img\image-20201215155505831.png)





```java
package com.bobo.io.system;

import java.io.IOException;
import java.io.PrintStream;

public class SystemOutDemo01 {

    /**
     * 标准的输出
     *    System.out
     * @param args
     */
    public static void main(String[] args) throws IOException {
        // System.out 将内存中的信息输出到控制台中
        PrintStream out = System.out;
        out.write("hello ....".getBytes());
        out.println("aadfsa");
        out.append("scddsfdadf");

        out.close();

    }
}

```

输出结果

![image-20201215155823114](img\image-20201215155823114.png)







## 10.对象流

​        将对象持久化操作

我们直接将一个自定义的对象添加到了文件中，会出现如下的错误

```JAVA
package com.bobo.io.object;

public class Student {

    public Integer id;

    public String name;

    String address;

    protected  String gender;

    private String desc;


    public void run(){
        System.out.println("run");
    }

    public static void sleep(){
        System.out.println("sleep ...");
    }
}

```



```JAVA
package com.bobo.io.object;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

public class ObjectDemo01 {

    /**
     * 对象流
     *    ObjectInputStream：对象流的输入流
     *    ObjectOutputStream：对象流的输出流
     * @param args
     */
    public static void main(String[] args) throws IOException {
        Student s = new Student();
        s.id = 666;
        s.name = "zhangsan";
        s.gender = "男";
        s.address = "中国";

        Student s1 = new Student();
        s1.id = 6661;
        s1.name = "zhangsan1";
        s1.gender = "女";
        s1.address = "中国1";

        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("o1.txt"));
        oos.writeObject(s);
        oos.writeObject(s1);
        oos.flush();
        oos.close();

    }
}

```



出现了如下的错误

![image-20201215161705809](img\image-20201215161705809.png)



要通过对象流操作的对象都必须要实现`Serializable`接口  序列化



```java
package com.bobo.io.object;

import java.io.Serializable;

public class Student implements Serializable {

    static final long serialVersionUID = 42L;

    public Integer id;

    public String name;

    String address;

    protected  String gender;

    private String desc;


    public void run(){
        System.out.println("run");
    }

    public static void sleep(){
        System.out.println("sleep ...");
    }
}

```



然后添加就成功了

![image-20201215162248529](img\image-20201215162248529.png)





对象流读取对象信息  反序列化

```java
package com.bobo.io.object;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class ObjectDemo02 {

    /**
     * 对象流
     * @param args
     */
    public static void main(String[] args) throws Exception {
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("o1.txt"));
        Student s1 = (Student)ois.readObject();
        System.out.println(s1.id + "  " + s1.name + " "  + s1.gender + " " + s1.address);

        Student s2 = (Student)ois.readObject();
        System.out.println(s2.id + "  " + s2.name + " "  + s2.gender + " " + s2.address);

        System.out.println(ois.readObject());
        ois.close();
    }
}

```

输出结果：

![image-20201215162735554](img\image-20201215162735554.png)



序列化的步骤

1. 自定义一个类，实现Serializable接口
2. 实例化一个自定义的类，并初始化成员变量
3. 通过ObjectOutputStream把实例化的对象存储起来



反序列化的步骤

1. 通过对象流读取之前爆出的文件中的信息
2. 得到对象包含上次保存的对象的可见信息



transient声明的变量不能实现序列化



序列化是不能对static属性实现的。