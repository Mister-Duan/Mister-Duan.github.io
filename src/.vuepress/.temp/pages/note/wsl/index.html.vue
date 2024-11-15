<template><div><p>目前使用的系统是 WSL2。</p>
<p>其中以下操作可能需要在新机器上进行相同操作:</p>
<h2 id="windows-侧" tabindex="-1"><a class="header-anchor" href="#windows-侧"><span>Windows 侧</span></a></h2>
<p>Windows 侧可以在用户目录下创建 <code v-pre>.wslconfig</code> 文件，用于配置 WSL2。</p>
<div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[wsl2]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Limits VM memory in WSL 2 to 8 GB</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">memory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">8GB</span></span></code></pre>
</div><h2 id="wsl-侧" tabindex="-1"><a class="header-anchor" href="#wsl-侧"><span>WSL 侧</span></a></h2>
<p>WSL 侧可以通过 <code v-pre>/etc/wsl.conf</code> 进行配置。</p>
<h3 id="启用-init-d-支持" tabindex="-1"><a class="header-anchor" href="#启用-init-d-支持"><span>启用 init.d 支持</span></a></h3>
<p>在 <code v-pre>/etc/wsl.conf</code> 中加入:</p>
<div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[boot]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">systemd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">true</span></span></code></pre>
</div><h3 id="生成新的-rsa-密钥" tabindex="-1"><a class="header-anchor" href="#生成新的-rsa-密钥"><span>生成新的 RSA 密钥</span></a></h3>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "mister-hope@outlook.com"</span></span></code></pre>
</div><h3 id="使用-windows-代理" tabindex="-1"><a class="header-anchor" href="#使用-windows-代理"><span>使用 Windows 代理</span></a></h3>
<p>可以在 <code v-pre>.bashrc</code> 中加入以下内容:</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># add for proxy</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> hostIP</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> route</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '{print $3}'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> socks5Port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10810</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> httpPort</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10811</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">alias</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> proxy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  export HTTPS_PROXY="socks5://${hostIP}:${socks5Port}";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  export HTTP_PROXY="socks5://${hostIP}:${socks5Port}";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  export ALL_PROXY="socks5://${hostIP}:${socks5Port}";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  git config --global http.proxy "socks5://${hostIP}:${socks5Port}";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  git config --global https.proxy "socks5://${hostIP}:${socks5Port}";</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  echo -e "Acquire::http::Proxy \"socks5://${hostIP}:${socks5Port}\"; " | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  echo -e "Acquire::https::Proxy \"socks5://${hostIP}:${socks5Port}\"; " | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  if [ -e "~/.ssh/config"]; then</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    sed -i "s/^ProxyCommand \/usr\/bin\/corkscrew .* %h %p$/ProxyCommand \/usr\/bin\/corkscrew ${hostIP} ${httpPort} %h %p/g" ~/.ssh/config;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  else</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    echo "Host github.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  User git</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Port 22</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Hostname github.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  IdentityFile "~/.ssh/id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  TCPKeepAlive yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ProxyCommand /usr/bin/corkscrew ${hostIP} ${httpPort} %h %p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Host ssh.github.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  User git</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Port 443</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Hostname ssh.github.com</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  IdentityFile "~/.ssh/id_rsa"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  TCPKeepAlive yes</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  ProxyCommand /usr/bin/corkscrew ${hostIP} ${httpPort} %h %p</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">alias</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> unproxy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  unset HTTPS_PROXY;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  unset HTTP_PROXY;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  unset ALL_PROXY;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  git config --global --unset http.proxy;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  git config --global --unset https.proxy;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  sudo sed -i -e '</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/Acquire::http::Proxy/d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">' /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  sudo sed -i -e '</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/Acquire::https::Proxy/d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">' /etc/apt/apt.conf.d/proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以快速地使用 proxy 和 unproxy 命令。</p>
<h3 id="安装-nvm-和-node-js" tabindex="-1"><a class="header-anchor" href="#安装-nvm-和-node-js"><span>安装 nvm 和 Node.js</span></a></h3>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o-</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bash</span></span></code></pre>
</div><ol>
<li>
<p>由于 GitHub 已经遭到封锁，可以考虑安装 V2Ray 给 WSL2 以获得推送代码的能力。</p>
</li>
<li>
<p>更改 Node.js 可以使用的 Old Space 大小:</p>
<p>在用户目录的 <code v-pre>.bashrc</code> 中加入:</p>
<div class="language-conf" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">export </span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">NODE_OPTIONS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--max-old-space-size=8192"</span></span></code></pre>
</div></li>
</ol>
</div></template>


