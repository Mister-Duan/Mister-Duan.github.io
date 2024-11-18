import{_ as s,c as a,b as t,o as e}from"./app-bnCjOXR3.js";const n={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<h1 id="cut" tabindex="-1"><a class="header-anchor" href="#cut"><span>cut</span></a></h1><p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p><p>它的使用格式如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> OPTION</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [FILE]</span></span></code></pre></div><p>如果没有指定文件名，将读取标准输入。</p><p><code>-b</code> 参数用来指定读取的字节。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前三个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b1,2,3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前十个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b1-10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出从第5个字节开始的所有字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b5-</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出前5个字节</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b-5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-c</code> 参数用来指定读取的字符，用法与 <code>-b</code> 一样。有的字符是多字节字符，这时候就应该用 <code>-c</code> 代替 <code>-b</code>。</p><p><code>-d</code> 参数用来指定分隔符，默认分隔符为制表符。</p><p><code>-f</code> 参数用来指定字段。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 指定每一行的分隔符为逗号，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出第一和第三个字段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f1,3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 输出第一、第二、第四和第五个字段</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cut</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1-2,4-5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data.txt</span></span></code></pre></div>`,11)]))}const d=s(n,[["render",l],["__file","cut.html.vue"]]),k=JSON.parse('{"path":"/linux/bash/archives/commands/cut.html","title":"cut","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"cut cut 命令用于在命令行输出文本文件的指定位置的内容。 它的使用格式如下。 如果没有指定文件名，将读取标准输入。 -b 参数用来指定读取的字节。 -c 参数用来指定读取的字符，用法与 -b 一样。有的字符是多字节字符，这时候就应该用 -c 代替 -b。 -d 参数用来指定分隔符，默认分隔符为制表符。 -f 参数用来指定字段。","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/archives/commands/cut.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"cut"}],["meta",{"property":"og:description","content":"cut cut 命令用于在命令行输出文本文件的指定位置的内容。 它的使用格式如下。 如果没有指定文件名，将读取标准输入。 -b 参数用来指定读取的字节。 -c 参数用来指定读取的字符，用法与 -b 一样。有的字符是多字节字符，这时候就应该用 -c 代替 -b。 -d 参数用来指定分隔符，默认分隔符为制表符。 -f 参数用来指定字段。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T01:30:23.000Z"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T01:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cut\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T01:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[],"git":{"createdTime":1731661457000,"updatedTime":1731893423000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":3}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"linux/bash/archives/commands/cut.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{d as comp,k as data};
