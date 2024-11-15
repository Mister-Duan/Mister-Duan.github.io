<template><div><h1 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令"><span>其他指令</span></a></h1>
<h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2>
<h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件"><span>创建文件</span></a></h3>
<ul>
<li>touch</li>
<li>vi</li>
</ul>
<h3 id="编辑文件" tabindex="-1"><a class="header-anchor" href="#编辑文件"><span>编辑文件</span></a></h3>
<ul>
<li>vi</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用 vi 命令后，默认进入浏览模式。</p>
<p>按 <code v-pre>i</code> 进入 insert 模式， 按 <code v-pre>ESC</code> 退出。</p>
<ol>
<li>
<p>命令模式下，输入: <code v-pre>/</code> 字符串</p>
<p>比如搜索 user, 输入 <code v-pre>/user</code></p>
<p>按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串</p>
</li>
<li>
<p>查看下一个匹配，按下 n(小写 n)</p>
</li>
<li>
<p>跳转到上一个匹配，按下 N(大写 N)</p>
</li>
<li>
<p>搜索后，我们打开别的文件，发现也被高亮了，怎么关闭高亮?</p>
</li>
</ol>
<p>命令模式下，输入 <code v-pre>:nohlsearch</code> 也可以 <code v-pre>:set nohlsearch</code>；当然，可以简写，<code v-pre>noh</code> 或者 <code v-pre>set noh</code>。</p>
</div>
<h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件"><span>重命名文件</span></a></h3>
<ul>
<li>rename</li>
</ul>
<h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件"><span>移动文件</span></a></h3>
<ul>
<li>mv</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>该命令也可用于重命名</p>
</div>
<h3 id="文件浏览" tabindex="-1"><a class="header-anchor" href="#文件浏览"><span>文件浏览</span></a></h3>
<ul>
<li>pwd: 查看当前目录</li>
<li>cd: 移动当前目录</li>
<li>ls: 列出当前目录
<ul>
<li><code v-pre>-l</code>: 以表格列出当前目录详情</li>
<li><code v-pre>-a</code>: 包括隐藏文件</li>
</ul>
</li>
</ul>
<h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2>
<ul>
<li>chmod: 查看/更改文件或文件夹权限</li>
</ul>
<p><code v-pre>chmod</code> 是权限管理命令 <code v-pre>change the permissions mode of a file</code> 的缩写。</p>
<p><code v-pre>u</code> 代表所有者，<code v-pre>x</code> 代表执行权限。<code v-pre>+</code> 表示增加权限。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> u+x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> file.sh</span></span></code></pre>
</div><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 权限数字</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 文件名</span></span></code></pre>
</div><ul>
<li>
<p>r 读权限 read 4</p>
</li>
<li>
<p>w 写权限 write 2</p>
</li>
<li>
<p>x 操作权限 execute 1</p>
</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 600</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> id_rsa</span></span></code></pre>
</div><h2 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组"><span>用户组</span></a></h2>
<h3 id="管理用户组" tabindex="-1"><a class="header-anchor" href="#管理用户组"><span>管理用户组</span></a></h3>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">groupadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 　　添加用户组</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">groupdel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 　　删除用户组</span></span></code></pre>
</div><h3 id="添加用户到用户组" tabindex="-1"><a class="header-anchor" href="#添加用户到用户组"><span>添加用户到用户组</span></a></h3>
<p>将一个用户添加到用户组中，千万不能直接用:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupA</span></span></code></pre>
</div><p>这样做会使您离开其他用户组，仅仅做为 这个用户组 groupA 的成员。</p>
<p>应该用 加上 <code v-pre>-a</code> 选项:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupA</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FC4:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -G</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> groupA,groupB,groupC</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
</div><p><code v-pre>-a</code> 代表 <code v-pre>append</code>， 也就是 将自己添加到 用户组 groupA 中，而不必离开 其他用户组。</p>
<p>命令的所有的选项，及其含义:</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Options:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-c, –comment COMMENT new value of the GECOS field</span></span>
<span class="line"><span>-d, –home HOME_DIR new home directory for the user account</span></span>
<span class="line"><span>-e, –expiredate EXPIRE_DATE set account expiration date to EXPIRE_DATE</span></span>
<span class="line"><span>-f, –inactive INACTIVE set password inactive after expiration</span></span>
<span class="line"><span>to INACTIVE</span></span>
<span class="line"><span>-g, –gid GROUP force use GROUP as new primary group</span></span>
<span class="line"><span>-G, –groups GROUPS new list of supplementary GROUPS</span></span>
<span class="line"><span>-a, –append append the user to the supplemental GROUPS</span></span>
<span class="line"><span>mentioned by the -G option without removing</span></span>
<span class="line"><span>him/her from other groups</span></span>
<span class="line"><span>-h, –help display this help message and exit</span></span>
<span class="line"><span>-l, –login NEW_LOGIN new value of the login name</span></span>
<span class="line"><span>-L, –lock lock the user account</span></span>
<span class="line"><span>-m, –move-home move contents of the home directory to the new</span></span>
<span class="line"><span>location (use only with -d)</span></span>
<span class="line"><span>-o, –non-unique allow using duplicate (non-unique) UID</span></span>
<span class="line"><span>-p, –password PASSWORD use encrypted password for the new password</span></span>
<span class="line"><span>-s, –shell SHELL new login shell for the user account</span></span>
<span class="line"><span>-u, –uid UID new UID for the user account</span></span>
<span class="line"><span>-U, –unlock unlock the user account</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看用户所属的组使用命令:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">groups</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> user</span></span></code></pre>
</div><p>或者查看文件:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/group</span></span></code></pre>
</div><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h2>
<p><code v-pre>cat /etc/passwd</code> 查看用户列表</p>
<h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户"><span>添加用户</span></a></h3>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> useradd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [用户名]</span></span></code></pre>
</div><p>创建新用户: useradd</p>
<p><code v-pre>-d</code> 指定目录文件夹</p>
<p><code v-pre>-m</code> 新账号名</p>
<p>如:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /www/abc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> abc</span></span></code></pre>
</div><ul>
<li><code v-pre>-c</code>: comment 指定一段注释性描述。</li>
<li><code v-pre>-d</code>: 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。</li>
<li><code v-pre>-g</code>: 用户组 指定用户所属的用户组。</li>
<li><code v-pre>-G</code>: 用户组，用户组 指定用户所属的附加组。</li>
<li><code v-pre>-s</code>: Shell 文件 指定用户的登录 Shell。</li>
<li><code v-pre>-u</code>: 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。</li>
</ul>
<h3 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码"><span>设置密码</span></a></h3>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> passwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [用户名]</span></span></code></pre>
</div><h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h2>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">userdel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> abc</span></span></code></pre>
</div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>使用 userdel abc 命令删除该用户时，并不能删除该用户的所有信息，只是删除了/etc/passwd、/etc/shadow、/etc/group/、/etc/gshadow 四个文件里的该账户和组的信息。默认情况下创建一个用户账号，会创建一个家目录和一个用户邮箱(在/var/spool/mail 目录以用户名命名)</p>
<p>所以建议使用 <code v-pre>userdel -r abc</code> 删除用户。</p>
</div>
<h2 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h2>
<p>Linux 服务管理两种方式 service 和 systemctl</p>
<ol>
<li>
<p>service 命令</p>
<p>service 命令其实是去 <code v-pre>/etc/init.d</code> 目录下，去执行相关程序</p>
<ul>
<li>service 命令启动 redis 脚本</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span></span></code></pre>
</div><ul>
<li>直接启动 redis 脚本</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/etc/init.d/redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span></span></code></pre>
</div><ul>
<li>开机自启动</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">update-rc.d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> defaults</span></span></code></pre>
</div><p>其中脚本需要我们自己编写</p>
</li>
<li>
<p>systemctl 命令</p>
<p>systemd 是 Linux 系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。</p>
<p>systemd 对应的进程管理命令是 systemctl</p>
</li>
</ol>
</div></template>


