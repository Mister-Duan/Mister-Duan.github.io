<template><div><h2 id="二维码生成" tabindex="-1"><a class="header-anchor" href="#二维码生成"><span>二维码生成</span></a></h2>
<p>目前小程序二维码生成选用的是<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html" target="_blank" rel="noopener noreferrer">无限制生成二维码</a>。</p>
<p>我们使用 Postman 软件进行二维码的获取。</p>
<h3 id="调用凭据获取" tabindex="-1"><a class="header-anchor" href="#调用凭据获取"><span>调用凭据获取</span></a></h3>
<p>获取任何二维码都需要先获取 <code v-pre>access_token</code>，这是小程序全局唯一后台接口调用凭据。<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html" target="_blank" rel="noopener noreferrer">文档地址</a></p>
<p>请求方式为:</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&#x26;appid=APPID&#x26;secret=APPSECRET</span></span></code></pre>
</div><p>更多详情可以见文档。<code v-pre>AppSecret</code> 由于权限很大不在此文档中直接放置。</p>
<h3 id="无限制二维码生成" tabindex="-1"><a class="header-anchor" href="#无限制二维码生成"><span>无限制二维码生成</span></a></h3>
<ul>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html" target="_blank" rel="noopener noreferrer">文档地址</a></li>
</ul>
<p>在获取 <code v-pre>access_token</code> 之后就可以获取小程序二维码了。</p>
<div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">POST https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN</span></span></code></pre>
</div><p>请注意，在 Postman 软件中，首先要注意使用 <code v-pre>post</code> 方法。Body 使用 <code v-pre>raw</code>，格式选择 <code v-pre>Text</code>，需要将 <code v-pre>pretty</code> 化的 JSON 输入即可正常获取二维码。获取完二维码之后，需要在 <code v-pre>response</code> 中点击返回图片右上角的 <code v-pre>save as</code>，保存为 <code v-pre>jpg</code> 格式的文件即可保存二维码。</p>
<h2 id="小程序链接" tabindex="-1"><a class="header-anchor" href="#小程序链接"><span>小程序链接</span></a></h2>
<ul>
<li><a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html" target="_blank" rel="noopener noreferrer">文档地址</a></li>
</ul>
<p>具体格式如下:</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"不支持小程序时打开的网页"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  data-miniprogram-appid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"小程序的appid"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  data-miniprogram-path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"小程序路径"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  >文本内容&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div></div></template>


