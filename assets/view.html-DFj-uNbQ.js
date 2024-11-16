import{_ as l,c as i,d as t,e as a,b as p,o}from"./app-BGTcwSfg.js";const r={};function n(s,e){return o(),i("div",null,[e[0]||(e[0]=t("p",null,"在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。",-1)),e[1]||(e[1]=t("p",null,"本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。",-1)),a(" more "),e[2]||(e[2]=p('<h2 id="更改视图" tabindex="-1"><a class="header-anchor" href="#更改视图"><span>更改视图</span></a></h2><p>“图形” 窗口显示了几何的图形视图、网格以及结果。</p><ul><li>单击鼠标左键并四处拖动即可进行旋转。</li><li>单击鼠标右键并拖动，就可以将模型几何移到窗口的任意位置。</li><li>按住鼠标滚轮按钮向上拖动可以放大，向下拖动即可缩小。</li><li>您也可以使用 “图形” 窗口工具栏来更改几何视图。</li></ul><p>工具栏会根据组件的空间维度及模型树中当前选定的节点进行动态变化。</p><ul><li>使用 “切换到默认视图” 可以返回默认的等轴测视图。</li><li>除了使用鼠标滚轮进行缩放，也可以使用 “放大” 和 “缩小” 按钮完成这一操作。</li><li>使用 “缩放框” 来放大模型几何的特定区域。</li><li>使用 “缩放到窗口大小” 按钮来缩小几何，使其填满整个 “图形” 窗口。</li></ul><p>COMSOL 还提供多个平面视图按钮方便您从任意平面方向查看几何。我们可以在 xy 平面中查看几何，再次单击同一按钮就能查看几何的另一端。然后在 yz 平面和 zx 平面执行相同的操作。还可以更改图形渲染，改进几何的可视化效果。在选择几何时这项功能特别有用。可以打开或关闭 “布景灯”、使用 “透明”、或者对模型进行线框渲染。</p><h2 id="选择几何实体" tabindex="-1"><a class="header-anchor" href="#选择几何实体"><span>选择几何实体</span></a></h2><p>保持 “透明” 在选择几何实体时会更容易一些。要在 “图形” 窗口中选择几何实体。只需将鼠标悬停在要选择的几何元素的上方。您会看到，此时几何以红色突出显示。继续单击即可完成选中。</p><p>要在重叠的几何实体中进行选择，可以使用鼠标滚轮按钮来选择几何。当您试图选择难以选中的几何实体或内部边界时，这种方法非常好用。</p><ul><li>向上滚动滚轮会选中更靠里层的几何</li><li>向下滚动滚轮会选中更靠外层的几何</li></ul><p>通过这种方式，可以选择部分几何元素。</p><h2 id="隐藏或显示几何实体" tabindex="-1"><a class="header-anchor" href="#隐藏或显示几何实体"><span>隐藏或显示几何实体</span></a></h2><p>要在模型中隐藏或显示几何实体。需要选择 “单击和隐藏” 按钮，将鼠标悬停在要隐藏的几何元素的上方并单击选中将其隐藏。通过切换“域、边界、边、点”，您可以隐藏不同级别的几何。选择完要隐藏的几何后。请确保取消选择 “单击和隐藏” 按钮。</p><p>通过此功能，您可以查看原本难以看到的几何内部的其他部分，而无需实际更改或影响任何几何元素。</p><ul><li>使用 “查看未隐藏的对象” 按钮，可以查看所有未隐藏的实体。</li><li>使用 “仅查看隐藏的对象” 按钮，可以只查看隐藏的实体。</li><li>使用 “全部查看” 按钮，显示所有隐藏和未隐藏的几何。</li></ul><p>此外，当您隐藏部分几何元素时。COMSOL Multiphysics 会自动为这些实体创建显式选择的列表。您可以在 “定义” 节点下的 “视图” 节点中找到该列表。随后，可以重命名该显式选择。并修改隐藏实体的列表。如果希望重新开始，您始终可以通过 “重置隐藏” 按钮来重置所有隐藏的实体。您可以利用 “图形” 窗口和工具栏按钮。根据需要来完成定制模型视图，从而得到多种不同的分析透视图。</p><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h2><p>您除了可以</p><ul><li>在图形窗口中使用鼠标选择简单几何元素或单个实体</li><li>使用滚轮按钮选择内部几何实体</li></ul><p>您还可以</p><ul><li>使用图形窗口工具栏快速选择多个实体</li><li>使用选择列表窗口处理复杂的几何结构</li><li>使用设置窗口工具栏将几何实体列表从一个节点设置复制粘贴到另一个节点设置中</li><li>使用“预选”功能从功能区中添加物理场节点</li></ul>',21))])}const m=l(r,[["render",n],["__file","view.html.vue"]]),h=JSON.parse('{"path":"/software/comsol/geometry/view.html","title":"几何浏览","lang":"zh-CN","frontmatter":{"title":"几何浏览","icon":"view","date":"2020-05-29T00:00:00.000Z","category":"软件","tag":["仿真","COMSOL"],"description":"在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。 本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/comsol/geometry/view.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"几何浏览"}],["meta",{"property":"og:description","content":"在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。 本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:tag","content":"仿真"}],["meta",{"property":"article:tag","content":"COMSOL"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"几何浏览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"更改视图","slug":"更改视图","link":"#更改视图","children":[]},{"level":2,"title":"选择几何实体","slug":"选择几何实体","link":"#选择几何实体","children":[]},{"level":2,"title":"隐藏或显示几何实体","slug":"隐藏或显示几何实体","link":"#隐藏或显示几何实体","children":[]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":3.91,"words":1173},"filePathRelative":"software/comsol/geometry/view.md","localizedDate":"2020年5月29日","excerpt":"<p>在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。</p>\\n<p>本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。</p>\\n","autoDesc":true}');export{m as comp,h as data};
