<template><div><h2 id="配置调试器" tabindex="-1"><a class="header-anchor" href="#配置调试器"><span>配置调试器</span></a></h2>
<p>打开命令面板(<code v-pre>Ctrl + Shift + P</code>)，然后选择 <strong>调试: 打开 launch.json</strong>，这将提示您选择与项目(Node.js，Python，C ++等)匹配的环境。这将生成一个 <code v-pre>launch.json</code> 文件。Node.js 支持是内置的，其他环境要求安装适当的语言扩展。有关更多详细信息，请参见 <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">调试文档</a>。</p>
<figure><img src="@source/software/vscode/guide/assets/configure-debug.gif" alt="配置调试" tabindex="0" loading="lazy"><figcaption>配置调试</figcaption></figure>
<h2 id="断点并逐步执行" tabindex="-1"><a class="header-anchor" href="#断点并逐步执行"><span>断点并逐步执行</span></a></h2>
<p>在行号旁边放置断点。使用 <strong>调试</strong> 小部件向前导航。</p>
<figure><img src="@source/software/vscode/guide/assets/node-debug.gif" alt="调试" tabindex="0" loading="lazy"><figcaption>调试</figcaption></figure>
<h2 id="数据检查" tabindex="-1"><a class="header-anchor" href="#数据检查"><span>数据检查</span></a></h2>
<p>在 <strong>运行</strong> 面板和控制台中检查变量。</p>
<figure><img src="@source/software/vscode/guide/assets/debug-data-inspection.gif" alt="数据检查" tabindex="0" loading="lazy"><figcaption>数据检查</figcaption></figure>
<h2 id="内嵌值" tabindex="-1"><a class="header-anchor" href="#内嵌值"><span>内嵌值</span></a></h2>
<p>您可以设置 <code v-pre>&quot;debug.inlineValues&quot;: true</code> 在调试器中内联查看变量值。此功能开销很大，并且可能会减慢步进速度，因此默认情况下禁用此功能。</p>
<h2 id="log-points" tabindex="-1"><a class="header-anchor" href="#log-points"><span>Log Points</span></a></h2>
<p>日志点的行为很像断点，但它们不会在命中时暂停调试器，而是在控制台中记录一条消息。日志点对于调试无法修改或暂停的生产服务器时注入日志特别有用。</p>
<p>使用左侧编辑器装订线中的 <strong>添加日志点</strong> 命令添加日志点，该日志点将显示为 🔸 形状的图标。日志消息是纯文本，但可以包含要在花括号('{}')中计算的表达式。</p>
</div></template>


