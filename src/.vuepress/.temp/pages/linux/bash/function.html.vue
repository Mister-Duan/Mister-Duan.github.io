<template><div><p>本章介绍 Bash 函数的用法。</p>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>函数(function)是可以重复使用的代码片段，有利于代码的复用。它与别名(alias)的区别是，别名只适合封装简单的单个命令，函数则可以封装复杂的多行命令。</p>
<p>函数总是在当前 Shell 执行，这是跟脚本的一个重大区别，Bash 会新建一个子 Shell 执行脚本。如果函数与脚本同名，函数会优先执行。但是，函数的优先级不如别名，即如果函数与别名同名，那么别名优先执行。</p>
<p>Bash 函数定义的语法有两种。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第一种</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # codes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第二种</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # codes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>上面代码中，<code v-pre>fn</code> 是自定义的函数名，函数代码就写在大括号之中。这两种写法是等价的。</p>
<p>下面是一个简单函数的例子。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Hello </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>上面代码中，函数体里面的 <code v-pre>$1</code> 表示函数调用时的第一个参数。</p>
<p>调用时，就直接写函数名，参数跟在函数名后面。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world</span></span></code></pre>
</div><p>下面是一个多行函数的例子，显示当前日期时间。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">today</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Today's date is: "</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +"%A, %B %-d, %Y"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>删除一个函数，可以使用 <code v-pre>unset</code> 命令。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">unset</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> functionName</span></span></code></pre>
</div><p>查看当前 Shell 已经定义的所有函数，可以使用 <code v-pre>declare</code> 命令。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">declare</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span></span></code></pre>
</div><p>上面的 <code v-pre>declare</code> 命令不仅会输出函数名，还会输出所有定义。输出顺序是按照函数名的字母表顺序。由于会输出很多内容，最好通过管道命令配合 <code v-pre>more</code> 或 <code v-pre>less</code> 使用。</p>
<p><code v-pre>declare</code> 命令还支持查看单个函数的定义。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">declare</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> functionName</span></span></code></pre>
</div><p><code v-pre>declare -F</code> 可以输出所有已经定义的函数名，不含函数体。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">declare</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -F</span></span></code></pre>
</div><h2 id="参数变量" tabindex="-1"><a class="header-anchor" href="#参数变量"><span>参数变量</span></a></h2>
<p>函数体内可以使用参数变量，获取函数参数。函数的参数变量，与脚本参数变量是一致的。</p>
<ul>
<li><code v-pre>$1</code> ~ <code v-pre>$9</code>: 函数的第一个到第 9 个的参数。</li>
<li><code v-pre>$0</code>: 函数所在的脚本名。</li>
<li><code v-pre>$#</code>: 函数的参数总数。</li>
<li><code v-pre>$@</code>: 函数的全部参数，参数之间使用空格分隔。</li>
<li><code v-pre>$*</code>: 函数的全部参数，参数之间使用变量 <code v-pre>$IFS</code> 值的第一个字符分隔，默认为空格，但是可以自定义。</li>
</ul>
<p>如果函数的参数多于 9 个，那么第 10 个参数可以用 <code v-pre>${10}</code> 的形式引用，以此类推。</p>
<p>下面是一个示例脚本 <code v-pre>test.sh</code>。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># test.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> alice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "alice: </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">: </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$1</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> $2</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> $3</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> $4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> arguments"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">alice</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wonderland</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该脚本，结果如下。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">alice:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wonderland</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">.sh:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wonderland</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> arguments</span></span></code></pre>
</div><p>上面例子中，由于函数 <code v-pre>alice</code> 只有第一个和第二个参数，所以第三个和第四个参数为空。</p>
<p>下面是一个日志函数的例子。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> log_msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "[`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '+ %F %T'` ]: </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>使用方法如下。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> log_msg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "This is sample log message"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[ 2018-08-16 19:56:34 ]: This is sample log message</span></span></code></pre>
</div><h2 id="return-命令" tabindex="-1"><a class="header-anchor" href="#return-命令"><span>return 命令</span></a></h2>
<p><code v-pre>return</code> 命令用于从函数返回一个值。函数执行到这条命令，就不再往下执行了，直接返回了。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> func_return_value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>函数将返回值返回给调用者。如果命令行直接执行函数，下一个命令可以用 <code v-pre>$?</code> 拿到返回值。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> func_return_value</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Value returned by function is: </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$?</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Value</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> returned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> function</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> is:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span></span></code></pre>
</div><p><code v-pre>return</code> 后面不跟参数，只用于返回也是可以的。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  commands</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="全局变量和局部变量-local-命令" tabindex="-1"><a class="header-anchor" href="#全局变量和局部变量-local-命令"><span>全局变量和局部变量，local 命令</span></a></h2>
<p>Bash 函数体内直接声明的变量，属于全局变量，整个脚本都可以读取。这一点需要特别小心。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 脚本 test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "fn: foo = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "global: foo = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
</div><p>上面脚本的运行结果如下。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span></code></pre>
</div><p>上面例子中，变量 <code v-pre>$foo</code> 是在函数 <code v-pre>fn</code> 内部声明的，函数体外也可以读取。</p>
<p>函数体内不仅可以声明全局变量，还可以修改全局变量。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $foo</span></span></code></pre>
</div><p>上面代码执行后，输出的变量 <code v-pre>$foo</code> 值为 2。</p>
<p>函数里面可以用 <code v-pre>local</code> 命令声明局部变量。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 脚本 test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> () {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  local</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> foo</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "fn: foo = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "global: foo = </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span></code></pre>
</div><p>上面脚本的运行结果如下。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">global:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span></span></code></pre>
</div><p>上面例子中，<code v-pre>local</code> 命令声明的 <code v-pre>$foo</code> 变量，只在函数体内有效，函数体外没有定义。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li><a href="https://www.linuxtechi.com/define-use-functions-linux-shell-script/" target="_blank" rel="noopener noreferrer">How to define and use functions in Linux Shell Script</a>, by Pradeep Kumar</li>
</ul>
</div></template>


