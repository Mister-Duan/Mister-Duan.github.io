<template><div><p>JavaScript 语言的每一个值，都属于某一种数据类型。</p>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>JavaScript 的数据类型，共有六种。(ES6 又新增了第七种 Symbol 类型的值，本教程不涉及。)</p>
<ul>
<li>数值(number): 整数和小数(比如 <code v-pre>1</code> 和 <code v-pre>3.14</code>)</li>
<li>字符串(string): 文本(比如 <code v-pre>Hello World</code>)。</li>
<li>布尔值(boolean): 表示真伪的两个特殊值，即 <code v-pre>true</code>(真)和 <code v-pre>false</code>(假)</li>
<li><code v-pre>undefined</code>: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值</li>
<li><code v-pre>null</code>: 表示空值，即此处的值为空。</li>
<li>对象(object): 各种值组成的集合。</li>
</ul>
<p>通常，数值、字符串、布尔值这三种类型，合称为原始类型(primitive type)的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型(complex type)的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于 <code v-pre>undefined</code> 和 <code v-pre>null</code>，一般将它们看成两个特殊值。</p>
<p>对象是最复杂的数据类型，又可以分成三个子类型。</p>
<ul>
<li>狭义的对象(object)</li>
<li>数组(array)</li>
<li>函数(function)</li>
</ul>
<p>狭义的对象和数组是两种不同的数据组合方式，除非特别声明，本教程的“对象”都特指狭义的对象。函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。</p>
<h2 id="typeof-运算符" tabindex="-1"><a class="header-anchor" href="#typeof-运算符"><span>typeof 运算符</span></a></h2>
<p>JavaScript 有三种方法，可以确定一个值到底是什么类型。</p>
<ul>
<li><code v-pre>typeof</code> 运算符</li>
<li><code v-pre>instanceof</code> 运算符</li>
<li><code v-pre>Object.prototype.toString</code> 方法</li>
</ul>
<p><code v-pre>instanceof</code> 运算符和 <code v-pre>Object.prototype.toString</code> 方法，将在后文介绍。这里介绍 <code v-pre>typeof</code> 运算符。</p>
<p><code v-pre>typeof</code> 运算符可以返回一个值的数据类型。</p>
<p>数值、字符串、布尔值分别返回 <code v-pre>number</code>、<code v-pre>string</code>、<code v-pre>boolean</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "number"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "string"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "boolean"</span></span></code></pre>
</div><p>函数返回 <code v-pre>function</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "function"</span></span></code></pre>
</div><p><code v-pre>undefined</code> 返回 <code v-pre>undefined</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> undefined</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "undefined"</span></span></code></pre>
</div><p>利用这一点，<code v-pre>typeof</code> 可以用来检查一个没有声明的变量，而不报错。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// ReferenceError: v is not defined</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "undefined"</span></span></code></pre>
</div><p>上面代码中，变量 <code v-pre>v</code> 没有用 <code v-pre>const</code> <code v-pre>var</code> 或 <code v-pre>let</code> 命令声明，直接使用就会报错。但是，放在 <code v-pre>typeof</code> 后面，就不报错了，而是返回 <code v-pre>undefined</code>。</p>
<p>实际编程中，这个特点通常用在判断语句。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 错误的写法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// ReferenceError: v is not defined</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 正确的写法</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "undefined"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象返回 <code v-pre>object</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "object"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "object"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "object"</span></span></code></pre>
</div><p>上面代码中，空数组(<code v-pre>[]</code>)的类型也是 <code v-pre>object</code>，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下，<code v-pre>instanceof</code> 运算符可以区分数组和对象。<code v-pre>instanceof</code> 运算符的详细解释，请见《面向对象编程》一章。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> o</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">o</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> instanceof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> instanceof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Array</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span></code></pre>
</div><p><code v-pre>null</code> 返回 <code v-pre>object</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "object"</span></span></code></pre>
</div><p><code v-pre>null</code> 的类型是 <code v-pre>object</code>，这是由于历史原因造成的。1995 年的 JavaScript 语言第一版，只设计了五种数据类型(对象、整数、浮点数、字符串和布尔值)，没考虑 <code v-pre>null</code>，只把它当作 <code v-pre>object</code> 的一种特殊值。后来 <code v-pre>null</code> 独立出来，作为一种单独的数据类型，为了兼容以前的代码，<code v-pre>typeof null</code> 返回 <code v-pre>object</code> 就没法改变了。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>
<ul>
<li>Axel Rauschmayer, <a href="http://www.2ality.com/2011/11/improving-typeof.html" target="_blank" rel="noopener noreferrer">Improving the JavaScript typeof operator</a></li>
</ul>
</div></template>


