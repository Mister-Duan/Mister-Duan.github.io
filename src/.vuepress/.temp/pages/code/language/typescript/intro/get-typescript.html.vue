<template><div><p>TypeScript 的命令行工具安装方法如下:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> typescript</span></span></code></pre>
</div><p>以上命令会在全局环境下安装 <code v-pre>tsc</code> 命令，安装完成之后，我们就可以在任何地方执行 <code v-pre>tsc</code> 命令了。</p>
<!-- more -->
<p>编译一个 TypeScript 文件很简单:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tsc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hello.ts</span></span></code></pre>
</div><p>我们约定使用 TypeScript 编写的文件以 <code v-pre>.ts</code> 为后缀，用 TypeScript 编写 React 时，以 <code v-pre>.tsx</code> 为后缀。</p>
<h2 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器"><span>编辑器</span></a></h2>
<p>TypeScript 最大的优势便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。</p>
<p>主流的编辑器都支持 TypeScript，这里我推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>。</p>
<p>它是一款开源，跨终端的轻量级编辑器，内置了 TypeScript 支持。</p>
<p>另外它本身也是<a href="https://github.com/Microsoft/vscode/" target="_blank" rel="noopener noreferrer">用 TypeScript 编写的</a>。</p>
<p>下载安装: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></p>
<p>获取其他编辑器或 IDE 对 TypeScript 的支持:</p>
<ul>
<li><a href="https://github.com/Microsoft/TypeScript-Sublime-Plugin" target="_blank" rel="noopener noreferrer">Sublime Text</a></li>
<li><a href="https://atom.io/packages/atom-typescript" target="_blank" rel="noopener noreferrer">Atom</a></li>
<li><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm</a></li>
<li><a href="https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim" target="_blank" rel="noopener noreferrer">Vim</a></li>
<li><a href="https://github.com/ananthakumaran/tide" target="_blank" rel="noopener noreferrer">Emacs</a></li>
<li><a href="https://github.com/palantir/eclipse-typescript" target="_blank" rel="noopener noreferrer">Eclipse</a></li>
<li><a href="https://www.microsoft.com/en-us/download/details.aspx?id=48593" target="_blank" rel="noopener noreferrer">Visual Studio 2015</a></li>
<li><a href="https://www.microsoft.com/en-us/download/details.aspx?id=48739" target="_blank" rel="noopener noreferrer">Visual Studio 2013</a></li>
</ul>
</div></template>


