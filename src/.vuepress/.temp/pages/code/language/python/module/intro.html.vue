<template><div><p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 <code v-pre>.py</code> 文件就称之为一个模块 (Module) 。</p>
<!-- more -->
<h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h2>
<ol>
<li>
<p>使用模块大大提高了代码的可维护性。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Python 内置的模块和来自第三方的模块。</p>
</li>
<li>
<p>使用模块可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。但是也要注意，尽量不要与内置函数名字冲突。</p>
</li>
</ol>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><a href="http://docs.python.org/3/library/functions.html" target="_blank" rel="noopener noreferrer">Python 的所有内置函数</a></p>
</div>
<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包"><span>包</span></a></h2>
<p>为了避免模块名冲突，Python 引入了按目录来组织模块的方法，称为包 (Package) 。</p>
<p>举个例子，一个 <code v-pre>abc.py</code> 的文件就是一个名字叫 abc 的模块，一个 <code v-pre>xyz.py</code> 的文件就是一个名字叫 xyz 的模块。</p>
<p>现在，假设我们的 abc 和 xyz 这两个模块名字与其他模块冲突了，于是我们可以通过包来组织模块，避免冲突。方法是选择一个顶层包名，比如 hopestudio，按照如下目录存放:</p>
<div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>hopestudio</span></span>
<span class="line"><span>├─ __init__.py</span></span>
<span class="line"><span>├─ abc.py</span></span>
<span class="line"><span>└─ xyz.py</span></span></code></pre>
</div><p>引入了包以后，只要顶层的包名不与别人冲突，那所有模块都不会与别人冲突。现在，<code v-pre>abc.py</code> 模块的名字就变成了 <code v-pre>hopestudio.abc</code>，类似的，<code v-pre>xyz.py</code> 的模块名变成了 <code v-pre>hopestudio.xyz</code>。</p>
<p>请注意，每一个包目录下面都会有一个 <code v-pre>__init__.py</code> 的文件，这个文件是必须存在的，否则，Python 就把这个目录当成普通目录，而不是一个包。<code v-pre>__init__.py</code>可以是空文件，也可以有 Python 代码，因为 <code v-pre>__init__.py</code> 本身就是一个模块，而它的模块名就是 hopestudio。</p>
<p>类似的，可以有多级目录，组成多级层次的包结构。比如如下的目录结构:</p>
<div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>hopestudio</span></span>
<span class="line"><span> ├─ web</span></span>
<span class="line"><span> │  ├─ __init__.py</span></span>
<span class="line"><span> │  ├─ utils.py</span></span>
<span class="line"><span> │  └─ www.py</span></span>
<span class="line"><span> ├─ __init__.py</span></span>
<span class="line"><span> ├─ abc.py</span></span>
<span class="line"><span> └─ utils.py</span></span></code></pre>
</div><p>文件 <code v-pre>www.py</code> 的模块名就是 <code v-pre>hopestudio.web.www</code>，两个文件 <code v-pre>utils.py</code> 的模块名分别是 <code v-pre>hopestudio.utils</code> 和 <code v-pre>hopestudio.web.utils</code>。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>自己创建模块时要注意命名，不能和 Python 自带的模块名称冲突。例如，系统自带了 sys 模块，自己的模块就不可命名为 <code v-pre>sys.py</code>，否则将无法导入系统自带的 sys 模块。</p>
</div>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<ul>
<li>
<p>模块是一组 Python 代码的集合，可以使用其他模块，也可以被其他模块使用。</p>
</li>
<li>
<p>创建自己的模块时，要注意:</p>
<ol>
<li>模块名要遵循 Python 变量命名规范，不要使用中文、特殊字符；</li>
<li>模块名不要和系统模块名冲突，最好先查看系统是否已存在该模块，检查方法是在 Python 交互环境执行 <code v-pre>import abc</code>，若成功则说明系统存在此模块。</li>
</ol>
</li>
</ul>
</div></template>


