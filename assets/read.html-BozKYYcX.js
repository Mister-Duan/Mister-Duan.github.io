import{_ as i,c as a,b as h,o as e}from"./app-bnCjOXR3.js";const n={};function t(l,s){return e(),a("div",null,s[0]||(s[0]=[h(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 <code>read</code> 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。</p><p><code>read</code> 命令的格式如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [-options] [variable...]</span></span></code></pre></div><p>上面语法中，<code>options</code> 是参数选项，<code>variable</code> 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 <code>REPLY</code> 会包含用户输入的一整行数据。</p><p>下面是一个例子 <code>demo.sh</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;输入一些文本 &gt; &quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> text</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;您的输入: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$text</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre></div><p>上面例子中，先显示一行提示文本，然后会等待用户输入文本。用户输入的文本，存入变量 <code>text</code>，在下一行显示出来。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> demo.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">输入一些文本</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">您好，世界</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">您的输入:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 您好，世界</span></span></code></pre></div><p><code>read</code> 可以接受用户输入的多个值。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Please,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> your</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firstname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lastname</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LN</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hi! </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$LN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$FN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> !&quot;</span></span></code></pre></div><p>上面例子中，<code>read</code> 根据用户的输入，同时为两个变量赋值。</p><p>如果用户的输入项少于 <code>read</code> 命令给出的变量数目，那么额外的变量值为空。如果用户的输入项多于定义的变量，那么多余的输入项会包含到最后一个变量中。</p><p>如果 <code>read</code> 命令之后没有定义变量名，那么环境变量 <code>REPLY</code> 会包含所有的输入。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># read-single: read multiple values into default variable</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Enter one or more values &gt; &quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;REPLY = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$REPLY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span></code></pre></div><p>上面脚本的运行结果如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> read-single</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> one</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> more</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> values</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> d</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">REPLY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;a b c d&#39;</span></span></code></pre></div><p><code>read</code> 命令除了读取键盘输入，可以用来读取文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> myline</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$myline</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$filename</span></span></code></pre></div><p>上面的例子通过 <code>read</code> 命令，读取一个文件的内容。<code>done</code> 命令后面的定向符 <code>&lt;</code>，将文件导向 <code>read</code> 命令，每次读取一行，存入变量 <code>myline</code>，直到文件读取完毕。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>read</code> 命令的参数如下。</p><ol><li><p><strong><code>-t</code> 参数</strong></p><p><code>read</code> 命令的 <code>-t</code> 参数，设置了超时的秒数。如果超过了指定时间，用户仍然没有输入，脚本将放弃等待，继续向下执行。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;输入一些文本 &gt; &quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> response</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;用户已经输入了&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;用户没有输入&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre></div><p>上面例子中，输入命令会等待 3 秒，如果用户超过这个时间没有输入，这个命令就会执行失败。<code>if</code> 根据命令的返回值，转入 <code>else</code> 代码块，继续往下执行。</p><p>环境变量 <code>TMOUT</code> 也可以起到同样作用，指定 <code>read</code> 命令等待用户输入的时间(单位为秒)。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">TMOUT</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> response</span></span></code></pre></div><p>上面例子也是等待 3 秒，如果用户还没有输入，就会超时。</p></li><li><p><strong><code>-p</code> 参数</strong></p><p><code>-p</code> 参数指定用户输入的提示信息。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Enter one or more values &gt; &quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;REPLY = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$REPLY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span></code></pre></div><p>上面例子中，先显示 <code>Enter one or more values &gt;</code>，再接受用户的输入。</p></li><li><p><strong><code>-a</code> 参数</strong></p><p><code>-a</code> 参数把用户的输入赋值给一个数组，从零号位置开始。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> people</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">alice</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> duchess</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dodo</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">people</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[2]</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dodo</span></span></code></pre></div><p>上面例子中，用户输入被赋值给一个数组 <code>people</code>，这个数组的 2 号成员就是 <code>dodo</code>。</p></li><li><p><strong><code>-n</code> 参数</strong></p><p><code>-n</code> 参数指定只读取若干个字符作为变量值，而不是整行读取。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> letter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">abcdefghij</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $letter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">abc</span></span></code></pre></div><p>上面例子中，变量 <code>letter</code> 只包含 3 个字母。</p></li><li><p><strong>-e 参数</strong></p><p><code>-e</code> 参数允许用户输入的时候，使用 <code>readline</code> 库提供的快捷键，比如自动补全。具体的快捷键可以参阅《行操作》一章。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Please</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> input</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> path</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fileName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $fileName</span></span></code></pre></div><p>上面例子中，<code>read</code> 命令接受用户输入的文件名。这时，用户可能想使用 Tab 键的文件名“自动补全”功能，但是 <code>read</code> 命令的输入默认不支持 <code>readline</code> 库的功能。<code>-e</code> 参数就可以允许用户使用自动补全。</p></li><li><p><strong>其他参数</strong></p><ul><li><code>-d delimiter</code>: 定义字符串 <code>delimiter</code> 的第一个字符作为用户输入的结束，而不是一个换行符。</li><li><code>-r</code>: raw 模式，表示不把用户输入的反斜杠字符解释为转义字符。</li><li><code>-s</code>: 使得用户的输入不显示在屏幕上，这常常用于输入密码或保密信息。</li><li><code>-u fd</code>: 使用文件描述符 <code>fd</code> 作为输入。</li></ul></li></ol><h2 id="ifs-变量" tabindex="-1"><a class="header-anchor" href="#ifs-变量"><span>IFS 变量</span></a></h2><p><code>read</code> 命令读取的值，默认是以空格分隔。可以通过自定义环境变量 <code>IFS</code>(内部字段分隔符，Internal Field Separator 的缩写)，修改分隔标志。</p><p><code>IFS</code> 的默认值是空格、Tab 符号、换行符号，通常取第一个(即空格)。</p><p>如果把 <code>IFS</code> 定义成冒号(<code>:</code>)或分号(<code>;</code>)，就可以分隔以这两个符号分隔的值，这对读取文件很有用。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># read-ifs: read fields from a file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">FILE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/etc/passwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Enter a username &gt; &quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user_name</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file_info</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;^</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$user_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:&quot; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$FILE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file_info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;:&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> home</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt;&lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file_info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;User = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;UID = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$uid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;GID = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$gid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Full Name = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Home Dir. = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$home</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Shell = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$shell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;No such user &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$user_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&amp;2</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>IFS</code> 设为冒号，然后用来分解 <code>/etc/passwd</code> 文件的一行。<code>IFS</code> 的赋值命令和 <code>read</code> 命令写在一行，这样的话，<code>IFS</code> 的改变仅对后面的命令生效，该命令执行后 <code>IFS</code> 会自动恢复原来的值。如果不写在一行，就要采用下面的写法。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">OLD_IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$IFS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;:&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">read</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> home</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> shell</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt;&lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file_info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$OLD_IFS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre></div><p>另外，上面例子中，<code>&lt;&lt;&lt;</code> 是 Here 字符串，用于将变量值转为标准输入，因为 <code>read</code> 命令只能解析标准输入。</p><p>如果 <code>IFS</code> 设为空字符串，就等同于将整行读入一个变量。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/path/to/txt/file&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$input</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre></div><p>上面的命令可以逐行读取文件，每一行存入变量 <code>line</code>，打印出来以后再读取下一行。</p>`,34)]))}const p=i(n,[["render",t],["__file","read.html.vue"]]),d=JSON.parse('{"path":"/linux/bash/read.html","title":"read 命令","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"read 命令","icon":"read","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"用法 有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 read 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。 read 命令的格式如下。 上面语法中，options 是参数选项，variable 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 REPLY 会包含用户输入的一整...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/bash/read.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"read 命令"}],["meta",{"property":"og:description","content":"用法 有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 read 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。 read 命令的格式如下。 上面语法中，options 是参数选项，variable 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 REPLY 会包含用户输入的一整..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T01:30:23.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T01:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"read 命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T01:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"IFS 变量","slug":"ifs-变量","link":"#ifs-变量","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731893423000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":3}]},"readingTime":{"minutes":5.19,"words":1557},"filePathRelative":"linux/bash/read.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{p as comp,d as data};
