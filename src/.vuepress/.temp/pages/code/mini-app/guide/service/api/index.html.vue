<template><div><p>小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">API 文档</a>。 <Badge text="重要" type="error" /></p>
<!-- more -->
<p>通常，在小程序 API 有以下几种类型:</p>
<h2 id="事件监听-api" tabindex="-1"><a class="header-anchor" href="#事件监听-api"><span>事件监听 API</span></a></h2>
<p>我们约定，以 on 开头的 API 用来监听某个事件是否触发，如: <code v-pre>wx.onSocketOpen</code>, <code v-pre>wx.onCompassChange</code> 等。</p>
<p>这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCompassChange</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">direction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><h2 id="同步-api" tabindex="-1"><a class="header-anchor" href="#同步-api"><span>同步 API</span></a></h2>
<p>我们约定，以 <code v-pre>Sync</code> 结尾的 API 都是同步 API， 如 <code v-pre>wx.setStorageSync</code>，<code v-pre>wx.getSystemInfoSync</code> 等。此外，也有一些其他的同步 API，如 <code v-pre>wx.createWorker</code>, <code v-pre>wx.getBackgroundAudioManager</code> 等，详情参见 API 文档中的说明。</p>
<p>同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setStorageSync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"key"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"value"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="异步-api" tabindex="-1"><a class="header-anchor" href="#异步-api"><span>异步 API</span></a></h2>
<p>大多数 API 都是异步 API，如 <code v-pre>wx.request</code>，<code v-pre>wx.login</code> 等。这类 API 接口通常都接受一个 <code v-pre>Object</code> 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果:</p>
<h3 id="object-参数说明" tabindex="-1"><a class="header-anchor" href="#object-参数说明"><span>Object 参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>success</td>
<td>function</td>
<td>否</td>
<td>接口调用成功的回调函数</td>
</tr>
<tr>
<td>fail</td>
<td>function</td>
<td>否</td>
<td>接口调用失败的回调函数</td>
</tr>
<tr>
<td>complete</td>
<td>function</td>
<td>否</td>
<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>
</tr>
<tr>
<td>其他</td>
<td>Any</td>
<td>-</td>
<td>接口定义的其他参数</td>
</tr>
</tbody>
</table>
<h3 id="回调函数的参数" tabindex="-1"><a class="header-anchor" href="#回调函数的参数"><span>回调函数的参数</span></a></h3>
<p><code v-pre>success</code>, <code v-pre>fail</code>, <code v-pre>complete</code> 函数调用时会传入一个 <code v-pre>Object</code> 类型参数，包含以下字段:</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>errMsg</td>
<td>string</td>
<td>错误信息，如果调用成功返回 <code v-pre>${apiName}:ok</code></td>
</tr>
<tr>
<td>errCode</td>
<td>number</td>
<td>错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。</td>
</tr>
<tr>
<td>其他</td>
<td>Any</td>
<td>接口返回的其他数据</td>
</tr>
</tbody>
</table>
<p>异步 API 的执行结果需要通过 <code v-pre>Object</code> 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 <code v-pre>wx.request</code>, <code v-pre>wx.connectSocke</code>t` 等。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">login</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  success</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>异步函数会在异步动作进行完之后，触发对应设置好的回调函数，所以此时的函数执行已经脱离了正常 js 的执行上下文。</p>
<p>如果对上面的话不理解，请务必查阅<strong>什么是同步/异步函数</strong>。</p>
</div>
<h2 id="常见-api" tabindex="-1"><a class="header-anchor" href="#常见-api"><span>常见 API</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/route.html">路由</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/storage.html">数据缓存</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/interact.html">交互</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/network.html">网络</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/system.html">系统信息</RouteLink></p>
</li>
</ul>
</div></template>


