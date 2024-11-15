<template><div><h1 id="ps" tabindex="-1"><a class="header-anchor" href="#ps"><span>ps</span></a></h1>
<p><code v-pre>ps</code> 命令列出当前正在执行的进程信息。</p>
<p>由于进程很多，所以为了快速找到某个进程，一般与 <code v-pre>grep</code> 配合使用。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 找出正在运行 vim 的进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vi</span></span></code></pre>
</div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<p><code v-pre>-u</code> 参数列出指定用户拥有的进程。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yourusername</span></span></code></pre>
</div></div></template>


