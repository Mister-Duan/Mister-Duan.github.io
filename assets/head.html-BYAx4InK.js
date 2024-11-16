import{_ as n,c as p,d as s,g as t,e as k,b as a,a as l,f as h,r as d,o}from"./app-BGTcwSfg.js";const r={},g={class:"hint-container info"},c={class:"hint-container info"};function A(B,i){const e=d("RouteLink");return o(),p("div",null,[i[10]||(i[10]=s("p",null,[t("在页面加载完成的时候，标签 "),s("code",null,"<head>"),t(" 里的内容，是不会在页面中显示出来的。")],-1)),i[11]||(i[11]=s("p",null,[s("code",null,"<head>"),t(" 包含了像页面的 "),s("code",null,"<title>"),t("(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。")],-1)),k(" more "),i[12]||(i[12]=a(`<h2 id="html-头部" tabindex="-1"><a class="header-anchor" href="#html-头部"><span>HTML 头部</span></a></h2><p>HTML 头部是包含在 <code>&lt;head&gt;</code> 元素里面的内容。不像 <code>&lt;body&gt;</code> 元素的内容会显示在浏览器中，head 里面的内容不会在浏览器中显示，它的作用是包含一些页面的元数据。在下面的例子中，head 的内容很少。</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;utf-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;My test page&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,3)),s("p",null,[i[1]||(i[1]=t("当然，在大型的页面中，head 会包含很多的元数据。您可以用 ")),l(e,{to:"/software/chrome.html#%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7"},{default:h(()=>i[0]||(i[0]=[t("开发者工具")])),_:1}),i[2]||(i[2]=t(" 去查看您喜欢的网页的 head 的内容。这里只会列出要包含在 head 里的主要元素。"))]),i[13]||(i[13]=a('<h2 id="title-元素" tabindex="-1"><a class="header-anchor" href="#title-元素"><span><code>&lt;title&gt;</code> 元素</span></a></h2><p><code>&lt;title&gt;</code> 可以用来给 HTML 文档添加一个标题。您可能会将它和给 body 添加标题的 <code>&lt;h1&gt;</code> 元素混淆，有些时候 <code>&lt;h1&gt;</code> 也会被称作网页标题。但是它们是不同的。</p><ul><li>当被加载到浏览器中的时候，元素 <code>&lt;h1&gt;</code> 会出现在页面中 —— 通常它应该在一个页面中只被使用一次，它被用来标记您的页面内容的标题(故事的标题，新闻标题或者任何适当的方式)。</li><li>元素 <code>&lt;title&gt;</code> 用来表示整个 HTML 文档标题的元数据(不是文档的内容)。</li></ul><p>直白点说，<code>&lt;h1&gt;</code> 会出现在页面上，而 <code>&lt;title&gt;</code> 会出现在选项卡或书签中。</p><h2 id="meta-元素" tabindex="-1"><a class="header-anchor" href="#meta-元素"><span><code>&lt;meta&gt;</code> 元素</span></a></h2><p>元数据就是描述数据的数据，有很多不同种类的 <code>&lt;meta&gt;</code> 元素可以被包含进您的页面的 <code>&lt;head&gt;</code> 元素，下面仅为最常用的。</p><h3 id="指定编码" tabindex="-1"><a class="header-anchor" href="#指定编码"><span>指定编码</span></a></h3><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;utf-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p>这个元素简单的指定了文档的字符编码 —— 在这个文档中被允许使用的字符集。</p>',9)),s("div",g,[i[5]||(i[5]=s("p",{class:"hint-container-title"},"相关信息",-1)),s("p",null,[i[4]||(i[4]=t("字符集的详情，请见 ")),l(e,{to:"/code/basic/encoding.html"},{default:h(()=>i[3]||(i[3]=[t("基础知识 → 字符集")])),_:1})])]),i[14]||(i[14]=a(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果您指定了错误的编码，则整个网页都会乱码。</p></div><h3 id="添加作者和描述" tabindex="-1"><a class="header-anchor" href="#添加作者和描述"><span>添加作者和描述</span></a></h3><p>许多 <code>&lt;meta&gt;</code> 元素包含了 <code>name</code> 和 <code>content</code> 特性:</p><ul><li><code>name</code> 指定了 meta 元素的类型； 说明该元素包含了什么类型的信息。</li><li><code>content</code> 指定了实际的元数据内容。</li></ul><p>这两个 meta 元素用于定义页面作者与提供页面简要描述。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;author&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Mr.Hope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;description&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Introduction about </span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">head&gt; tags&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div></div><p>指定作者在某些情况下是很有用的: 如果您需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。</p><p>指定包含关于页面内容的关键字的页面内容的描述是很有用的，因为它可能或让您的页面在搜索引擎的相关的搜索出现得更多 (这些行为术语上被称为 Search Engine Optimization，简称 SEO.)</p>`,8)),s("div",c,[i[9]||(i[9]=s("p",{class:"hint-container-title"},"相关信息",-1)),s("p",null,[i[7]||(i[7]=t("关于 SEO 详情，请见 ")),l(e,{to:"/code/website/definition/seo.html"},{default:h(()=>i[6]||(i[6]=[t("定义 → SEO")])),_:1}),i[8]||(i[8]=t("。"))])]),i[15]||(i[15]=a(`<h3 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标"><span>自定义图标</span></a></h3><p>您可以在元数据中添加对自定义图标的引用。现代浏览器在各种场合使用 favicons，如打开的页面标签页和书签面板中的书签页面。</p><p>这个不起眼的图标已经存在很多很多年了，16 x 16 像素是这种图标的第一种类型。</p><p>页面添加图标的方式有:</p><ol><li><p>将其保存在与网站的索引页面相同的目录中，以 <code>.ico</code> 格式保存(大多数浏览器将支持更通用的格式，如 .gif 或.png，但使用 ICO 格式将确保它能在如 IE6 一样久远的浏览器显示)</p></li><li><p>将以下行添加到 HTML <code>&lt;head&gt;</code> 中以引用它</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;shortcut icon&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;favicon.ico&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;image/x-icon&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div></li></ol><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多元数据详情，请见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta" target="_blank" rel="noopener noreferrer">MDN Meta 标签</a>)</p></div><h2 id="为文档设定主语言" tabindex="-1"><a class="header-anchor" href="#为文档设定主语言"><span>为文档设定主语言</span></a></h2><p>您应该添加 <code>lang</code> 属性到 HTML 开始标签中来为您的站点设定语言。</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;zh-CN&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- or --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;en-US&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>如果您设置了 HTML 文档语言，那么该 HTML 文档就能被搜索引擎更有效地索引 (保证它在特定于语言的结果中正确显示)。同时，这对于那些使用屏幕阅读器的视障人士也很有用。(比如，法语和英语中都有 “six” 这个单词，但是发音却完全不同)</p><p>您还可以将文档的片段设置为不同的语言:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Chinese example: &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;zh-CN&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;春眠不觉晓&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;.&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,12))])}const y=n(r,[["render",A],["__file","head.html.vue"]]),F=JSON.parse('{"path":"/code/website/html/intro/head.html","title":"head 标签","lang":"zh-CN","frontmatter":{"title":"head 标签","icon":"heading","date":"2019-09-02T00:00:00.000Z","category":"HTML","order":2,"description":"在页面加载完成的时候，标签 <head> 里的内容，是不会在页面中显示出来的。 <head> 包含了像页面的 <title>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/html/intro/head.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"head 标签"}],["meta",{"property":"og:description","content":"在页面加载完成的时候，标签 <head> 里的内容，是不会在页面中显示出来的。 <head> 包含了像页面的 <title>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"head 标签\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"HTML 头部","slug":"html-头部","link":"#html-头部","children":[]},{"level":2,"title":"<title> 元素","slug":"title-元素","link":"#title-元素","children":[]},{"level":2,"title":"<meta> 元素","slug":"meta-元素","link":"#meta-元素","children":[{"level":3,"title":"指定编码","slug":"指定编码","link":"#指定编码","children":[]},{"level":3,"title":"添加作者和描述","slug":"添加作者和描述","link":"#添加作者和描述","children":[]},{"level":3,"title":"自定义图标","slug":"自定义图标","link":"#自定义图标","children":[]}]},{"level":2,"title":"为文档设定主语言","slug":"为文档设定主语言","link":"#为文档设定主语言","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":4.03,"words":1209},"filePathRelative":"code/website/html/intro/head.md","localizedDate":"2019年9月2日","excerpt":"<p>在页面加载完成的时候，标签 <code>&lt;head&gt;</code> 里的内容，是不会在页面中显示出来的。</p>\\n<p><code>&lt;head&gt;</code> 包含了像页面的 <code>&lt;title&gt;</code>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。</p>\\n","autoDesc":true}');export{y as comp,F as data};
