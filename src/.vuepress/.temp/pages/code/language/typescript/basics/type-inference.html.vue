<template><div><p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>
<!-- more -->
<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论"><span>什么是类型推论</span></a></h2>
<p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "seven"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.</span></span></code></pre>
</div><p>事实上，它等价于:</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "seven"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.</span></span></code></pre>
</div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p>
<p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code v-pre>any</code> 类型而完全不被类型检查</strong>:</p>
<div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> myFavoriteNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "seven"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
</div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>
<ul>
<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html" target="_blank" rel="noopener noreferrer">Type Inference</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html" target="_blank" rel="noopener noreferrer">中文版</a>)</li>
</ul>
</div></template>


