import{_ as e,c as i,b as s,o as a}from"./app-BGTcwSfg.js";const o="/assets/install-DJNrE6OD.png",n="/assets/automator-service-DIOY6boZ.png",r="/assets/automator-CmNoR28Z.jpg",l="/assets/open-with-vscode-CYdVd93O.png",p={};function d(h,t){return a(),i("div",null,t[0]||(t[0]=[s('<h1 id="vs-code-安装" tabindex="-1"><a class="header-anchor" href="#vs-code-安装"><span>VS Code 安装</span></a></h1><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2><p>在 <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网下载地址</a> 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><ul><li><p>双击安装包打开</p></li><li><p>同意用户协议。</p></li><li><p>安装选项中，请务必 <strong>全选</strong> 以下选项:</p><figure><img src="'+o+'" alt="安装 VS Code" tabindex="0" loading="lazy"><figcaption>安装 VS Code</figcaption></figure><p>勾选 <strong>添加到目录上下文菜单</strong>、<strong>添加到文件上下文菜单</strong>、<strong>将 code 注册为受支持的文件编辑器</strong>、<strong>添加到 path</strong>。</p></li><li><p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可</p></li><li><p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当您安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐您安装对应语言的扩展，点击按钮即可自动安装。</p></div></li></ul><h2 id="更新频率" tabindex="-1"><a class="header-anchor" href="#更新频率"><span>更新频率</span></a></h2><p>VS Code 每月发布一个具有新功能和重要错误修复的新版本。大多数平台都支持自动更新，并且会在新版本发布时提示您安装新版本。您还可以通过运行左下角 <strong>管理 → 检查更新</strong> 来手动检查更新。</p><h2 id="用-vs-code-打开文件和文件夹" tabindex="-1"><a class="header-anchor" href="#用-vs-code-打开文件和文件夹"><span>用 VS Code 打开文件和文件夹</span></a></h2><p>VS Code 支持打开文件和文件夹。</p><ul><li><p>打开文件时请在文件图标上单击右键—选择 <strong>使用 VS Code 打开</strong>；</p></li><li><p>打开文件夹请双击打开文件夹，在空白处单击右键——选择 <strong>用 VS Code 打开</strong>。</p></li></ul><h3 id="mac-添加-通过-code-打开" tabindex="-1"><a class="header-anchor" href="#mac-添加-通过-code-打开"><span>Mac 添加 <strong>通过 Code 打开</strong></span></a></h3><p>在 Mac 系统上，Finder 选中一个目录，右键菜单并没有 <strong>通过 Code 打开</strong> 这个操作。不过我们可以通过 Automator 自己添加这个操作。</p><p>先运行 Automator，选择 <strong>服务</strong>:</p><figure><img src="'+n+'" alt="Automator Service" tabindex="0" loading="lazy"><figcaption>Automator Service</figcaption></figure><p>然后，执行以下操作:</p><figure><img src="'+r+`" alt="Automator" tabindex="0" loading="lazy"><figcaption>Automator</figcaption></figure><ol><li><p>在右侧面板选择 <strong>服务</strong> 收到选定的 <strong>文件夹</strong>，位于 “Finder.app”，该选项是为了从 Finder 中接收一个文件夹；</p></li><li><p>在左侧面板选择 <strong>实用工具</strong>，然后找到 <strong>运行 Shell 脚本</strong>，把它拽到右侧面板里；</p></li><li><p>在右侧 <strong>运行 Shell 脚本</strong> 的面板里，选择 Shell <strong>/bin/bash</strong>，传递输入 <strong>作为自变量</strong>，然后修改 Shell 脚本如下:</p></li></ol><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> f</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">$@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    open</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Visual Studio Code&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre></div><p>保存为 <strong>Open With VS Code</strong> 后，打开 Finder，选中一个文件夹，点击右键， <strong>服务</strong>，就可以看到 <strong>Open With VS Code</strong> 菜单:</p><figure><img src="`+l+'" alt="Open with VS Code" tabindex="0" loading="lazy"><figcaption>Open with VS Code</figcaption></figure>',20)]))}const g=e(p,[["render",d],["__file","install.html.vue"]]),m=JSON.parse('{"path":"/software/vscode/install.html","title":"VS Code 安装","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","icon":"install","category":"VS Code","tag":["安装","VS Code","软件"],"description":"VS Code 安装 下载 在 官网下载地址 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。 安装 双击安装包打开 同意用户协议。 安装选项中，请务必 全选 以下选项: 安装 VS Code安装 VS Code 勾选 添加到目录上下文菜单、添加到文件上下文菜单、将 code 注册为受支持的文件编辑器、添加到 path。...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/vscode/install.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"VS Code 安装"}],["meta",{"property":"og:description","content":"VS Code 安装 下载 在 官网下载地址 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。 安装 双击安装包打开 同意用户协议。 安装选项中，请务必 全选 以下选项: 安装 VS Code安装 VS Code 勾选 添加到目录上下文菜单、添加到文件上下文菜单、将 code 注册为受支持的文件编辑器、添加到 path。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T09:04:17.000Z"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T09:04:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VS Code 安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T09:04:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"更新频率","slug":"更新频率","link":"#更新频率","children":[]},{"level":2,"title":"用 VS Code 打开文件和文件夹","slug":"用-vs-code-打开文件和文件夹","link":"#用-vs-code-打开文件和文件夹","children":[{"level":3,"title":"Mac 添加 通过 Code 打开","slug":"mac-添加-通过-code-打开","link":"#mac-添加-通过-code-打开","children":[]}]}],"git":{"createdTime":1731661457000,"updatedTime":1731661457000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":1}]},"readingTime":{"minutes":2.09,"words":627},"filePathRelative":"software/vscode/install.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{g as comp,m as data};
