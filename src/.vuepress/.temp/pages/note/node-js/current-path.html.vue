<template><div><h1 id="dirname、-filename-和-process-cwd-三者的区别" tabindex="-1"><a class="header-anchor" href="#dirname、-filename-和-process-cwd-三者的区别"><span><code v-pre>__dirname</code>、<code v-pre>__filename</code> 和 <code v-pre>process.cwd()</code> 三者的区别</span></a></h1>
<ol>
<li>
<p><code v-pre>process.cwd()</code> 方法返回 Node.js 进程当前工作的目录</p>
<p>例: 我在 <code v-pre>F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process</code> 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 <code v-pre>run test.js</code></p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> cwd</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">cwd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
</div><p>输出如下 <code v-pre>F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process</code></p>
</li>
<li>
<p><code v-pre>__dirname</code> 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名</p>
<p>还在上面的 js 文件中输入一下代码</p>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">__dirname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
</div><p>输出如下 <code v-pre>F:\自己的文件\自己在网上学习的知识点\node学习\node-API\process</code></p>
<p>现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 <code v-pre>node webpack ..</code> 打包了一个应用程序，
我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd)
在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径</p>
</li>
<li>
<p><code v-pre>__filename</code> 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 <code v-pre>__filename</code> 变量获取当前模块文件的带有完整绝对路径的文件名</p>
</li>
</ol>
<div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">__filename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
</div><p>输出 <code v-pre>F:\自己的文件\自己在网上学习的知识点\node 学习\node-API\process\test.js</code></p>
</div></template>


