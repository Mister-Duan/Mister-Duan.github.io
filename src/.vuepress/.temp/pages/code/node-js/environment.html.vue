<template><div><p>由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: <strong>Visual Studio Code</strong>。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。</p>
<!-- more -->
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>有关 VS Code 使用教程请<RouteLink to="/software/vscode/">访问这里</RouteLink></p>
</div>
<h2 id="运行和调试-javascript" tabindex="-1"><a class="header-anchor" href="#运行和调试-javascript"><span>运行和调试 JavaScript</span></a></h2>
<p>在 VS Code 中，我们可以非常方便地运行 JavaScript 文件。</p>
<p>VS Code 以文件夹作为工程目录 (Workspace Dir)，所有的 JavaScript 文件都存放在该目录下。此外，VS Code 在工程目录下还需要一个 <code v-pre>.vscode</code> 的配置目录，里面存放里 VS Code 需要的配置文件。</p>
<p>假设我们在 <code v-pre>C:\Work\</code> 目录下创建了一个 hello 目录作为工程目录，并编写了一个 <code v-pre>hello.js</code> 文件，则该工程目录的结构如下:</p>
<div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>hello/ &#x3C;-- workspace dir</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>├─ hello.js &#x3C;-- JavaScript file</span></span>
<span class="line"><span>|</span></span>
<span class="line"><span>└─ .vscode/ &#x3C;-- VS Code config</span></span>
<span class="line"><span>      |</span></span>
<span class="line"><span>      └ launch.json &#x3C;-- VS Code config file for JavaScript</span></span></code></pre>
</div><p>可以用 VS Code 快速创建 <code v-pre>launch.json</code>，然后修改如下:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"0.2.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "configurations"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Run hello.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"node"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "request"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"launch"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "program"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"${workspaceRoot}/hello.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "stopOnEntry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "args"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "cwd"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"${workspaceRoot}"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "preLaunchTask"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "runtimeExecutable"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "runtimeArgs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"--nolazy"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "env"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "NODE_ENV"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"development"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "externalConsole"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "sourceMaps"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "outDir"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">null</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了配置文件，即可使用 VS Code 调试 JavaScript。</p>
<h2 id="视频演示" tabindex="-1"><a class="header-anchor" href="#视频演示"><span>视频演示</span></a></h2>
<ul>
<li><a href="https://www.bilibili.com/video/av5827351/" target="_blank" rel="noopener noreferrer">视频演示</a></li>
</ul>
</div></template>


