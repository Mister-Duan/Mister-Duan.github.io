<template><div><h1 id="vs-code-安装" tabindex="-1"><a class="header-anchor" href="#vs-code-安装"><span>VS Code 安装</span></a></h1>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2>
<p>在 <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网下载地址</a> 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<ul>
<li>
<p>双击安装包打开</p>
</li>
<li>
<p>同意用户协议。</p>
</li>
<li>
<p>安装选项中，请务必 <strong>全选</strong> 以下选项:</p>
<figure><img src="@source/software/vscode/assets/install.png" alt="安装 VS Code" tabindex="0" loading="lazy"><figcaption>安装 VS Code</figcaption></figure>
<p>勾选 <strong>添加到目录上下文菜单</strong>、<strong>添加到文件上下文菜单</strong>、<strong>将 code 注册为受支持的文件编辑器</strong>、<strong>添加到 path</strong>。</p>
</li>
<li>
<p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可</p>
</li>
<li>
<p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>当您安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐您安装对应语言的扩展，点击按钮即可自动安装。</p>
</div>
</li>
</ul>
<h2 id="更新频率" tabindex="-1"><a class="header-anchor" href="#更新频率"><span>更新频率</span></a></h2>
<p>VS Code 每月发布一个具有新功能和重要错误修复的新版本。大多数平台都支持自动更新，并且会在新版本发布时提示您安装新版本。您还可以通过运行左下角 <strong>管理 → 检查更新</strong> 来手动检查更新。</p>
<h2 id="用-vs-code-打开文件和文件夹" tabindex="-1"><a class="header-anchor" href="#用-vs-code-打开文件和文件夹"><span>用 VS Code 打开文件和文件夹</span></a></h2>
<p>VS Code 支持打开文件和文件夹。</p>
<ul>
<li>
<p>打开文件时请在文件图标上单击右键—选择 <strong>使用 VS Code 打开</strong>；</p>
</li>
<li>
<p>打开文件夹请双击打开文件夹，在空白处单击右键——选择 <strong>用 VS Code 打开</strong>。</p>
</li>
</ul>
<h3 id="mac-添加-通过-code-打开" tabindex="-1"><a class="header-anchor" href="#mac-添加-通过-code-打开"><span>Mac 添加 <strong>通过 Code 打开</strong></span></a></h3>
<p>在 Mac 系统上，Finder 选中一个目录，右键菜单并没有 <strong>通过 Code 打开</strong> 这个操作。不过我们可以通过 Automator 自己添加这个操作。</p>
<p>先运行 Automator，选择 <strong>服务</strong>:</p>
<figure><img src="@source/software/vscode/assets/automator-service.png" alt="Automator Service" tabindex="0" loading="lazy"><figcaption>Automator Service</figcaption></figure>
<p>然后，执行以下操作:</p>
<figure><img src="@source/software/vscode/assets/automator.jpg" alt="Automator" tabindex="0" loading="lazy"><figcaption>Automator</figcaption></figure>
<ol>
<li>
<p>在右侧面板选择 <strong>服务</strong> 收到选定的 <strong>文件夹</strong>，位于 “Finder.app”，该选项是为了从 Finder 中接收一个文件夹；</p>
</li>
<li>
<p>在左侧面板选择 <strong>实用工具</strong>，然后找到 <strong>运行 Shell 脚本</strong>，把它拽到右侧面板里；</p>
</li>
<li>
<p>在右侧 <strong>运行 Shell 脚本</strong> 的面板里，选择 Shell <strong>/bin/bash</strong>，传递输入 <strong>作为自变量</strong>，然后修改 Shell 脚本如下:</p>
</li>
</ol>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> f</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">$@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    open</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Visual Studio Code"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span></code></pre>
</div><p>保存为 <strong>Open With VS Code</strong> 后，打开 Finder，选中一个文件夹，点击右键， <strong>服务</strong>，就可以看到 <strong>Open With VS Code</strong> 菜单:</p>
<figure><img src="@source/software/vscode/assets/open-with-vscode.png" alt="Open with VS Code" tabindex="0" loading="lazy"><figcaption>Open with VS Code</figcaption></figure>
</div></template>


