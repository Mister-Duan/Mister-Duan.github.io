<template><div><p><code v-pre>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>
<table>
<thead>
<tr>
<th>定义段</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>properties</td>
<td>Object Map</td>
<td>否</td>
<td>同组件的属性</td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>否</td>
<td>同组件的数据</td>
</tr>
<tr>
<td>methods</td>
<td>Object</td>
<td>否</td>
<td>同自定义组件的方法</td>
</tr>
<tr>
<td>behaviors</td>
<td>String Array</td>
<td>否</td>
<td>引入其它的 behavior</td>
</tr>
<tr>
<td>created</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
</tr>
<tr>
<td>attached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
</tr>
<tr>
<td>ready</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
</tr>
<tr>
<td>moved</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
</tr>
<tr>
<td>detached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
</tr>
</tbody>
</table>
<details class="hint-container details"><summary>代码示例</summary>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// my-behavior.js</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">exports</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Behavior</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  behaviors</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  properties</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    myBehaviorProperty</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    myBehaviorData</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  attached</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {},</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  methods</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    myBehaviorMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


