<template><div><h2 id="vconsole" tabindex="-1"><a class="header-anchor" href="#vconsole"><span>vConsole <Badge text="重要" type="error" /></span></a></h2>
<p>在真机上，如果想要查看 <code v-pre>console</code> API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 <code v-pre>vConsole</code> 按钮。点击 <code v-pre>vConsole</code> 按钮可以打开日志面板。</p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px" alt="Vconsole" tabindex="0" loading="lazy"><figcaption>Vconsole</figcaption></figure>
<h2 id="vconsole-使用说明" tabindex="-1"><a class="header-anchor" href="#vconsole-使用说明"><span>vConsole 使用说明</span></a></h2>
<p>由于实现机制的限制，开发者调用 <code v-pre>console</code> API 打印的日志内容，是转换成 JSON 字符串后传输给 <code v-pre>vConsole</code> 的，导致 <code v-pre>vConsole</code> 中展示的内容会有一些限制:</p>
<ul>
<li>
<p>2.3.2 及以上版本，支持打印循环引用对象。循环引用的对象属性会显示引用路径，<code v-pre>@</code> 表示对象本身。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> circular</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">c</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {} };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">promise</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() }];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x0</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">circular</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// "{a: '&#x3C;Circular: @>', c: {x0: '&#x3C;Circular: @.x[0]>'}, x: [{promise: '&#x3C;Promise>'}]}"</span></span></code></pre>
</div></li>
<li>
<p>2.3.1 及以上版本，支持展示所有类型的数据。基础库会对日志内容进行一次转换，经过转换的内容会使用 <code v-pre>&lt;&gt;</code> 包裹。如:</p>
<ul>
<li><code v-pre>&lt;Function: func&gt;</code></li>
<li><code v-pre>&lt;Undefined&gt;</code></li>
<li><code v-pre>&lt;Infinity&gt;</code></li>
<li><code v-pre>&lt;Map: size=0&gt;</code></li>
<li><code v-pre>&lt;ArrayBuffer: byteLength=10&gt;</code></li>
<li>...</li>
</ul>
</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>尽量避免在非调试情景下打印结构过于复杂或内容过长的日志内容，因为这可能会带来额外耗时。</p>
</div>
<h2 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map"><span>Source Map</span></a></h2>
<blockquote>
<p>目前只在 iOS 6.7.2 及以上版本支持</p>
</blockquote>
<p>小程序/小游戏在打包时，会将所有 js 代码打包成一个文件，为了便于开发者在手机上调试时定位错误位置，小程序/小游戏提供了 Source Map 支持。</p>
<p>在开发者工具中开启 ES6 转 ES5、代码压缩时，会生成 Source Map 的 <code v-pre>.map</code> 文件。开发版小程序中，基础库会使用代码包中的 <code v-pre>.map</code> 文件，对 <code v-pre>vConsole</code> 中展示的错误信息堆栈进行重新映射(只对开发者代码文件进行)。</p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/sourceMap.17b75816.jpg" alt="Sourcemap" tabindex="0" loading="lazy"><figcaption>Sourcemap</figcaption></figure>
<p>如果使用外部的编译脚本对源文件进行处理，只需将对应生成的 Source Map 文件放置在源文件的相同目录下</p>
<p>如:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pages/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pages/index.js.map</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">app.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">app.js.map</span></span></code></pre>
</div><p>开发者工具会读取、解析 Source Map 文件，并进行将其上传</p>
<p>后续可以在小程序后台的运营中心可以利用上传的 Source Map 文件进行错误分析</p>
<ul>
<li>Source Map 文件不计入代码包大小计算。</li>
<li>开发版代码包中由于包含了 .map 文件，实际代码包大小会比体验版和正式版大。</li>
</ul>
</div></template>


