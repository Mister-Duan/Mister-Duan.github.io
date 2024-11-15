<template><div><h2 id="什么是事件" tabindex="-1"><a class="header-anchor" href="#什么是事件"><span>什么是事件</span></a></h2>
<ul>
<li>事件是视图层到逻辑层的通讯方式。</li>
<li>事件可以将用户的行为反馈到逻辑层进行处理。</li>
<li>事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。</li>
<li>事件对象可以携带额外信息，如 <code v-pre>id</code>, <code v-pre>dataset</code>, <code v-pre>touches</code>。</li>
</ul>
<h2 id="事件的使用方式" tabindex="-1"><a class="header-anchor" href="#事件的使用方式"><span>事件的使用方式</span></a></h2>
<p>在组件中绑定一个事件处理函数，如 <code v-pre>bindtap</code>，当用户点击该组件的时候会在该页面对应的 <code v-pre>Page</code> 中找到相应的事件处理函数。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tapTest"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> data-hi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"WeChat"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tapName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> Click me! &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>在相应的 <code v-pre>Page</code> 定义中写上相应的事件处理函数，参数是 <code v-pre>event</code>。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  tapName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div><p>可以看到 log 出来的信息大致如下:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tap"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "timeStamp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">895</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "target"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tapTest"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dataset"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "hi"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"WeChat"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "currentTarget"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tapTest"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "dataset"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "hi"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"WeChat"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "detail"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "x"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "y"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "touches"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "identifier"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "pageX"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "pageY"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "clientX"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "clientY"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "changedTouches"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "identifier"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "pageX"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "pageY"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "clientX"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">53</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "clientY"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-wxs-函数响应事件" tabindex="-1"><a class="header-anchor" href="#使用-wxs-函数响应事件"><span>使用 WXS 函数响应事件 <Badge type="warning" text="高级" /></span></a></h2>
<p>高级用法，详见脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup>。</p>
<h2 id="事件详解" tabindex="-1"><a class="header-anchor" href="#事件详解"><span>事件详解</span></a></h2>
<h3 id="事件分类" tabindex="-1"><a class="header-anchor" href="#事件分类"><span>事件分类 <Badge text="重要" type="error" /></span></a></h3>
<p>事件分为冒泡事件和非冒泡事件:</p>
<ul>
<li>冒泡事件: 当一个组件上的事件被触发后，该事件会向父节点传递。</li>
<li>非冒泡事件: 当一个组件上的事件被触发后，该事件不会向父节点传递。</li>
</ul>
<p>WXML 的冒泡事件列表:</p>
<p>| 类型               | 触发条件                                                                                  | 最低版本 |
| ------------------ | ----------------------------------------------------------------------------------------- | -------- | ----- |
| touchstart         | 手指触摸动作开始                                                                          |          |
| touchmove          | 手指触摸后移动                                                                            |          |
| touchcancel        | 手指触摸动作被打断，如来电提醒，弹窗                                                      |          |
| touchend           | 手指触摸动作结束                                                                          |          |
| tap                | 手指触摸后马上离开                                                                        |          |
| longpress          | 手指触摸后，超过 350ms 再离开，如果指定了事件回调函数并触发了这个事件，tap 事件将不被触发 |          | 1.5.0 |
| longtap            | 手指触摸后，超过 350ms 再离开(推荐使用 longpress 事件代替)                                |          |
| transitionend      | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发                                 |          |
| animationstart     | 会在一个 WXSS animation 动画开始时触发                                                    |          |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发                                                |          |
| animationend       | 会在一个 WXSS animation 动画完成时触发                                                    |          |
| touchforcechange   | 在支持 3D Touch 的 iPhone 设备，重按时会触发                                              | 1.9.90   |</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如 form 的 <code v-pre>submit</code> 事件，input 的 <code v-pre>input</code> 事件，scroll-view 的 <code v-pre>scroll</code> 事件。(详见各个组件)</p>
</div>
<h3 id="普通事件绑定" tabindex="-1"><a class="header-anchor" href="#普通事件绑定"><span>普通事件绑定 <Badge text="重要" type="error" /></span></a></h3>
<p>事件绑定的写法类似于组件的属性，如:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  Click here!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>如果用户点击这个 view ，则页面的 <code v-pre>handleTap</code> 会被调用。</p>
<p>事件绑定函数可以是一个数据绑定，如:</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{ handlerName }}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  Click here!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>此时，页面的 <code v-pre>this.data.handlerName</code> 必须是一个字符串，指定事件处理函数名；如果它是个空字符串，则这个绑定会失效(可以利用这个特性来暂时禁用一些事件)。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>自基础库版本 1.5.0 起，在大多数组件和自定义组件中， <code v-pre>bind</code> 后可以紧跟一个冒号，其含义不变，如 <code v-pre>bind:tap</code> 。基础库版本 2.8.1 起，在所有组件中开始提供这个支持。</p>
</div>
<h3 id="绑定并阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#绑定并阻止事件冒泡"><span>绑定并阻止事件冒泡 <Badge text="重要" type="error" /></span></a></h3>
<p>除 <code v-pre>bind</code> 外，也可以用 <code v-pre>catch</code> 来绑定事件。与 <code v-pre>bind</code> 不同， <code v-pre>catch</code> 会阻止事件向上冒泡。</p>
<p>例如在下边这个例子中，点击 inner view 会先后调用 <code v-pre>handleTap3</code> 和 <code v-pre>handleTap2</code> (因为 tap 事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发 <code v-pre>handleTap2</code>，点击 outer view 会触发 <code v-pre>handleTap1</code>。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"outer"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  outer view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"middle"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> catchtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    middle view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inner"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      inner view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><h3 id="互斥事件绑定" tabindex="-1"><a class="header-anchor" href="#互斥事件绑定"><span>互斥事件绑定 <Badge text="初学无需掌握" type="warn" /></span></a></h3>
<p>自基础库版本 2.8.2 起，除 <code v-pre>bind</code> 和 <code v-pre>catch</code> 外，还可以使用 <code v-pre>mut-bind</code> 来绑定事件。一个 <code v-pre>mut-bind</code> 触发后，如果事件冒泡到其他节点上，其他节点上的 <code v-pre>mut-bind</code> 绑定函数不会被触发，但 <code v-pre>bind</code> 绑定函数和 <code v-pre>catch</code> 绑定函数依旧会被触发。</p>
<p>换而言之，所有 <code v-pre>mut-bind</code> 是“互斥”的，只会有其中一个绑定函数被触发。同时，它完全不影响 <code v-pre>bind</code> 和 <code v-pre>catch</code> 的绑定效果。</p>
<p>例如在下边这个例子中，点击 inner view 会先后调用 <code v-pre>handleTap3</code> 和 <code v-pre>handleTap2</code> ，点击 middle view 会调用 <code v-pre>handleTap2</code> 和 <code v-pre>handleTap1</code>。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"outer"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> mut-bind:tap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  outer view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"middle"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    middle view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inner"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> mut-bind:tap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      inner view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><h3 id="事件的捕获阶段" tabindex="-1"><a class="header-anchor" href="#事件的捕获阶段"><span>事件的捕获阶段 <Badge text="初学无需掌握" type="warn" /></span></a></h3>
<p>这是一个很重要的内容，但不适合初学者直接学习，建议先了解其他内容。具体内容见脚注<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup>。</p>
<h3 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象"><span>事件对象 <Badge text="了解" /> <Badge text="文档" /></span></a></h3>
<p>如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。</p>
<p>BaseEvent 基础事件对象属性列表:</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
<th>基础库版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>String</td>
<td>事件类型</td>
<td></td>
</tr>
<tr>
<td>timeStamp</td>
<td>Integer</td>
<td>事件生成时的时间戳</td>
<td></td>
</tr>
<tr>
<td>target</td>
<td>Object</td>
<td>触发事件的组件的一些属性值集合</td>
<td></td>
</tr>
<tr>
<td>currentTarget</td>
<td>Object</td>
<td>当前组件的一些属性值集合</td>
<td></td>
</tr>
<tr>
<td>mark</td>
<td>Object</td>
<td>事件标记数据</td>
<td>2.7.1</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>canvas 中的触摸事件不可冒泡，所以没有 <code v-pre>currentTarget</code>。</p>
</div>
<h4 id="customevent" tabindex="-1"><a class="header-anchor" href="#customevent"><span>CustomEvent</span></a></h4>
<p>自定义事件对象属性列表(继承 BaseEvent):</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>detail</td>
<td>Object</td>
<td>额外的信息</td>
</tr>
</tbody>
</table>
<h4 id="touchevent" tabindex="-1"><a class="header-anchor" href="#touchevent"><span>TouchEvent</span></a></h4>
<p>触摸事件对象属性列表(继承 BaseEvent):</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>touches</td>
<td>Array</td>
<td>触摸事件，当前停留在屏幕中的触摸点信息的数组</td>
</tr>
<tr>
<td>changedTouches</td>
<td>Array</td>
<td>触摸事件，当前变化的触摸点信息的数组</td>
</tr>
</tbody>
</table>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h4>
<p>代表事件的类型。</p>
<h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp"><span>timeStamp</span></a></h4>
<p>页面打开到触发事件所经过的毫秒数。</p>
<h4 id="target" tabindex="-1"><a class="header-anchor" href="#target"><span>target</span></a></h4>
<p>触发事件的源组件。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>String</td>
<td>事件源组件的 <code v-pre>id</code></td>
</tr>
<tr>
<td>dataset</td>
<td>Object</td>
<td>事件源组件上由 <code v-pre>data-</code> 开头的自定义属性组成的集合</td>
</tr>
</tbody>
</table>
<h4 id="currenttarget" tabindex="-1"><a class="header-anchor" href="#currenttarget"><span>currentTarget</span></a></h4>
<p>事件绑定的当前组件。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>String</td>
<td>当前组件的 <code v-pre>id</code></td>
</tr>
<tr>
<td>dataset</td>
<td>Object</td>
<td>当前组件上由 <code v-pre>data-</code> 开头的自定义属性组成的集合</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>target</code> 和 <code v-pre>currentTarget</code> 可以参考上例中，点击 inner view <code v-pre>时，handleTap3</code> 收到的事件对象 <code v-pre>target</code> 和 <code v-pre>currentTarget</code> 都是 <code v-pre>inner，而</code> <code v-pre>handleTap2</code> 收到的事件对象 <code v-pre>target</code> 就是 <code v-pre>inner</code>，<code v-pre>currentTarget</code> 就是 <code v-pre>middle</code>。</p>
</div>
<h4 id="dataset" tabindex="-1"><a class="header-anchor" href="#dataset"><span>dataset</span></a></h4>
<p>在组件节点中可以附加一些自定义数据。这样，在事件中可以获取这些自定义的节点数据，用于事件的逻辑处理。</p>
<p>在 WXML 中，这些自定义数据以 <code v-pre>data-</code> 开头，多个单词由连字符 <code v-pre>-</code> 连接。这种写法中，连字符写法会转换成驼峰写法，而大写字符会自动转成小写字符。如:</p>
<ul>
<li><code v-pre>data-element-type</code>: 最终会呈现为 <code v-pre>event.currentTarget.dataset.elementType</code></li>
<li><code v-pre>data-elementType</code>: 最终会呈现为 <code v-pre>event.currentTarget.dataset.elementtype</code></li>
</ul>
<details class="hint-container details"><summary>例子</summary>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> data-alpha-beta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> data-alphaBeta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bindViewTap"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> DataSet Test &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bindViewTap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">currentTarget</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">dataset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">alphaBeta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// - 会转为驼峰写法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">currentTarget</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">dataset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">alphabeta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 大写会转为小写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div></details>
<h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>mark</span></a></h4>
<p>在基础库版本 2.7.1 以上，可以使用 mark 来识别具体触发事件的 <code v-pre>target</code> 节点。此外， mark 还可以用于承载一些自定义数据(类似于 <code v-pre>dataset</code> )。</p>
<p>当事件触发时，事件冒泡路径上所有的 mark 会被合并，并返回给事件回调函数。(即使事件不是冒泡事件，也会 mark)</p>
<details class="hint-container details"><summary>例子</summary>
<p><a href="https://developers.weixin.qq.com/s/boDQoKmu7M7G" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> mark:myMark</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"last"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bindViewTap"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> mark:anotherMark</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"leaf"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bindButtonTap"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>按钮&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>在上述 WXML 中，如果按钮被点击，将触发 <code v-pre>bindViewTap</code> 和 <code v-pre>bindButtonTap</code> 两个事件，事件携带的 <code v-pre>event.mark</code> 将包含 <code v-pre>myMark</code> 和 <code v-pre>anotherMark</code> 两项。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bindViewTap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">mark</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">myMark</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "last"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">mark</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">anotherMark</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "leaf"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
</div></details>
<p><code v-pre>mark</code> 和 <code v-pre>dataset</code> 很相似，主要区别在于: <code v-pre>mark</code> 会包含从触发事件的节点到根节点上所有的 <code v-pre>mark</code>: 属性值；而 <code v-pre>dataset</code> 仅包含一个节点的 <code v-pre>data-</code> 属性值。</p>
<p>细节注意事项:</p>
<ul>
<li>如果存在同名的 <code v-pre>mark</code> ，父节点的 <code v-pre>mark</code> 会被子节点覆盖。</li>
<li>在自定义组件中接收事件时， <code v-pre>mark</code> 不包含自定义组件外的节点的 <code v-pre>mark</code> 。</li>
<li>不同于 <code v-pre>dataset</code> ，节点的 <code v-pre>mark</code> 不会做连字符和大小写转换。</li>
</ul>
<h4 id="touches" tabindex="-1"><a class="header-anchor" href="#touches"><span>touches</span></a></h4>
<p>touches 是一个数组，每个元素为一个 Touch 对象(canvas 触摸事件中携带的 touches 是 CanvasTouch 数组)。表示当前停留在屏幕上的触摸点。</p>
<h4 id="touch-对象" tabindex="-1"><a class="header-anchor" href="#touch-对象"><span>Touch 对象</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>identifier</td>
<td>Number</td>
<td>触摸点的标识符</td>
</tr>
<tr>
<td>pageX, pageY</td>
<td>Number</td>
<td>距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴</td>
</tr>
<tr>
<td>clientX, clientY</td>
<td>Number</td>
<td>距离页面可显示区域(屏幕除去导航条)左上角距离，横向为 X 轴，纵向为 Y 轴</td>
</tr>
</tbody>
</table>
<h4 id="canvastouch-对象" tabindex="-1"><a class="header-anchor" href="#canvastouch-对象"><span>CanvasTouch 对象</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>identifier</td>
<td>Number</td>
<td>触摸点的标识符</td>
</tr>
<tr>
<td>x, y</td>
<td>Number</td>
<td>距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴</td>
</tr>
</tbody>
</table>
<h4 id="changedtouches" tabindex="-1"><a class="header-anchor" href="#changedtouches"><span>changedTouches</span></a></h4>
<p><code v-pre>changedTouches</code> 数据格式同 <code v-pre>touches</code>。表示有变化的触摸点，如从无变有(<code v-pre>touchstart</code>)，位置变化(<code v-pre>touchmove</code>)，从有变无(<code v-pre>touchend</code>、<code v-pre>touchcancel</code>)。</p>
<h4 id="detail" tabindex="-1"><a class="header-anchor" href="#detail"><span>detail</span></a></h4>
<p>自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，媒体的错误事件会携带错误信息，详见组件定义中各个事件的定义。</p>
<p>点击事件的 <code v-pre>detail</code> 带有的 <code v-pre>x</code>, <code v-pre>y</code> 同 <code v-pre>pageX</code>, <code v-pre>pageY</code> 代表距离文档左上角的距离。</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>从基础库版本 2.4.4 开始，支持使用 WXS 函数绑定事件，WXS 函数接受 2 个参数，第一个是 <code v-pre>event</code>，在原有的 <code v-pre>event</code> 的基础上加了 <code v-pre>event.instance</code> 对象，第二个参数是 <code v-pre>ownerInstance</code>，和 <code v-pre>event.instance</code> 一样是一个 <code v-pre>ComponentDescriptor</code> 对象。具体使用如下:</p>
<p>在组件中绑定和注册事件处理的 WXS 函数。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wxs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"wxs"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./test.wxs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">wxs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tapTest"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> data-hi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"WeChat"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bindtap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"{{wxs.tapName}}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> Click me! &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><div v-pre>
<p><strong>绑定的 WXS 函数必须用 <code v-pre>{{}}</code> 括起来</strong></p>
</div>
<p><code v-pre>test.wxs</code> 文件实现 <code v-pre>tapName</code> 函数</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> tapName</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">ownerInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"tap wechat"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  tapName</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> tapName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
</div><p><code v-pre>ownerInstance</code> 包含了一些方法，可以设置组件的样式和 class，具体包含的方法以及为什么要用 WXS 函数响应事件，请点击查看 详情。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>自基础库版本 1.5.0 起，触摸类事件支持捕获阶段。捕获阶段位于冒泡阶段之前，且在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反。需要在捕获阶段监听事件时，可以采用 <code v-pre>capture-bind</code>、<code v-pre>capture-catch</code> 关键字，后者将中断捕获阶段和取消冒泡阶段。</p>
<p>在下面的代码中，点击 inner view 会先后调用 <code v-pre>handleTap2</code>、<code v-pre>handleTap4</code>、<code v-pre>handleTap3</code>、<code v-pre>handleTap1</code>。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"outer"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap1"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> capture-bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  outer view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inner"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap3"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> capture-bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap4"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    inner view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>如果将上面代码中的第一个 <code v-pre>capture-bind</code> 改为 <code v-pre>capture-catch</code>，将只触发 <code v-pre>handleTap2</code>。</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"outer"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap1"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> capture-catch:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  outer view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inner"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap3"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> capture-bind:touchstart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"handleTap4"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    inner view</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></li>
</ol>
</section>
</div></template>


