import{_ as a,c as t,b as n,a as h,f as k,r,o as d,d as i,g as s}from"./app-BGTcwSfg.js";const p={};function o(c,e){const l=r("CodeDemo");return d(),t("div",null,[e[1]||(e[1]=n('<h3 id="元素特性" tabindex="-1"><a class="header-anchor" href="#元素特性"><span>元素特性</span></a></h3><ul><li><p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p></li><li><p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p></li><li><p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p></li></ul><h3 id="摆放特性" tabindex="-1"><a class="header-anchor" href="#摆放特性"><span>摆放特性</span></a></h3><p>正常布局流(在布局介绍里提到过)是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: <code>horizontal-tb</code>)的块流动方向(block flow direction)放置。</p><p>每个块级元素会在上一个元素下面另起一行，它们会被设置好的 <code>margin</code> 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。</p><p>内联元素的表现有所不同: 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容(或者被包裹的)被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。</p><p>如果两个相邻的元素都设置了 <code>margin</code> 并且两个 <code>margin</code> 有重叠，那么更大的设置会被保留，小的则会消失。这被称为外边距叠加。</p>',7)),h(l,{id:"code-demo-35",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90",code:"eJxtU01v2zAM/SuEgQEtathJuw5DlvWQ2w7DjrvkIluMrUQfhiTXyYr+95GSly5NL3FMk+898pEvRR+NLlbFul8+bURQLUjXjgZthJ1207qm+NZu7XqgB8APEAYENCmz0a49gMZn1IAauaiCnycQci9aRvggIUBQEZwFixMDamUxQIPEBQYrIqqZ6Uy4OYHEnRh1hAkhDMLCcrH4BG4HsUeYlIw9v7jRwyA8s85MJQgruYiiIAJEoTUj0l9ObnulJbTOxiT7F4Wio5wZkmt7VF0fQc0FORXuiEdKZTu4Y7jGeYk+V9W54rqL31lFQJIoIkpoTgnTCN8pGyrYYCvGgNxJjhGd1mIIxFPOTTDQBcLlAGyq/g+1BOvIAxf7a0HK8uDfTFnzZJ+0OiChcsMW13WKpUnkz++/ZCcZjpUEYTDZmSbMD6Lv0WcfzjsR8RhJmETSp5KJNBjCJciWOriGI2+e0fMy8szfC59UdjUrnLwYCCM62lFasCyHWAYXgmo0ws1Fi8lToSwDs67bubOSEZ2H/RgidI7X9QqSmivBjG1PkX+QyoiOLdGarmiVZCnTQfDt9y0dWhzCqq6NtJVxfyhJSDQuVM539U5pDPXy4eHLotbOdtV+6LYF1GRWdq4oizYEOtQBXtLaifbQeTdauQLfNeLm/vGxhK+fSzoP+llUD7ff3tZzBffDEYLTSnL2RXLOm3d6RZHhmCJ5i86BV96edH9X/FOvIl6wLc9sjabEXF68/gXWhYQx"},{default:k(()=>e[0]||(e[0]=[i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">Basic document flow</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  I am a basic block level element. My adjacent block level elements sit on new")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  lines below me.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  By default we span 100% of the width of our parent element, and we are as tall")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  as our child content. Our total width and height is our content + padding +")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  border width/height.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  We are separated by our margins. Because of margin collapsing, we are")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  separated by the width of one of our margins, not both.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  inline elements <"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">like this one</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"> and <"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">this one</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"> sit on")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  the same line as one another, and adjacent text nodes, if there is space on")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  the same line. Overflowing inline elements will")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">wrap onto a new line if possible (like this one containing text)</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  or just go on to a new line if not, much like this image will do:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"img"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," src"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"https://mdn.mozillademos.org/files/13360/long.jpg"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-css line-numbers-mode","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"p"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  background: "),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"rgba"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"255"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"84"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"104"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"0.3"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  border: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"2"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}}," solid"),i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}}," rgb"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"255"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"84"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"104"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  padding: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"10"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  margin: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"10"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  background: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"white"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  border: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"1"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}}," solid"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," black"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const g=a(p,[["render",o],["__file","flow.html.vue"]]),A=JSON.parse('{"path":"/code/website/css/layout/flow.html","title":"正常布局流","lang":"zh-CN","frontmatter":{"title":"正常布局流","icon":"flow","date":"2019-09-06T00:00:00.000Z","order":2,"category":"CSS","description":"元素特性 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。 内联元素的 width height 与内容一致。您无法设置内联元素的 width height。 如果您想控制内联元素的尺寸，您需要为元素设置 display: block; 或 display: inline-block。inline-block 混合了 inline...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/css/layout/flow.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"正常布局流"}],["meta",{"property":"og:description","content":"元素特性 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。 内联元素的 width height 与内容一致。您无法设置内联元素的 width height。 如果您想控制内联元素的尺寸，您需要为元素设置 display: block; 或 display: inline-block。inline-block 混合了 inline..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正常布局流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":3,"title":"元素特性","slug":"元素特性","link":"#元素特性","children":[]},{"level":3,"title":"摆放特性","slug":"摆放特性","link":"#摆放特性","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"code/website/css/layout/flow.md","localizedDate":"2019年9月6日","excerpt":"","autoDesc":true}');export{g as comp,A as data};
