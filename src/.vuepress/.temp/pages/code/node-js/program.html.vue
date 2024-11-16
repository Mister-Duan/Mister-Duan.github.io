<template><div><p>在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。</p>
<p>从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。</p>
<!-- more -->
<p>那么问题来了: 文本编辑器到底哪家强?</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>千万不要使用 Windows 自带的记事本编辑任何文本文件。</p>
<ul>
<li>具体详情请见 <RouteLink to="/code/windows/notepad.html">记事本遗留问题</RouteLink></li>
</ul>
</div>
<p>如果您的电脑上已经安装了<strong>Sublime Text</strong>，或者<strong>Notepad++</strong>，也可以用来编写 JavaScript 代码，注意用 UTF-8 格式保存。</p>
<p>最方便的，当然是 Mister.Duan 强力安利的 VS Code 了。</p>
<p>输入以下代码:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"use strict"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, world."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
</div><p>第一行总是写上 <code v-pre>'use strict';</code> 是因为我们总是以严格模式运行 JavaScript 代码，避免各种潜在陷阱。</p>
<p>然后，选择一个目录，例如 <code v-pre>C:\Workspace</code>，把文件保存为 <code v-pre>hello.js</code>，就可以打开命令行窗口，把当前目录切换到 hello.js 所在目录，然后输入以下命令运行这个程序了:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hello.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Hello,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world.</span></span></code></pre>
</div><p>也可以保存为别的名字，比如 <code v-pre>first.js</code>，但是必须要以 <code v-pre>.js</code> 结尾。此外，文件名只能是英文字母、数字和下划线的组合。</p>
<p>如果当前目录下没有 <code v-pre>hello.js</code> 这个文件，运行 <code v-pre>node hello.js</code> 就会报错:</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hello.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">module.js:338</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    throw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">          ^</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Cannot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'C:\Workspace\hello.js'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Function.Module._resolveFilename</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Function.Module._load</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Function.Module.runMain</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> startup</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    at</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node.js</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错的意思就是，没有找到 <code v-pre>hello.js</code> 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。</p>
<h2 id="命令行模式和-node-js-交互模式" tabindex="-1"><a class="header-anchor" href="#命令行模式和-node-js-交互模式"><span>命令行模式和 Node.js 交互模式</span></a></h2>
<p>请注意区分命令行模式和 Node.js 交互模式。</p>
<p>看到类似 <code v-pre>C:\&gt;</code> 是在 Windows 提供的命令行模式:</p>
<figure><img src="@source/code/node-js/assets/run-node-hello.png" alt="run-node-hello" tabindex="0" loading="lazy"><figcaption>run-node-hello</figcaption></figure>
<p>在命令行模式下，可以执行 Node.js 进入 Node.js 交互式环境，也可以执行 Node.js <code v-pre>hello.js</code> 运行一个 <code v-pre>.js</code> 文件。</p>
<p>看到<code v-pre>&gt;</code> 是在 Node.js 交互式环境下:</p>
<figure><img src="@source/code/node-js/assets/node-interactive-env.png" alt="node-interactive-env" tabindex="0" loading="lazy"><figcaption>node-interactive-env</figcaption></figure>
<p>在 Node.js 交互式环境下，我们可以输入 JavaScript 代码并立刻执行。</p>
<p>此外，在命令行模式运行.js 文件和在 Node.js 交互式环境下直接运行 JavaScript 代码有所不同。Node.js 交互式环境会把每一行 JavaScript 代码的结果自动打印出来，但是，直接运行 JavaScript 文件却不会。</p>
<p>例如，在 Node.js 交互式环境下，输入:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> 100 + 200 + 300;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">600</span></span></code></pre>
</div><p>直接可以看到结果 600。</p>
<p>但是，写一个 <code v-pre>calc.js</code> 的文件，内容如下:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 200</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
</div><p>然后在命令行模式下执行:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calc.js</span></span></code></pre>
</div><p>发现什么输出都没有。</p>
<p>这是正常的。想要输出结果，必须自己用 <code v-pre>console.log()</code> 打印出来。把 <code v-pre>calc.js</code> 改造一下:</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 200</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 300</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
</div><p>再执行，就可以看到结果:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">C:\Workspace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calc.js</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">600</span></span></code></pre>
</div><h2 id="使用严格模式" tabindex="-1"><a class="header-anchor" href="#使用严格模式"><span>使用严格模式</span></a></h2>
<p>如果在 JavaScript 文件开头写上 <code v-pre>'use strict';</code>，那么 Node.js 在执行该 JavaScript 时将使用严格模式。但是，在服务器环境下，如果有很多 JavaScript 文件，每个文件都写上 <code v-pre>'use strict';</code> 很麻烦。我们可以给 Node.js 传递一个参数，让 Node.js 直接为所有 js 文件开启严格模式:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --use_strict</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> calc.js</span></span></code></pre>
</div><p>后续代码，如无特殊说明，我们都会直接给 Node.js 传递 <code v-pre>--use_strict</code> 参数来开启严格模式。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<p>用文本编辑器写 JavaScript 程序，然后保存为后缀为 <code v-pre>.js</code> 的文件，就可以用 Node.js 直接运行这个程序了。</p>
<p>Node.js 的交互模式和直接运行 <code v-pre>.js</code> 文件有什么区别呢?</p>
<p>直接输入 Node.js 进入交互模式，相当于启动了 Node.js 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p>
<p>直接运行 <code v-pre>node hello.js</code> 文件相当于启动了 Node.js 解释器，然后一次性把 <code v-pre>hello.js</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p>
<p>在编写 JavaScript 代码的时候，完全可以一边在文本编辑器里写代码，一边开一个 Node.js 交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27 寸的超大显示器!</p>
</div></template>


