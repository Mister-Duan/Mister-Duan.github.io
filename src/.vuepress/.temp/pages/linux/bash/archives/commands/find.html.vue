<template><div><h1 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find</span></a></h1>
<p><code v-pre>find</code> 命令用于寻找文件，会包括当前目录的所有下级目录。</p>
<p>如果不带任何参数，<code v-pre>find</code> 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 <code v-pre>sort</code> 效果更好。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> find</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sort</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./Makefile</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./README</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./build</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./client.c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./client.h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./common.h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./project.c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./server.c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./server.h</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./tests</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./tests/suite1.pl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./tests/suite2.pl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./tests/suite3.pl</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">./tests/suite4.pl</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要 <code v-pre>ls -l</code> 样式的列表，只要在 <code v-pre>find</code> 后面加上 <code v-pre>-ls</code>。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ls</span></span></code></pre>
</div><p><code v-pre>find</code> 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤器:</p>
<ul>
<li><code v-pre>find -name '*.c'</code> —— 查找符合某 shell 式样式的文件名的文件。用 iname 开启大小写不敏感搜索。</li>
<li><code v-pre>find -path '_test_'</code> —— 查找符合某 shell 式样式的路径的文件。用 ipath 开启大小写不敏感搜索。</li>
<li><code v-pre>find -mtime -5</code> —— 查找近五天内编辑过的文件。您也可以用 +5 来查找五天之前编辑过的文件。</li>
<li><code v-pre>find -newer server.c</code> —— 查找比 server.c 更新的文件。</li>
<li><code v-pre>find -type d</code> —— 查找所有文件夹。如果想找出所有文件，那就用 <code v-pre>-type f</code>；找符号连接就用 <code v-pre>-type l</code>。</li>
</ul>
<p>要注意，上面提到的这些过滤器都是可以组合使用的，例如找出近两天内编辑过的 C 源码:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '*.c'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -mtime</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -2</span></span></code></pre>
</div><p>默认情况下， find 对搜索结果所采取的动作只是简单地通过标准输出输出一个列表，然而其实还有其他一些有用的后续动作。</p>
<ul>
<li>-ls —— 如前文，提供了一种类 ls -l 式的列表。</li>
<li>-delete —— 删除符合查找条件的文件。</li>
<li>-exec —— 对搜索结果里的每个文件都运行某个命令， <code v-pre>{}</code> 会被替换成适当的文件名，并且命令用 <code v-pre>\;</code> 终结。</li>
</ul>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '*.pl'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> perl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \;</span></span></code></pre>
</div><p>您也可以使用 <code v-pre>+</code> 作为终止符来对所有结果运行一次命令。我还发现一个我经常使用的小技巧，就是用 <code v-pre>find</code> 生成一个文件列表，然后在 Vim 的垂直分窗中编辑:</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">find</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '*.c'</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> {}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> +</span></span></code></pre>
</div></div></template>


