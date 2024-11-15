<template><div><h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2>
<ul>
<li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li>
<li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li>
</ul>
<h2 id="创建自定义组件" tabindex="-1"><a class="header-anchor" href="#创建自定义组件"><span>创建自定义组件</span></a></h2>
<p>类似于页面，一个自定义组件由 <code v-pre>json</code> <code v-pre>wxml</code> <code v-pre>wxss</code> <code v-pre>js</code> 4 个文件组成。</p>
<p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code v-pre>component</code> 字段设为 <code v-pre>true</code> 可将这一组文件设为自定义组件):</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "component"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>同时，还要在 <code v-pre>wxml</code> 文件中编写组件模板，在 <code v-pre>wxss</code> 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 <RouteLink to="/code/mini-app/guide/custom-component/style.html">组件模板和样式</RouteLink> 。</p>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 这是自定义组件的内部WXML结构 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inner"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  {{innerText}}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">slot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/*这里的样式只应用于这个自定义组件*/</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.inner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></details>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>在组件 <code v-pre>wxss</code> 中不应使用 ID 选择器、属性选择器和标签名选择器。</p>
</div>
<p>在自定义组件的 js 文件中，需要使用 <code v-pre>Component()</code> 来注册组件，并提供组件的属性定义、内部数据和自定义方法。</p>
<p>组件的属性值和内部数据将被用于组件 <code v-pre>wxml</code> 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 <RouteLink to="/code/mini-app/guide/custom-component/component.html">Component 构造器</RouteLink> 。</p>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 这里定义了innerText属性，属性值可以在组件使用时指定</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    innerText</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "default value"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 这里是一些组件内部数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    someData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 这里是一个自定义方法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    customMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="使用自定义组件" tabindex="-1"><a class="header-anchor" href="#使用自定义组件"><span>使用自定义组件</span></a></h2>
<p>自定义组件在使用时与基础组件非常相似。</p>
<p>使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径:</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "usingComponents"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "component-tag-name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/the/custom/component"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>这样，在页面的 <code v-pre>wxml</code> 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>在 app.json 中也可以声明 <code v-pre>usingComponents</code> 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。</p>
</div>
<details class="hint-container details"><summary>代码示例</summary>
<p><a href="https://developers.weixin.qq.com/s/OMfVAKmZ6KZT" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  &#x3C;!-- 以下是对一个自定义组件的引用 --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">component-tag-name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> inner-text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Some text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div></details>
<p>自定义组件的 <code v-pre>wxml</code> 节点结构在与数据结合之后，将被插入到引用位置内。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。</li>
<li>自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式(使用 <code v-pre>usingComponents</code> 字段)。</li>
<li>自定义组件和页面所在项目根目录名不能以 <code v-pre>wx-</code> 为前缀，否则会报错。</li>
</ul>
</div>
<p>注意，是否在页面文件中使用 <code v-pre>usingComponents</code> 会使得页面的 <code v-pre>this</code> 对象的原型稍有差异，包括:</p>
<ul>
<li>使用 <code v-pre>usingComponents</code> 页面的原型与不使用时不一致，即 <code v-pre>Object.getPrototypeOf(this)</code> 结果不同。</li>
<li>使用 <code v-pre>usingComponents</code> 时会多一些方法，如 <code v-pre>selectComponent</code> 。</li>
<li>出于性能考虑，使用 <code v-pre>usingComponents</code> 时， <code v-pre>setData</code> 内容不会被直接深复制，即 <code v-pre>this.setData({ field: obj })</code> 后 <code v-pre>this.data.field === obj</code>。(深复制会在这个值被组件间传递时发生。)</li>
</ul>
<p>如果页面比较复杂，新增或删除 <code v-pre>usingComponents</code> 定义段时建议重新测试一下。</p>
</div></template>


