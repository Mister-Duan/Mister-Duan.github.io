# Java常用工具类作业

一，已知字符串

String str=” ac,42,123,sd  Fa,c  df,4,adf,5ewRRre  ”;

1，把字符串按,进行分割

2，找出统计出字符串里抽的数字个数

3，找出a字符所在的所有索引

4，把里面的大写转化成小写

5，把里面的小写转化成大写

6，找出最后一个R所在的索引

7，统计字符串的长度

8，把字符串前后的空格去掉

9，把字符串中所有空格去掉
```java
package com.bobo.homework;

public class HomeWork01 {

	/**
	 * 一，已知字符串
		String str=” ac,42,123,sd  Fa,c  df,4,adf,5ewRRre  ”;
		1，把字符串按,进行分割
		2，找出统计出字符串里抽的数字个数
		3，找出a字符所在的所有索引
		4，把里面的大写转化成小写
		5，把里面的小写转化成大写
		6，找出最后一个R所在的索引
		7，统计字符串的长度
		8，把字符串前后的空格去掉
		9，把字符串中所有空格去掉
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = " ac,42,123,sd  Fa,c  df,4,adf,5ewRRre  ";
		// 1，把字符串按,进行分割
		String[] strs1 = str.split(",");
		for(String s: strs1){
			System.out.print(s + " ");
		}
		// 2，找出统计出字符串里抽的数字个数
		char[] ch1 = str.toCharArray();
		// 统计数字的的个数
		int numCount = 0 ;
		for(char c:ch1){
			/*if(c >= '0' && c <= '9'){
				numCount++;
			}*/
			if(Character.isDigit(c)){
				numCount++;
			}
		}
		System.out.println();
		System.out.println("字符串中的数字的个数是：" + numCount);
		// 3，找出a字符所在的所有索引
		StringBuilder sb = new StringBuilder();
		for(int i = 0 ; i < ch1.length ; i++){
			if("a".equals(new Character(ch1[i]).toString())){
				sb.append(i)
					.append(",");
			}
		}
		
		// 如果有 , 就截取掉去后一位
		if(sb.toString().contains(",")){
			sb.delete(sb.length()-1, sb.length());
		}
		System.out.println("a在字符串中的所有字符的索引：" + sb.toString());
		
		// 4，把里面的大写转化成小写
		System.out.println(str.toLowerCase());
		// 5，把里面的小写转化成大写
		System.out.println(str.toUpperCase());
		// 6，找出最后一个R所在的索引
		System.out.println(str.lastIndexOf('R'));
		
		//7，统计字符串的长度
		System.out.println(str.length());
		//8，把字符串前后的空格去掉
		System.out.println(str.trim());
		//9，把字符串中所有空格去掉
		System.out.println(str.replace(" ", ""));
	}

}

```



 

二，用户输入一个字符串

String str=”123dsgfadsgjlafdjhladDWGDFADFADSFADSFDASnhsdaf!@$%@#45324rdsf”

统计字符串大写字母,小写字母,其它的个数

![image-20241011083717516](img/image-20241011083717516.png)

```java
package com.bobo.homework;

public class HomeWork02 {

	/**
	 * 用户输入一个字符串

		String str=”123dsgfadsgjlafdjhladDWGDFADFADSFADSFDASnhsdaf!@$%@#45324rdsf”
		
		统计字符串大写字母,小写字母,其它的个数
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "123dsgfadsgjlafdjhladDWGDFADFADSFADSFDASnhsdaf!@$%@#45324rdsf";
		char[] ch = str.toCharArray();
		int bigCount = 0 ;
		int smallCount = 0;
		int digitCount = 0 ;
		for(char c : ch){
			if(Character.isUpperCase(c)){
				bigCount ++;
			}else if(Character.isLowerCase(c)){
				smallCount ++;
			}else if(Character.isDigit(c)){
				digitCount  ++;
			}
		}
		System.out.println("大写字母的个数：" + bigCount);
		System.out.println("小写字母的个数：" + smallCount);
		System.out.println("数字的个数：" + digitCount);
	}

}

```





编写一个方法countChar(String str),输出一个字符串中指定定字符串出现的次数

 

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





三，使用StringBuffer将一个数字字符串转换成逗号分隔的数字串，即从右边开始每三个数字用逗号分隔 insert

![image-20241011083748540](img/image-20241011083748540.png)

 ```java
package com.bobo.homework;

public class HomeWork03 {

	/**
	 * 使用StringBuffer将一个数字字符串转换成逗号分隔的数字串，
	 * 即从右边开始每三个数字用逗号分隔 insert
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "1111123456789"; // 123,456,789
		StringBuffer sb = new StringBuffer(str);
		int index = sb.length() ; // 9
		int length = sb.length(); // 9
		while(index - 3 > 0){
			index -= 3;
			sb.insert(index, ",");
		}
		System.out.println(sb.toString());

	}

}

 ```





1，用Math中的random方法， 随机输出5个1~6

 

2，使用Random生成一个随机的3位整数



```java
package com.bobo.homework;

import java.util.Random;

public class HomeWork04 {

	/**
	 * 1，用Math中的random方法， 随机输出5个1~6
	 * 2，使用Random生成一个随机的3位整数
	 * @param args
	 */
	public static void main(String[] args) {
		// Math.random() * 6  0.0 ~ 5.99999
		//(int) (Math.random() * 6 + 1 )  1.0 ~ 6.999999
		// 1，用Math中的random方法， 随机输出5个1~6
		for (int i = 0; i < 5; i++) {
			int random = (int) (Math.random() * 6 + 1 );
			System.out.println(random);
		}
		
		// 2，使用Random生成一个随机的3位整数
		Random r = new Random();
		System.out.println(r.nextInt(1000));
	}

}

```

