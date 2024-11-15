<template><div><p>配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。</p>
<p>可以使用快捷键 <code v-pre>Ctrl + Shift + *</code> 来打开对应的配置文件，可使用 <code v-pre>Ctrl + ,</code> 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。</p>
<!-- more -->
<div class="hint-container tip">
<p class="hint-container-title">默认设置</p>
<p>您可以通过按住 Alt 键并点击下拉菜单中的 Settings 按钮打开 defaults.json。该文件由 Terminal 自动生成，展示了 Windows Terminal 所有默认设置及其值。更改此文件是无效的。</p>
</div>
<p>settings.json 文件分为四个主要部分:</p>
<ol>
<li>全局设置对象，它位于 JSON 文件的顶部。全局设置将影响整个应用程序。</li>
<li>配置文件设置，由 <code v-pre>profiles</code> 对象控制。负责控制每个配置文件。</li>
<li>配色方案，由 <code v-pre>schemes</code> 数组控制。</li>
<li>自定义操作，由 <code v-pre>actions</code> 数组控制</li>
</ol>
<h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置"><span>全局设置</span></a></h2>
<p>全局设置会将影响整个终端窗口。</p>
<p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-global-settings" target="_blank" rel="noopener noreferrer">全局设置</a>。</p>
<figure><img src="@source/software/tool/assets/terminal-global-settings.png" alt="全局设置" tabindex="0" loading="lazy"><figcaption>全局设置</figcaption></figure>
<h3 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件"><span>默认配置文件</span></a></h3>
<p>默认配置文件为 Windows PowerShell。您可以通过在 settings.json 文件中将 <code v-pre>defaultProfile</code> 设置为首选配置文件的名称或 GUID 来更改默认配置文件。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"defaultProfile"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"PowerShell"</span></span></code></pre>
</div><h2 id="配置文件设置" tabindex="-1"><a class="header-anchor" href="#配置文件设置"><span>配置文件设置</span></a></h2>
<p><code v-pre>profiles</code> 对象描述配置文件。它分为两个部分: <code v-pre>defaults</code> 和 <code v-pre>list</code>。</p>
<ul>
<li>
<p><code v-pre>defaults</code> 对象中的配置文件会应用于列表中的所有项目。</p>
</li>
<li>
<p><code v-pre>list</code> 包含代表配置文件的每个配置文件对象，这些是出现在 Windows Terminal 下拉菜单中的项目。应用于 <code v-pre>list</code> 中各个配置文件的设置会覆盖 <code v-pre>defaults</code> 部分中应用的设置。</p>
</li>
</ul>
<p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-profile-settings" target="_blank" rel="noopener noreferrer">配置文件设置</a>。</p>
<figure><img src="@source/software/tool/assets/terminal-profiles.png" alt="配置文件设置" tabindex="0" loading="lazy"><figcaption>配置文件设置</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>
<p>您可以在 <code v-pre>defaults</code> 中设置 <code v-pre>fontFace</code> 控制终端的字体。</p>
</li>
<li>
<p>您可以在 Powershell 配置文件中添加 <code v-pre>commandline</code> 为 <code v-pre>&lt;PowerShell 地址&gt; -nologo</code> 来去除 powershell 启动时的 logo 显示。(默认地址为: <code v-pre>C:/Program Files/PowerShell/7/pwsh.exe</code>)</p>
</li>
<li>
<p>您可以通过设置 <code v-pre>backgroundImage</code> 自定义背景图片，通过 <code v-pre>backgroundImageOpacity</code> 自定义背景透明度，通过 <code v-pre>useAcrylic</code> 开启或关闭毛玻璃效果。</p>
</li>
</ul>
</div>
<h3 id="新增配置文件" tabindex="-1"><a class="header-anchor" href="#新增配置文件"><span>新增配置文件</span></a></h3>
<p>Windows Terminal 会自动为 PowerShell 和 WSL 分发版创建配置文件。</p>
<p>您也可以手动添加新的配置文件: 只需生成一个新的 <code v-pre>guid</code>，提供一个 <code v-pre>name</code>，并为 <code v-pre>commandline</code> 属性提供可执行程序。</p>
<div class="hint-container info">
<p class="hint-container-title">WSL</p>
<p>您可以通过 <a href="https://www.microsoft.com/zh-cn/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab" target="_blank" rel="noopener noreferrer">Microsoft 应用商店</a> 安装 Ubuntu。之后便可以在 terminal 上运行 Ubuntu WSL 环境。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>您不能从动态生成的配置文件中复制 <code v-pre>source</code> 属性，否则 Windows Terminal 会忽略此配置文件。您必须使用 <code v-pre>commandline</code> 替换 <code v-pre>source</code> 并提供可执行程序，以便复制一个动态生成的配置文件。</p>
</div>
<h2 id="配色方案" tabindex="-1"><a class="header-anchor" href="#配色方案"><span>配色方案</span></a></h2>
<p>您可以在 <code v-pre>schemes</code> 数组中配置自定义配色方案。它们是使用以下格式写入的:</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Campbell"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cursorColor"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#FFFFFF"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "selectionBackground"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#FFFFFF"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "background"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#0C0C0C"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "foreground"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#CCCCCC"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "black"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#0C0C0C"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "blue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#0037DA"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cyan"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#3A96DD"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "green"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#13A10E"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "purple"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#881798"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "red"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#C50F1F"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "white"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#CCCCCC"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "yellow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#C19C00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightBlack"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#767676"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightBlue"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#3B78FF"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightCyan"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#61D6D6"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightGreen"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#16C60C"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightPurple"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#B4009E"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightRed"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#E74856"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightWhite"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#F2F2F2"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "brightYellow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"#F9F1A5"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-color-schemes" target="_blank" rel="noopener noreferrer">配置文件设置</a>。</p>
<h3 id="自带的配色方案" tabindex="-1"><a class="header-anchor" href="#自带的配色方案"><span>自带的配色方案</span></a></h3>
<p>Windows Terminal 在 defaults.json 文件中包含了一些配色方案。如果要在一个命令行配置文件中设置配色方案，请添加 <code v-pre>colorScheme</code> 属性，并将配色方案的 <code v-pre>name</code> 作为值。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"colorScheme"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"COLOR SCHEME NAME"</span></span></code></pre>
</div><p>查看各配色方案效果，请见 <a href="https://aka.ms/terminal-color-schemes#included-color-schemes" target="_blank" rel="noopener noreferrer">包含的配色方案</a>。</p>
<h3 id="自定义配色方案" tabindex="-1"><a class="header-anchor" href="#自定义配色方案"><span>自定义配色方案</span></a></h3>
<p>下面提供几个主题色工具:</p>
<ul>
<li><a href="https://terminal.sexy/" target="_blank" rel="noopener noreferrer">terminal.sexy</a></li>
<li><a href="https://windowsterminalthemes.dev/" target="_blank" rel="noopener noreferrer">Windows Terminal Themes</a></li>
<li><a href="https://terminalsplash.com/" target="_blank" rel="noopener noreferrer">TerminalSplash</a>，</li>
</ul>
<h2 id="自定义操作" tabindex="-1"><a class="header-anchor" href="#自定义操作"><span>自定义操作</span></a></h2>
<p>您可以在 Windows 终端中创建自定义操作，以控制与终端的交互方式。这些操作将自动添加到命令面板。</p>
<p>关于详细的配置项，请见 <a href="https://aka.ms/terminal-keybindings" target="_blank" rel="noopener noreferrer">自定义操作设置</a>。</p>
<figure><img src="@source/software/tool/assets/terminal-actions.png" alt="自定义操作" tabindex="0" loading="lazy"><figcaption>自定义操作</figcaption></figure>
<p>自定义操作可以设置为以下格式:</p>
<ul>
<li>
<p>无参数命令</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"command"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"命令名称"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"keys"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"快捷键"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span></code></pre>
</div><details class="hint-container details"><summary>例子</summary>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"command"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"closeWindow"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"keys"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"alt+f4"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span></code></pre>
</div></details>
</li>
<li>
<p>有参数命令</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "command"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"commandName"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"argument"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"value"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "keys"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"modifiers+key"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><details class="hint-container details"><summary>例子</summary>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"command"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"action"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"newTab"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"index"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"keys"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"ctrl+shift+1"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> }</span></span></code></pre>
</div></details>
</li>
</ul>
</div></template>


