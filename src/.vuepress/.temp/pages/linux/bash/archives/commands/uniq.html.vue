<template><div><h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h1>
<p><code v-pre>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span></code></pre>
</div><p>对该文件进行排序后，再过滤掉重复的行。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sort</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uniq</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">d</span></span></code></pre>
</div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<p><code v-pre>-c</code> 参数会显示每行一共出现了多少次。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">uniq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> b</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> d</span></span></code></pre>
</div></div></template>


