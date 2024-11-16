import{_ as e,c as n,b as a,d as l,g as s,a as h,f as p,r as k,o as d}from"./app-BGTcwSfg.js";const r={};function o(g,i){const t=k("RouteLink");return d(),n("div",null,[i[3]||(i[3]=a('<h2 id="其他特性" tabindex="-1"><a class="header-anchor" href="#其他特性"><span>其他特性</span></a></h2><h3 id="自动链接" tabindex="-1"><a class="header-anchor" href="#自动链接"><span>自动链接</span></a></h3><p>Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">http://example.com/</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>Markdown 会转为:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://example.com/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;http://example.com/&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以混淆一些不好的信箱地址收集机器人，例如:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">address@example.com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>Markdown 会转成:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x6D;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x61;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">i</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x6C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x74;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x6F;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x61;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x64;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x64;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x72;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x65;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#115;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#115;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#64;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#101;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#120;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x61;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#109;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x70;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x6C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">e</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#x2E;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#99;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#111;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">&amp;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">#109;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &gt;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x61;&amp;#x64;&amp;#x64;&amp;#x72;&amp;#x65;&amp;#115;&amp;#115;&amp;#64;&amp;#101;&amp;#120;&amp;#x61;&amp;#109;&amp;#x70;&amp;#x6C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x2E;&amp;#99;&amp;#111;&amp;#109;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>在浏览器里面，这段字串会变成一个可以点击的 「address@example.com」 链接。</p><p>(这种作法虽然可以混淆不少的机器人，但并无法全部挡下来，不过这样也比什么都不做好些。无论如何，公开您的信箱终究会引来广告信件的。)</p><h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h3><p>Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如: 如果您想要用星号加在文字旁边的方式来做出强调效果 (但不用 <code>&lt;em&gt;</code> 标签) ，您可以在星号的前面加上反斜线:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">literal asterisks</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\*</span></span></code></pre></div><p>Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号:</p><ul><li><code>\\</code> 反斜线</li><li><code>`</code> 反引号</li><li><code>*</code> 星号</li><li><code>_</code> 底线</li><li><code>{}</code> 大括号</li><li><code>[]</code> 方括号</li><li><code>()</code> 括号</li><li><code>#</code> 井字号</li><li><code>+</code> 加号</li><li><code>-</code> 减号</li><li><code>.</code> 英文句点</li><li><code>!</code> 惊叹号</li></ul><h2 id="大部分编辑器通用快捷键" tabindex="-1"><a class="header-anchor" href="#大部分编辑器通用快捷键"><span>大部分编辑器通用快捷键</span></a></h2><table><thead><tr><th>输出后的效果</th><th>Markdown</th><th>快捷键</th></tr></thead><tbody><tr><td><strong>Bold</strong></td><td><code>**text**</code></td><td>Ctrl/⌘ + B</td></tr><tr><td><em>Emphasize</em></td><td><code>*text*</code></td><td>Ctrl/⌘ + I</td></tr><tr><td><code>Inline Code</code></td><td>`code`</td><td>选中后 <code>`</code></td></tr></tbody></table><h2 id="常见扩展" tabindex="-1"><a class="header-anchor" href="#常见扩展"><span>常见扩展</span></a></h2><p>有几种轻量级标记语言是 Markdown 的超集。它们包含 Gruber 的基本语法，并通过添加其他元素 (例如表，代码块，语法突出显示，URL 自动链接和脚注) 在此基础上构建。许多最受欢迎的 Markdown 应用程序使用以下轻量级标记语言之一:</p><ul><li><a href="https://commonmark.org/" target="_blank" rel="noopener noreferrer">CommonMark</a></li><li><a href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown (GFM)</a></li><li><a href="https://michelf.ca/projects/php-markdown/extra/" target="_blank" rel="noopener noreferrer">Markdown Extra</a></li><li><a href="https://fletcherpenney.net/multimarkdown/" target="_blank" rel="noopener noreferrer">MultiMarkdown</a></li><li><a href="https://rmarkdown.rstudio.com/" target="_blank" rel="noopener noreferrer">R Markdown</a></li></ul><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h3><p>表格是 GFM 标准支持的格式。</p><p>您需要创建表头，并使用 <code>---</code> 来分割表头和表身。</p><p>您需要使用 <code>|</code> 来分割每一个表格项目，如果您需要输入 <code>|</code> 请使用 <code>\\</code> 转义它。</p><p>您可以在表头分割行处使用 <code>:</code> 来自定义该列的对其</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|     居中      |                   右对齐 | 左对齐         |</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| :-----------: | -----------------------: | :------------- |</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| 居中使用</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">:-:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |           右对齐使用</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">-:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | 左对齐使用</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">:-</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|       b       | 表格中包含的 \\| 需要转义 | aaaa           |</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|       c       |                     aaaa | a              |</span></span></code></pre></div><p><strong>输出</strong>:</p><table><thead><tr><th style="text-align:center;">居中</th><th style="text-align:right;">右对齐</th><th style="text-align:left;">左对齐</th></tr></thead><tbody><tr><td style="text-align:center;">居中使用<code>:-:</code></td><td style="text-align:right;">右对齐使用<code>-:</code></td><td style="text-align:left;">左对齐使用<code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">表格中包含的 | 需要转义</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table></details><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji</span></a></h3><p>Emoji 是 GFM 标准支持的格式，需要通过 <code>:emoji名称:</code> 来使用 emoji。</p><p>例子: <code>:smile:</code> 😄</p>',31)),l("p",null,[i[1]||(i[1]=s("您可以在 ")),h(t,{to:"/code/language/markdown/emoji/"},{default:p(()=>i[0]||(i[0]=[s("Emoji 列表")])),_:1}),i[2]||(i[2]=s(" 找到所有可用的 Emoji。"))]),i[4]||(i[4]=a(`<h3 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线"><span>删除线</span></a></h3><p>您可以使用 <code>~~delete~~</code> 来创建类似 <s>delete</s> 的删除线</p><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h3><p>在 Markdown 中使用 <code>[^锚点文字]</code> 来定义脚注。</p><p>在之后的任何位置使用 <code>[^锚点文字]: ...</code> 来描述脚注内容。</p><p>如果脚注包含多个段落，其后的段落应当保持双层缩进。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">脚注 1 链接</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^first</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">脚注 2 链接</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^second</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">行内的脚注^[Text of inline footnote] 定义.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">重复的页脚引用</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^second</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">^first</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: 脚注 </span><span style="--shiki-light:#986801;--shiki-light-font-weight:bold;--shiki-dark:#D19A66;--shiki-dark-font-weight:inherit;">**可以包含特殊标记**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    也可以由多个段落组成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">[^second]</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">脚注文字。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>:</p><p>脚注 1 链接<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><p>脚注 2 链接<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>.</p><p>行内的脚注<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> 定义.</p><p>重复的页脚引用<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup>.</p></details><h3 id="自定义标题" tabindex="-1"><a class="header-anchor" href="#自定义标题"><span>自定义标题</span></a></h3><p>许多 Markdown 处理器支持标题的自定义 ID。</p><p>添加自定义 ID 允许您直接链接到标题并使用 CSS 对其进行修改。要添加自定义标题 ID，请在与标题相同的行上用大括号括起该自定义 ID。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### My Great Heading {#custom-id}</span></span></code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;custom-id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;My Great Heading&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></details><h3 id="定义列表" tabindex="-1"><a class="header-anchor" href="#定义列表"><span>定义列表</span></a></h3><p>一些 Markdown 处理器允许您创建术语及其对应定义的定义列表。要创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">First Term</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: This is the definition of the first term.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Second Term</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: This is one definition of the second term.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: This is another definition of the second term.</span></span></code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;First Term&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;This is the definition of the first term.&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Second Term&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;This is one definition of the second term.&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;This is another definition of the second term.&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p><strong>输出</strong>:</p><!-- markdownlint-disable MD033 --><dl><dt>First Term</dt><dd>This is the definition of the first term.</dd><dt>Second Term</dt><dd>This is one definition of the second term.</dd><dd>This is another definition of the second term.</dd></dl></details><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h3><p>任务列表使您可以创建带有复选框的项目列表。</p><p>要创建任务列表，请创建一个列表，并以方括号 <code>[ ]</code> 开头。通过添加空格 <code>x</code> 来改变复选框的勾选情况。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-md" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">x</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Write the press release</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] Update the website</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ ] Contact the media</span></span></code></pre></div><p><strong>输出</strong>:</p><ul><li><input type="checkbox" checked disabled>Write the press release</li><li><input type="checkbox" disabled>Update the website</li><li><input type="checkbox" disabled>Contact the media</li></ul></details><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>脚注 <strong>可以包含特殊标记</strong></p><p>也可以由多个段落组成 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>脚注文字。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>Text of inline footnote <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li></ol></section>`,20))])}const m=e(r,[["render",o],["__file","extend.html.vue"]]),A=JSON.parse('{"path":"/code/language/markdown/extend.html","title":"Markdown 扩展","lang":"zh-CN","frontmatter":{"date":"2021-02-21T00:00:00.000Z","title":"Markdown 扩展","icon":"plugin","category":"Markdown","tag":["Markdown"],"description":"其他特性 自动链接 Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如: Markdown 会转为: 自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/markdown/extend.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Markdown 扩展"}],["meta",{"property":"og:description","content":"其他特性 自动链接 Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如: Markdown 会转为: 自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:published_time","content":"2021-02-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 扩展\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"其他特性","slug":"其他特性","link":"#其他特性","children":[{"level":3,"title":"自动链接","slug":"自动链接","link":"#自动链接","children":[]},{"level":3,"title":"转义字符","slug":"转义字符","link":"#转义字符","children":[]}]},{"level":2,"title":"大部分编辑器通用快捷键","slug":"大部分编辑器通用快捷键","link":"#大部分编辑器通用快捷键","children":[]},{"level":2,"title":"常见扩展","slug":"常见扩展","link":"#常见扩展","children":[{"level":3,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":3,"title":"Emoji","slug":"emoji","link":"#emoji","children":[]},{"level":3,"title":"删除线","slug":"删除线","link":"#删除线","children":[]},{"level":3,"title":"脚注","slug":"脚注","link":"#脚注","children":[]},{"level":3,"title":"自定义标题","slug":"自定义标题","link":"#自定义标题","children":[]},{"level":3,"title":"定义列表","slug":"定义列表","link":"#定义列表","children":[]},{"level":3,"title":"任务列表","slug":"任务列表","link":"#任务列表","children":[]}]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1403},"filePathRelative":"code/language/markdown/extend.md","localizedDate":"2021年2月21日","excerpt":"","autoDesc":true}');export{m as comp,A as data};
