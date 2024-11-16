<template><div><p>JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。</p>
<ul>
<li>数值 (number): 整数和小数(比如 <code v-pre>1</code> 和 <code v-pre>3.14</code>)</li>
<li>字符串 (string): 文本(比如 <code v-pre>Hello World</code>)。</li>
<li>布尔值 (boolean): 表示真伪的两个特殊值，即 <code v-pre>true</code> (真) 和 <code v-pre>false</code> (假)</li>
<li><code v-pre>undefined</code>: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值</li>
<li><code v-pre>null</code>: 表示空值，即此处的值为空。</li>
<li>对象 (object): 各种值组成的集合。</li>
</ul>
<!-- more -->
<ul>
<li><RouteLink to="/code/language/js/types/">深入了解数据类型</RouteLink></li>
</ul>
<h2 id="number" tabindex="-1"><a class="header-anchor" href="#number"><span>Number</span></a></h2>
<p>JavaScript 不区分整数和浮点数，统一用 <code v-pre>Number</code> 表示，以下都是合法的 <code v-pre>Number</code> 类型:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 整数 123</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.456</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 浮点数 0.456</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1.2345e3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 科学计数法表示 1.2345x1000，等同于 1234.5</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">99</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 负数</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">NaN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// NaN 表示 Not a Number，当无法计算结果时用 NaN 表示</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">Infinity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Infinity 表示无限大，当数值超过了 JavaScript 的 Number 所能表示的最大值时，就表示为 Infinity</span></span></code></pre>
</div><ul>
<li><RouteLink to="/code/language/js/types/number.html">深入了解 Number</RouteLink></li>
</ul>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2>
<p>字符串 (String) 是以单引号 <code v-pre>'</code> 或双引号 <code v-pre>&quot;</code> 括起来的任意文本，比如 <code v-pre>'abc'</code>，<code v-pre>&quot;xyz&quot;</code> 等等。</p>
<ul>
<li><RouteLink to="/code/language/js/guide/string.html">字符串入门</RouteLink></li>
<li><RouteLink to="/code/language/js/types/string.html">深入了解 String</RouteLink></li>
</ul>
<h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值"><span>布尔值</span></a></h2>
<p>布尔值 (Boolean) 和布尔代数的表示完全一致，一个布尔值只有 <code v-pre>true</code>、<code v-pre>false</code> 两种值，要么是 <code v-pre>true</code>，要么是 <code v-pre>false</code>，可以直接用 <code v-pre>true</code>、<code v-pre>false</code> 表示布尔值，也可以通过布尔运算计算出来:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 这是一个 true 值</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 这是一个 false 值</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ></span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 这是一个 true 值</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> >=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 这是一个 false 值</span></span></code></pre>
</div><p>下列运算符会返回布尔值:</p>
<ul>
<li>前置逻辑运算符: <code v-pre>!</code> (Not)</li>
<li>相等运算符: <code v-pre>===</code>，<code v-pre>!==</code>，<code v-pre>==</code>，<code v-pre>!=</code></li>
<li>比较运算符: <code v-pre>&gt;</code>，<code v-pre>&gt;=</code>，<code v-pre>&lt;</code>，<code v-pre>&lt;=</code></li>
</ul>
<hr>
<ul>
<li><RouteLink to="/code/language/js/guide/boolean.html">布尔值入门</RouteLink></li>
</ul>
<h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined"><span>null 和 undefined</span></a></h2>
<p><code v-pre>null</code> 表示一个 “空” 的值，它和 <code v-pre>0</code> 以及空字符串 <code v-pre>''</code> 不同，<code v-pre>0</code> 是一个数值，<code v-pre>''</code> 表示长度为 0 的字符串，而 <code v-pre>null</code> 表示“空”。</p>
<p>在其他语言中，也有类似 JavaScript 的 <code v-pre>null</code> 的表示，例如 Java 也用 <code v-pre>null</code>，Swift 用 <code v-pre>nil</code>，Python 用 <code v-pre>None</code> 表示。但是，在 JavaScript 中，还有一个和 <code v-pre>null</code> 类似的 <code v-pre>undefined</code>，它表示 “未定义”。</p>
<p>JavaScript 的设计者希望用 <code v-pre>null</code> 表示一个空的值，而 <code v-pre>undefined</code> 表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用 <code v-pre>null</code>。<code v-pre>undefined</code> 仅仅在判断函数参数是否传递的情况下有用。</p>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2>
<p>数组 (Array) 是一组<strong>按顺序</strong>排列的<strong>集合</strong>，集合的每个值称为<strong>元素</strong>。JavaScript 的数组可以包括任意数据类型。例如:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3.14</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span></code></pre>
</div><p>上述数组包含 6 个元素。数组用 <code v-pre>[]</code> 表示，元素之间用 <code v-pre>,</code> 分隔。</p>
<ul>
<li><RouteLink to="/code/language/js/guide/array.html">数组入门</RouteLink></li>
<li><RouteLink to="/code/language/js/types/array.html">深入了解 Array</RouteLink></li>
</ul>
<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h2>
<p>JavaScript 的对象 (Object) 是一组由 <strong><code v-pre>键-值</code></strong> 组成的<strong>无序</strong>集合，例如:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> person</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Mister.Duan"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  isHandsome</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  birth</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1998</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  school</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "No.1 Middle School"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  height</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1.76</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  weight</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  car</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
</div><p>JavaScript 对象的键都是字符串类型，值可以是任意数据类型。上述 <code v-pre>person</code> 对象一共定义了 6 个键值对，其中每个键又称为对象的属性，例如，<code v-pre>person</code> 的 <code v-pre>name</code> 属性为 <code v-pre>'Bob'</code>，<code v-pre>zipcode</code> 属性为 <code v-pre>null</code>。</p>
<p>要获取一个对象的属性，我们用 <code v-pre>Object.Key</code> 的方式:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 'Mister.Duan'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">zipcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// null</span></span></code></pre>
</div><ul>
<li><RouteLink to="/code/language/js/guide/object.html">对象入门</RouteLink></li>
<li><RouteLink to="/code/language/js/types/object.html">深入了解 Object</RouteLink></li>
</ul>
</div></template>


