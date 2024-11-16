import{_ as p,c as h,b as t,d as i,g as e,a as l,f as n,r,o as k}from"./app-BGTcwSfg.js";const d={};function c(o,s){const a=r("RouteLink");return k(),h("div",null,[s[15]||(s[15]=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      greeting</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello World!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;greeting&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;{{ greeting }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.greeting</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-weight: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">bold</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，Vue 的单文件组件是 HTML、CSS 和 JavaScript 三种元素的自然延伸。<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 三个块在同一个文件中封装、组合了组件的视图、逻辑和样式。</p><h2 id="总览" tabindex="-1"><a class="header-anchor" href="#总览"><span>总览</span></a></h2><h2 id="总览-overview" tabindex="-1"><a class="header-anchor" href="#总览-overview"><span>总览 {#overview}</span></a></h2><p>一个 Vue 单文件组件 (SFC)，通常使用 <code>*.vue</code> 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。</p><p>每一个 <code>*.vue</code> 文件都由三种顶层语块构成：<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code>，以及一些其他的自定义块：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;example&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;{{ msg }}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello world!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.example</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  This could be e.g. documentation for the component.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相应语言块-language-blocks" tabindex="-1"><a class="header-anchor" href="#相应语言块-language-blocks"><span>相应语言块 {#language-blocks}</span></a></h2><h3 id="template-template" tabindex="-1"><a class="header-anchor" href="#template-template"><span><code>&lt;template&gt;</code> {#template}</span></a></h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个顶层 <code>&lt;template&gt;</code> 块。</p></li><li><p>语块包裹的内容将会被提取、传递给 <code>@vue/compiler-dom</code>，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 <code>render</code> 选项。</p></li></ul><h3 id="script-script" tabindex="-1"><a class="header-anchor" href="#script-script"><span><code>&lt;script&gt;</code> {#script}</span></a></h3>`,13)),i("ul",null,[i("li",null,[i("p",null,[s[1]||(s[1]=e("每个 ")),s[2]||(s[2]=i("code",null,"*.vue",-1)),s[3]||(s[3]=e(" 文件最多可以包含一个 ")),s[4]||(s[4]=i("code",null,"<script>",-1)),s[5]||(s[5]=e(" 块。(使用 ")),l(a,{to:"/api/sfc-script-setup.html"},{default:n(()=>s[0]||(s[0]=[i("code",null,"<script setup>",-1)])),_:1}),s[6]||(s[6]=e(" 的情况除外)"))])]),s[11]||(s[11]=i("li",null,[i("p",null,"这个脚本代码块将作为 ES 模块执行。")],-1)),i("li",null,[i("p",null,[s[8]||(s[8]=i("strong",null,"默认导出",-1)),s[9]||(s[9]=e("应该是 Vue 的组件选项对象，可以是一个对象字面量或是 ")),l(a,{to:"/api/general.html#definecomponent"},{default:n(()=>s[7]||(s[7]=[e("defineComponent")])),_:1}),s[10]||(s[10]=e(" 函数的返回值。"))])])]),s[16]||(s[16]=t('<h3 id="script-setup-script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup-script-setup"><span><code>&lt;script setup&gt;</code> {#script-setup}</span></a></h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个 <code>&lt;script setup&gt;</code>。(不包括一般的 <code>&lt;script&gt;</code>)</p></li><li><p>这个脚本块将被预处理为组件的 <code>setup()</code> 函数，这意味着它将<strong>为每一个组件实例</strong>都执行。<code>&lt;script setup&gt;</code> 中的顶层绑定都将自动暴露给模板。要了解更多细节，请看 <a href="/api/sfc-script-setup"><code>&lt;script setup&gt;</code> 的专门文档</a>。</p></li></ul><h3 id="style-style" tabindex="-1"><a class="header-anchor" href="#style-style"><span><code>&lt;style&gt;</code> {#style}</span></a></h3><ul><li><p>每个 <code>*.vue</code> 文件可以包含多个 <code>&lt;style&gt;</code> 标签。</p></li><li><p>一个 <code>&lt;style&gt;</code> 标签可以使用 <code>scoped</code> 或 <code>module</code> attribute (查看 <a href="/api/sfc-css-features">SFC 样式功能</a>了解更多细节) 来帮助封装当前组件的样式。使用了不同封装模式的多个 <code>&lt;style&gt;</code> 标签可以被混合入同一个组件。</p></li></ul><h3 id="自定义块-custom-blocks" tabindex="-1"><a class="header-anchor" href="#自定义块-custom-blocks"><span>自定义块 {#custom-blocks}</span></a></h3><p>在一个 <code>*.vue</code> 文件中可以为任何项目特定需求使用额外的自定义块。举个例子，一个用作写文档的 <code>&lt;docs&gt;</code> 块。这里是一些自定义块的真实用例：</p><ul><li><a href="https://gridsome.org/docs/querying-data/" target="_blank" rel="noopener noreferrer">Gridsome：<code>&lt;page-query&gt;</code></a></li><li><a href="https://github.com/wheatjs/vite-plugin-vue-gql" target="_blank" rel="noopener noreferrer">vite-plugin-vue-gql：<code>&lt;gql&gt;</code></a></li><li><a href="https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n#i18n-custom-block" target="_blank" rel="noopener noreferrer">vue-i18n：<code>&lt;i18n&gt;</code></a></li></ul>',7)),i("p",null,[s[13]||(s[13]=e("自定义块的处理需要依赖工具链。如果你想要在构建中集成你的自定义语块，请参见")),l(a,{to:"/guide/scaling-up/tooling.html#sfc-custom-block-integrations"},{default:n(()=>s[12]||(s[12]=[e("相关工具链指南")])),_:1}),s[14]||(s[14]=e("获取更多细节。"))]),s[17]||(s[17]=t(`<h2 id="自动名称推导-automatic-name-inference" tabindex="-1"><a class="header-anchor" href="#自动名称推导-automatic-name-inference"><span>自动名称推导 {#automatic-name-inference}</span></a></h2><p>SFC 在以下场景中会根据<strong>文件名</strong>自动推导其组件名：</p><ul><li>开发警告信息格式</li><li>DevTools 审阅</li><li>递归组件自引用。例如一个名为 <code>FooBar.vue</code> 的组件可以在模板中通过 <code>&lt;FooBar/&gt;</code> 引用自己。(同名情况下) 这比明确注册/导入的组件优先级低。</li></ul><h2 id="预处理器-pre-processors" tabindex="-1"><a class="header-anchor" href="#预处理器-pre-processors"><span>预处理器 {#pre-processors}</span></a></h2><p>代码块可以使用 <code>lang</code> 这个 attribute 来声明预处理器语言，最常见的用例就是对 <code>&lt;script&gt;</code> 块使用 TypeScript：</p><div class="language-vue-html" data-highlighter="shiki" data-ext="vue-html" data-title="vue-html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  // use TypeScript</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p><code>lang</code> 在任意块上都能使用，比如我们可以在 <code>&lt;style&gt;</code> 标签上使用 <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> 或是 <code>&lt;template&gt;</code> 上使用 <a href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noopener noreferrer">Pug</a>：</p><div class="language-vue-html line-numbers-mode" data-highlighter="shiki" data-ext="vue-html" data-title="vue-html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pug&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p {{ msg }}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;scss&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  $primary-color: #333;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  body {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: $primary-color;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意对各种不同的预处理的集成会导致工具链的不同，你应该查看相应的工具链文档了解细节：</p><ul><li><a href="https://vitejs.dev/guide/features.html#css-pre-processors" target="_blank" rel="noopener noreferrer">Vite</a></li><li><a href="https://cli.vuejs.org/guide/css.html#pre-processors" target="_blank" rel="noopener noreferrer">Vue CLI</a></li><li><a href="https://vue-loader.vuejs.org/guide/pre-processors.html#using-pre-processors" target="_blank" rel="noopener noreferrer">webpack + vue-loader</a></li></ul><h2 id="src-导入-src-imports" tabindex="-1"><a class="header-anchor" href="#src-导入-src-imports"><span>Src 导入 {#src-imports}</span></a></h2><p>如果你更喜欢将 <code>*.vue</code> 组件分散到多个文件中，可以为一个语块使用 <code>src</code> 这个 attribute 来导入一个外部文件：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./template.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./style.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./script.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>请注意 <code>src</code> 导入和 Webpack 的模块请求遵循相同的路径解析规则，这意味着：</p><ul><li>相对路径需要以 <code>./</code> 开头</li><li>你也可以从 npm 依赖中导入资源</li></ul><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 从所安装的 &quot;todomvc-app-css&quot; npm 包中导入一个文件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;todomvc-app-css/index.css&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p><code>src</code> 导入对自定义语块也同样适用：</p><div class="language-vue" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">unit-test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./unit-test.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">unit-test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="注释-comments" tabindex="-1"><a class="header-anchor" href="#注释-comments"><span>注释 {#comments}</span></a></h2><p>在每一个语块中你都可以按照相应语言 (HTML、CSS、JavaScript 和 Pug 等等) 的语法书写注释。对于顶层注释，请使用 HTML 的注释语法 <code>&lt;!-- comment contents here --&gt;</code></p>`,20))])}const B=p(d,[["render",c],["__file","sfc.html.vue"]]),u=JSON.parse('{"path":"/code/vue/core/sfc.html","title":"Vue 单文件组件","lang":"zh-CN","frontmatter":{"date":"2023-02-26T00:00:00.000Z","title":"Vue 单文件组件","icon":"vue","category":"Vue","description":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： 如你所见，Vue 的单文件组件是 HTML、CSS 和 JavaScript 三种元素的自然延伸。<template>、<script> 和 <style> 三个块在同...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/vue/core/sfc.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Vue 单文件组件"}],["meta",{"property":"og:description","content":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： 如你所见，Vue 的单文件组件是 HTML、CSS 和 JavaScript 三种元素的自然延伸。<template>、<script> 和 <style> 三个块在同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:published_time","content":"2023-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 单文件组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"总览 {#overview}","slug":"总览-overview","link":"#总览-overview","children":[]},{"level":2,"title":"相应语言块 {#language-blocks}","slug":"相应语言块-language-blocks","link":"#相应语言块-language-blocks","children":[{"level":3,"title":"<template> {#template}","slug":"template-template","link":"#template-template","children":[]},{"level":3,"title":"<script> {#script}","slug":"script-script","link":"#script-script","children":[]},{"level":3,"title":"<script setup> {#script-setup}","slug":"script-setup-script-setup","link":"#script-setup-script-setup","children":[]},{"level":3,"title":"<style> {#style}","slug":"style-style","link":"#style-style","children":[]},{"level":3,"title":"自定义块 {#custom-blocks}","slug":"自定义块-custom-blocks","link":"#自定义块-custom-blocks","children":[]}]},{"level":2,"title":"自动名称推导 {#automatic-name-inference}","slug":"自动名称推导-automatic-name-inference","link":"#自动名称推导-automatic-name-inference","children":[]},{"level":2,"title":"预处理器 {#pre-processors}","slug":"预处理器-pre-processors","link":"#预处理器-pre-processors","children":[]},{"level":2,"title":"Src 导入 {#src-imports}","slug":"src-导入-src-imports","link":"#src-导入-src-imports","children":[]},{"level":2,"title":"注释 {#comments}","slug":"注释-comments","link":"#注释-comments","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":4.09,"words":1228},"filePathRelative":"code/vue/core/sfc.md","localizedDate":"2023年2月26日","excerpt":"","autoDesc":true}');export{B as comp,u as data};
