import{_ as a,c as t,d as s,e as h,b as e,o as l}from"./app-BGTcwSfg.js";const p={};function n(k,i){return l(),t("div",null,[i[0]||(i[0]=s("p",null,"在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。",-1)),i[1]||(i[1]=s("p",null,"GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。",-1)),h(" more "),i[2]||(i[2]=e(`<p>搭建 Git 服务器需要准备一台运行 Linux 的机器，强烈推荐用 Ubuntu 或 Debian，这样，通过几条简单的 <code>apt</code> 命令就可以完成安装。</p><ul><li><p><strong>Ubuntu</strong> 或 <strong>Debian</strong></p><p>假设您已经有 sudo 权限的用户账号，下面，正式开始安装。</p><ul><li><p>第一步，安装 git:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre></div></li><li><p>第二步，创建一个 git 用户，用来运行 git 服务:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adduser</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre></div></li><li><p>第三步，创建证书登录:</p><p>收集所有需要登录的用户的公钥，就是他们自己的 <code>id_rsa.pub</code> 文件，把所有公钥导入到 <code>/home/git/.ssh/authorized_keys</code> 文件里，一行一个。</p></li><li><p>第四步，初始化 Git 仓库:</p><p>先选定一个目录作为 Git 仓库，假定是 <code>/srv/sample.git</code>，在 <code>/srv</code> 目录下输入命令:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bare</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sample.git</span></span></code></pre></div><p>Git 就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的 Git 仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 Git 仓库通常都以 <code>.git</code> 结尾。然后，把 owner 改为 git:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git:git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sample.git</span></span></code></pre></div></li><li><p>第五步，禁用 shell 登录:</p><p>出于安全考虑，第二步创建的 git 用户不允许登录 shell，这可以通过编辑 <code>/etc/passwd</code> 文件完成。找到类似下面的一行:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git:x:1001:1001:,,,:/home/git:/bin/bash</span></span></code></pre></div><p>改为:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell</span></span></code></pre></div><p>这样，git 用户可以正常通过 ssh 使用 git，但无法登录 shell，因为我们为 git 用户指定的 git-shell 每次一登录就自动退出。</p></li><li><p>第六步，克隆远程仓库:</p><p>现在，可以通过 <code>git clone</code> 命令克隆远程仓库了，在各自的电脑上运行:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@server:/srv/sample.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cloning</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;sample&#39;...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">warning:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> appear</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> have</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cloned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> an</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> empty</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repository.</span></span></code></pre></div><p>剩下的推送就简单了。</p></li></ul></li><li><p><strong>Centos</strong></p><ol><li><p>安装 Git</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> expat-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gettext-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> openssl-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> perl-devel</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre></div><p>接下来创建一个 git 用户组和用户，用来运行 git 服务:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">groupadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useradd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre></div></li><li><p>创建证书登录</p><p>收集所有需要登录的用户的公钥，公钥位于 <code>id_rsa.pub</code> 文件中，将公钥导入到 <code>/home/git/.ssh/authorized_keys</code> 文件里，一行一个。</p><p>如果没有该文件创建它:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/git/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .ssh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 755</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .ssh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .ssh/authorized_keys</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 644</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .ssh/authorized_keys</span></span></code></pre></div></li><li><p>初始化 Git 仓库</p><p>首先我们选定一个目录作为 Git 仓库，假定是 <code>/home/gitrepo/test.git</code>，在 <code>/home/gitrepo</code> 目录下输入命令:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitrepo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git:git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitrepo/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitrepo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --bare</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Initialized</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> empty</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repository</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/gitrepo/runoob.git/</span></span></code></pre></div><p>以上命令 Git 创建一个空仓库，服务器上的 Git 仓库通常都以 <code>.git</code> 结尾。然后，把仓库所属用户改为 git:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git:git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> runoob.git</span></span></code></pre></div></li><li><p>克隆仓库</p></li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git@192.168.45.4:/home/gitrepo/runoob.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Cloning</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> into</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;runoob&#39;...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">warning:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> appear</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> have</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cloned</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> an</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> empty</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> repository.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Checking</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> connectivity...</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done.</span></span></code></pre></div><p>192.168.45.4 为 Git 所在服务器 ip ，您需要将其修改为您自己的 Git 服务 ip。</p><p>这样我们的 Git 服务器安装就完成。</p></li></ul>`,2))])}const r=a(p,[["render",n],["__file","server.html.vue"]]),g=JSON.parse('{"path":"/software/git/server.html","title":"服务器搭建","lang":"zh-CN","frontmatter":{"date":"2020-05-05T00:00:00.000Z","title":"服务器搭建","icon":"network","order":16,"category":"Git","tag":["Git","软件"],"description":"在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。 GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/server.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"服务器搭建"}],["meta",{"property":"og:description","content":"在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。 GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"software/git/server.md","localizedDate":"2020年5月5日","excerpt":"<p>在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。</p>\\n<p>GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。</p>\\n","autoDesc":true}');export{r as comp,g as data};
