<template><div><p>小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。</p>
<p>逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。</p>
<p>开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。</p>
<!-- more -->
<p>在 JavaScript 的基础上，我们增加了一些功能，以方便小程序的开发:</p>
<ul>
<li>增加 <code v-pre>App</code> 和 <code v-pre>Page</code> 方法，进行 <RouteLink to="/code/mini-app/guide/service/app.html">程序注册</RouteLink> 和 <RouteLink to="/code/mini-app/guide/service/page.html">页面注册</RouteLink>。</li>
<li>增加 <code v-pre>getApp</code> 和 <code v-pre>getCurrentPages</code> 方法，分别用来获取 <code v-pre>App</code> 实例和当前页面栈。</li>
<li>提供丰富的 <RouteLink to="/code/mini-app/guide/service/api/">API</RouteLink>，如微信用户数据，扫一扫，支付等微信特有能力。</li>
<li>提供 <RouteLink to="/code/mini-app/guide/service/module.html">模块化能力</RouteLink>，每个页面有独立的作用域。</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>小程序框架的逻辑层并非运行在浏览器中，因此 JavaScript 在 web 中一些能力都无法使用，如 <code v-pre>window</code>，<code v-pre>document</code> 等。</p>
</div>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档"><span>文档</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/service/lifetime.html">生命周期</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/route.html">路由</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/register.html">注册</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/app.html">App()</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/page.html">Page()</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/run.html">运行</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/module.html">模块化</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/api/">API</RouteLink></p>
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
</li>
</ul>
</div></template>


