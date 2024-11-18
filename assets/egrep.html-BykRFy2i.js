import{_ as e,c as a,b as i,o as n}from"./app-bnCjOXR3.js";const t={};function p(l,s){return n(),a("div",null,s[0]||(s[0]=[i(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep"><span>egrep</span></a></h1><p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Lorem ipsum</span></span>
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
<span class="line"><span>amet.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code> 命令显示包括 <code>Lorem</code> 或 <code>dolor</code> 的行。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> egrep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;(Lorem|dolor)&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -E</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;(Lorem|dolor)&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Lorem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ipsum</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dolor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> amet,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">et</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dolore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> magna</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">duo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dolores</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> et</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ea</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sanctus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> est</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Lorem</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ipsum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dolor</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sit</span></span></code></pre></div>`,6)]))}const d=e(t,[["render",p],["__file","egrep.html.vue"]]),h=JSON.parse('{"path":"/linux/bash/archives/commands/egrep.html","title":"egrep","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/archives/commands/egrep.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"egrep"}],["meta",{"property":"og:description","content":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T01:30:23.000Z"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T01:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"egrep\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T01:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[],"git":{"createdTime":1731661457000,"updatedTime":1731893423000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":3}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"linux/bash/archives/commands/egrep.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{d as comp,h as data};
