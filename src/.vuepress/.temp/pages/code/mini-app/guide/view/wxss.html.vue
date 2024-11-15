<template><div><p>WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。</p>
<p>WXSS 用来决定 WXML 的组件应该怎么显示。</p>
<p>为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。</p>
<p>与 CSS 相比，WXSS 扩展的特性有:</p>
<ul>
<li>尺寸单位</li>
<li>样式导入</li>
</ul>
<p>与 CSS 相比，WXSS 缺失的特性有:</p>
<ul>
<li>一部分高级选择器</li>
<li>一部分 CSS3 高级功能</li>
</ul>
<!-- more -->
<h2 id="尺寸单位" tabindex="-1"><a class="header-anchor" href="#尺寸单位"><span>尺寸单位</span></a></h2>
<p>rpx(responsive pixel): 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。</p>
<table>
<thead>
<tr>
<th>设备</th>
<th>rpx 换算 px (屏幕宽度/750)</th>
<th>px 换算 rpx (750/屏幕宽度)</th>
</tr>
</thead>
<tbody>
<tr>
<td>iPhone5</td>
<td>1rpx = 0.42px</td>
<td>1px = 2.34rpx</td>
</tr>
<tr>
<td>iPhone6</td>
<td>1rpx = 0.5px</td>
<td>1px = 2rpx</td>
</tr>
<tr>
<td>iPhone6 Plus</td>
<td>1rpx = 0.552px</td>
<td>1px = 1.81rpx</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。</p>
</div>
<h2 id="样式导入" tabindex="-1"><a class="header-anchor" href="#样式导入"><span>样式导入</span></a></h2>
<p>使用 <code v-pre>@import</code> 语句可以导入外联样式表，<code v-pre>@import</code> 后跟需要导入的外联样式表的相对路径，用 <code v-pre>;</code> 表示语句结束。</p>
<p>示例代码:</p>
<div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/** common.wxss **/</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.small-p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/** app.wxss **/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "common.wxss"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.middle-p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">15</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式"><span>内联样式</span></a></h2>
<p>框架组件上支持使用 <code v-pre>style</code>, <code v-pre>class</code> 属性来控制组件的样式。</p>
<ul>
<li>
<p><code v-pre>style</code>: 静态的样式统一写到 <code v-pre>class</code> <code v-pre>中。style</code> 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 <code v-pre>style</code> 中，以免影响渲染速度。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"color:{{color}};"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div></li>
<li>
<p><code v-pre>class</code>: 用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上 <code v-pre>.</code>，样式类名之间用空格分隔。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"normal_view"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div></li>
</ul>
<h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器"><span>选择器</span></a></h2>
<p>目前支持的选择器有:</p>
<table>
<thead>
<tr>
<th>选择器</th>
<th>样例</th>
<th>样例描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>.class</td>
<td>.intro</td>
<td>选择所有拥有 <code v-pre>class=&quot;intro&quot;</code> 的组件</td>
</tr>
<tr>
<td>#id</td>
<td>#firstname</td>
<td>选择拥有 <code v-pre>id=&quot;firstname&quot;</code> 的组件</td>
</tr>
<tr>
<td>element</td>
<td>view</td>
<td>选择所有 view 组件</td>
</tr>
<tr>
<td>element, element</td>
<td>view, checkbox</td>
<td>选择所有文档的 view 组件和所有的 checkbox 组件</td>
</tr>
<tr>
<td>::after</td>
<td>view::after</td>
<td>在 view 组件后边插入内容</td>
</tr>
<tr>
<td>::before</td>
<td>view::before</td>
<td>在 view 组件前边插入内容</td>
</tr>
</tbody>
</table>
<h2 id="全局样式与局部样式" tabindex="-1"><a class="header-anchor" href="#全局样式与局部样式"><span>全局样式与局部样式</span></a></h2>
<p>定义在 <code v-pre>app.wxss</code> 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 <code v-pre>app.wxss</code> 中相同的选择器。</p>
</div></template>


