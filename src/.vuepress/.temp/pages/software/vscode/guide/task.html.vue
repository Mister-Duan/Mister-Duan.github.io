<template><div><h2 id="自动检测任务" tabindex="-1"><a class="header-anchor" href="#自动检测任务"><span>自动检测任务</span></a></h2>
<p>从顶层菜单中选择<strong>终端</strong>，运行命令<strong>配置任务</strong>，然后选择您要运行的任务类型。这将生成一个 <code v-pre>tasks.json</code> 文件。有关更多详细信息，请参见 <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">任务文档</a>。</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // See &#x3C;https://go.microsoft.com/fwlink/?LinkId=733558></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // for the documentation about the tasks.json format</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "version"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2.0.0"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "tasks"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"npm"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "script"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"install"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "group"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "kind"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"build"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        "isDefault"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动生成有时会出现问题。请查阅文档，以确保一切正常。</p>
<h2 id="从终端菜单运行任务" tabindex="-1"><a class="header-anchor" href="#从终端菜单运行任务"><span>从终端菜单运行任务</span></a></h2>
<p>从顶层菜单中选择 <strong>终端 &gt; 运行任务</strong>，然后选择要运行的任务。通过运行命令 <strong>终止任务</strong> 终止正在运行的任务</p>
<figure><img src="@source/software/vscode/guide/assets/task-runner.gif" alt="任务执行器" tabindex="0" loading="lazy"><figcaption>任务执行器</figcaption></figure>
<h2 id="定义任务的键盘快捷键" tabindex="-1"><a class="header-anchor" href="#定义任务的键盘快捷键"><span>定义任务的键盘快捷键</span></a></h2>
<p>您可以为任何任务定义键盘快捷键。从命令面板(<code v-pre>Ctrl + Shift + P</code>)中，选择 <strong>首选项: 打开键盘快捷方式文件</strong>，将所需的快捷方式绑定到 <code v-pre>workbench.action.tasks.runTask</code> 命令，然后将 任务 定义为 <code v-pre>args</code>。</p>
<p>例如，要将 <code v-pre>Ctrl + H</code> 绑定到 <strong>运行任务</strong>，请添加以下内容:</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "key"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ctrl+h"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "command"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"workbench.action.tasks.runTask"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "args"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Run tests"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><h2 id="从资源管理器中将-npm-脚本作为任务运行" tabindex="-1"><a class="header-anchor" href="#从资源管理器中将-npm-脚本作为任务运行"><span>从资源管理器中将 npm 脚本作为任务运行</span></a></h2>
<p>使用该设置 <code v-pre>npm.enableScriptExplorer</code>，您可以启用一个浏览器，该浏览器显示在工作空间中定义的脚本。</p>
<p>在资源管理器中，您可以在编辑器中打开脚本，将其作为任务运行，然后使用节点调试器启动它(当脚本定义了诸如 <code v-pre>--inspect-brk</code> 的调试选项时)。单击时的默认操作是打开脚本。要单击运行脚本，请设置 <code v-pre>npm.scriptExplorerAction</code> 为 <strong>运行</strong>。使用 <code v-pre>npm.exclude</code> 设置可以排除 <code v-pre>package.json</code> 特定文件夹中包含的文件中的脚本。</p>
<p>通过设置 <code v-pre>npm.enableRunFromFolder</code>，您可以启用从文件资源管理器的上下文菜单中为文件夹运行 npm 脚本的功能。选择文件夹后，该设置将启用命令 <strong>在文件夹中运行 npm 脚本...</strong>。该命令显示此文件夹中包含的 npm 脚本的快速选择列表，您可以选择要作为任务执行的脚本。</p>
</div></template>


