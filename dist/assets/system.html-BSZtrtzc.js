import{_ as i,o as e,c as a,b as t}from"./app-DKZzAm00.js";const n={};function h(l,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h1><h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname"><span>uname</span></a></h2><p><code>uname</code> 命令返回当前机器的信息。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 内核的版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3.2.0-24-virtual</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># CPU 架构</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uname</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">x86_64</span></span></code></pre></div><p>如果要了解操作系统的版本，可以查看<code>/etc/issue</code> 文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/issue</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Debian</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GNU/Linux</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\l</span></span></code></pre></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h2><p><code>service</code> 命令可以查看当前正在运行的服务。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> service</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --status-all</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ + ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apache2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ? ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">atd</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ - ]  </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bootlogd</span></span></code></pre></div><p>上面代码中，<code>+</code> 表示正在运行，<code>-</code> 表示已经停止，<code>?</code>表示 <code>service</code> 命令不了解相关信息。</p>`,10)]))}const r=i(n,[["render",h],["__file","system.html.vue"]]),d=JSON.parse('{"path":"/linux/bash/archives/system.html","title":"系统信息","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"系统信息 uname uname 命令返回当前机器的信息。 如果要了解操作系统的版本，可以查看/etc/issue 文件。 service service 命令可以查看当前正在运行的服务。 上面代码中，+ 表示正在运行，- 表示已经停止，?表示 service 命令不了解相关信息。","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/archives/system.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"系统信息"}],["meta",{"property":"og:description","content":"系统信息 uname uname 命令返回当前机器的信息。 如果要了解操作系统的版本，可以查看/etc/issue 文件。 service service 命令可以查看当前正在运行的服务。 上面代码中，+ 表示正在运行，- 表示已经停止，?表示 service 命令不了解相关信息。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T05:53:16.000Z"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T05:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统信息\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T05:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"uname","slug":"uname","link":"#uname","children":[]},{"level":2,"title":"service","slug":"service","link":"#service","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731909196000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":0.39,"words":118},"filePathRelative":"linux/bash/archives/system.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{r as comp,d as data};
