<template><div><p>Node.js 是一款全球使用广泛的框架，可以用在前端与后端上，拥有大量的模块。Node.js 主要以其丰富并及其容易导入的 Node.js package，以及其方便管理 npm (Node.js Package Manager)闻名。</p>
<!-- more -->
<h2 id="教程目录" tabindex="-1"><a class="header-anchor" href="#教程目录"><span>教程目录</span></a></h2>
<ul>
<li>
<p><RouteLink to="/code/node-js/intro.html">Node.js 介绍</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/node-js/install.html">Node.js 与 npm 安装</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/node-js/environment.html">Node.js 环境</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/node-js/program.html">编程</RouteLink></p>
</li>
<li>
<p><RouteLink to="/code/node-js/cjs.html">Node.js CJS 模块</RouteLink></p>
</li>
</ul>
<p>以上，就是 Node.js 的简易介绍，系统学习可以查看下方的详细教程。</p>
<h2 id="初学者教程" tabindex="-1"><a class="header-anchor" href="#初学者教程"><span>初学者教程</span></a></h2>
<ul>
<li>
<p><a href="https://www.nodebeginner.org/index-zh-cn.html" target="_blank" rel="noopener noreferrer">Node.js 入门</a></p>
</li>
<li>
<p><a href="https://www.w3cschool.cn/nodejs/" target="_blank" rel="noopener noreferrer">W3CSchool</a></p>
</li>
</ul>
<h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档"><span>官方文档</span></a></h2>
<ul>
<li><a href="https://nodejs.org/dist/latest-v14.x/docs/api/" target="_blank" rel="noopener noreferrer">地址</a></li>
</ul>
<h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>Yarn</span></a></h2>
<p>快速、可靠、安全的依赖管理工具。</p>
<ul>
<li>
<p>Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。</p>
</li>
<li>
<p>在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。</p>
</li>
<li>
<p>使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。</p>
</li>
<li>
<p><a href="https://www.yarnpkg.com/zh-Hans/docs/install#windows-stable" target="_blank" rel="noopener noreferrer">下载地址</a></p>
</li>
<li>
<p><a href="https://www.yarnpkg.com/zh-Hans/docs" target="_blank" rel="noopener noreferrer">官方文档</a></p>
</li>
</ul>
<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3>
<ul>
<li>
<p><code v-pre>yarn install</code>: 执行安装</p>
</li>
<li>
<p><code v-pre>yarn upgrade</code>: 执行升级</p>
</li>
<li>
<p><code v-pre>yarn add &lt;package&gt;</code>: 添加一个包</p>
</li>
<li>
<p><code v-pre>yarn config set cache-folder &lt;path&gt;</code>: 更改缓存文件夹</p>
</li>
<li>
<p><code v-pre>yarn config set registry &lt;registry&gt;</code>: 更改源</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在国内，建议换成淘宝源 <a href="https://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">https://registry.npm.taobao.org</a></p>
<p>即执行</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://registry.npm.taobao.org</span></span></code></pre>
</div></div>
</li>
</ul>
</div></template>


