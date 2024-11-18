import{_ as s,o as a,c as t,b as e}from"./app-BZ335xDN.js";const h={};function l(n,i){return a(),t("div",null,i[0]||(i[0]=[e(`<h1 id="scp" tabindex="-1"><a class="header-anchor" href="#scp"><span>scp</span></a></h1><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><p><code>scp</code> 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。</p><p>它主要用于以下三种复制操作。</p><ul><li>从本地系统到远程系统。</li><li>从远程系统到本地系统。</li><li>在本地系统的两个远程系统之间。</li></ul><p>使用 <code>scp</code> 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。</p><p><code>scp</code> 的语法类似 <code>cp</code> 的语法。</p><p>注意，如果传输的文件在本机和远程系统，有相同的名称和位置，<code>scp</code> 会在没有警告的情况下覆盖文件。</p><h3 id="本地文件复制到远程系统" tabindex="-1"><a class="header-anchor" href="#本地文件复制到远程系统"><span>本地文件复制到远程系统</span></a></h3><p>复制本机文件到远程系统的基本语法如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SourceFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host:directory/TargetFile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote_username@10.10.0.2:/remote/directory</span></span></code></pre></div><p>下面是复制整个目录。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将本机的 documents 目录拷贝到远程主机，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 会在远程主机创建 documents 目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> documents</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username@server_ip:/path_to_remote_directory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将本机整个目录拷贝到远程目录下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localmachine/path_to_the_directory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username@server_ip:/path_to_remote_directory/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将本机目录下的所有内容拷贝到远程目录下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> localmachine/path_to_the_directory/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username@server_ip:/path_to_remote_directory/</span></span></code></pre></div><h3 id="远程文件复制到本地" tabindex="-1"><a class="header-anchor" href="#远程文件复制到本地"><span>远程文件复制到本地</span></a></h3><p>从远程主机复制文件到本地的语法如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host:directory/SourceFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TargetFile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote_username@10.10.0.2:/remote/file.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /local/directory</span></span></code></pre></div><p>下面是复制整个目录的例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 拷贝一个远程目录到本机目录下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username@server_ip:/path_to_remote_directory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> local-machine/path_to_the_directory/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 拷贝远程目录下的所有内容，到本机目录下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username@server_ip:/path_to_remote_directory/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> local-machine/path_to_the_directory/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host:directory/SourceFolder</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TargetFolder</span></span></code></pre></div><h3 id="两个远程系统之间的复制" tabindex="-1"><a class="header-anchor" href="#两个远程系统之间的复制"><span>两个远程系统之间的复制</span></a></h3><p>本机发出指令，从远程主机 A 拷贝到远程主机 B 的语法如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host1:directory/SourceFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host2:directory/SourceFile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user1@host1.com:/files/file.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user2@host2.com:/files</span></span></code></pre></div><p>系统将提示您输入两个远程帐户的密码。数据将直接从一个远程主机传输到另一个远程主机。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-P</code> 用来指定远程主机的 SSH 端口。如果远程主机使用非默认端口 22，可以在命令中指定。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2222</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user@host:directory/SourceFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TargetFile</span></span></code></pre></div><p><code>-p</code> 参数用来保留修改时间(modification time)、访问时间(access time)、文件状态(mode)等原始文件的信息。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@192.168.1.3:/some/path/test.txt</span></span></code></pre></div><p><code>-l</code> 参数用来限制传输数据的带宽速率，单位是 Kbit/sec。对于多人分享的带宽，这个参数可以留出一部分带宽供其他人使用。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 80</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yourusername@yourserver:/home/yourusername/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre></div><p>上面代码中，<code>scp</code> 命令占用的带宽限制为每秒 80K 比特位，即每秒 10K 字节。</p><p><code>-c</code> 参数用来指定加密算法。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blowfish</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> some_file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> your_username@remotehost.edu:~</span></span></code></pre></div><p>上面代码指定加密算法为 <code>blowfish</code>。</p><p><code>-C</code> 表示是否在传输时压缩文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blowfish</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> local_file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> your_username@remotehost.edu:~</span></span></code></pre></div><p><code>-q</code> 参数用来关闭显示拷贝的进度条。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Label.pdf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mrarianto@202.x.x.x:.</span></span></code></pre></div><p><code>-F</code> 参数用来指定 ssh_config 文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/pungki/proxy_ssh_config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Label.pdf</span></span></code></pre></div><p><code>-v</code> 参数用来显示详细的输出。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@192.168.1.3:/root/help2356.txt</span></span></code></pre></div><p><code>-i</code> 参数用来指定密钥。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -vCq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> private_key.pem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/test.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@192.168.1.3:/some/path/test.txt</span></span></code></pre></div><p><code>-r</code> 参数表示是否以递归方式复制目录。</p>`,44)]))}const k=s(h,[["render",l],["__file","scp.html.vue"]]),r=JSON.parse('{"path":"/linux/bash/archives/commands/scp.html","title":"scp","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"scp 基本用法 scp 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。 它主要用于以下三种复制操作。 从本地系统到远程系统。 从远程系统到本地系统。 在本地系统的两个远程系统之间。 使用 scp 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。 scp 的语法类似 cp 的语法。 ...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/archives/commands/scp.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"scp"}],["meta",{"property":"og:description","content":"scp 基本用法 scp 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。 它主要用于以下三种复制操作。 从本地系统到远程系统。 从远程系统到本地系统。 在本地系统的两个远程系统之间。 使用 scp 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。 scp 的语法类似 cp 的语法。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T05:53:16.000Z"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T05:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"scp\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T05:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"本地文件复制到远程系统","slug":"本地文件复制到远程系统","link":"#本地文件复制到远程系统","children":[]},{"level":3,"title":"远程文件复制到本地","slug":"远程文件复制到本地","link":"#远程文件复制到本地","children":[]},{"level":3,"title":"两个远程系统之间的复制","slug":"两个远程系统之间的复制","link":"#两个远程系统之间的复制","children":[]}]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731909196000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":2.63,"words":788},"filePathRelative":"linux/bash/archives/commands/scp.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{k as comp,r as data};
