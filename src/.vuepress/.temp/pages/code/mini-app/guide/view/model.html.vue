<template><div><blockquote>
<p>基础库 2.9.3 开始支持</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<p>在 WXML 中，普通的属性的绑定是单向的。例如:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{value}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>如果使用 <code v-pre>this.setData({ value: 'leaf' })</code> 来更新 value ，<code v-pre>this.data.value</code> 和输入框的中显示的值都会被更新为 <code v-pre>leaf</code> ；但如果用户修改了输入框里的值，却不会同时改变 <code v-pre>this.data.value</code> 。</p>
<p>如果需要在用户输入的同时改变 <code v-pre>this.data.value</code> ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 <code v-pre>model:</code> 前缀:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{value}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>这样，如果输入框的值被改变了， <code v-pre>this.data.value</code> 也会同时改变。同时， WXML 中所有绑定了 value 的位置也会被一同更新， 数据监听器 也会被正常触发。</p>
<blockquote>
<p><a href="https://developers.weixin.qq.com/s/8jXvobmV7vcj" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
</blockquote>
<h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h2>
<p>用于双向绑定的表达式有如下限制:</p>
<ol>
<li>
<p>只能是一个单一字段的绑定，如</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"值为 {{value}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ a + b }}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>都是非法的；</p>
</li>
<li>
<p>目前，尚不能 <code v-pre>data</code> 路径，如</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ a.b }}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>这样的表达式目前暂不支持。</p>
</li>
</ol>
<h2 id="在自定义组件中使用" tabindex="-1"><a class="header-anchor" href="#在自定义组件中使用"><span>在自定义组件中使用</span></a></h2>
<h3 id="传递双向绑定" tabindex="-1"><a class="header-anchor" href="#传递双向绑定"><span>传递双向绑定</span></a></h3>
<p>双向绑定同样可以使用在自定义组件上。</p>
<p>如下的自定义组件:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// custom-component.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    myValue</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- custom-component.wxml --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{myValue}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>这个自定义组件将自身的 <code v-pre>myValue</code> 属性双向绑定到了组件内输入框的 <code v-pre>value</code> 属性上。这样，如果页面这样使用这个组件:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">custom-component</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:my-value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{pageValue}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>当输入框的值变更时，自定义组件的 <code v-pre>myValue</code> 属性会同时变更，这样，页面的 <code v-pre>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code v-pre>pageValue</code> 的位置也会被一同更新。</p>
<h3 id="触发双向绑定更新" tabindex="-1"><a class="header-anchor" href="#触发双向绑定更新"><span>触发双向绑定更新</span></a></h3>
<p>自定义组件还可以自己触发双向绑定更新，做法就是: 使用 <code v-pre>setData</code> 设置自身的属性。例如:</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// custom-component.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    myValue</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 更新 myValue</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">      this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        myValue</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "leaf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面这样使用这个组件:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">custom-component</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> model:my-value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{pageValue}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
</div><p>当组件使用 <code v-pre>setData</code> 更新 <code v-pre>myValue</code> 时，页面的 <code v-pre>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code v-pre>pageValue</code> 的位置也会被一同更新。</p>
</div></template>


