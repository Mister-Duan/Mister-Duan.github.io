<template><div><h2 id="显示区域尺寸" tabindex="-1"><a class="header-anchor" href="#显示区域尺寸"><span>显示区域尺寸</span></a></h2>
<p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p>
<h3 id="在手机上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在手机上启用屏幕旋转支持"><span>在手机上启用屏幕旋转支持</span></a></h3>
<p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code v-pre>&quot;pageOrientation&quot;: &quot;auto&quot;</code> ，或在页面 json 文件中配置 <code v-pre>&quot;pageOrientation&quot;: &quot;auto&quot;</code>。</p>
<details class="hint-container details"><summary>代码示例</summary>
<p>以下是在单个页面 json 文件中启用屏幕旋转的示例。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "pageOrientation"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"auto"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p>
</details>
<p>从小程序基础库版本 2.5.0 开始， <code v-pre>pageOrientation</code> 还可以被设置为 <code v-pre>landscape</code> ，表示固定为横屏显示。</p>
<h3 id="在-ipad-上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在-ipad-上启用屏幕旋转支持"><span>在 iPad 上启用屏幕旋转支持</span></a></h3>
<p>从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 <code v-pre>&quot;resizable&quot;: true</code> 。</p>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "resizable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p>
</details>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在 iPad 上不能单独配置某个页面是否支持屏幕旋转。</p>
</div>
<h2 id="media-query" tabindex="-1"><a class="header-anchor" href="#media-query"><span>Media Query</span></a></h2>
<p>有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。</p>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.my-class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">40</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (min-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">480</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  /*仅在 480px 或更宽的屏幕上生效的样式规则*/</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  .my-class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">200</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>在 WXML 中，可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html" target="_blank" rel="noopener noreferrer">match-media</a> 组件来根据 media query 匹配状态展示、隐藏节点。</p>
<p>此外，可以在页面或者自定义组件 JS 中使用 <code v-pre>this.createMediaQueryObserver()</code> 方法来创建一个 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html" target="_blank" rel="noopener noreferrer"><code v-pre>MediaQueryObserver</code></a> 对象，用于监听指定的 media query 的匹配状态。</p>
<blockquote>
<p><a href="https://developers.weixin.qq.com/s/TtFaFjmb7aiy" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
</blockquote>
<h2 id="屏幕旋转事件" tabindex="-1"><a class="header-anchor" href="#屏幕旋转事件"><span>屏幕旋转事件</span></a></h2>
<p>有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。</p>
<ul>
<li>
<p>在 js 中读取页面的显示区域尺寸，可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html" target="_blank" rel="noopener noreferrer"><code v-pre>selectorQuery.selectViewport</code></a> 。</p>
</li>
<li>
<p>页面尺寸发生改变的事件，可以使用页面的 <code v-pre>onResize</code> 来监听。</p>
</li>
<li>
<p>对于自定义组件，可以使用 <code v-pre>resize</code> 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)</p>
</li>
</ul>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onResize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">windowWidth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 新的显示区域宽度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">windowHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 新的显示区域高度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  pageLifetimes</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">windowWidth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 新的显示区域宽度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">      res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">windowHeight</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 新的显示区域高度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div></details>
<p>此外，还可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onWindowResize</code></a> 来监听(但这不是推荐的方式)。</p>
</div></template>


