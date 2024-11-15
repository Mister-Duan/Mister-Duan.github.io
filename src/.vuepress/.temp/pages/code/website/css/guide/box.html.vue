<template><div><p>CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。</p>
<!-- more -->
<h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍"><span>盒模型介绍</span></a></h2>
<p>下面的图片说明了盒子模型 (Box Model):</p>
<figure><img src="@source/code/website/css/guide/assets/box-model.gif" alt="Box Model 示意图" tabindex="0" loading="lazy"><figcaption>Box Model 示意图</figcaption></figure>
<p>不同部分的说明:</p>
<ul>
<li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code v-pre>width</code> 和 <code v-pre>height</code> 设置大小。</li>
<li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code v-pre>padding</code> 属性设置。</li>
<li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code v-pre>border</code> 属性设置。</li>
<li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code v-pre>margin</code> 属性设置。</li>
</ul>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p>
<h2 id="元素的宽度和高度" tabindex="-1"><a class="header-anchor" href="#元素的宽度和高度"><span>元素的宽度和高度</span></a></h2>
<p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code v-pre>padding</code> 和 <code v-pre>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p>
<CodeDemo id="code-demo-48" type="normal" title="%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6" code="eJw9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g==">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"box"</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px</p>
<p>元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px</p>
</CodeDemo>
<p>试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:</p>
<CodeDemo id="code-demo-61" type="normal" title="%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0" code="eJw1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo=">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"box"</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.box</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">220</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> gray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></CodeDemo>
<p>最终元素的总宽度计算公式是这样的:</p>
<p>元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框
元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距</p>
<p>元素的总高度最终计算公式是这样的:</p>
<p>元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框
元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>更多相关可见 <RouteLink to="/code/website/css/intro/box.html">盒模型</RouteLink></p>
</div>
</div></template>


