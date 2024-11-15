<template><div><p>在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。</p>
<p>如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。</p>
<p>如果您正在使用 Windows，请参考 <RouteLink to="/code/language/python/intro/install.html">安装 Python</RouteLink> 一节的内容，确保安装时勾选了 <code v-pre>pip</code> 和 <code v-pre>Add python.exe to Path</code>。</p>
<p>在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>Mac 或 Linux 上有可能并存 Python 3.x 和 Python 2.x，因此对应的 pip 命令是 pip3。</p>
</div>
<p>例如，我们要安装一个第三方库——Python Imaging Library，这是 Python 下非常强大的处理图像的工具库。不过，PIL 目前只支持到 Python 2.7，并且有年头没有更新了，因此，基于 PIL 的 Pillow 项目开发非常活跃，并且支持最新的 Python 3。</p>
<p>一般来说，第三方库都会在 Python 官方的 &lt;pypi.python.org&gt; 网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者 pypi 上搜索，比如 Pillow 的名称叫 <a href="https://pypi.python.org/pypi/Pillow/" target="_blank" rel="noopener noreferrer">Pillow</a>，因此，安装 Pillow 的命令就是:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Pillow</span></span></code></pre>
</div><p>耐心等待下载并安装后，就可以使用 Pillow 了。</p>
<h2 id="安装常用模块" tabindex="-1"><a class="header-anchor" href="#安装常用模块"><span>安装常用模块</span></a></h2>
<p>在使用 Python 时，我们经常需要用到很多第三方库，例如，上面提到的 Pillow，以及 MySQL 驱动程序，Web 框架 Flask，科学计算 Numpy 等。用 pip 一个一个安装费时费力，还需要考虑兼容性。我们推荐直接使用 <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer">Anaconda</a>，这是一个基于 Python 的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上 Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。</p>
<p>可以从 <a href="https://www.anaconda.com/download/" target="_blank" rel="noopener noreferrer">Anaconda 官网</a> 下载 GUI 安装包，安装包有 500~600M，所以需要耐心等待下载。下载后直接安装，Anaconda 会把系统 Path 中的 python 指向自己自带的 Python，并且，Anaconda 安装的第三方模块会安装在 Anaconda 自己的路径下，不影响系统已安装的 Python 目录。</p>
<p>安装好 Anaconda 后，重新打开命令行窗口，输入 python，可以看到 Anaconda 的信息:</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>┌────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│Command Prompt - python                           - □ x │</span></span>
<span class="line"><span>├────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│Microsoft Windows [Version 10.0.0]                      │</span></span>
<span class="line"><span>│(c) 2015 Microsoft Corporation. All rights reserved.    │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│C:\> python                                             │</span></span>
<span class="line"><span>│Python 3.9.2 |Anaconda, Inc.| ... on win32              │</span></span>
<span class="line"><span>│Type "help", ... for more information.                  │</span></span>
<span class="line"><span>│>>> import numpy                                        │</span></span>
<span class="line"><span>│>>> _                                                   │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>└────────────────────────────────────────────────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试直接 <code v-pre>import numpy</code> 等已安装的第三方模块。</p>
<h2 id="模块搜索路径" tabindex="-1"><a class="header-anchor" href="#模块搜索路径"><span>模块搜索路径</span></a></h2>
<p>当我们试图加载一个模块时，Python 会在指定的路径下搜索对应的.py 文件，如果找不到，就会报错:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mymodule</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "&#x3C;stdin>",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e></span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ImportError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> No</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> module</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> named</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mymodule</span></span></code></pre>
</div><p>默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sys</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys.path</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">''</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/Library/Frameworks/Python.framework/Versions/3.9/lib/python36.zip'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, ..., </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
</div><p>如果我们要添加自己的搜索目录，有两种方法:</p>
<p>一是直接修改 <code v-pre>sys.path</code>，添加要搜索的目录:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sys</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys.path.append(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'/Users/michael/my_py_scripts'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
</div><p>这种方法是在运行时修改，运行结束后失效。</p>
<p>第二种方法是设置环境变量 <code v-pre>PYTHONPATH</code>，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与 <RouteLink to="/code/windows/env-variable.html">设置境变量</RouteLink> 类似。注意只需要添加您自己的搜索路径，Python 自己本身的搜索路径不受影响。</p>
</div></template>


