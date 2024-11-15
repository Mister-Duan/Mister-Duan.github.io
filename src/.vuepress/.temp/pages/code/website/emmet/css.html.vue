<template><div><p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p>
<h2 id="添加属性" tabindex="-1"><a class="header-anchor" href="#添加属性"><span>添加属性</span></a></h2>
<p>您可以使用缩写来生成 CSS 属性。如 <code v-pre>m</code> 会生成 <code v-pre>margin: ;</code>，同时光标会自动置于值处。</p>
<h2 id="同时添加属性与值值" tabindex="-1"><a class="header-anchor" href="#同时添加属性与值值"><span>同时添加属性与值值</span></a></h2>
<p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code v-pre>-</code> 将它们分开，多余的 <code v-pre>-</code> 将会被理解为负值。</p>
<div class="hint-container tip">
<p class="hint-container-title">案例</p>
<ul>
<li><code v-pre>m10</code>: <code v-pre>margin: 10px;</code></li>
<li><code v-pre>m10-20</code>: <code v-pre>margin: 10px 20px;</code></li>
<li><code v-pre>m-10--20</code>: <code v-pre>margin: -10px -20px;</code></li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请只有在必要(不添加会产生歧义)的情况下添加 <code v-pre>-</code> 分隔符，否则 Emmet 可能会错误的理解它。</p>
</div>
<h2 id="值的单位" tabindex="-1"><a class="header-anchor" href="#值的单位"><span>值的单位</span></a></h2>
<p>使用整数值扩展缩写时，Emmet 会以 px 单位输出: <code v-pre>m10</code> → <code v-pre>margin: 10px;</code>。</p>
<p>使用浮点值扩展缩写时，会以 em 单位输出: <code v-pre>m1.5</code> → <code v-pre>margin: 1.5em;</code>。</p>
<p>您也可以在值后面紧跟任何字母字符，来显式提供单位名称: <code v-pre>m1.5ex</code> → <code v-pre>margin: 1.5ex;</code>，<code v-pre>m10foo</code> → <code v-pre>margin: 10foo;</code>。</p>
<p>明确定义单位后，不再需要使用连字符来分隔值: <code v-pre>m10ex20em</code> → <code v-pre>margin: 10ex 20em;</code>，<code v-pre>m10ex-5</code> → <code v-pre>margin: 10ex -5px;</code>。</p>
<h2 id="值别名" tabindex="-1"><a class="header-anchor" href="#值别名"><span>值别名</span></a></h2>
<p>Emmet 具有一些常用值的别名:</p>
<ul>
<li><code v-pre>p</code> → <code v-pre>%</code></li>
<li><code v-pre>e</code> → <code v-pre>em</code></li>
<li><code v-pre>x</code> → <code v-pre>ex</code></li>
</ul>
<p>您可以使用别名代替完整的单位:</p>
<ul>
<li><code v-pre>w100p</code> → <code v-pre>width: 100%</code></li>
<li><code v-pre>m10p30e5x</code> → <code v-pre>margin: 10% 30em 5ex</code></li>
</ul>
<h2 id="颜色值" tabindex="-1"><a class="header-anchor" href="#颜色值"><span>颜色值</span></a></h2>
<p>Emmet 支持十六进制颜色值。<code v-pre>#</code> 将自动作为分隔符，所以针对颜色变量，将不再需要 <code v-pre>-</code>。</p>
<ul>
<li><code v-pre>c#3</code> → <code v-pre>color: #333;</code></li>
<li><code v-pre>bd5#0s</code> → <code v-pre>border: 5px #000 solid</code>。(<code v-pre>#</code> 符号可将颜色与 <code v-pre>5</code> 分隔开，并且 <code v-pre>s</code>(别名为 <code v-pre>solid</code>)不是十六进制字符，因此省略了 <code v-pre>-</code>。</li>
</ul>
<p>颜色变量支持 1-3 位的缩写，表现如下:</p>
<ul>
<li><code v-pre>#1</code> → <code v-pre>#111111</code></li>
<li><code v-pre>#e0</code> → <code v-pre>#e0e0e0</code></li>
<li><code v-pre>#fc0</code> → <code v-pre>#ffcc00</code></li>
</ul>
<h2 id="无单元属性" tabindex="-1"><a class="header-anchor" href="#无单元属性"><span>无单元属性</span></a></h2>
<p>一些 CSS 属性默认为无单位输出:</p>
<ul>
<li><code v-pre>lh2</code>→ <code v-pre>line-height: 2;</code></li>
<li><code v-pre>fw400</code>→ <code v-pre>font-weight: 400</code>。</li>
</ul>
<p>这些值是: <code v-pre>z-index</code>，<code v-pre>line-height</code>，<code v-pre>opacity</code> 和 <code v-pre>font-weight</code></p>
<h2 id="重要修饰符" tabindex="-1"><a class="header-anchor" href="#重要修饰符"><span>重要修饰符</span></a></h2>
<p>您可以在任何 CSS 缩写的末尾添加 <code v-pre>!</code> 后缀来添加 <code v-pre>!important</code></p>
<p><code v-pre>p!+m10e!</code>:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">padding: !important;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">margin: 10em !important;</span></span></code></pre>
</div><h2 id="输出多个属性" tabindex="-1"><a class="header-anchor" href="#输出多个属性"><span>输出多个属性</span></a></h2>
<p>正如上方演示，您可以利用 <code v-pre>+</code> 同时输出多个 CSS 属性。</p>
<div class="hint-container info">
<p class="hint-container-title">Snippets</p>
<p>完整的 CSS snippets 请见 <a href="https://github.com/emmetio/emmet/blob/master/snippets/css.json" target="_blank" rel="noopener noreferrer">Emmet Repo</a></p>
</div>
</div></template>


