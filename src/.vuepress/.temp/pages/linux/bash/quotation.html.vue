<template><div><p>Bash 只有一种数据类型，就是字符串。不管用户输入什么数据，Bash 都视为字符串。因此，字符串相关的引号和转义，对 Bash 来说就非常重要。</p>
<!-- more -->
<h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义"><span>转义</span></a></h2>
<p>某些字符在 Bash 里面有特殊含义(比如<code v-pre>$</code>、<code v-pre>&amp;</code>、<code v-pre>*</code>)。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $date</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span></span></code></pre>
</div><p>上面例子中，输出 <code v-pre>$date</code> 不会有任何结果，因为 <code v-pre>$</code> 是一个特殊字符。</p>
<p>如果想要原样输出这些特殊字符，就必须在它们前面加上反斜杠，使其变成普通字符。这就叫做“转义”(escape)。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">date</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$date</span></span></code></pre>
</div><p>上面命令中，只有在特殊字符 <code v-pre>$</code> 前面加反斜杠，才能原样输出。</p>
<p>反斜杠本身也是特殊字符，如果想要原样输出反斜杠，就需要对它自身转义，连续使用两个反斜线 (<code v-pre>\\</code>)。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \\</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span></code></pre>
</div><p>上面例子输出了反斜杠本身。</p>
<p>反斜杠除了用于转义，还可以表示一些不可打印的字符。</p>
<ul>
<li><code v-pre>\a</code>: 响铃</li>
<li><code v-pre>\b</code>: 退格</li>
<li><code v-pre>\n</code>: 换行</li>
<li><code v-pre>\r</code>: 回车</li>
<li><code v-pre>\t</code>: 制表符</li>
</ul>
<p>如果想要在命令行使用这些不可打印的字符，可以把它们放在引号里面，然后使用 <code v-pre>echo</code> 命令的 <code v-pre>-e</code> 参数。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">atb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "a\tb"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        b</span></span></code></pre>
</div><p>上面例子中，命令行直接输出不可打印字符，Bash 不能正确解释。必须把它们放在引号之中，然后使用 <code v-pre>echo</code> 命令的 <code v-pre>-e</code> 参数。</p>
<p>由于反斜杠可以对换行符转义，使得 Bash 认为换行符是一个普通字符，从而可以将一行命令写成多行。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/path/to/foo </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/path/to/bar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等同于</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/bar</span></span></code></pre>
</div><p>上面例子中，如果一条命令过长，就可以在行尾使用反斜杠，将其改写成多行。这是常见的多行命令的写法。</p>
<h2 id="单引号" tabindex="-1"><a class="header-anchor" href="#单引号"><span>单引号</span></a></h2>
<p>Bash 允许字符串放在单引号或双引号之中，加以引用。</p>
<p>单引号用于保留字符的字面含义，各种特殊字符在单引号里面，都会变为普通字符，比如星号 (<code v-pre>*</code>)、美元符号( <code v-pre>$</code>)、反斜杠 (<code v-pre>\</code>)等。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '*'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$USER'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$USER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$((2+2))'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$((</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2+2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '$(echo foo)'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，单引号使得 Bash 扩展、变量引用、算术运算和子命令，都失效了。如果不使用单引号，它们都会被 Bash 自动扩展。</p>
<p>由于反斜杠在单引号里面变成了普通字符，所以如果单引号之中，还要使用单引号，不能使用转义，需要在外层的单引号前面加上一个美元符号 (<code v-pre>$</code>)，然后再对里层的单引号转义。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 不正确</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> it's</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"># 不正确</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">$ echo 'it</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">s'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"># 正确</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">$ echo $'it</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">s'</span></span></code></pre>
</div><p>不过，更合理的方法是改在双引号之中使用单引号。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "it's"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">it</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'s</span></span></code></pre>
</div><h2 id="双引号" tabindex="-1"><a class="header-anchor" href="#双引号"><span>双引号</span></a></h2>
<p>双引号比单引号宽松，可以保留大部分特殊字符的本来含义，但是三个字符除外: 美元符号(<code v-pre>$</code>)、反引号(<code v-pre>`</code>)和反斜杠(<code v-pre>\</code>)。也就是说，这三个字符在双引号之中，会被 Bash 自动扩展。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "*"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">*</span></span></code></pre>
</div><p>上面例子中，通配符 <code v-pre>*</code> 放在双引号之中，就变成了普通字符，会原样输出。这一点需要特别留意，双引号里面不会进行文件名扩展。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$SHELL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">`"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Mon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Jan</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 27</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 13:33:18</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> CST</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2020</span></span></code></pre>
</div><p>上面例子中，美元符号和反引号在双引号中，都保持特殊含义。美元符号用来引用变量，反引号则是执行子命令。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "I'd say: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hello!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">I</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'d say: "hello!"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$ echo "\\"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">\</span></span></code></pre>
</div><p>上面例子中，反斜杠在双引号之中保持特殊含义，用来转义。所以，可以使用反斜杠，在双引号之中插入双引号，或者插入反斜杠本身。</p>
<p>由于双引号将换行符解释为普通字符，所以可以利用双引号，在命令行输入多行文本。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "hello</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">world"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hello</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">world</span></span></code></pre>
</div><p>上面命令中，Bash 正常情况下会将换行符解释为命令结束，但是换行符在双引号之中就是普通字符，所以可以输入多行。<code v-pre>echo</code> 命令会将换行符原样输出，显示的时候正常解释为换行。</p>
<p>双引号的另一个常见的使用场合是，文件名包含空格。这时就必须使用双引号，将文件名放在里面。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "two words.txt"</span></span></code></pre>
</div><p>上面命令中，<code v-pre>two words.txt</code> 是一个包含空格的文件名，否则就会被 Bash 当作两个文件。</p>
<p>双引号会原样保存多余的空格。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "this is a     test"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">this</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     test</span></span></code></pre>
</div><p>双引号还有一个作用，就是保存原始命令的输出格式。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 单行输出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">一月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2020</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 日</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 一</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 二</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 三</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 四</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 五</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 六</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ...</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 31</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 原始格式输出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">)"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      一月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2020</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">日</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 一</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 二</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 三</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 四</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 五</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 六</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">          1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 5</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  6</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  8</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 11</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">12</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 13</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 14</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 15</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 16</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 17</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 18</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">19</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 21</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 22</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 23</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 24</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 25</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">26</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 27</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 28</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 29</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 30</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 31</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，如果 <code v-pre>$(cal)</code> 不放在双引号之中，<code v-pre>echo</code> 就会将所有结果以单行输出，丢弃了所有原始的格式。</p>
<h2 id="here-文档" tabindex="-1"><a class="header-anchor" href="#here-文档"><span>Here 文档</span></a></h2>
<p>Here 文档(here document)是一种输入多行字符串的方法，格式如下。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">token</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">text</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">token</span></span></code></pre>
</div><p>它的格式分成开始标记(<code v-pre>&lt;&lt; token</code>)和结束标记(<code v-pre>token</code>)。开始标记是两个小于号 + Here 文档的名称，名称可以随意取，后面必须是一个换行符；结束标记是单独一行顶格写的 Here 文档名称，如果不是顶格，结束标记不起作用。两者之间就是多行字符串的内容。</p>
<p>下面是一个通过 Here 文档输出 HTML 代码的例子。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_EOF_</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;html></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;head></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    &#x3C;title></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    The title of your page</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    &#x3C;/title></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;/head></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;body></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    Your page content goes here.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;/body></span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;/html></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_EOF_</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here 文档内部会发生变量替换，同时支持反斜杠转义，但是不支持通配符扩展，双引号和单引号也失去语法作用，变成了普通字符。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo='hello world'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_example_</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_example_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"hello world"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'hello world'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，变量 <code v-pre>$foo</code> 发生了替换，但是双引号和单引号都原样输出了，表明它们已经失去了引用的功能。</p>
<p>如果不希望发生变量替换，可以把 Here 文档的开始标记放在单引号之中。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo='hello world'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">'_example_'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">$foo</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"$foo"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'$foo'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_example_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'$foo'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，Here 文档的开始标记(<code v-pre>_example_</code>)放在单引号之中，导致变量替换失效了。</p>
<p>Here 文档的本质是重定向，它将字符串重定向输出给某个命令，相当于包含了 <code v-pre>echo</code> 命令。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">token</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  string</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">token</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等同于</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">command</span></span></code></pre>
</div><p>上面代码中，Here 文档相当于 <code v-pre>echo</code> 命令的重定向。</p>
<p>所以，Here 字符串只适合那些可以接受标准输入作为参数的命令，对于其他命令无效，比如 <code v-pre>echo</code> 命令就不能用 Here 文档作为参数。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_example_</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hello</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_example_</span></span></code></pre>
</div><p>上面例子不会有任何输出，因为 Here 文档对于 <code v-pre>echo</code> 命令无效。</p>
<p>此外，Here 文档也不能作为变量的值，只能用于命令的参数。</p>
<h2 id="here-字符串" tabindex="-1"><a class="header-anchor" href="#here-字符串"><span>Here 字符串</span></a></h2>
<p>Here 文档还有一个变体，叫做 Here 字符串(Here string)，使用三个小于号(<code v-pre>&lt;&lt;&lt;</code>)表示。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;&#x3C;&#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">string</span></span></code></pre>
</div><p>它的作用是将字符串通过标准输入，传递给命令。</p>
<p>有些命令直接接受给定的参数，与通过标准输入接受参数，结果是不一样的。所以才有了这个语法，使得将字符串通过标准输入传递给命令更方便，比如 <code v-pre>cat</code> 命令只接受标准输入传入的字符串。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;&#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'hi there'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等同于</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'hi there'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span></span></code></pre>
</div><p>上面的第一种语法使用了 Here 字符串，要比第二种语法看上去语义更好，也更简洁。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> md5sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;&#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'ddd'</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 等同于</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'ddd'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">md5sum</span></span></code></pre>
</div><p>上面例子中，<code v-pre>md5sum</code> 命令只能接受标准输入作为参数，不能直接将字符串放在命令后面，会被当作文件名，即 <code v-pre>md5sum ddd</code> 里面的 <code v-pre>ddd</code> 会被解释成文件名。这时就可以用 Here 字符串，将字符串传给 <code v-pre>md5sum</code> 命令。</p>
</div></template>


