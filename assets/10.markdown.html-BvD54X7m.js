import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-MOyuRdpr.js";const t={};function l(p,i){return a(),n("div",null,i[0]||(i[0]=[e(`<h1 id="markdown编辑器实现原理" tabindex="-1"><a class="header-anchor" href="#markdown编辑器实现原理"><span>Markdown编辑器实现原理</span></a></h1><ul><li>Markdown简单回顾</li><li>Markdown实现原理</li></ul><h2 id="markdown简单回顾" tabindex="-1"><a class="header-anchor" href="#markdown简单回顾"><span>Markdown简单回顾</span></a></h2><p>Markdown实际上是一种轻量级的标记语言。</p><p>作为一门标记语言，Markdown 里面自然也会提供各种各样的标记：</p><ul><li>标题：通过 <code>#</code> 来创建</li><li><strong>强调</strong>：通过 <code>**</code> 或者 <code>__</code> 来创建</li><li><em>斜体</em>：通过 <code>*</code> 或者 <code>_</code> 来创建</li><li>链接</li><li>图片</li><li>代码</li><li>....</li></ul><p>关于 Markdown 更加详尽的语法，你可以参阅：https://www.markdownguide.org/basic-syntax/</p><p>Markdown 最早出现在 2004 年，它的发明者是一个叫做 John Gruber 的人</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-01-04-022718.png" alt="image-20240104102718891" style="zoom:50%;"><p>在 Markdown 出现之前，人们要进行文档编辑，要么使用富文本编辑器，要么使用 HTML，但是这两种方式或多或少有一些缺陷：</p><ul><li>富文本编辑器：最常见的就是 Word，像 Word 这种富文本编辑器提供了一个所见即所得（WYSIWYG），但是这些编辑器生成的通常是特定格式的二进制文件，并非纯文本，意味着你要打开这些文件还是必须要用对应的富文本编辑器来打开。</li><li>HTML：本身就是用来创建网页，里面所提供的标记语法对于非技术人员来讲，是比较复杂的，并且可阅读性不强。</li></ul><p>Markdown 的出现为我们的纯文本编辑带来了一种新的可能性：</p><ul><li>易读易写</li><li>可扩展</li><li>版本控制友好</li></ul><h2 id="markdown实现原理" tabindex="-1"><a class="header-anchor" href="#markdown实现原理"><span>Markdown实现原理</span></a></h2><p>用户所书写的 Markdown 文本，最终是要被转换为 HTML 格式的。</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-01-04-043244.png" alt="image-20240104123244363" tabindex="0" loading="lazy"><figcaption>image-20240104123244363</figcaption></figure><h3 id="编译相关的基础知识" tabindex="-1"><a class="header-anchor" href="#编译相关的基础知识"><span>编译相关的基础知识</span></a></h3><p>什么是编译 ？</p><p>所谓编译（Compile），就是将一种语言 A 翻译成另外一种语言 B，其中语言 A，我们称之为源代码（Source code），语言 B 我们称之为目标代码（target code）。</p><p>编译的工作是由编译器来做，编译器本质上就是一段程序，或者你可以理解为一个函数：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> text2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>完整的编译过程，通常包含这么几个部分：</p><ol><li>词法分析</li></ol><p>词法分析是编译过程中的第一个阶段，它的任务就是将源码转换为一系列的词法单元（Token）</p><p>所谓词法单元，指的是最小的不可再拆分的单元：关键字、标识符、操作符、数字、字符串</p><p>例如：</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>经过词法分析，就会将上面源码中的 token 拆解出来：</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>int（关键字）</span></span>
<span class="line"><span>x（标识符）</span></span>
<span class="line"><span>=（操作符）</span></span>
<span class="line"><span>10（数字）</span></span>
<span class="line"><span>+（操作符）</span></span>
<span class="line"><span>5（数字）</span></span>
<span class="line"><span>;（分号）</span></span></code></pre></div><ol start="2"><li>语法分析</li></ol><p>这一个步骤主要就是根据上一步所得到的 token 形成一颗抽象语法树（Abstract Syntax Tree，AST）</p><p>AST 是一个树形结构，会将比较重要的 token 包含到树结构里面，会忽略不太重要的部分。</p><p>例如根据上面的代码，所形成的抽象语法树如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Declaration</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   +-- Type: int</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   +-- Identifier: x</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   +-- Assignment</span></span>
<span class="line"><span>         |</span></span>
<span class="line"><span>         +-- Addition</span></span>
<span class="line"><span>               |</span></span>
<span class="line"><span>               +-- Number: 10</span></span>
<span class="line"><span>               |</span></span>
<span class="line"><span>               +-- Number: 5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>语义分析</li></ol><p>这个阶段会去检查程序是否符合语法规则，确保你的程序在执行的时候，有一个良好的行为。</p><div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>像上面所举例子的错误，就是在语义分析阶段被检查出来。</p><ol start="4"><li>中间代码生成</li></ol><p>根据 AST 先生成一遍中间的代码</p><ol start="5"><li>优化</li><li>目标代码生成</li></ol><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-075353.png" alt="image-20231113155353850" tabindex="0" loading="lazy"><figcaption>image-20231113155353850</figcaption></figure><p>注意，从大的方面去分类的话，还可以分为两大类：</p><ul><li>编译前端（词法分析、语法分析、语义分析）：通常是和目标平台无关的，仅仅负责分析源代码</li><li>编译后端（中间代码生成、优化、目标代码生成）：通常就和你的目标平台有关系</li></ul><h3 id="ast" tabindex="-1"><a class="header-anchor" href="#ast"><span>AST</span></a></h3><p>AST 英语全称 Abstract Syntax Tree，翻译成中文叫做“抽象语法树”。</p><p>咱们这里可以采用分词的方式来理解它：抽象、语法、树</p><p>树其实是数据结构里面的一种，用于表示某一个集合的层次关系，每个节点都有一个父节点和零个或者多个子节点。</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    A</span></span>
<span class="line"><span>   / \\</span></span>
<span class="line"><span>  B   C</span></span>
<span class="line"><span> / \\   \\</span></span>
<span class="line"><span>D   E   F</span></span></code></pre></div><p>树这种结构在平时做搜索、排序以及想要表示层次关系的时候，是用的比较多的。DOM、路由算法、数据库索引。</p><p>了解了什么是树之后，那么语法树的概念也就比较好理解，比如我们平时所写的代码：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 42</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> addA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> addA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>对于 JS 引擎来讲，上面的代码实际上就是一串字符串：</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;var a = 42;var b = 5;function addA(d){return a + d;}var c = addA(2) + b;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><p>接下来 JS 引擎第一步仍然是分词，将上面的字符串提取成一个一个的 Token</p><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Keyword(var) Identifier(a) Punctuator(=) Numeric(42) Punctuator(;) Keyword(var) Identifier(b) Punctuator(=) Numeric(5) Punctuator(;) Keyword(function) Identifier(addA) Punctuator(() Identifier(d) Punctuator()) Punctuator({) Keyword(return) Identifier(a) Punctuator(+) Identifier(d) Punctuator(;) Punctuator(}) Keyword(var) Identifier(c) Punctuator(=) Identifier(addA) Punctuator(() Numeric(2) Punctuator()) Punctuator(+) Identifier(b) Punctuator(;)</span></span></code></pre></div><p>接下来根据上面所得到的 token 形成一颗树结构：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-051026.png" alt="image-20231113131026349" style="zoom:67%;"><p>最后解释一下为什么要用抽象这个词。</p><p>抽象在计算机科学里面是一个非常重要的概念。</p><p>这里所指的抽象和现实生活中的抽象是有区别。</p><ul><li>现实生活：模糊、含糊不清、难以理解</li><li>计算机科学：将关键部分抽取出来，忽略不必要的细节</li></ul><p>我们在将 token 形成树结构的时候，只会关心诸如关键字、标识符、运算符这一类关键的信息，会忽略诸如空格、换行符这一类非关键信息。因此叫做抽象语法树。</p><p>抽象语法树这个概念非常的重要，但凡是涉及到转换的场景，基本上都是基于抽象语法树来运作</p><ul><li>Typescript</li></ul><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-052827.png" alt="image-20231113132827332" style="zoom:60%;"><ul><li>Babel</li><li>Prettier</li><li>ESLint</li><li>Markdown</li></ul><h3 id="markdown转换流程" tabindex="-1"><a class="header-anchor" href="#markdown转换流程"><span>Markdown转换流程</span></a></h3><p>整个 Markdown parser 的执行部分分为三步：</p><ul><li>词法分析：解析器会对用户的 Markdown 文本进行词法解析，将文本分割成一系列的 token.</li><li>语法分析：根据上一步所得到的 token，构建抽象语法树。</li><li>目标代码的生成：解析器遍历 AST，将每个节点转换为相应的 HTML 代码。</li></ul>`,70)]))}const d=s(t,[["render",l],["__file","10.markdown.html.vue"]]),k=JSON.parse('{"path":"/code/electron/10.markdown.html","title":"Markdown编辑器实现原理","lang":"zh-CN","frontmatter":{"description":"Markdown编辑器实现原理 Markdown简单回顾 Markdown实现原理 Markdown简单回顾 Markdown实际上是一种轻量级的标记语言。 作为一门标记语言，Markdown 里面自然也会提供各种各样的标记： 标题：通过 # 来创建 强调：通过 ** 或者 __ 来创建 斜体：通过 * 或者 _ 来创建 链接 图片 代码 .... 关...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/code/electron/10.markdown.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"Markdown编辑器实现原理"}],["meta",{"property":"og:description","content":"Markdown编辑器实现原理 Markdown简单回顾 Markdown实现原理 Markdown简单回顾 Markdown实际上是一种轻量级的标记语言。 作为一门标记语言，Markdown 里面自然也会提供各种各样的标记： 标题：通过 # 来创建 强调：通过 ** 或者 __ 来创建 斜体：通过 * 或者 _ 来创建 链接 图片 代码 .... 关..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-01-04-043244.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T13:01:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T13:01:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown编辑器实现原理\\",\\"image\\":[\\"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-01-04-043244.png\\",\\"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-075353.png\\"],\\"dateModified\\":\\"2024-12-23T13:01:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]],"date":"2024-12-23T13:01:24.000Z"},"headers":[{"level":2,"title":"Markdown简单回顾","slug":"markdown简单回顾","link":"#markdown简单回顾","children":[]},{"level":2,"title":"Markdown实现原理","slug":"markdown实现原理","link":"#markdown实现原理","children":[{"level":3,"title":"编译相关的基础知识","slug":"编译相关的基础知识","link":"#编译相关的基础知识","children":[]},{"level":3,"title":"AST","slug":"ast","link":"#ast","children":[]},{"level":3,"title":"Markdown转换流程","slug":"markdown转换流程","link":"#markdown转换流程","children":[]}]}],"git":{"createdTime":1734958884000,"updatedTime":1734958884000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":5.42,"words":1625},"filePathRelative":"code/electron/10.markdown.md","localizedDate":"2024年12月23日","excerpt":"","autoDesc":true}');export{d as comp,k as data};