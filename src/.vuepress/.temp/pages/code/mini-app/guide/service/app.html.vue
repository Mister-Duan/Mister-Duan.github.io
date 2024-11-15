<template><div><p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 <Badge text="重要" type="error" /></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>
</div>
<!-- more -->
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object"><span>Object object</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
<th>说明</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLaunch</td>
<td>function</td>
<td></td>
<td>否</td>
<td>生命周期回调——监听小程序初始化。</td>
<td></td>
</tr>
<tr>
<td>onShow</td>
<td>function</td>
<td></td>
<td>否</td>
<td>生命周期回调——监听小程序启动或切前台。</td>
<td></td>
</tr>
<tr>
<td>onHide</td>
<td>function</td>
<td></td>
<td>否</td>
<td>生命周期回调——监听小程序切后台。</td>
<td></td>
</tr>
<tr>
<td>onError</td>
<td>function</td>
<td></td>
<td>否</td>
<td>错误监听函数。</td>
<td></td>
</tr>
<tr>
<td>onPageNotFound</td>
<td>function</td>
<td></td>
<td>否</td>
<td>页面不存在监听函数。</td>
<td>1.9.90</td>
</tr>
<tr>
<td>onUnhandledRejection</td>
<td>function</td>
<td></td>
<td>否</td>
<td>未处理的 Promise 拒绝事件监听函数。</td>
<td>2.10.0</td>
</tr>
<tr>
<td>onThemeChange</td>
<td>function</td>
<td></td>
<td>否</td>
<td>监听系统主题变化</td>
<td>2.11.0</td>
</tr>
</tbody>
</table>
<p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code v-pre>Object</code> 参数中，用 <code v-pre>this</code> 可以访问 |</p>
<p>关于小程序前后台的定义和小程序的运行机制，请参考 <RouteLink to="/code/mini-app/guide/service/run.html">运行机制</RouteLink>。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onLaunch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Do something initial when launch.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onShow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Do something when show.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onHide</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Do something when hide.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  globalData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "I am global data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object"><span>onLaunch(Object object)</span></a></h3>
<p>小程序初始化完成时触发，全局只触发一次。参数也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.getLaunchOptionsSync</code></a> 获取。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.getLaunchOptionsSync</code></a> 一致</p>
<h3 id="onshow-object-object" tabindex="-1"><a class="header-anchor" href="#onshow-object-object"><span>onShow(Object object)</span></a></h3>
<p>小程序启动，或从后台进入前台显示时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onAppShow</code></a> 绑定监听。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onAppShow</code></a> 一致</p>
<h2 id="onhide" tabindex="-1"><a class="header-anchor" href="#onhide"><span>onHide()</span></a></h2>
<p>小程序从前台进入后台时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onAppHide</code></a> 绑定监听。</p>
<h2 id="onerror-string-error" tabindex="-1"><a class="header-anchor" href="#onerror-string-error"><span>onError(String error)</span></a></h2>
<p>小程序发生脚本错误或 API 调用报错时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onError</code></a> 绑定监听。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onError</code></a> 一致</p>
<h2 id="onpagenotfound-object-object" tabindex="-1"><a class="header-anchor" href="#onpagenotfound-object-object"><span>onPageNotFound(Object object)</span></a></h2>
<p>小程序要打开的页面不存在时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onPageNotFound</code></a> 绑定监听。注意事项请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onPageNotFound</code></a>。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onPageNotFound</code></a> 一致</p>
<p>示例代码:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  onPageNotFound</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">redirectTo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      url</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "pages/..."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 如果是 tabbar 页面，请使用 wx.switchTab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object"><span>onUnhandledRejection(Object object)</span></a></h2>
<blockquote>
<p>基础库 2.10.0 开始支持</p>
</blockquote>
<p>小程序有未处理的 Promise 拒绝时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onUnhandledRejection</code></a> 绑定监听。注意事项请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onUnhandledRejection</code></a>。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onUnhandledRejection</code></a> 一致</p>
<h2 id="onthemechange-object-object" tabindex="-1"><a class="header-anchor" href="#onthemechange-object-object"><span>onThemeChange(Object object)</span></a></h2>
<blockquote>
<p>基础库 2.11.0 开始支持</p>
</blockquote>
<p>系统切换主题时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onThemeChange</code></a> 绑定监听。</p>
<p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html" target="_blank" rel="noopener noreferrer"><code v-pre>wx.onThemeChange</code></a> 一致</p>
<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object"><span>AppObject getApp(Object object)</span></a></h2>
<p>获取到小程序全局唯一的 App 实例。</p>
<h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数"><span>getApp 参数</span></a></h3>
<p>Object object</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
<th>说明</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>allowDefault</td>
<td>boolean</td>
<td>false</td>
<td>否</td>
<td>在 <code v-pre>App</code> 未定义时返回默认实现。当 <code v-pre>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td>
<td>2.2.4</td>
</tr>
</tbody>
</table>
<p>示例代码:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// other.js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> appInstance</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getApp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">appInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">globalData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// I am global data</span></span></code></pre>
</div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>不要在定义于 <code v-pre>App()</code> 内的函数中，或调用 <code v-pre>App</code> 前调用 <code v-pre>getApp()</code> ，使用 <code v-pre>this</code> 就可以拿到 app 实例。</li>
<li>通过 <code v-pre>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li>
</ul>
</div>
</div></template>


