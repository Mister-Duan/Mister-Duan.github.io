<template><div><h2 id="使用密码登录" tabindex="-1"><a class="header-anchor" href="#使用密码登录"><span>使用密码登录</span></a></h2>
<ol>
<li>
<p>执行以下命令，连接 Linux 云服务器。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">usernam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addres</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s></span></span></code></pre>
</div><ul>
<li>username 即为前提条件中获得的默认帐号。</li>
<li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li>
</ul>
</li>
<li>
<p>输入已获取的密码，按 Enter，即可完成登录。</p>
</li>
</ol>
<h2 id="使用密钥登录" tabindex="-1"><a class="header-anchor" href="#使用密钥登录"><span>使用密钥登录</span></a></h2>
<ol>
<li>
<p>执行以下命令，赋予私钥文件仅本人可读权限。</p>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 400</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">下载的与云服务器关联的私钥的绝对路</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">径></span></span></code></pre>
</div></li>
<li>
<p>执行以下命令，进行远程登录。</p>
<div class="language-shell" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">下载的与云服务器关联的私钥的绝对路</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">径> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">usernam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">@</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hostname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> addres</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">s></span></span></code></pre>
</div><ul>
<li>username 即为前提条件中获得的默认帐号。</li>
<li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li>
</ul>
<p>例如，执行 <code v-pre>ssh -i &quot;id_rsa&quot; ubuntu@123.206.113.227</code> 命令，远程登录 Linux 云服务器。</p>
</li>
</ol>
<h2 id="断开链接" tabindex="-1"><a class="header-anchor" href="#断开链接"><span>断开链接</span></a></h2>
<p><code v-pre>Ctrl + D</code> 或 输入 <code v-pre>logout</code>.</p>
</div></template>


