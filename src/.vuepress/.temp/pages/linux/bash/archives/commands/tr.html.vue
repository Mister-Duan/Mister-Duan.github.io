<template><div><h1 id="tr" tabindex="-1"><a class="header-anchor" href="#tr"><span>tr</span></a></h1>
<p><code v-pre>tr</code> 命令用于按照给定模式转换文本。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> World</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Foo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Bar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Baz!</span></span></code></pre>
</div><p><code v-pre>tr</code> 命令可以将所有小写字母转换为大写字母。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'a-z'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'A-Z'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">HELLO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> WORLD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> FOO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> BAR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> BAZ!</span></span></code></pre>
</div><p><code v-pre>tr</code> 命令还可以将所有空格转为换行符。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> example.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ' '</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '\n'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">World</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Foo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Bar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Baz!</span></span></code></pre>
</div></div></template>


