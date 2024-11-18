import{_ as t,o as s,c as e,b as a}from"./app-I4bPrcZ9.js";const n={};function l(h,i){return s(),e("div",null,i[0]||(i[0]=[a(`<h2 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具"><span>管理工具</span></a></h2><ul><li>yum (Centos 7)</li><li>dnf (Centos 8)</li></ul><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>yarn</span></a></h2><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --silent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --location</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://dl.yarnpkg.com/rpm/yarn.repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/yum.repos.d/yarn.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## OR ##</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span></span></code></pre></div><p>测试是否安装成功:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre></div>`,6)]))}const p=t(n,[["render",l],["__file","centos.html.vue"]]),o=JSON.parse('{"path":"/linux/centos.html","title":"CentOS 教程","lang":"zh-CN","frontmatter":{"title":"CentOS 教程","icon":"centos","date":"2019-11-23T00:00:00.000Z","category":"Linux","description":"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功:","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/centos.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"CentOS 教程"}],["meta",{"property":"og:description","content":"管理工具 yum (Centos 7) dnf (Centos 8) yarn 测试是否安装成功:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T05:53:16.000Z"}],["meta",{"property":"article:published_time","content":"2019-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T05:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T05:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"管理工具","slug":"管理工具","link":"#管理工具","children":[]},{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731909196000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":0.17,"words":52},"filePathRelative":"linux/centos.md","localizedDate":"2019年11月23日","excerpt":"","autoDesc":true}');export{p as comp,o as data};