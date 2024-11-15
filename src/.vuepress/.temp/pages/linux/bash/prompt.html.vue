<template><div><p>用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。</p>
<!-- more -->
<h2 id="环境变量-ps1" tabindex="-1"><a class="header-anchor" href="#环境变量-ps1"><span>环境变量 PS1</span></a></h2>
<p>命令提示符通常是美元符号 <code v-pre>$</code>，对于根用户则是井号 <code v-pre>#</code>。这个符号是环境变量 <code v-pre>PS1</code> 决定的，执行下面的命令，可以看到当前命令提示符的定义。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $PS1</span></span></code></pre>
</div><p>Bash 允许用户自定义命令提示符，只要改写这个变量即可。改写后 的 <code v-pre>PS1</code>，可以放在用户的 Bash 配置文件 <code v-pre>.bashrc</code> 里面，以后新建 Bash 对话时，新的提示符就会生效。要在当前窗口看到修改后的提示符，可以执行下面的命令。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ~/.bashrc</span></span></code></pre>
</div><p>命令提示符的定义，可以包含特殊的转义字符，表示特定内容。</p>
<ul>
<li><code v-pre>\a</code>: 响铃，计算机发出一记声音。</li>
<li><code v-pre>\d</code>: 以星期、月、日格式表示当前日期，例如“Mon May 26”。</li>
<li><code v-pre>\h</code>: 本机的主机名。</li>
<li><code v-pre>\H</code>: 完整的主机名。</li>
<li><code v-pre>\j</code>: 运行在当前 Shell 会话的工作数。</li>
<li><code v-pre>\l</code>: 当前终端设备名。</li>
<li><code v-pre>\n</code>: 一个换行符。</li>
<li><code v-pre>\r</code>: 一个回车符。</li>
<li><code v-pre>\s</code>: Shell 的名称。</li>
<li><code v-pre>\t</code>: 24 小时制的 <code v-pre>hours:minutes:seconds</code> 格式表示当前时间。</li>
<li><code v-pre>\T</code>: 12 小时制的当前时间。</li>
<li><code v-pre>\@</code>: 12 小时制的 <code v-pre>AM/PM</code> 格式表示当前时间。</li>
<li><code v-pre>\A</code>: 24 小时制的 <code v-pre>hours:minutes</code> 表示当前时间。</li>
<li><code v-pre>\u</code>: 当前用户名。</li>
<li><code v-pre>\v</code>: Shell 的版本号。</li>
<li><code v-pre>\V</code>: Shell 的版本号和发布号。</li>
<li><code v-pre>\w</code>: 当前的工作路径。</li>
<li><code v-pre>\W</code>: 当前目录名。</li>
<li><code v-pre>\!</code>: 当前命令在命令历史中的编号。</li>
<li><code v-pre>\#</code>: 当前 shell 会话中的命令数。</li>
<li><code v-pre>\$</code>: 普通用户显示为 <code v-pre>$</code> 字符，根用户显示为 <code v-pre>#</code> 字符。</li>
<li><code v-pre>\[</code>: 非打印字符序列的开始标志。</li>
<li><code v-pre>\]</code>: 非打印字符序列的结束标志。</li>
</ul>
<p>举例来说，<code v-pre>[\u@\h \W]\$</code> 这个提示符定义，显示出来就是 <code v-pre>[user@host ~]$</code> (具体的显示内容取决于您的系统)。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[user@host ~]$ echo </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$PS1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\h</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \W</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\$</span></span></code></pre>
</div><p>改写 <code v-pre>PS1</code> 变量，就可以改变这个命令提示符。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> PS1="\A \h </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">17:33</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $</span></span></code></pre>
</div><p>注意，<code v-pre>$</code> 后面最好跟一个空格，这样的话，用户的输入与提示符就不会连在一起。</p>
<h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h2>
<p>默认情况下，命令提示符是显示终端预定义的颜色。Bash 允许自定义提示符颜色。</p>
<p>使用下面的代码，可以设定其后文本的颜色。</p>
<ul>
<li><code v-pre>\033[0;30m</code>: 黑色</li>
<li><code v-pre>\033[1;30m</code>: 深灰色</li>
<li><code v-pre>\033[0;31m</code>: 红色</li>
<li><code v-pre>\033[1;31m</code>: 浅红色</li>
<li><code v-pre>\033[0;32m</code>: 绿色</li>
<li><code v-pre>\033[1;32m</code>: 浅绿色</li>
<li><code v-pre>\033[0;33m</code>: 棕色</li>
<li><code v-pre>\033[1;33m</code>: 黄色</li>
<li><code v-pre>\033[0;34m</code>: 蓝色</li>
<li><code v-pre>\033[1;34m</code>: 浅蓝色</li>
<li><code v-pre>\033[0;35m</code>: 粉红</li>
<li><code v-pre>\033[1;35m</code>: 浅粉色</li>
<li><code v-pre>\033[0;36m</code>: 青色</li>
<li><code v-pre>\033[1;36m</code>: 浅青色</li>
<li><code v-pre>\033[0;37m</code>: 浅灰色</li>
<li><code v-pre>\033[1;37m</code>: 白色</li>
</ul>
<p>举例来说，如果要将提示符设为红色，可以将 <code v-pre>PS1</code> 设成下面的代码。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">PS1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'\[\033[0;31m\]&#x3C;\u@\h \W>\$'</span></span></code></pre>
</div><p>但是，上面这样设置以后，用户在提示符后面输入的文本也是红色的。为了解决这个问题， 可以在结尾添加另一个特殊代码 <code v-pre>\[\033[00m\]</code>，表示将其后的文本恢复到默认颜色。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">PS1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'\[\033[0;31m\]&#x3C;\u@\h \W>\$\[\033[00m\]'</span></span></code></pre>
</div><p>除了设置前景颜色，Bash 还允许设置背景颜色。</p>
<ul>
<li><code v-pre>\033[0;40m</code>: 蓝色</li>
<li><code v-pre>\033[1;44m</code>: 黑色</li>
<li><code v-pre>\033[0;41m</code>: 红色</li>
<li><code v-pre>\033[1;45m</code>: 粉红</li>
<li><code v-pre>\033[0;42m</code>: 绿色</li>
<li><code v-pre>\033[1;46m</code>: 青色</li>
<li><code v-pre>\033[0;43m</code>: 棕色</li>
<li><code v-pre>\033[1;47m</code>: 浅灰色</li>
</ul>
<p>下面是一个带有红色背景的提示符。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">PS1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'\[\033[0;41m\]&#x3C;\u@\h \W>\$\[\033[0m\] '</span></span></code></pre>
</div><h2 id="环境变量-ps2-ps3-ps4" tabindex="-1"><a class="header-anchor" href="#环境变量-ps2-ps3-ps4"><span>环境变量 PS2，PS3，PS4</span></a></h2>
<p>除了 <code v-pre>PS1</code>，Bash 还提供了提示符相关的另外三个环境变量。</p>
<p>环境变量 <code v-pre>PS2</code> 是命令行折行输入时系统的提示符，默认为 <code v-pre>&gt;</code>。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "hello</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">> world"</span></span></code></pre>
</div><p>上面命令中，输入 <code v-pre>hello</code> 以后按下回车键，系统会提示继续输入。这时，第二行显示的提示符就是 <code v-pre>PS2</code> 定义的 <code v-pre>&gt;</code>。</p>
<p>环境变量 <code v-pre>PS3</code> 是使用 <code v-pre>select</code> 命令时，系统输入菜单的提示符。</p>
<p>环境变量 <code v-pre>PS4</code> 默认为 <code v-pre>+</code>。它是使用 Bash 的 <code v-pre>-x</code> 参数执行脚本时，每一行命令在执行前都会先打印出来，并且在行首出现的那个提示符。</p>
<p>比如下面是脚本 <code v-pre>test.sh</code>。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "hello world"</span></span></code></pre>
</div><p>使用 <code v-pre>-x</code> 参数执行这个脚本。</p>
<div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> test.sh</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'hello world'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hello</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> world</span></span></code></pre>
</div><p>上面例子中，输出的第一行前面有一个 <code v-pre>+</code>，这就是变量 <code v-pre>PS4</code> 定义的。</p>
</div></template>


