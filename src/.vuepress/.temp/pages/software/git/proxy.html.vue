<template><div><p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p>
<h2 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置"><span>代理设置</span></a></h2>
<p>通常情况下，我们可以通过设置环境变量 <code v-pre>HTTP_PROXY</code> 和 <code v-pre>HTTPS_PROXY</code> 来进行代理设置。</p>
<p>在 Windows 下，我们可以通过设置环境变量 <code v-pre>HTTP_PROXY</code> 和 <code v-pre>HTTPS_PROXY</code> 来进行代理设置。</p>
<details class="hint-container details"><summary>Windows 例子</summary>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HTTP_PROXY=http://127.0.0.1:1080</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> HTTPS_PROXY=http://127.0.0.1:1080</span></span></code></pre>
</div></details>
<details class="hint-container details"><summary>Linux 例子</summary>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HTTP_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1080</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> HTTPS_PROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">127</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">1080</span></span></code></pre>
</div></details>
<p>上述做法仅对当前终端有效，如果需要永久生效，可以将上述命令添加到系统环境变量 (Windows) 或 <code v-pre>~/.bashrc</code> (Linux) 中。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><RouteLink to="/code/windows/env-variable.html">Windows 添加环境变量</RouteLink></p>
</div>
<h2 id="ssh-配置" tabindex="-1"><a class="header-anchor" href="#ssh-配置"><span>SSH 配置</span></a></h2>
<p>如果你在使用 22 端口通过 SSH 使用 Git，那么你需要在用户目录下的 <code v-pre>.ssh</code> 目录新建 <code v-pre>config</code> 文件，并输入以下内容:</p>
<div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">Host github.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  User git</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  Port 22</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  Hostname github.com</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 这里在 Windows 下需要替换成实际目录，如 "C:\Users\mister-hope\.ssh\id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  IdentityFile </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"~/.ssh/id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  TCPKeepAlive yes</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Ubuntu 需要安装 corkscrew</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Windows 可以改为 Git 安装目录下的 connect，如</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # ProxyCommand "C:\Program Files\Git\mingw64\bin\connect" -S 127.0.0.1:10808 -a none %h %p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">Host ssh.github.com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  User git</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  Port 443</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  Hostname ssh.github.com</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 这里在 Windows 下需要替换成实际目录，如 "C:\Users\mister-hope\.ssh\id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  IdentityFile </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"~/.ssh/id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  TCPKeepAlive yes</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Ubuntu 需要安装 corkscrew</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # Windows 可以改为 Git 安装目录下的 connect，如</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # ProxyCommand "C:\Program Files\Git\mingw64\bin\connect" -S 127.0.0.1:10808 -a none %h %p</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果在 WSL 使用，获取 Windows 的 IP 地址命令为 <code v-pre>ip route | grep default | awk '{print $3}'</code>。</p>
<p>特别注意，如不进行额外配置，每次重启后主机地址都会发生变化。</p>
</div>
<p>你可以使用 <code v-pre>ssh -T git@github.com</code> 来测试你的代理配置是否有效。</p>
</div></template>


