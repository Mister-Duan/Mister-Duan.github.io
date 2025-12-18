# 正则表达式和枚举类型

> 讲师：波波



​         Java 是第一大编程语言和开发平台。它有助于企业降低成本、缩短开发周期、推动创新以及改善应用服务。如今全球有数百万开发人员运行着超过 51 亿个 Java 虚拟机，Java 仍是企业和开发人员的首选开发平台 



# 课程内容的介绍

1. 正则表达式
2. 枚举类型



# 一、正则表达式

## 1. 正则表达式的引入

通过案例引入

```java
package com.bobo.regular;

public class RegularDemo01 {

	/**
	 * 校验QQ号是否合法
	 *   1.必须是5~10位
	 *   2.0不可以作为QQ号开头
	 * @param args
	 */
	public static void main(String[] args) {
		String str = "10232a1312";
		System.out.println(checkQQ(str));
		System.out.println(checkQQByRegular(str));

	}
	
	public static boolean checkQQByRegular(String qq){
		// 正则表达式
		String regex = "[1-9][0-9]{4,9}";
		return qq.matches(regex);
	}
	
	/**
	 * 检查QQ号是否合法
	 * 	 1.必须是5~10位
	 *   2.0不可以作为QQ号开头
	 *   3.必须都是数字
	 *   
	 * 检查输入的邮箱是否合法
	 *    1.名称又数字字母特殊符号组成
	 *    2.不能是数字开头
	 *    3.长度5~10位
	 *    4.含有@ 
	 *    5. .....
	 * @param qq
	 * @return
	 */
	public static boolean checkQQ(String qq)
	{
		boolean flag = false;
		// 校验长度5~10位
		if(qq.length() >= 5 && qq.length() <= 10){
			// 保证不是0开头
			if(!qq.startsWith("0")){
				// 必须都是数字  988912a12312
				char ch[] =qq.toCharArray();
				flag = true;
				for(char c : ch){
					if(!Character.isDigit(c)){
						flag = false;
						break;
					}
				}
				
			}
		}
		return flag;
	}

}

```

学习正则表达式的目的：通过正则表达式处理了字符串复杂的查找/替换/匹配/分割工作



## 2.正则表达式的概述

​    概念：使用单个字符串来描述/匹配一系列符合某个语法规则的字符串

使用步骤：

1. 通过大量的字符串找规律定义规则
2. 使用这种规则去匹配新的字符串
3. 匹配成功做出相应的操作



## 3. 正则表达式的语法规则

### 3.1 原义字符

​      字符本身就是一个正则 

```txt
 a  b  c \t \n  \r  \f
```

```java
/**
	 * 正则表达式的语法规则
	 *    
	 * @param args
	 */
public static void main(String[] args) {
    // 原义字符
    String regex = "a";
    String str = " ab1	23dd34	sasdf&s;	234.";
    System.out.println(str.replaceAll(regex, "X"));
    regex = "\t";
    System.out.println(str.replaceAll(regex, "X"));
}
```

输出结果

```txt
 Xb1	23dd34	sXsdf&s;	234.
 ab1X23dd34Xsasdf&s;X234.
```





### 3.2 元字符

​         元字符使正则表达式具有处理能力。所谓元字符就是指那些在正则表达式中具有特殊意义的专用字符，可以用来规定其前导字符（即位于元字符前面的字符）在目标对象中的出现模式。



| 字符         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| \            | 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。 |
| ^            | 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。 |
| $            | 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。 |
| *            | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| +            | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| ?            | 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。 |
| {n}          | n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 |
| {n,}         | n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。 |
| {n,m}        | m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。 |
| ?            | 当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m})  后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串  "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。 |
| .            | 匹配除换行符（\n、\r）之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像"**(.\|\n)**"的模式。 |
| (pattern)    | 匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\(' 或 '\)'。 |
| (?:pattern)  | 匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (\|)  来组合一个模式的各个部分是很有用。例如， 'industr(?:y\|ies) 就是一个比 'industry\|industries'  更简略的表达式。 |
| (?=pattern)  | 正向肯定预查（look ahead positive  assert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，"Windows(?=95\|98\|NT\|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
| (?!pattern)  | 正向否定预查(negative  assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如"Windows(?!95\|98\|NT\|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
| (?<=pattern) | 反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。例如，"`(?<=95|98|NT|2000)Windows`"能匹配"`2000Windows`"中的"`Windows`"，但不能匹配"`3.1Windows`"中的"`Windows`"。 |
| (?<!pattern) | 反向否定预查，与正向否定预查类似，只是方向相反。例如"`(?<!95|98|NT|2000)Windows`"能匹配"`3.1Windows`"中的"`Windows`"，但不能匹配"`2000Windows`"中的"`Windows`"。 |
| x\|y         | 匹配 x 或 y。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。 |
| [xyz]        | 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。 |
| [^xyz]       | 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。 |
| [a-z]        | 字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。 |
| [^a-z]       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。 |
| \b           | 匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。 |
| \B           | 匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。 |
| \cx          | 匹配由 x 指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。 |
| \d           | 匹配一个数字字符。等价于 [0-9]。                             |
| \D           | 匹配一个非数字字符。等价于 [^0-9]。                          |
| \f           | 匹配一个换页符。等价于 \x0c 和 \cL。                         |
| \n           | 匹配一个换行符。等价于 \x0a 和 \cJ。                         |
| \r           | 匹配一个回车符。等价于 \x0d 和 \cM。                         |
| \s           | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。 |
| \S           | 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。                  |
| \t           | 匹配一个制表符。等价于 \x09 和 \cI。                         |
| \v           | 匹配一个垂直制表符。等价于 \x0b 和 \cK。                     |
| \w           | 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。               |
| \W           | 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。           |
| \xn          | 匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\x41' 匹配 "A"。'\x041' 则等价于 '\x04' & "1"。正则表达式中可以使用 ASCII 编码。 |
| \num         | 匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。 |
| \n           | 标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。 |
| \nm          | 标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm  之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm  将匹配八进制转义值 nm。 |
| \nml         | 如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。 |
| \un          | 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。 |





#### 3.2.1 字符类

​	

```java
/**
	 * 正则表达式的语法规则
	 *    字符类
	 * @param args
	 */
public static void main(String[] args) {
    // 字符类 [abc]将字符进行了归类，可以出现[]中的其中任意一个字符 就会进行匹配
    String regex = "[abc]";
    String str = " ab1	23dd34	sasdf&s;	234.";
    System.out.println(str.replaceAll(regex, "X"));
    regex = "[^abc]"; // 取反 对不是 abc的字符进行匹配
    System.out.println(str.replaceAll(regex, "X"));
}
```

输出结果

```txt
 XX1	23dd34	sXsdf&s;	234.
XabXXXXXXXXXXaXXXXXXXXXXX
```



#### 3.2.2 范围类

其实是在字符类的基础上增加了范围

```java
package com.bobo.regular;

public class RegularDemo04 {

	/**
	 * 正则表达式的语法规则
	 *    范围类 -
	 * @param args
	 */
	public static void main(String[] args) {
		// 字符类 [a-z] 表示代表 a到z的所有的小写字母
		String regex = "[a-z]";
		String str = " ab1 ZZ	23dd34 A	sasdf&s; SD	234.";
		System.out.println(str.replaceAll(regex, "X"));
		regex = "[a-zA-Z]"; 
		System.out.println(str.replaceAll(regex, "X"));
		regex = "[a-zA-Z0-9&;]"; 
		System.out.println(str.replaceAll(regex, "X"));
	}

}

```

输出结果

```txt
 XX1 ZZ	23XX34 A	XXXXX&X; SD	234.
 XX1 XX	23XX34 X	XXXXX&X; XX	234.
 XXX XX	XXXXXX X	XXXXXXXX XX	XXX.
```



#### 3.2.3 预定义类

​        我们在上面的范围类的情况下我们知道在实际的开发中我们可能会碰到一些常见的需求比如：判断是否是数字，字母，大写字母等这些情况，对应的范围类正则比较常，所有在正则表达式中会给我们预定义一些有特殊含义的表达式

```txt
\d == [0-9] 数字
\D == [^0-9] 非数字
空白字符：[ \t\n\x0B\f\r] == \s
[^ \t\n\x0B\f\r] == \S
[a-zA-Z0-9] \w
[^a-zA-Z0-9] \W
. 任何字符（与行结束符可能匹配也可能不匹配）
```



```java
package com.bobo.regular;

public class RegularDemo05 {

	/**
	 * 正则表达式的语法规则
	 *    预定义类
	 *    \d == [0-9] 数字
		\D == [^0-9] 非数字
		空白字符：[ \t\n\x0B\f\r] == \s
		[^ \t\n\x0B\f\r] == \S
		[a-zA-Z0-9] \w
		[^a-zA-Z0-9] \W
		. 任何字符（与行结束符可能匹配也可能不匹配）
	 * @param args
	 */
	public static void main(String[] args) {
		// 字符类 [a-z] 表示代表 a到z的所有的小写字母
		String regex = "\\d";//"[0-9]";
		String str = " ab1 ZZ	23dd34 A	sasdf&s; SD	234.";
		System.out.println(str.replaceAll(regex, "X"));
		regex = "\\D"; 
		System.out.println(str.replaceAll(regex, "X"));
		regex = "\\s"; 
		System.out.println(str.replaceAll(regex, "X"));
		regex = "\\w"; // 匹配字母和数字
		System.out.println(str.replaceAll(regex, "*"));
		regex = "\\W";
		System.out.println(str.replaceAll(regex, "+"));
		
		regex = "."; // . 表示 任何字符  
		System.out.println(str.replaceAll(regex, "+"));
		regex = "\\."; // . 表示 任何字符  如果仅仅只是想要将.的字符匹配 用转意符  
		System.out.println(str.replaceAll(regex, "+"));
	}

}

```



输出结果

```txt
 abX ZZ	XXddXX A	sasdf&s; SD	XXX.
XXX1XXXX23XX34XXXXXXXXXXXXXXX234X
Xab1XZZX23dd34XAXsasdf&s;XSDX234.
 *** **	****** *	*****&*; **	***.
+ab1+ZZ+23dd34+A+sasdf+s++SD+234+
+++++++++++++++++++++++++++++++++
 ab1 ZZ	23dd34 A	sasdf&s; SD	234+

```





#### 3.2.4 边界字符

```txt
^:以XXX开头
$:以XXX结尾
\b:单词边界
\B:非单词边界
```



```java
	/**
	 * 边界字符
	 *  ^:以XXX开头
		$:以XXX结尾
		\b:单词边界
		\B:非单词边界
	 * @param args
	 */
	public static void main(String[] args) {
		String regex = "^ab"; // [^a]
		String str = "abcdefg";
		System.out.println(str.replaceAll(regex, "_"));
		regex = "fg$"; // 表示以 fg 结尾
		System.out.println(str.replaceAll(regex, "_"));
		str = "Hello World 666 1 2 & ; 0 a b c d";
		regex = "\\b";
		System.out.println(str.replaceAll(regex, "_"));
		
		regex = "\\B";
		System.out.println(str.replaceAll(regex, "_"));
	}
```

输出结果

```txt
_cdefg
abcde_
_Hello_ _World_ _666_ _1_ _2_ & ; _0_ _a_ _b_ _c_ _d_
H_e_l_l_o W_o_r_l_d 6_6_6 1 2 _&_ _;_ 0 a b c d
```



#### 3.2.5 量词

```java
package com.bobo.regular;

public class RegularDemo07 {

	/**
	 * 量词
           ?:出现0次或者1次
           +:出现1次或者多次
           *:出现任意次
           {n}:出现正好n次
           {n,m}出现n-m次
           {n,}出现至少n次
	 * @param args
	 */
	public static void main(String[] args) {
		String regex = "^b?"; // [^a]
		String str = "aaaabcdefg";
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^b+"; // 以 0个或者1个b开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a+";  // 以 0个或者1个a开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a*";  // 以 任意个a开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a{4}";  // 以4个a开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a{3}";  // 以3个a开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a{5}";  // 以5个a开头
		System.out.println(str.replaceAll(regex, "_"));
		regex = "^a{5,6}";  // 以5到6个a开头
		System.out.println(str.replaceAll(regex, "_"));
		
		regex = "^a{3,}";  // 以3个以上的a开头
		System.out.println(str.replaceAll(regex, "_"));
	}

}

```

输出结果

```txt
_aaaabcdefg
aaaabcdefg
_bcdefg
_bcdefg
_bcdefg
_abcdefg
aaaabcdefg
aaaabcdefg
_bcdefg
```



#### 3.2.6 分组

分组符合是 "( )"

```java
	/**
	 * 分组
	 * @param args
	 */
	public static void main(String[] args) {
		// 匹配abc出现三组的情况
		String regex = "(abc){3,}"; // [^a]
		String str = "abcABC123123dbaCBAabcABCabcabcabc123";
		System.out.println(str.replaceAll(regex, "*"));
		regex = "ABC(123|abc){1,}"; // [^a]
		System.out.println(str.replaceAll(regex, "-"));
		
	}
```

输出结果

```java
abcABC123123dbaCBAabcABC*123
abc-dbaCBAabc-
```



#### 3.2.7 反向引用

反向引用针对的是分组的表达式

```java
package com.bobo.regular;

public class RegularDemo09 {

	/**
	 * 反向引用
	 * @param args
	 */
	public static void main(String[] args) {
		// 2018-04-27 ==> 04/27/2018 分组中如果不想要生成分组编号可以通过 ?: 来实现
        // String regex = "(\\d{4})-(?:\\d{2})-(\\d{2})";
		String regex = "(\\d{4})-(\\d{2})-(\\d{2})";
        String s = "2018-04-27";
        String replace = s.replaceAll(regex, "$2/$3/$1");
        System.out.println(replace);
		
	}

}
```

输出结果

```txt
04/27/2018
```



## 4.正则表达式在Java中的应用

在Java是如何通过正则表达式来实现相关的操作的

1.字符串的查找操作：Pattern和Matcher

2.字符串匹配操作：可以通过字符串的matchers方法

3.字符串的替换操作： 字符串的replaceAll()和replaceFirst()方法

4.字符串的分割: 字符串的split()方法



正则表达式验证的网站：https://regexper.com/



![image-20201204200713765](img\image-20201204200713765.png)



案例

```java
package com.bobo.regular;

import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegularDemo10 {

	/**
	 * 1.字符串的查找操作：Pattern和Matcher 2.字符串匹配操作：可以通过字符串的matchers方法 3.字符串的替换操作：
	 * 字符串的replaceAll()和replaceFirst()方法 4.字符串的分割: 字符串的split()方法
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		String regex = "\\w{3,7}";
		String str = "abcd123";
		System.out.println(str.matches(regex));

		regex = "[a-z]{2,}";
		System.out.println("abc efgsd hello111".replaceAll(regex, "X"));
		System.out.println("abc efgsd hello111".replaceFirst(regex, "X"));

		str = "abc,sdf 123ab sa123bds & ";
		String[] s1 = str.split(",");
		System.out.println(Arrays.toString(s1));
		regex = "[as1]";
		String[] s2 = str.split(regex);
		System.out.println(Arrays.toString(s2));

		// Pattern
		// Pattern
		regex = "\\w{3,7}";
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher("abcd123aaaa111dddd333");
		// System.out.println(matcher.matches());
		System.out.println(matcher.find());
		System.out.println(matcher.end());
		System.out.println(matcher.group());

		System.out.println(matcher.find());
		System.out.println(matcher.end());
		System.out.println(matcher.group());

	}

}

```

输出结果

```txt
true
X X X111
X efgsd hello111
[abc, sdf 123ab sa123bds & ]
[, bc,, df , 23, b , , , 23bd,  & ]
true
7
abcd123
true
14
aaaa111

```





## 5.课堂案例

1.验证手机号

  ```txt
规则如下：
​      a.以1开头
​      b.一共11位
​      c.50结尾
​      d.倒数第三位是9或者6
  ```



```java
package com.bobo.regular;

public class RegularDemo11 {

	/**
	 * 手机号验证
	 *   规则如下：
	​      a.以1开头
	​      b.一共11位
	​      c.50结尾
	​      d.倒数第三位是9或者6
	 * @param args
	 */
	public static void main(String[] args) {
		String phoneNumber = "13888886950";
		String regex = "^1\\d{7}[69](50)$";
		System.out.println(phoneNumber.matches(regex));

	}

}

```





![image-20201204202133459](img\image-20201204202133459.png)





2.获取以下文章中两个字符组成的单词并输出

```txt
On Friendship And a youth said, "Speak to us of Friendship." Your friend is your needs answered. He is your field which
```



```java
package com.bobo.regular;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegularDemo12 {

	/**
	 * On Friendship And a youth said, "Speak to us of Friendship." Your friend is your needs answered. He is your field which
	 * @param args
	 */
	public static void main(String[] args) {
		String s = " On Friendship And a youth said, \"Speak to us of Friendship.\" Your friend is your needs answered. He is your field which";
		// 定义规则
		String regex = "\\b[a-zA-Z]{2}\\b";
		// 根据正则表达式编译生成模型对象
		Pattern p = Pattern.compile(regex);
		// 根据Pattern对象获取Matcher对象
		Matcher matcher = p.matcher(s);
		
		while(matcher.find()){
			int start = matcher.start();
			int end = matcher.end();
			String group = matcher.group();
			System.out.println(start + "  " + end + " " + group);
		}
		
		/*boolean f1 = matcher.find();
		System.out.println(f1);
		int start1 = matcher.start();
		int end1 = matcher.end();
		String group1 = matcher.group();
		System.out.println(start1 + "  " + end1 + " " + group1);
		
		boolean f2 = matcher.find();
		System.out.println(f2);
		int start2 = matcher.start();
		int end2 = matcher.end();
		String group2 = matcher.group();
		System.out.println(start2 + "  " + end2 + " " + group2);
		
		boolean f3 = matcher.find();
		System.out.println(f3);
		int start3 = matcher.start();
		int end3 = matcher.end();
		String group3 = matcher.group();
		System.out.println(start3 + "  " + end3 + " " + group3);
		
		boolean f4 = matcher.find();
		System.out.println(f4);
		int start4 = matcher.start();
		int end4 = matcher.end();
		String group4 = matcher.group();
		System.out.println(start4 + "  " + end4 + " " + group4);
		*/

	}

}

```

输出结果

```txt
1  3 On
40  42 to
43  45 us
46  48 of
74  76 is
98  100 He
101  103 is
```



![image-20201204203557505](img\image-20201204203557505.png)



3.将以下文章中的 is 替换为 IS

```txt
He is a man
This is a boy
is that your car?
isn't it?
What is your name?
```



```java
package com.bobo.regular;

public class RegularDemo13 {

	/**
	 * 将以下文章中的 is 替换为 IS He is a man This is a boy is that your car? isn't it?
	 * What is your name?
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		String s = "He is a man This is a boy is that your car? isn't it ? What is your name? ";
		// System.out.println(s.replaceAll("is", "IS"));
		String regex = "\\bis\\b";
		System.out.println(s.replaceAll(regex, "IS"));
	}

}

```

输出结果

```txt
He IS a man This IS a boy IS that your car? isn't it ? What IS your name? 
```



![image-20201204203949886](img\image-20201204203949886.png)







4.将以下字符串中正确的日期格式替换为 MM-dd-yyyy

```txt
2016/03/05
demo/07/ss
1993/08/05
2016/11/24
12345/23/45678
12345/24/3356
1993-08-05
```



```java
package com.bobo.regular;

public class RegularDemo14 {

	/**
	 * 将以下字符串中正确的日期格式替换为 MM-dd-yyyy 
	 * 2016/03/05 
	 * demo/07/ss 
	 * 1993/08/05 
	 * 2016/11/24
	 * 12345/23/45678 
	 * 12345/24/3356 
	 * 1993-08-05
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		String s = "2016/03/05\r\n " 
					+ "demo/07/ss\r\n " 
					+ "1993/08/05\r\n " 
					+ "2016/11/24\r\n " 
					+ "12345/23/45678\r\n "
					+ "12345/24/3356\r\n " 
					+ "1993-08-05";
		String regex = "\\b(\\d{4})[/-](\\d{2})[/-](\\d{2})\\b";
		System.out.println(s.replaceAll(regex, "$2-$3-$1"));

	}

}

```

输出结果

```text
03-05-2016
 demo/07/ss
 08-05-1993
 11-24-2016
 12345/23/45678
 12345/24/3356
 08-05-1993

```



![image-20201204204657653](img\image-20201204204657653.png)





附带的常用的正则表达式案例：

```txt
验证正则表达式

整数或者小数：^[0-9]+\.{0,1}[0-9]{0,2}$
只能输入数字："^[0-9]*$"。
只能输入n位的数字："^\d{n}$"。
只能输入至少n位的数字："^\d{n,}$"。
只能输入m~n位的数字：。"^\d{m,n}$"
只能输入零和非零开头的数字："^(0|[1-9][0-9]*)$"。
只能输入有两位小数的正实数："^[0-9]+(.[0-9]{2})?$"。
只能输入有1~3位小数的正实数："^[0-9]+(.[0-9]{1,3})?$"。
只能输入非零的正整数："^\+?[1-9][0-9]*$"。
只能输入非零的负整数："^\-[1-9][]0-9"*$。
只能输入长度为3的字符："^.{3}$"。
只能输入由26个英文字母组成的字符串："^[A-Za-z]+$"。
只能输入由26个大写英文字母组成的字符串："^[A-Z]+$"。
只能输入由26个小写英文字母组成的字符串："^[a-z]+$"。
只能输入由数字和26个英文字母组成的字符串："^[A-Za-z0-9]+$"。
只能输入由数字、26个英文字母或者下划线组成的字符串："^\w+$"。
验证用户密码："^[a-zA-Z]\w{5,17}$"正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线。
验证是否含有^%&'',;=?$\"等字符："[^%&'',;=?$\x22]+"。
只能输入汉字："^[\u4e00-\u9fa5]{0,}$"
验证Email地址："^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"。
验证InternetURL："^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$"。
验证电话号码："^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$"正确格式为："XXX-XXXXXXX"、"XXXX- XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX"。
验证身份证号（15位或18位数字）："^\d{15}|\d{18}$"。
验证一年的12个月："^(0?[1-9]|1[0-2])$"正确格式为："01"～"09"和"1"～"12"。
验证一个月的31天："^((0?[1-9])|((1|2)[0-9])|30|31)$"正确格式为；"01"～"09"和"1"～"31"。

```







# 二、枚举类型

类的对象只有有限个，确定的 我们就可以称为`枚举`

- 星期: Monday(星期一)、...、Sunday(星期天)
- 性别：Man(男)、Woman(女)
- 季节: Spring(春季)、...、Winter(冬季)
- 就职状态: Busy(忙碌)、Free(空闲)、Vocation(就职)、Dimission(离职)
- ....



当需要定义一组常量时，强烈建议使用枚举





## 1. 自定义枚举类

jdk1.5之前我们需要自定义枚举类

```java
package com.bobo.enums;

/**
 * 枚举类
 *    实现的方式有两种：
 *       1.jdk1.5之前我们需要自定义枚举类
 *       2.jdk1.5 我们可以通过enum来实现
 * @author dpb
 *
 */
public class EnumDemo01 {

	public static void main(String[] args) {
		Season spring = Season.SPRING;
		Season summer = Season.SUMMER;
		Season autumn = Season.AUTUMN;
		Season winter = Season.WINTER;
		System.out.println(spring.getSEASON_NAME());
		System.out.println(summer.getSEASON_NAME());
		System.out.println(autumn.getSEASON_NAME());
		System.out.println(winter.getSEASON_NAME());
	}
}

/**
 * 自定义一个季节的枚举类 
 */
class Season{
	// 2.创建Season的属性
	private final String SEASON_NAME;
	private final String SEASON_DESC;
	
	
	// 1.要保证类的对象的个数是有限的，那么我们就必须要私有化构造方法
	private Season(String SEASON_NAME,String SEASON_DESC){
		this.SEASON_NAME = SEASON_NAME;
		this.SEASON_DESC = SEASON_DESC;
	}
	
	// 3.提供公有的静态属性给外界获取枚举类的多个对象
	public static final Season SPRING = new Season("春天", "万物复苏"); 
	public static final Season SUMMER = new Season("夏天", "夏日炎炎");
	public static final Season AUTUMN = new Season("秋天", "秋高气爽");
	public static final Season WINTER = new Season("冬天", "冰天雪地");

	// 4.提供获取 SEASON_NAME 和 SEASON_DESC的共有方法
	public String getSEASON_NAME() {
		return SEASON_NAME;
	}
	public String getSEASON_DESC() {
		return SEASON_DESC;
	}
	// 5.重写toString方法
	@Override
	public String toString() {
		return "Season [SEASON_NAME=" + SEASON_NAME + ", SEASON_DESC=" + SEASON_DESC + "]";
	}	
	
}

```



## 2.通过enum定义枚举类

jdk1.5 我们可以通过enum来实现

```java
package com.bobo.enums2;

/**
 * 枚举类
 *    实现的方式有两种：
 *       1.jdk1.5之前我们需要自定义枚举类
 *       2.jdk1.5 我们可以通过enum来实现
 * @author dpb
 *
 */
public class EnumDemo01 {

	public static void main(String[] args) {
		Season spring = Season.SPRING;
		Season summer = Season.SUMMER;
		Season autumn = Season.AUTUMN;
		Season winter = Season.WINTER;
		System.out.println(spring);
		System.out.println(summer);
		System.out.println(autumn);
		System.out.println(winter);
		System.out.println(Season.class.getSuperclass());
	}
}

/**
 * 自定义一个季节的枚举类 
 */
enum Season{
	
	// 3.枚举有的有限的对象  对象之间通过,连接 最后一个通过;结尾
	 SPRING("春天", "万物复苏"), 
	 SUMMER("夏天", "夏日炎炎"),
	 AUTUMN("秋天", "秋高气爽"),
	 WINTER("冬天", "冰天雪地");
	
	// 2.创建Season的属性
	private final String SEASON_NAME;
	private final String SEASON_DESC;
	
	// 1.要保证类的对象的个数是有限的，那么我们就必须要私有化构造方法
	private Season(String SEASON_NAME,String SEASON_DESC){
		this.SEASON_NAME = SEASON_NAME;
		this.SEASON_DESC = SEASON_DESC;
	}

	// 4.提供获取 SEASON_NAME 和 SEASON_DESC的共有方法
	public String getSEASON_NAME() {
		return SEASON_NAME;
	}
	public String getSEASON_DESC() {
		return SEASON_DESC;
	}
	// 5.重写toString方法
/*	@Override
	public String toString() {
		return "Season [SEASON_NAME=" + SEASON_NAME + ", SEASON_DESC=" + SEASON_DESC + "]";
	}*/
	
}
```





通过enum关键字实现的枚举类的父类是`java.lang.Enum`

```java
package com.bobo.enums2;

import java.util.Arrays;

/**
 * 枚举类
 *    实现的方式有两种：
 *       1.jdk1.5之前我们需要自定义枚举类
 *       2.jdk1.5 我们可以通过enum来实现
 * @author dpb
 *
 */
public class EnumDemo01 {

	public static void main(String[] args) {
		Season spring = Season.SPRING;
		Season summer = Season.SUMMER;
		Season autumn = Season.AUTUMN;
		Season winter = Season.WINTER;
		System.out.println(spring);
		System.out.println(summer);
		System.out.println(autumn);
		System.out.println(winter);
		System.out.println(Season.class.getSuperclass());
		System.out.println("************");
		// Enum中的常用方法
		// values() 获取枚举对象的数组，该方法可以很方便的遍历出所有的枚举对象的值
		Season[] values = Season.values();
		System.out.println(Arrays.toString(values));
		// valueOf 根据枚举对象的名称获取对应的枚举对象 如果不存在就抛
		// java.lang.IllegalArgumentException:
		Season summer1 = Season.valueOf("SUMMER");
		System.out.println(summer1);
		// toString:打印枚举对象的名称
	}
}

/**
 * 自定义一个季节的枚举类 
 */
enum Season{
	
	// 3.枚举有的有限的对象  对象之间通过,连接 最后一个通过;结尾
	 SPRING("春天", "万物复苏"), 
	 SUMMER("夏天", "夏日炎炎"),
	 AUTUMN("秋天", "秋高气爽"),
	 WINTER("冬天", "冰天雪地");
	
	// 2.创建Season的属性
	private final String SEASON_NAME;
	private final String SEASON_DESC;
	
	// 1.要保证类的对象的个数是有限的，那么我们就必须要私有化构造方法
	private Season(String SEASON_NAME,String SEASON_DESC){
		this.SEASON_NAME = SEASON_NAME;
		this.SEASON_DESC = SEASON_DESC;
	}

	// 4.提供获取 SEASON_NAME 和 SEASON_DESC的共有方法
	public String getSEASON_NAME() {
		return SEASON_NAME;
	}
	public String getSEASON_DESC() {
		return SEASON_DESC;
	}
	// 5.重写toString方法
/*	@Override
	public String toString() {
		return "Season [SEASON_NAME=" + SEASON_NAME + ", SEASON_DESC=" + SEASON_DESC + "]";
	}*/
	
}


```



## 3.枚举类可以实现接口

实现了接口后怎么处理接口中的抽象方法呢？

1.直接在enum中实现抽象方法

```java
package com.bobo.enums3;

import java.util.Arrays;

/**
 * 枚举类
 *    实现的方式有两种：
 *       1.jdk1.5之前我们需要自定义枚举类
 *       2.jdk1.5 我们可以通过enum来实现
 * @author dpb
 *
 */
public class EnumDemo01 {

	public static void main(String[] args) {
		Season spring = Season.SPRING;
		Season summer = Season.SUMMER;
		Season autumn = Season.AUTUMN;
		Season winter = Season.WINTER;
		
		spring.show();
		summer.show();
	}
}

interface Person{
	void show();
}

/**
 * 自定义一个季节的枚举类 
 */
enum Season implements Person{
	
	// 3.枚举有的有限的对象  对象之间通过,连接 最后一个通过;结尾
	 SPRING("春天", "万物复苏"), 
	 SUMMER("夏天", "夏日炎炎"),
	 AUTUMN("秋天", "秋高气爽"),
	 WINTER("冬天", "冰天雪地");
	
	// 2.创建Season的属性
	private final String SEASON_NAME;
	private final String SEASON_DESC;
	
	// 1.要保证类的对象的个数是有限的，那么我们就必须要私有化构造方法
	private Season(String SEASON_NAME,String SEASON_DESC){
		this.SEASON_NAME = SEASON_NAME;
		this.SEASON_DESC = SEASON_DESC;
	}

	// 4.提供获取 SEASON_NAME 和 SEASON_DESC的共有方法
	public String getSEASON_NAME() {
		return SEASON_NAME;
	}
	public String getSEASON_DESC() {
		return SEASON_DESC;
	}
	// 5.重写toString方法
/*	@Override
	public String toString() {
		return "Season [SEASON_NAME=" + SEASON_NAME + ", SEASON_DESC=" + SEASON_DESC + "]";
	}*/

	@Override
	public void show() {
		System.out.println("今天是个好天气");
		
	}
	
}


```



枚举中的常量对象调用该方法结果是一样的，效率不高

2.在每个枚举对象中重写该方法

```java
package com.bobo.enums4;

import java.util.Arrays;

/**
 * 枚举类
 *    实现的方式有两种：
 *       1.jdk1.5之前我们需要自定义枚举类
 *       2.jdk1.5 我们可以通过enum来实现
 * @author dpb
 *
 */
public class EnumDemo01 {

	public static void main(String[] args) {
		Season spring = Season.SPRING;
		Season summer = Season.SUMMER;
		Season autumn = Season.AUTUMN;
		Season winter = Season.WINTER;
		
		spring.show();
		summer.show();
	}
}

interface Person{
	void show();
}

/**
 * 自定义一个季节的枚举类 
 */
enum Season implements Person{
	
	// 3.枚举有的有限的对象  对象之间通过,连接 最后一个通过;结尾
	 SPRING("春天", "万物复苏"){
		 @Override
		public void show() {
			System.out.println("春天来了");
		}
	 }, 
	 SUMMER("夏天", "夏日炎炎"){
		 @Override
		public void show() {
			System.out.println("好热啊");
		}
	 },
	 AUTUMN("秋天", "秋高气爽"){
		 @Override
		public void show() {
			System.out.println("真舒服");
		}
	 },
	 WINTER("冬天", "冰天雪地"){
		 @Override
		public void show() {
			System.out.println("羽绒服搞起来");
		}
	 };
	
	// 2.创建Season的属性
	private final String SEASON_NAME;
	private final String SEASON_DESC;
	
	// 1.要保证类的对象的个数是有限的，那么我们就必须要私有化构造方法
	private Season(String SEASON_NAME,String SEASON_DESC){
		this.SEASON_NAME = SEASON_NAME;
		this.SEASON_DESC = SEASON_DESC;
	}

	// 4.提供获取 SEASON_NAME 和 SEASON_DESC的共有方法
	public String getSEASON_NAME() {
		return SEASON_NAME;
	}
	public String getSEASON_DESC() {
		return SEASON_DESC;
	}	
}


```



















