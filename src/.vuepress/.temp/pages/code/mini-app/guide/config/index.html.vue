<template><div><p>小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。</p>
</div>
<!-- more -->
<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h2>
<p>小程序根目录下的 <code v-pre>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置 tabBar 等。</p>
<p>以下是一个包含了部分常用配置选项的 <code v-pre>app.json</code>:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "pages"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/index/index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/logs/index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "window"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "navigationBarTitleText"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Demo"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "tabBar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "list"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "pagePath"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/index/index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"首页"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "pagePath"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"pages/logs/logs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"日志"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "networkTimeout"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "request"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "downloadFile"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10000</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "debug"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "navigateToMiniProgramAppIdList"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"wxe5f52902cf4de896"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多详情请见 <RouteLink to="/code/mini-app/guide/config/app-config.html">全局配置文档</RouteLink></p>
<h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置"><span>页面配置</span></a></h2>
<p>每一个小程序页面也可以使用同名 <code v-pre>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code v-pre>app.json</code> 的 <code v-pre>window</code> 中相同的配置项。</p>
<p>例如:</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "navigationBarBackgroundColor"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#ffffff"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "navigationBarTextStyle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"black"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "navigationBarTitleText"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"微信接口功能演示"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "backgroundColor"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#eeeeee"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "backgroundTextStyle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"light"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>更多详情请见 <RouteLink to="/code/mini-app/guide/config/page-config.html">页面配置文档</RouteLink></p>
<h2 id="索引配置" tabindex="-1"><a class="header-anchor" href="#索引配置"><span>索引配置 <Badge text="初学无需阅读" type="grey" /></span></a></h2>
<p>微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code v-pre>user-agent</code>: <code v-pre>mpcrawler</code> 及场景值 <code v-pre>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>
<h3 id="具体配置说明" tabindex="-1"><a class="header-anchor" href="#具体配置说明"><span>具体配置说明</span></a></h3>
<ol>
<li>页面收录设置: 可对整个小程序的索引进行关闭，小程序管理后台-设置-基本设置-页面收录设置</li>
<li>sitemap 配置: 可对特定页面的索引进行关闭</li>
</ol>
<h3 id="sitemap-配置" tabindex="-1"><a class="header-anchor" href="#sitemap-配置"><span>sitemap 配置</span></a></h3>
<p>小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。</p>
<p>完整配置项说明请参考 <RouteLink to="/code/mini-app/guide/config/sitemap-config.html">sitemap 配置</RouteLink></p>
</div></template>


