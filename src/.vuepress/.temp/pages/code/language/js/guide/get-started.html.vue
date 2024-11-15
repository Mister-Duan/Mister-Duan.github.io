<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>因为 JavaScript 是一门编程语言，不再是 HTML 和 CSS 这种看得见摸得着的东西，所以我们从如何引入、运行并调试开始讲起。</p>
</div>
<!-- more -->
<h2 id="练习方法" tabindex="-1"><a class="header-anchor" href="#练习方法"><span>练习方法</span></a></h2>
<p>本博客包含大量的示例代码，只要电脑安装了浏览器，就可以用来实验了。读者可以一边读一边运行示例，加深理解。</p>
<p>推荐安装 <RouteLink to="/software/chrome.html">Chrome 浏览器</RouteLink>，它的“开发者工具”(Developer Tools)里面的“控制台”(console)，就是运行 JavaScript 代码的理想环境。</p>
<p>进入 Chrome 浏览器的“控制台”，有两种方法。</p>
<ul>
<li>直接进入: 按下 <code v-pre>Option + Command + J</code> (Mac) 或者 <code v-pre>Ctrl + Shift + J</code> (Windows / Linux)</li>
<li>开发者工具进入: 开发者工具的快捷键是 F12，或者 <code v-pre>Option + Command + I</code> (Mac) 以及 <code v-pre>Ctrl + Shift + I</code> (Windows / Linux)，然后选择 Console 面板</li>
</ul>
<p>进入控制台以后，就可以在提示符后输入代码，然后按 <code v-pre>Enter</code> 键，代码就会执行。如果按 <code v-pre>Shift + Enter</code> 键，就是代码换行，不会触发执行。建议阅读本教程时，将代码复制到控制台进行实验。</p>
<p>作为尝试，您可以将下面的程序复制到“控制台”，按下回车后，就可以看到运行结果。</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> greetMe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">yourName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello "</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> yourName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">greetMe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"World"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Hello World</span></span></code></pre>
</div><h2 id="javascript-的引入" tabindex="-1"><a class="header-anchor" href="#javascript-的引入"><span>JavaScript 的引入</span></a></h2>
<p>JavaScript 代码可以直接嵌在网页的任何地方。</p>
<p>如果想要在网页显示前就载入并运行 JavaScript，通常我们把代码放到 <code v-pre>&lt;head&gt;</code> 中，如图:</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">      alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, world"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由 <code v-pre>&lt;script&gt;...&lt;/script&gt;</code> 包含的代码就是 JavaScript 代码，它将直接被浏览器执行。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>和 CSS 类似，我们管这种引入方式叫做 “内联脚本”。</p>
</div>
<p>第二种方法是把 JavaScript 代码放到一个单独的 <code v-pre>js</code> 文件，然后在 HTML 中通过 <code v-pre>&lt;script src=&quot;...&quot;&gt;&lt;/script&gt;</code> 引入这个文件:</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/static/js/abc.js"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>这样， <code v-pre>/static/js/abc.js</code> 就会被浏览器执行。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>和 CSS 类似，我们称这种引入方式为外部引入。</p>
<p>外部引入有多种好处:</p>
<ul>
<li>把 JavaScript 代码放入一个单独的 js 文件中更利于维护代码，并且多个页面可以各自引用同一份 js 文件。</li>
<li>可以在同一个页面中引入多个.js 文件，还可以在页面中多次编写 <code v-pre>&lt;script&gt; js代码... &lt;/script&gt;</code> ，浏览器按照顺序依次执行。</li>
<li>如果网页是静态的，希望尽快向用户呈现，可以将 JavaScript 代码放在文件的最后。</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>因为 <code v-pre>&lt;script&gt;</code> 标签默认的 <code v-pre>type</code> 就是 JavaScript，所以下方的写法是没有必要的。</p>
<div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text/javascript"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">  ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div></div>
<h2 id="javascript-的编写" tabindex="-1"><a class="header-anchor" href="#javascript-的编写"><span>JavaScript 的编写</span></a></h2>
<p>可以用任何文本编辑器来编写 JavaScript 代码。这里推荐 <RouteLink to="/software/vscode/">Visual Studio Code</RouteLink>。</p>
<h2 id="javascript-的运行" tabindex="-1"><a class="header-anchor" href="#javascript-的运行"><span>JavaScript 的运行</span></a></h2>
<h3 id="浏览器运行" tabindex="-1"><a class="header-anchor" href="#浏览器运行"><span>浏览器运行</span></a></h3>
<p>要让浏览器运行 JavaScript，必须先有一个 HTML 页面，在 HTML 页面中引入 JavaScript，然后，让浏览器加载该 HTML 页面，就可以执行 JavaScript 代码。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>直接在硬盘上创建好 HTML 和 JavaScript 文件，然后用浏览器打开的方式运行部分 JavaScript 代码没有问题，但由于浏览器的安全限制，以 <code v-pre>file://</code> 开头的地址无法执行如联网等 JavaScript 代码，</p>
</div>
<h3 id="架设本地服务器" tabindex="-1"><a class="header-anchor" href="#架设本地服务器"><span>架设本地服务器</span></a></h3>
<p>运行 JavaScript 也可以在本地架设一个 Web 服务器，然后以 <code v-pre>http://</code> 或 <code v-pre>https://</code> 开头的地址来正常执行所有 JavaScript 代码。如有需要请下载 Mr.Hope 制作的 WAMP / WNMP 一键安装工具。</p>
<h3 id="使用-node-js" tabindex="-1"><a class="header-anchor" href="#使用-node-js"><span>使用 Node.js</span></a></h3>
<p>Node.js 是一个著名的基于 JavaScript 的后端工具，可以很方便快捷的执行并调试 JavaScript。</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>关于 Node.js 的详细教程，请查看<RouteLink to="/code/node-js/">这里</RouteLink></p>
</div>
<h2 id="javascript-的调试" tabindex="-1"><a class="header-anchor" href="#javascript-的调试"><span>JavaScript 的调试</span></a></h2>
<h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h3>
<p>写 JavaScript 的时候，如果期望显示 <code v-pre>ABC</code> ，结果却显示 <code v-pre>XYZ</code> ，找出问题代码，这就需要调试。</p>
<p>怎么在浏览器中调试 JavaScript 代码呢?</p>
<p>首先，安装 Google Chrome 浏览器，Chrome 浏览器对开发者非常友好，可以方便地调试 JavaScript 代码。</p>
<p>安装后，在调试的网页上直接按 <code v-pre>F12</code> 就可以进入到开发者工具模式。</p>
<p>可以在控制台进行代码的调试与执行。</p>
<p>开发者工具的 “源码(Sources)”，可以提供更高级的操作，比如断点、单步执行等高级调试技巧。</p>
<h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h3>
<p>如果本地已经安装了 Node.js，也可以通过使用 Node.js 直接执行相应文件的方式来进行调试。</p>
<h3 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>VS Code</span></a></h3>
<ol>
<li>
<p>安装 Live Server 扩展。</p>
</li>
<li>
<p>新建一个 HTML 网页，补全必要结构。</p>
</li>
<li>
<p>通过 <code v-pre>&lt;script&gt;</code> 标签引入 Javascript。</p>
</li>
<li>
<p>在 HTML 文件中右键选择 &quot;Open with Live Server&quot; 或者点击右下角的 Go Live，这会在 VSCode 内的 Tab 选项卡打开一个网页。</p>
</li>
<li>
<p>在 VS Code 编辑器中在需要的位置设置断点，按 F5 调试，运行与调试窗口就会显示变量数值，下方的调试控制台会显示输出内容。</p>
</li>
</ol>
</div></template>


