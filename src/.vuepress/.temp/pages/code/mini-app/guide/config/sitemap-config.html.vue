<template><div><p>微信现已开放小程序内搜索，开发者可以通过 <code v-pre>sitemap.json</code> 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code v-pre>user-agent: mpcrawler</code> 及场景值: <code v-pre>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>
<p>小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code v-pre>sitemap.json</code> ，则默认为所有页面都允许被索引。</p>
<!-- more -->
<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>rules</td>
<td>Object[]</td>
<td>是</td>
<td>索引规则列表</td>
</tr>
</tbody>
</table>
<h3 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>rules</span></a></h3>
<p>rules 配置项指定了索引规则，每项规则为一个 JSON 对象，属性如下所示:</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>默认值</th>
<th>取值</th>
<th>取值说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>action</td>
<td>string</td>
<td>否</td>
<td>&quot;allow&quot;</td>
<td>&quot;allow&quot;、&quot;disallow&quot;</td>
<td>命中该规则的页面是否能被索引</td>
</tr>
<tr>
<td>page</td>
<td>string</td>
<td>是</td>
<td></td>
<td>&quot;*&quot;、页面的路径</td>
<td>* 表示所有页面，不能作为通配符使用</td>
</tr>
<tr>
<td>params</td>
<td>string[]</td>
<td>否</td>
<td>[]</td>
<td></td>
<td>当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表(不含参数值)</td>
</tr>
<tr>
<td>matching</td>
<td>string</td>
<td>否</td>
<td>&quot;inclusive&quot;</td>
<td>参考 matching 取值说明</td>
<td>当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式</td>
</tr>
<tr>
<td>priority</td>
<td>Number</td>
<td>否</td>
<td></td>
<td></td>
<td>优先级，值越大则规则越早被匹配，否则默认从上到下匹配</td>
</tr>
</tbody>
</table>
<h3 id="matching-取值说明" tabindex="-1"><a class="header-anchor" href="#matching-取值说明"><span>matching 取值说明</span></a></h3>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>exact</td>
<td>当小程序页面的参数列表等于 params 时，规则命中</td>
</tr>
<tr>
<td>inclusive</td>
<td>当小程序页面的参数列表包含 params 时，规则命中</td>
</tr>
<tr>
<td>exclusive</td>
<td>当小程序页面的参数列表与 params 交集为空时，规则命中</td>
</tr>
<tr>
<td>partial</td>
<td>当小程序页面的参数列表与 params 交集不为空时，规则命中</td>
</tr>
</tbody>
</table>
<h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例 1</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rules"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"allow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "params"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "matching"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"exact"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"disallow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page</code> =&gt; 不被索引</li>
<li><code v-pre>path/to/page?a=1</code> =&gt; 不被索引</li>
<li><code v-pre>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 不被索引</li>
<li>其他页面都会被索引</li>
</ul>
<h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例 2</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rules"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"allow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "params"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "matching"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"inclusive"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"disallow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page</code> =&gt; 不被索引</li>
<li><code v-pre>path/to/page?a=1</code> =&gt; 不被索引</li>
<li>其他页面都会被索引</li>
</ul>
<h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例 3</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rules"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"allow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "params"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "matching"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"exclusive"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"disallow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>path/to/pag</code>e =&gt; 优先索引</li>
<li><code v-pre>path/to/page?c=3</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page?a=1</code> =&gt; 不被索引</li>
<li><code v-pre>path/to/page?a=1&amp;b=2</code> =&gt; 不被索引</li>
<li>其他页面都会被索引</li>
</ul>
<h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4"><span>示例 4</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "rules"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"allow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "params"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "matching"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"partial"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"disallow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "page"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"path/to/page"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>path/to/page?a=1</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li>
<li><code v-pre>path/to/page</code> =&gt; 不被索引</li>
<li><code v-pre>path/to/page?c=3</code> =&gt; 不被索引</li>
<li>其他页面都会被索引</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>没有 sitemap.json 则默认所有页面都能被索引</p>
<p><code v-pre>{&quot;action&quot;: &quot;allow&quot;, &quot;page&quot;: &quot;*&quot;}</code> 是优先级最低的默认规则，未显式指明 <code v-pre>&quot;disallow&quot;</code> 的都默认被索引</p>
</div>
</div></template>


