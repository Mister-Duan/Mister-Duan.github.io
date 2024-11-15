<template><div><p>VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。</p>
<p>确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 <code v-pre>code</code> 即可启动 VS Code。</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 使用 code 打开当前文件夹</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在最近使用面板</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 打开新窗口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 改编当前语言</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --locale=es</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 打开文件比较器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --diff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">1> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">2></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 打开文件并跳转到指定的行(和列)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --goto</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> package.json:10:5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看帮助选项</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --help</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 禁用所有扩展</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">code</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --disable-extensions</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode-文件夹" tabindex="-1"><a class="header-anchor" href="#vscode-文件夹"><span>.vscode 文件夹</span></a></h2>
<p>基于工作区的 <code v-pre>.vscode</code> 文件夹位于根目录下。例如任务运行对应的 <code v-pre>tasks.json</code> 配置文件和调试器对应的 <code v-pre>launch.json</code> 文件。</p>
</div></template>


