<template><div><h1 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>export</span></a></h1>
<p><code v-pre>export</code> 命令用于向子 Shell 输出变量。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> hotellogs</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/workspace/hotel-api/storage/logs"</span></span></code></pre>
</div><p>然后执行下面的命令，新建一个子 Shell。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hotellogs</span></span></code></pre>
</div><p>上面命令的执行结果会进入 <code v-pre>hotellogs</code> 变量指向的目录。</p>
<p><code v-pre>export</code> 命令还可以显示所有环境变量。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> export</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">SHELL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/bin/zsh</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">AWS_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/Users/adnanadnan/.aws</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LANG</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LC_CTYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">LESS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">-R</span></span></code></pre>
</div><p>如果想查看单个变量，使用 <code v-pre>echo $VARIABLE_NAME</code>。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $SHELL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/bin/zsh</span></span></code></pre>
</div></div></template>


