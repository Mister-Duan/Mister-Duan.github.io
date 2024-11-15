<template><div><p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)。</p>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写 CSS:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>您可以很方便的创建一个 <code v-pre>&lt;style&gt;</code> 标签并将上述样式表作为该标签的内容，这样页面所有段落的文字就会变成红色。</p>
<h2 id="css-规则集" tabindex="-1"><a class="header-anchor" href="#css-规则集"><span>CSS 规则集</span></a></h2>
<p>CSS 规则集由两个主要的部分构成: 选择器，以及一条或多条声明:</p>
<figure><img src="@source/code/website/css/guide/assets/css-rule.jpg" alt="CSS 规则图示" tabindex="0" loading="lazy"><figcaption>CSS 规则图示</figcaption></figure>
<ul>
<li>
<p><strong>选择器</strong> (Selector): 通常是您需要改变样式的 HTML 元素。</p>
</li>
<li>
<p><strong>声明</strong> (Declaration): 每条声明由一个属性和一个值组成。每个属性有一个值。</p>
<ul>
<li><strong>属性</strong> (Properties): 您希望设置的样式属性 (style attribute)，也是改变 HTML 元素样式的途径。(本例中 color 就是 <code v-pre>&lt;h1&gt;</code> 元素的属性) CSS 中，由编写人员决定修改哪个属性以改变规则。</li>
<li><strong>属性的值</strong> (Property value): 在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值 (我们除了 blue 之外还有很多属性值可以用于 color )。</li>
</ul>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">语法</p>
<ul>
<li>每个规则集声明都应该包含在成对的花括号 <code v-pre>{}</code> 里</li>
<li>在每个声明里要用冒号 <code v-pre>:</code> 将属性与属性值分隔开</li>
<li>每个声明总是以分号 <code v-pre>;</code> 结束，以分隔多个声明。</li>
</ul>
<p>更多声明详情，请见 <RouteLink to="/code/website/css/guide/declaration.html">CSS → 快速上手 → 声明</RouteLink></p>
</div>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  text-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>CSS 块内的每一条声明都必须以分号结束，否则会报错(最后一条除外)，而每个 CSS 块不是以分号结束的!</p>
</div>
<h3 id="css-注释" tabindex="-1"><a class="header-anchor" href="#css-注释"><span>CSS 注释</span></a></h3>
<p>与 HTML 一样，CSS 也可以包含注释来解释您的代码，浏览器会忽略它。</p>
<p>CSS 注释以 <code v-pre>/*</code> 开始, 以 <code v-pre>*/</code> 结束。</p>
<p><strong>案例</strong>:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 这是个注释 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  text-align: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">center</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  /* 这是另一个注释 */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-family: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">arial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container tip">
<p class="hint-container-title">总结</p>
<ul>
<li>样式定义如何显示 HTML 元素</li>
<li>样式通常存储在样式表中</li>
<li>CSS 可以将多个样式层叠为一</li>
</ul>
</div>
<h2 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器"><span>CSS 选择器</span></a></h2>
<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
<ul>
<li><RouteLink to="/code/website/css/guide/selector.html">查看详情</RouteLink></li>
</ul>
<h2 id="引入-css" tabindex="-1"><a class="header-anchor" href="#引入-css"><span>引入 CSS</span></a></h2>
<p>共有三种方式引入并应用 CSS。</p>
<ul>
<li><RouteLink to="/code/website/css/guide/import.html">查看详情</RouteLink></li>
</ul>
<h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>@ 规则</span></a></h2>
<p><code v-pre>@rules</code> 是一些特殊的规则，为 CSS 提供了一些关于如何表现的指导。有些 <code v-pre>@rules</code> 规则很简单，有规则名和值。</p>
<p>例如，要将额外的样式表导入主 CSS 样式表，可以使用 <code v-pre>@import</code>:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "styles2.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
</div><p>最常见的 <code v-pre>@rules</code> 之一是 <code v-pre>@media</code>，它允许您使用 媒体查询 来应用 CSS，仅当某些条件成立 (例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时)。</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">pink</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">540</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>更多详情，请见 <RouteLink to="/code/website/css/intro/media.html">CSS → 媒体查询</RouteLink></p>
</div>
</div></template>


