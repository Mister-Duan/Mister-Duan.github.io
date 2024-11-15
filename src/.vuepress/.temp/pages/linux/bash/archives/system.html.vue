<template><div><h1 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h1>
<h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname"><span>uname</span></a></h2>
<p><code v-pre>uname</code> 命令返回当前机器的信息。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 内核的版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">3.2.0-24-virtual</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># CPU 架构</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">x86_64</span></span></code></pre>
</div><p>如果要了解操作系统的版本，可以查看<code v-pre>/etc/issue</code> 文件。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/issue</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Debian</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> GNU/Linux</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 9</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \l</span></span></code></pre>
</div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h2>
<p><code v-pre>service</code> 命令可以查看当前正在运行的服务。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --status-all</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ + ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apache2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ ? ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">atd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ - ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bootlogd</span></span></code></pre>
</div><p>上面代码中，<code v-pre>+</code> 表示正在运行，<code v-pre>-</code> 表示已经停止，<code v-pre>?</code>表示 <code v-pre>service</code> 命令不了解相关信息。</p>
</div></template>


