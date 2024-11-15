<template><div><p>WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。</p>
<!-- more -->
<h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu"><span>Ubuntu</span></a></h2>
<p>Windows 上的功能有很大缺失。已知不能用 Snap。</p>
<h2 id="wsl-文件位置" tabindex="-1"><a class="header-anchor" href="#wsl-文件位置"><span>WSL 文件位置</span></a></h2>
<div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">C:\Users\%USERNAME%\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs</span></span></code></pre>
</div><h2 id="重启-wsl" tabindex="-1"><a class="header-anchor" href="#重启-wsl"><span>重启 WSL</span></a></h2>
<p>使用</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LxssManager</span></span></code></pre>
</div><p>和</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> LxssManager</span></span></code></pre>
</div></div></template>


