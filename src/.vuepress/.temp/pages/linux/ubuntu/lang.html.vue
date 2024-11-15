<template><div><h1 id="语言切换" tabindex="-1"><a class="header-anchor" href="#语言切换"><span>语言切换</span></a></h1>
<p>查看当前语言包: <code v-pre>locale -a</code></p>
<p>中文语言是: <code v-pre>zh_CN.utf8</code></p>
<h2 id="安装中文语言包" tabindex="-1"><a class="header-anchor" href="#安装中文语言包"><span>安装中文语言包</span></a></h2>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> language-pack-zh-hans</span></span></code></pre>
</div><p>之后修改 <code v-pre>/etc/default/locale</code>，将 <code v-pre>LANG</code> 改为 <code v-pre>zh_CN.utf8</code></p>
</div></template>


