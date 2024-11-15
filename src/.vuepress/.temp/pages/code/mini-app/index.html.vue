<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在开发小程序之前。应当掌握 <RouteLink to="/code/website/html/">HTML</RouteLink>、<RouteLink to="/code/website/css/">CSS</RouteLink>、<RouteLink to="/code/language/js/guide/">JavaScript 基础</RouteLink> 以及 <RouteLink to="/code/language/js/es6/">ES6</RouteLink>。</p>
</div>
<!-- more -->
<h2 id="小程序基础简介" tabindex="-1"><a class="header-anchor" href="#小程序基础简介"><span>小程序基础简介</span></a></h2>
<p>在微信小程序中主要有四种文件结构: <code v-pre>wxml</code>、<code v-pre>wxss</code>、<code v-pre>js</code> 和 <code v-pre>json</code>。其中 <code v-pre>wxml</code> 对应带有 vue.js 特征的 html5，<code v-pre>wxss</code> 对应 css3，<code v-pre>js</code> 对应 ES6 标准的的 javaScript。</p>
<p>对于 QQ 小程序，其文件结构为 <code v-pre>QML</code>、<code v-pre>qss</code>、<code v-pre>js</code> 和 <code v-pre>json</code>。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>QQ 小程序本质还是换汤不换药的，且 QQ 开发者工具兼容 <code v-pre>wxml</code> 与 <code v-pre>wss</code>)</p>
</div>
<p>小程序开发与网页开发极其相似。所以必须有适当的网页开发基础。零基础的人可能很难直接上手小程序开发。</p>
<h2 id="教程目录" tabindex="-1"><a class="header-anchor" href="#教程目录"><span>教程目录</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/file-structure.html">文件结构</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/env.html">运行环境</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/config/">小程序配置</RouteLink></p>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/config/app-config.html">全局配置</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/config/page-config.html">页面配置</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/config/sitemap-config.html">sitemap 配置</RouteLink></p>
</li>
</ul>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/">小程序框架</RouteLink></p>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/intro.html">框架介绍</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/scene.html">场景值</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/env.html">运行环境</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/mechanism.html">运行机制</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/frame/update.html">更新机制</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
</ul>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/service/">逻辑层</RouteLink></p>
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
</li>
</ul>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/">视图层</RouteLink></p>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/view/wxml.html">WXML</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/wxss.html">WXSS</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/wxs.html">WXS</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/event.html">事件</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/component.html">基础组件</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/animation.html">动画</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/wxs.html">WXS</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/wxs-event.html">WXS 事件</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/model.html">建议双向绑定</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/selector.html">获取界面上的节点信息</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/selector.html">相应显示区域变化</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/view/rendering-cache.html">初始渲染缓存</RouteLink> <Badge type="grey" text="高级" /></p>
</li>
</ul>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/ability/">小程序能力</RouteLink></p>
<ul>
<li>
<p><RouteLink to="/code/mini-app/guide/ability/network.html">网络请求</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/ability/storage.html">存储</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/ability/file-system.html">文件系统</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/guide/ability/debug.html">调试</RouteLink></p>
</li>
</ul>
</li>
</ul>
<h2 id="开发者工具" tabindex="-1"><a class="header-anchor" href="#开发者工具"><span>开发者工具</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/mini-app/tools/interface.html">工具界面简介</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/tools/debug.html">调试</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/tools/npm.html">npm</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/tools/audit.html">体验评分</RouteLink></p>
</li>
</ul>
<h2 id="官方教程" tabindex="-1"><a class="header-anchor" href="#官方教程"><span>官方教程</span></a></h2>
<ul>
<li><a href="https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=0008aeea9a8978ab0086a685851c0a" target="_blank" rel="noopener noreferrer">点击前往</a></li>
</ul>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2>
<ul>
<li><a href="https://github.com/Hope-Studio/wxminiappdemo" target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
</ul>
<h2 id="mr-hope-框架说明" tabindex="-1"><a class="header-anchor" href="#mr-hope-框架说明"><span>Mr.Hope 框架说明</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/mini-app/framework/">小程序框架使用说明</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/framework/tag-list.html">tag 值参数表</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/framework/page.html">setPage 库使用说明</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/framework/simple-debug.html">界面简单开发学习指南</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/qr-code.html">分享相关</RouteLink></p>
</li>
</ul>
<h2 id="学习视频" tabindex="-1"><a class="header-anchor" href="#学习视频"><span>学习视频</span></a></h2>
<ul>
<li>
<p><a href="https://www.bilibili.com/video/av22790583/" target="_blank" rel="noopener noreferrer">零基础开发小程序</a>(比较新的视频，强调总体思想)</p>
</li>
<li>
<p><a href="https://www.bilibili.com/video/av11938917" target="_blank" rel="noopener noreferrer">小程序-从入门到入土</a>(比较老的视频，针对每个组件或者 API 进行了针对的讲解与示范，但部分内容已经与最新官方文档不符)</p>
</li>
</ul>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2>
<ul>
<li>
<p><a href="https://github.com/wechat-miniprogram/miniprogram-demo" target="_blank" rel="noopener noreferrer">小程序实例源码</a></p>
<figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg" alt="小程序示例二维码" tabindex="0" loading="lazy"><figcaption>小程序示例二维码</figcaption></figure>
</li>
</ul>
<h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档"><span>官方文档</span></a></h2>
<ul>
<li><a href="https://q.qq.com/wiki/" target="_blank" rel="noopener noreferrer">QQ 小程序</a></li>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="_blank" rel="noopener noreferrer">微信小程序</a></li>
<li><a href="https://developers.weixin.qq.com/community/develop/question" target="_blank" rel="noopener noreferrer">微信小程序社区</a>
<ul>
<li><a href="https://developers.weixin.qq.com/community/develop/list/2?id=" target="_blank" rel="noopener noreferrer">官方公告</a></li>
</ul>
</li>
</ul>
<h3 id="qq-开发者工具" tabindex="-1"><a class="header-anchor" href="#qq-开发者工具"><span>QQ 开发者工具</span></a></h3>
<p>现在很多功能还处于缺失状态，bug 到没之前那么多了。</p>
<ul>
<li>
<p><a href="https://q.qq.com/wiki/" target="_blank" rel="noopener noreferrer">查看详情</a></p>
</li>
<li>
<p><a href="https://q.qq.com/wiki/tools/devtool/" target="_blank" rel="noopener noreferrer">下载地址</a></p>
</li>
</ul>
<h2 id="微信开发者工具" tabindex="-1"><a class="header-anchor" href="#微信开发者工具"><span>微信开发者工具</span></a></h2>
<p>微信开发者工具用来开发与调试微信小程序和微信相关网页的官方工具。小程序使用该开发工具进行开发。</p>
<ul>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank" rel="noopener noreferrer">下载地址</a></p>
</li>
<li>
<p><RouteLink to="/code/mini-app/tools/">开发者工具教程</RouteLink></p>
</li>
<li>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html" target="_blank" rel="noopener noreferrer">官方使用指南</a></p>
</li>
</ul>
</div></template>


