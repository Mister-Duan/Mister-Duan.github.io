<template><div><h1 id="awk" tabindex="-1"><a class="header-anchor" href="#awk"><span>awk</span></a></h1>
<p><a href="https://en.wikipedia.org/wiki/AWK" target="_blank" rel="noopener noreferrer"><code v-pre>awk</code></a>是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。</p>
<p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，<code v-pre>awk</code> 可能是最方便的工具。</p>
<figure><img src="https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg" alt="Book" tabindex="0" loading="lazy"><figcaption>Book</figcaption></figure>
<p><code v-pre>awk</code> 其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2>
<p><code v-pre>awk</code> 的基本用法就是下面的形式。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 格式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 动作</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 文件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $0}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span></code></pre>
</div><p>上面示例中，<code v-pre>demo.txt</code> 是 <code v-pre>awk</code> 所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作 <code v-pre>print $0</code>。其中，<code v-pre>print</code> 是打印命令，<code v-pre>$0</code> 代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。</p>
<p>下面，我们先用标准输入(stdin)演示上面这个例子。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'this is a test'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $0}'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test</span></span></code></pre>
</div><p>上面代码中，<code v-pre>print $0</code> 就是把标准输入 <code v-pre>this is a test</code>，重新打印了一遍。</p>
<p><code v-pre>awk</code> 会根据空格和制表符，将每一行分成若干字段，依次用<code v-pre>$1</code>、<code v-pre>$2</code>、<code v-pre>$3</code> 代表第一个字段、第二个字段、第三个字段等等。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'this is a test'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $3}'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span></code></pre>
</div><p>上面代码中，<code v-pre>$3</code> 代表 <code v-pre>this is a test</code> 的第三个字段 <code v-pre>a</code>。</p>
<p>下面，为了便于举例，我们把<code v-pre>/etc/passwd</code> 文件保存成 <code v-pre>demo.txt</code>。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root:x:0:0:root:/root:/usr/bin/zsh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin:x:2:2:bin:/bin:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys:x:3:3:sys:/dev:/usr/sbin/nologin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync:x:4:65534:sync:/bin:/bin/sync</span></span></code></pre>
</div><p>这个文件的字段分隔符是冒号(<code v-pre>:</code>)，所以要用 <code v-pre>-F</code> 参数指定分隔符为冒号。然后，才能提取到它的第一个字段。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{ print $1 }'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span></code></pre>
</div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2>
<p>除了<code v-pre>$ + 数字</code>表示某个字段，<code v-pre>awk</code> 还提供其他一些变量。</p>
<p>变量 <code v-pre>NF</code> 表示当前行有多少个字段，因此<code v-pre>$NF</code> 就代表最后一个字段。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'this is a test'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $NF}'</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">test</span></span></code></pre>
</div><p><code v-pre>$(NF-1)</code> 代表倒数第二个字段。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $1, $(NF-1)}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">daemon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/sbin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin</span></span></code></pre>
</div><p>上面代码中，<code v-pre>print</code> 命令里面的逗号，表示输出的时候，两个部分之间使用空格分隔。</p>
<p>变量 <code v-pre>NR</code> 表示当前处理的是第几行。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print NR ") " $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) sync</span></span></code></pre>
</div><p>上面代码中，<code v-pre>print</code> 命令里面，如果原样输出字符，要放在双引号里面。</p>
<p><code v-pre>awk</code> 的其他内置变量如下。</p>
<blockquote>
<ul>
<li><code v-pre>FILENAME</code>: 当前文件名</li>
<li><code v-pre>FS</code>: 字段分隔符，默认是空格和制表符。</li>
<li><code v-pre>RS</code>: 行分隔符，用于分割每一行，默认是换行符。</li>
<li><code v-pre>OFS</code>: 输出字段的分隔符，用于打印时分隔字段，默认为空格。</li>
<li><code v-pre>ORS</code>: 输出记录的分隔符，用于打印时分隔记录，默认为换行符。</li>
<li><code v-pre>OFMT</code>: 数字输出的格式，默认为<code v-pre>％.6g</code>。</li>
</ul>
</blockquote>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<p><code v-pre>awk</code> 还提供了一些内置函数，方便对原始数据的处理。</p>
<p>函数 <code v-pre>toupper()</code> 用于将字符转为大写。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{ print toupper($1) }'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ROOT</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">DAEMON</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">BIN</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SYS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">SYNC</span></span></code></pre>
</div><p>上面代码中，第一个字段输出时都变成了大写。</p>
<p>其他常用函数如下。</p>
<blockquote>
<ul>
<li><code v-pre>tolower()</code>: 字符转为小写。</li>
<li><code v-pre>length()</code>: 返回字符串长度。</li>
<li><code v-pre>substr()</code>: 返回子字符串。</li>
<li><code v-pre>sin()</code>: 正弦。</li>
<li><code v-pre>cos()</code>: 余弦。</li>
<li><code v-pre>sqrt()</code>: 平方根。</li>
<li><code v-pre>rand()</code>: 随机数。</li>
</ul>
</blockquote>
<p><code v-pre>awk</code> 内置函数的完整列表，可以查看<a href="https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din" target="_blank" rel="noopener noreferrer">手册</a>。</p>
<h2 id="条件" tabindex="-1"><a class="header-anchor" href="#条件"><span>条件</span></a></h2>
<p><code v-pre>awk</code> 允许指定输出条件，只输出符合条件的行。</p>
<p>输出条件要写在动作的前面。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '条件 动作'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 文件名</span></span></code></pre>
</div><p>请看下面的例子。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '/usr/ {print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">daemon</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span></span></code></pre>
</div><p>上面代码中，<code v-pre>print</code> 命令前面是一个正则表达式，只输出包含 <code v-pre>usr</code> 的行。</p>
<p>下面的例子只输出奇数行，以及输出第三行以后的行。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出奇数行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'NR % 2 == 1 {print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 输出第三行以后的行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'NR >3 {print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子输出第一个字段等于指定值的行。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$1 == "root" {print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$1 == "root" || $1 == "bin" {print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bin</span></span></code></pre>
</div><h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句"><span>if 语句</span></a></h2>
<p><code v-pre>awk</code> 提供了 <code v-pre>if</code> 结构，用于编写复杂的条件。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{if ($1 > "m") print $1}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span></code></pre>
</div><p>上面代码输出第一个字段的第一个字符大于 <code v-pre>m</code> 的行。</p>
<p><code v-pre>if</code> 结构还可以指定 <code v-pre>else</code> 部分。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ':'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{if ($1 > "m") print $1; else print "---"}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span></code></pre>
</div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://gregable.com/2010/09/why-you-should-know-just-little-awk.html" target="_blank" rel="noopener noreferrer">An Awk tutorial by Example</a>, Greg Grothaus</li>
<li><a href="https://likegeeks.com/awk-command/" target="_blank" rel="noopener noreferrer">30 Examples for Awk Command in Text Processing</a>, Mokhtar Ebrahim</li>
</ul>
</div></template>


