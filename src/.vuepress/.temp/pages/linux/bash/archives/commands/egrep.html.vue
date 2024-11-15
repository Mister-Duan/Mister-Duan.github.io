<template><div><h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep"><span>egrep</span></a></h1>
<p><code v-pre>egrep</code> 命令用于显示匹配正则模式的行，与 <code v-pre>grep -E</code> 命令等价。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Lorem ipsum</span></span>
<span class="line"><span>dolor sit amet,</span></span>
<span class="line"><span>consetetur</span></span>
<span class="line"><span>sadipscing elitr,</span></span>
<span class="line"><span>sed diam nonumy</span></span>
<span class="line"><span>eirmod tempor</span></span>
<span class="line"><span>invidunt ut labore</span></span>
<span class="line"><span>et dolore magna</span></span>
<span class="line"><span>aliquyam erat, sed</span></span>
<span class="line"><span>diam voluptua. At</span></span>
<span class="line"><span>vero eos et</span></span>
<span class="line"><span>accusam et justo</span></span>
<span class="line"><span>duo dolores et ea</span></span>
<span class="line"><span>rebum. Stet clita</span></span>
<span class="line"><span>kasd gubergren,</span></span>
<span class="line"><span>no sea takimata</span></span>
<span class="line"><span>sanctus est Lorem</span></span>
<span class="line"><span>ipsum dolor sit</span></span>
<span class="line"><span>amet.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>egrep</code> 命令显示包括 <code v-pre>Lorem</code> 或 <code v-pre>dolor</code> 的行。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> egrep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '(Lorem|dolor)'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '(Lorem|dolor)'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Lorem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ipsum</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dolor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> amet,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">et</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dolore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> magna</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">duo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dolores</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> et</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ea</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sanctus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> est</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Lorem</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ipsum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dolor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sit</span></span></code></pre>
</div></div></template>


