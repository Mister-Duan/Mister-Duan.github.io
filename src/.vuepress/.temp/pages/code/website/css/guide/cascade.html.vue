<template><div><p>本文介绍 CSS 的一些最基本的概念: 层叠、优先级和继承。</p>
<!-- more -->
<h2 id="冲突规则" tabindex="-1"><a class="header-anchor" href="#冲突规则"><span>冲突规则</span></a></h2>
<p>CSS 代表层叠样式表，我们需要理解第一个词 cascading。</p>
<p><strong>Cascade</strong>, 和它密切相关的概念是 <strong>Specificity</strong>，决定在发生冲突的时候应该使用哪条规则。</p>
<p>这里也有继承的概念，也就是在默认情况下，一些 CSS 属性继承当前元素的父元素上设置的值，有些则不继承。这也可能导致一些和期望不同的结果。</p>
<h3 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠"><span>层叠</span></a></h3>
<p>Style sheets cascade(样式表层叠) 决定了 CSS 规则的顺序很重要。</p>
<p>当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。</p>
<p><strong>案例</strong>: 我们有两个关于 <code v-pre>h1</code> 的规则。这些规则有相同的优先级，顺序在最后的生效，所以 <code v-pre>h1</code> 最后显示为蓝色。</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h3>
<p>浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度:</p>
<ul>
<li>一个元素选择器不是很具体 (它会选择页面上该类型的所有元素)，所以它的优先级就会低一些。</li>
<li>一个类选择器稍微具体点 (它会选择该页面中有特定 class 属性值的元素)，所以它的优先级就要高一点。</li>
</ul>
<CodeDemo id="code-demo-48" type="normal" title="%E6%A1%88%E4%BE%8B" code="eJxNjTEOgzAMAL/iem6pWCll6tofeHETq46UOFIME+LvILEwn+5uRZ1LxgFH7SFkdn8TFk72UOGY7E84fZPP0rrPwgbJQdmi1yK38an9RIZ3DO5Hort6sJIBhJprG6BJfJFtZGTH5kp+eZET4bYD7BAvdw==">
<p>上面的 <code v-pre>h1</code> 会显示红色 (类选择器有更高的优先级，即使元素选择器顺序在它后面)。</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main-heading"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Mister.Duan is handsome!&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.main-heading</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></CodeDemo>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3>
<p>一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。</p>
<p><strong>案例</strong>: 如果您设置一个元素的 <code v-pre>color</code> 和 <code v-pre>font-family</code> ，默认情况下每个在里面的元素也都会有相同的属性。</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* 整个文档的文字默认情况下都是蓝的，除非针对性的设置为其他颜色 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>一些属性是不能继承的。比如您在一个元素上设置 <code v-pre>width: 50%</code> ，所有的后代不会是父元素的宽度的 50%。如果这个也可以继承的话，CSS 就会很难使用了!</p>
</div>
<h2 id="理解继承" tabindex="-1"><a class="header-anchor" href="#理解继承"><span>理解继承</span></a></h2>
<p>我们从继承开始。下面的例子中我们有一个 <code v-pre>ul</code>，里面有两个无序列表。我们已经给 <code v-pre>&lt;ul&gt;</code> 设置了 <code v-pre>border</code>， <code v-pre>padding</code> 和 <code v-pre>color</code>.</p>
<p><code v-pre>color</code> 应用在直接子元素，也影响其他后代，如子元素 <code v-pre>&lt;li&gt;</code>，和第一个嵌套列表中的子项。然后添加了一个 <code v-pre>special</code> 类到第二个嵌套列表。该类声明了不同的颜色。然后通过它的子元素继承。</p>
<CodeDemo id="code-demo-79" type="normal" title="%E7%BB%A7%E6%89%BF%E6%A1%88%E4%BE%8B" code="eJx9UDFuwzAM/Aqhrq0DO5vrZu/UpaMWmWJjobQkSA5SIMjfK9uy4wRoJ+nueIcjL6Ibeha1aE4MyCrGNyl6ZawUB2kBGjaH94F6+LDU7BJYyPEFmKTPs5tRysj8PFMV5eq5cdWGa3bZ8md2F4jW9LVh9IRGcS65ZC9/gH1R3sC21jKaBh7KbZVtxbuaM3hYaf/vShmLZ4ExpkMX43XhMk6gYxdqCNQSovKn4JleR6F1QVNSKv8D0bHR8ISIk+SV1sYeayipT8RVWmmLfI671JYVfk+WL2eHlzOZYzck2rGefeL6CwJVkuM=">
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"main"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>Item One&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Item Two</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2.1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2.2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Item Three</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"special"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        3.1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3.1.1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3.1.2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3.2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">ul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF">rebeccapurple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">ccc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.special</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<p>像 <code v-pre>width</code> (上面提到的), <code v-pre>margin</code>, <code v-pre>padding</code>, 和 <code v-pre>border</code> 不会被继承。如果 <code v-pre>border</code> 可以被继承，每个列表和列表项都会获得一个边框 — 可能就不是我们想要的结果!</p>
<p>哪些属性属于默认继承很大程度上是由常识决定的。</p>
<h3 id="控制继承" tabindex="-1"><a class="header-anchor" href="#控制继承"><span>控制继承</span></a></h3>
<p>CSS 为控制继承提供了四个特殊的通用属性值。每个 CSS 属性都接收这些值。</p>
<ul>
<li><code v-pre>inherit</code>: 使子元素属性和父元素相同。实际上就是 &quot;开启继承&quot;.</li>
<li><code v-pre>initial</code>: 与浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 <code v-pre>inherit</code>。</li>
<li><code v-pre>unset</code>: 将属性重置为自然值，也就是如果属性是自然继承那么就是 <code v-pre>inherit</code>，否则和 <code v-pre>initial</code> 一样</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>还有一个属性 <code v-pre>revert</code>，但只有很少的浏览器支持。</p>
</div>
<h3 id="重设所有属性值" tabindex="-1"><a class="header-anchor" href="#重设所有属性值"><span>重设所有属性值</span></a></h3>
<p>CSS 的缩写属性 <code v-pre>all</code> 可以用于同时将这些继承值中的一个应用于(几乎)所有属性。它的值可以是其中任意一个(<code v-pre>inherit</code>, <code v-pre>initial</code>, <code v-pre>unset</code>, <code v-pre>revert</code>)。这是一种撤销对样式所做更改的简便方法，以便回到默认状态。</p>
<CodeDemo id="code-demo-123" type="normal" title="%E9%87%8D%E8%AE%BE%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7%E5%80%BC" code="eJx9jk0OgjAQha8ymbVI4hIrp3DJBtoKhLGDnZJgCHe3SIywYfn+vrwJm/AkzFBVxLp7DRxsXjgA1ef3phX42xCVhDdZo9I+dlS6m0Rj09VUitwKfLRjEiKnwAOq43BExhNqkfhxs5oWWlXqrvY8OJNoJvYZeGuu34S9sVFf+hGEqTVQe2tdzObl6fl3a+WURBkMTmxYCzh/AK6CY9I=">
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>This blockquote is styled&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"fix-this"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>This blockquote is not styled&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  background-color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.fix-this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  all: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">unset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></CodeDemo>
<h2 id="理解层叠" tabindex="-1"><a class="header-anchor" href="#理解层叠"><span>理解层叠</span></a></h2>
<p>有三个因素需要考虑，根据重要性排序如下:</p>
<ol>
<li>重要程度</li>
<li>优先级</li>
<li>资源顺序</li>
</ol>
<p>我们从下往上，看看浏览器是如何决定该应用哪个 CSS 规则的。</p>
<h3 id="资源顺序" tabindex="-1"><a class="header-anchor" href="#资源顺序"><span>资源顺序</span></a></h3>
<p>我们已经看到了顺序对于层叠的重要性。如果您有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。</p>
<h3 id="优先级计算" tabindex="-1"><a class="header-anchor" href="#优先级计算"><span>优先级计算</span></a></h3>
<p>在您了解了顺序的重要性后，会发现在一些情况下，有些规则在最后出现，但是却应用了前面的规则。</p>
<p>只要前面的有更高的优先级，浏览器就把它选择为元素的样式。就像前面看到的，类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>虽然我们考虑的是选择器，但是只有相同的属性会被覆盖，不会覆盖所有规则，也就是说优先级低的选择器的其他不冲突声明仍会生效。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">技巧</p>
<p>一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。</p>
<p>比如我的博客对很多标签的样式进行了调整(比如减小了 <code v-pre>&lt;h1&gt;</code> 的字体大小以及标题的字体粗细)，并通过类来对特定区域的标签进行进一步的样式调整。</p>
</div>
<p>本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。</p>
<p>一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数:</p>
<ul>
<li>千位: 如果声明在 style 的属性(内联样式)则该位得一分。这样的声明没有选择器，所以它得分总是 1000。</li>
<li>百位: 选择器中包含 ID 选择器则该位得一分。</li>
<li>十位: 选择器中包含类选择器、属性选择器或者伪类则该位得一分。</li>
<li>个位: 选择器中包含元素、伪元素选择器则该位得一分。</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>通用选择器 (<code v-pre>*</code>)，组合符 (<code v-pre>+</code>, <code v-pre>&gt;</code>, <code v-pre>~</code>, 空格)，和否定伪类 (<code v-pre>:not</code>) 不会影响优先级。</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。</p>
</div>
<h2 id="important" tabindex="-1"><a class="header-anchor" href="#important"><span>!important</span></a></h2>
<p><code v-pre>!important</code> 可以用来覆盖所有上面所有优先级计算。</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  border: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">none</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> !important</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请不要滥用 <code v-pre>!important</code>，只有在不得不使用的情况下再进行使用。</p>
<p>覆盖 <code v-pre>!important</code> 唯一的办法就是另一个 <code v-pre>!important</code> 具有相同优先级而且顺序靠后，或者更高优先级。</p>
</div>
</div></template>


