<template><div><h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h1>
<p><code v-pre>sort</code> 命令用于文本文件的排序。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">f</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">d</span></span></code></pre>
</div><p>执行 <code v-pre>sort</code> 命令对其进行排序。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sort</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">f</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">g</span></span></code></pre>
</div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<p><code v-pre>-R</code> 参数表示随机排序。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">g</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">f</span></span></code></pre>
</div></div></template>


