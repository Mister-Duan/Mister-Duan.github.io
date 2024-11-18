import{_ as i,o as a,c as e,b as h}from"./app-BZ335xDN.js";const l={};function t(n,s){return a(),e("div",null,s[0]||(s[0]=[h(`<h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h1><h2 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h2><p><code>id</code> 命令用于查看指定用户的用户名和组名。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">me</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gid</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">me</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groups</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">500</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">me</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p><code>id</code> 输出结果分为三个部分，分别是 UID(用户编号和用户名)、GID(组编号和组名)，groups(用户所在的所有组)。</p><p>用户帐户的信息，存放在<code>/etc/passwd</code> 文件里面；用户组的信息，存放在<code>/etc/group</code> 文件里面。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回UID</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [UserName]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回GID</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [UserName]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回用户名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -un</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [UserName]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回组名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [UserName]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令，如果省略用户名，则返回当前用户的信息。</p><h2 id="su" tabindex="-1"><a class="header-anchor" href="#su"><span>su</span></a></h2><p><code>su</code> 命令允许您以另一个用户的身份，启动一个新的 shell 会话，或者是以这个用户的身份来发布一个命令。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> otherUser</span></span></code></pre></div><p>执行上面的命令以后，系统会提示输入密码。通过以后，就以另一个用户身份在执行命令了。</p><p>如果不加用户名，则表示切换到 root 用户。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">su</span></span></code></pre></div><p><code>-l</code> 参数表示启动一个需要登录的新的 Shell，这意味着工作目录会切换到该用户的主目录。它的缩写形式是 <code>-</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">su</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre></div><p>上面命令表示，切换到 root 用户的身份，且工作目录也切换到 root 用户的主目录。</p><p><code>-c</code> 参数表示只以其他用户的身份，执行单个命令，而不是启动一个新的 Session。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> su</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;command&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 实例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> su</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;ls -l /root/*&#39;</span></span></code></pre></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>sudo</span></a></h2><p><code>sudo</code> 命令很类似 <code>su</code> 命令，但有几点差别。</p><ul><li>对于管理员来说，<code>sudo</code> 命令的可配置性更高</li><li><code>sudo</code> 命令通常只用于执行单个命令，而不是开启另一个 Session。</li><li><code>sudo</code> 命令不要求超级用户的密码，而是用户使自己的密码来认证。</li></ul><p><code>sudo</code> 的设置在文件<code>/etc/sudoers</code> 之中。</p><p><code>-l</code> 参数列出用户拥有的所有权限。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -l</span></span></code></pre></div><h2 id="chown" tabindex="-1"><a class="header-anchor" href="#chown"><span>chown</span></a></h2><p><code>chown</code> 命令用来更改文件或目录的所有者和用户组。使用这个命令需要超级用户权限。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [owner][:[group]] file</span></span></code></pre></div><p>下面是一些例子。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改文件所有者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bob</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foo.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改文件所有者和用户组</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bob:users</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foo.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改用户组</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :admins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foo.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更改文件所有者和用户组(用户 bob 登录系统时，所属的用户组)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bob:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foo.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp"><span>chgrp</span></a></h2><p><code>chgrp</code> 命令更改用户组，用法与 <code>chown</code> 命令类似。</p><h2 id="useradd" tabindex="-1"><a class="header-anchor" href="#useradd"><span>useradd</span></a></h2><p><code>useradd</code> 命令用来新增用户。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/bill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bill</span></span></code></pre></div><p>上面命令新增用户 <code>bill</code>，参数 <code>-G</code> 指定用户所在的组，参数 <code>d</code> 指定用户的主目录，参数 <code>s</code> 指定用户的 Shell，参数 <code>m</code> 表示如果该目录不存在，则创建该目录。</p><h2 id="usermod" tabindex="-1"><a class="header-anchor" href="#usermod"><span>usermod</span></a></h2><p><code>usermod</code> 命令用来修改用户的各项属性。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sales</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jerry</span></span></code></pre></div><p>上面的命令修改用户 <code>jerry</code> 属于的主要用户组为 <code>sales</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sales</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jerry</span></span></code></pre></div><p>上面的命令修改用户 <code>jerry</code> 属于的次要用户组为 <code>sales</code>。</p><h2 id="adduser" tabindex="-1"><a class="header-anchor" href="#adduser"><span>adduser</span></a></h2><p><code>adduser</code> 命令用来将一个用户加入用户组。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adduser</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> username</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grouptoadd</span></span></code></pre></div><h2 id="groupadd" tabindex="-1"><a class="header-anchor" href="#groupadd"><span>groupadd</span></a></h2><p><code>groupadd</code> 命令用来新建一个用户组。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> groupadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> group1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adduser</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> foobar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> group1</span></span></code></pre></div><h2 id="groupdel" tabindex="-1"><a class="header-anchor" href="#groupdel"><span>groupdel</span></a></h2><p><code>groupdel</code> 命令用来删除一个用户组。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> groupdel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> group1</span></span></code></pre></div><h2 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd"><span>passwd</span></a></h2><p><code>passwd</code> 命令用于修改密码。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改自己的密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改其他用户的密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [user]</span></span></code></pre></div>`,54)]))}const k=i(l,[["render",t],["__file","user.html.vue"]]),p=JSON.parse('{"path":"/linux/bash/archives/user.html","title":"用户管理","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"用户管理 id id 命令用于查看指定用户的用户名和组名。 id 输出结果分为三个部分，分别是 UID(用户编号和用户名)、GID(组编号和组名)，groups(用户所在的所有组)。 用户帐户的信息，存放在/etc/passwd 文件里面；用户组的信息，存放在/etc/group 文件里面。 上面的命令，如果省略用户名，则返回当前用户的信息。 su s...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/archives/user.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"用户管理"}],["meta",{"property":"og:description","content":"用户管理 id id 命令用于查看指定用户的用户名和组名。 id 输出结果分为三个部分，分别是 UID(用户编号和用户名)、GID(组编号和组名)，groups(用户所在的所有组)。 用户帐户的信息，存放在/etc/passwd 文件里面；用户组的信息，存放在/etc/group 文件里面。 上面的命令，如果省略用户名，则返回当前用户的信息。 su s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T05:53:16.000Z"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T05:53:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T05:53:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"id","slug":"id","link":"#id","children":[]},{"level":2,"title":"su","slug":"su","link":"#su","children":[]},{"level":2,"title":"sudo","slug":"sudo","link":"#sudo","children":[]},{"level":2,"title":"chown","slug":"chown","link":"#chown","children":[]},{"level":2,"title":"chgrp","slug":"chgrp","link":"#chgrp","children":[]},{"level":2,"title":"useradd","slug":"useradd","link":"#useradd","children":[]},{"level":2,"title":"usermod","slug":"usermod","link":"#usermod","children":[]},{"level":2,"title":"adduser","slug":"adduser","link":"#adduser","children":[]},{"level":2,"title":"groupadd","slug":"groupadd","link":"#groupadd","children":[]},{"level":2,"title":"groupdel","slug":"groupdel","link":"#groupdel","children":[]},{"level":2,"title":"passwd","slug":"passwd","link":"#passwd","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731909196000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":2.82,"words":847},"filePathRelative":"linux/bash/archives/user.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{k as comp,p as data};
