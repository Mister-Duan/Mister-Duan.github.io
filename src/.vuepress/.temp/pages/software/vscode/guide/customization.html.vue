<template><div><p>您可以做很多事情来个性化 VS Code。</p>
<ul>
<li>改变您的主题</li>
<li>改变您的文件图标</li>
<li>更改键盘快捷键</li>
<li>调整设置</li>
<li>安装扩展</li>
</ul>
<h2 id="更改主题" tabindex="-1"><a class="header-anchor" href="#更改主题"><span>更改主题</span></a></h2>
<p>键盘快捷键: <code v-pre>Ctrl + K Ctrl + T</code></p>
<p>您可以从 VS Code 扩展市场中安装更多主题。</p>
<p>此外，您可以安装和更改文件图标主题。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Mr.Hope 个人推荐 <code v-pre>One Dark Pro</code> 主题和 <code v-pre>Material Icon Theme</code> 文件图标主题。</p>
<p>您需要从扩展应用应用商店中安装它们。</p>
</div>
<h2 id="自定义键盘快捷键" tabindex="-1"><a class="header-anchor" href="#自定义键盘快捷键"><span>自定义键盘快捷键</span></a></h2>
<p>键盘快捷键: <code v-pre>Ctrl + K Ctrl + S</code></p>
<p>您可以搜索快捷方式并将自己的键绑定添加到 <code v-pre>keybindings.json</code> 文件中。</p>
<p>有关更多信息，请参见 <RouteLink to="/software/vscode/shortcut-key.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%BC%96%E8%BE%91%E5%99%A8">快捷键键绑定</RouteLink>。</p>
<h2 id="调整您的设置" tabindex="-1"><a class="header-anchor" href="#调整您的设置"><span>调整您的设置</span></a></h2>
<p>默认情况下，VS Code 显示 <strong>设置</strong> 编辑器，您还可以通过使用 <strong>打开设置(JSON)</strong> 命令打开 <code v-pre>settings.json</code>。</p>
<p>键盘快捷键: <code v-pre>Ctrl + ,</code></p>
<p><strong>示例</strong>:</p>
<ul>
<li>
<p>更改各种 UI 元素的字体大小</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Main editor</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.fontSize"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Terminal panel</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"terminal.integrated.fontSize"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">14</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Output panel</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[Log]"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "editor.fontSize"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">15</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></li>
<li>
<p>更改缩放等级</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"window.zoomLevel"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span></span></code></pre>
</div></li>
<li>
<p>字体连字</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.fontFamily"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Fira Code"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.fontLigatures"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span></code></pre>
</div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这需要安装支持字体连字的字体。FiraCode 是 VS Code 团队中流行的字体。</p>
<p>Mr.Hope 也强力推荐安装并使用这一字体 (字体详见云文档共享文件)</p>
</div>
</li>
<li>
<p>自动保存</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"files.autoSave"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"afterDelay"</span></span></code></pre>
</div><p>您也可以使用 <code v-pre>文件 &gt; 自动保存</code> 从顶层菜单切换自动保存。</p>
</li>
<li>
<p>保存时格式化</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.formatOnSave"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span></code></pre>
</div></li>
<li>
<p>粘贴格式</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.formatOnPaste"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span></code></pre>
</div></li>
<li>
<p>更改制表符的大小</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.tabSize"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span></span></code></pre>
</div></li>
<li>
<p>空格或制表符</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.insertSpaces"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span></code></pre>
</div></li>
<li>
<p>渲染空白</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"editor.renderWhitespace"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"all"</span></span></code></pre>
</div><p>默认情况下，在文本选择中呈现空白字符。</p>
</li>
<li>
<p>忽略文件/文件夹</p>
<p>从编辑器窗口中删除这些文件/文件夹。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"files.exclude"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "some-folder/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "some-file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><p>从搜索结果中删除这些文件/文件夹。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"search.exclude"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "some-folder/"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "some-file"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div></li>
</ul>
<p>以及许多其他定制。</p>
<h2 id="语言特定的设置" tabindex="-1"><a class="header-anchor" href="#语言特定的设置"><span>语言特定的设置</span></a></h2>
<p>您可以通过语言标识符来确定只需要特定语言的设置的范围。您可以在 <a href="https://code.visualstudio.com/docs/languages/identifiers" target="_blank" rel="noopener noreferrer">语言标识符</a> 参考中找到常用语言 ID 的列表。</p>
<div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"[language-id]"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
</div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>您还可以使用 <strong>配置语言特定的设置</strong> 命令来创建特定于语言的设置。</p>
</div>
</div></template>


