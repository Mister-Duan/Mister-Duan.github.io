<template><div><p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>
<p>jQuery 能帮我们干这些事情:</p>
<ul>
<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>
<li>简洁的操作 DOM 的方法: 写 <code v-pre>$('#test')</code> 肯定比 <code v-pre>document.getElementById('test')</code> 来得简洁；</li>
<li>轻松实现动画、修改 CSS 等各种操作。</li>
<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>
</ul>
<!-- more -->
<h2 id="jquery-版本" tabindex="-1"><a class="header-anchor" href="#jquery-版本"><span>jQuery 版本</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>jQuery 的 <code v-pre>1.x</code> 版本 兼容 ie678，<code v-pre>2.x</code> 为了精简代码体积移除了 ie678 的兼容。<code v-pre>3.x</code> 只兼容最新的一批浏览器，是官方还在更新维护的把呢不能</p>
<p>由于已经 2023 年了，直接选用 jQuery<code v-pre>3.x</code> 版本即可。</p>
</div>
<p>从 jQuery 官网可以下载最新版本。jQuery 只是一个 jquery-xxx.js 文件，但您会看到有 compressed(已压缩)和 uncompressed(未压缩)两种版本，使用时完全一样，但如果您想深入研究 jQuery 源码，那就用 uncompressed 版本。</p>
<h2 id="使用-jquery" tabindex="-1"><a class="header-anchor" href="#使用-jquery"><span>使用 jQuery</span></a></h2>
<p>使用 jQuery 只需要在页面的 <code v-pre>&lt;head&gt;</code> 引入 jQuery 文件即可:</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"//code.jquery.com/jquery-3.4.1.min.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$ 符号</span></a></h2>
<p><code v-pre>$</code> 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 jQuery 中，而 <code v-pre>$</code> 也是一个合法的变量名，它是变量 jQuery 的别名:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> $</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 'function'</span></span></code></pre>
</div><p><code v-pre>$</code> 本质上就是一个函数，但是函数也是对象，于是 <code v-pre>$</code> 除了可以直接调用外，也可以有很多其他属性。</p>
<p>注意，您看到的 <code v-pre>$</code> 函数名可能不是 <code v-pre>jQuery(selector, context)</code>，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 <code v-pre>$</code> 函数可能变成 <code v-pre>a(b, c)</code>。</p>
<p>绝大多数时候，我们都直接用 <code v-pre>$</code> (因为写起来更简单嘛)。但是，如果 <code v-pre>$</code> 这个变量不幸地被占用了，而且还不能改，那我们就只能让 jQuery 把 <code v-pre>$</code> 变量交出来，然后就只能使用 <code v-pre>jQuery</code> 这个变量:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// jQuery(selector, context)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">noConflict</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// undefined</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">jQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// jQuery(selector, context)</span></span></code></pre>
</div><p>这种黑魔法的原理是 jQuery 在占用<code v-pre>$</code>之前，先在内部保存了原来的<code v-pre>$</code>,调用 <code v-pre>jQuery.noConflict()</code> 时会把原来保存的变量还原。</p>
</div></template>


