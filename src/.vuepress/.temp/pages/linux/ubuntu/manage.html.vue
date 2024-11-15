<template><div><h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具"><span>管理工具</span></a></h1>
<h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get"><span>apt-get</span></a></h2>
<p><code v-pre>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p>
<ul>
<li>
<p>获取软件包更新:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span></code></pre>
</div></li>
<li>
<p>更新软件包:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span></code></pre>
</div></li>
<li>
<p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
</li>
</ul>
<h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap"><span>Snap</span></a></h2>
<p>已经预装。</p>
<p>在中国大陆不建议使用 Snap</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>其他命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> search</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ------(package 搜索包)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> show</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #------(package 获取包的相关信息，如说明、大小、版本等)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # -----(强制安装?#"-f = --fix-missing"当是修复安装吧...)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #-----(package 删除包)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> purge</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ------(package 删除包，包括删除配置文件等)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --purge</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #------更新源</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> upgrade</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #------更新已安装的包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dist-upgrade</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ---------升级系统</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dselect-upgrade</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #------使用 dselect 升级</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> depends</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #-------(package 了解使用依赖)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-cache</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rdepends</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build-dep</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # ------(package 安装相关的编译环境)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> source</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #------(package 下载该包的源代码)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> clean</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> autoclean</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # --------清理下载文件的存档 &#x26;&#x26; 只清理过时的包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> check</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> #-------检查是否有损坏的依赖</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li>
</ol>
</section>
</div></template>


