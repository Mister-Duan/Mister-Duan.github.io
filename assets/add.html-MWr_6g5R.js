import{_ as e,c as t,d as a,f as i,g as l,b as n,o as h}from"./app-bnCjOXR3.js";const p={};function o(r,s){return h(),t("div",null,[s[0]||(s[0]=a("p",null,[i("文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 "),a("code",null,"cd"),i("、"),a("code",null,"mkdir"),i("、"),a("code",null,"cp"),i(" 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。")],-1)),s[1]||(s[1]=a("p",null,"考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。",-1)),l(" more "),s[2]||(s[2]=n(`<p>举个例子，在 <code>/etc</code> 目录下，执行如下命令:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cd /etc</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost etc]# cd fs &lt;-- 按一次 Tab 键</span></span></code></pre></div><p>当按下 Tab 键时，您会发现 Shell 自动将 &quot;fs&quot; 补全成了 &quot;fatab&quot;，这是因为当前 <code>/etc</code> 目录中只有 fstab 是以 &quot;fs&quot; 开头，因此 Shell 可以确定这里想要输入的文件名称为 fstab。</p><p>那么，如果当前目录中含有多个以指定字符(或字符串)开头的目录或文件，Shell 还可以成功辨认吗? 答案是否定的，但它会以列表的形式给出所有以指定字符或字符串开头的文件或目录，供用户选择。</p><p>例如，还是在 <code>/etc</code> 目录下，执行如下命令:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost etc]# cd b &lt;-- 连续按两次 Tab 键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bash_completion.d/      blkid/          bonobo-activation/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bashrc                  bluetooth</span></span></code></pre></div><p>可以看到，当按一次 Tab 键时，Shell 没有任何反映，原因就是当前目录下以 &quot;b&quot; 为开头的文件或目录有多个(2 个以上)，仅凭一个字符 &quot;b&quot; 无法精准判断出具体指的是哪个文件。而当再一次按下 Tab 键时，Shell 会列表的形式显示给用户当前目录下所有以 &quot;b&quot; 开头的文件或目录。</p><p>事实上，Shell 提供的命令行补全功能不仅适用于补全文件名，也同样适用于所有 Linux 命令。举个例子，当输入 <code>ca</code> 并连续按下 2 次 Tab 键时，Shell 会罗列出所有以 &quot;ca&quot; 开头的 Linux 命令，如下所示:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost etc]# ca &lt;--连续按两次 Tab 键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cacertdir_rehash    cache_restore       capsh       catchsegv</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cache_check         cal                 captoinfo</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cache_dump          caller              case</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cache_repair        canberra-gtk-play   cat</span></span></code></pre></div><p>另外，Shell 还有一套被称作通配符的转用符号，这些通配符可以搜索并匹配文件名的一部分，从而大大简化了文件名的输入。</p><ul><li><code>*</code>: 匹配任意数量的字符。</li><li><code>?</code>: 匹配任意一个字符。</li><li><code>[]</code>: 匹配括号内的任意一个字符，甚至 <code>[]</code> 中还可以包含用 <code>-</code>(短横线)连接的字符或数字，表示一定范围内的字符或数字。</li></ul><p>为了学习这些通配符的用法，首先需要建立一个空目录(如 test)，并在该目录中创建一些文件(供测试用)，执行命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost etc]# makdir test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost etc]# cd test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# touch apple banana grape grapefruit watermelon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple banana grape grapefruit watermelon</span></span></code></pre></div><p>在此基础上，继续执行如下命令:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls a* &lt;--匹配所有以 a 字符开头的文件名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls g*t &lt;--匹配所有以 g 字符开头，以 t 字符结尾的文件名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">grapefruit</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls *e* &lt;--匹配所有包含 e 字符的文件名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple grape grapefruit watermelon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls *n* &lt;--匹配所有包含 n 字符的文件名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">banana watermelon</span></span></code></pre></div><p>结合以上实例，因为 <code>*</code> 可以匹配任何数量的字符，因此可以一一实现实例中标注的功能。</p><p>接下来，列举一下使用 ? 匹配文件名的示例:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls ????e</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple grape</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls g???e*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">grape grapefruit</span></span></code></pre></div><p>因为 1 个 ? 只能匹配 1 个任意字符，因此该示例中第一个例子表示的是匹配任意包含 5 个字符但以 e 结尾的文件(apple 和 grape)，第二例子表示匹配任何以 g 开头且第 5 个字符为 e 的文件(grape 和 grapefruit)。</p><p>最后，列举一些使用括号 <code>[]</code> 匹配文件名的示例:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls [abw]*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple banana watermelon</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls [agw]*[ne]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple grape watermelon</span></span></code></pre></div><p>此示例中，第一个例子表示匹配任何以 a、b 或 w 开头的文件；第二个例子中表示匹配任何以 a、g、w 开头，以 n 或 e 结尾的文件名。</p><p>不仅如此，<code>[]</code> 中还可以通过 -(短横线)表示一定范围内的任意字符(或数字)，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost test]# ls [a-g]*</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">apple banana grape grapefruit</span></span></code></pre></div><p>其中，<code>[a-g]*</code> 表示匹配以字母 a 到 g 之间任何一个字母开头的文件名。</p>`,25))])}const c=e(p,[["render",o],["__file","add.html.vue"]]),k=JSON.parse('{"path":"/linux/command/add.html","title":"命令补全","lang":"zh-CN","frontmatter":{"title":"命令补全","icon":"square-check","date":"2019-11-20T00:00:00.000Z","category":"Linux","description":"文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 cd、mkdir、cp 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。 考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按...","head":[["meta",{"property":"og:url","content":"https://mister-duan.github.io/linux/command/add.html"}],["meta",{"property":"og:site_name","content":"Mister.Duan"}],["meta",{"property":"og:title","content":"命令补全"}],["meta",{"property":"og:description","content":"文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 cd、mkdir、cp 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。 考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T01:30:23.000Z"}],["meta",{"property":"article:published_time","content":"2019-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T01:30:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令补全\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T01:30:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mister.Duan\\",\\"url\\":\\"https://mister-duan.github.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-duan.github.io/atom.xml","title":"Mister.Duan Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-duan.github.io/feed.json","title":"Mister.Duan JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-duan.github.io/rss.xml","title":"Mister.Duan RSS Feed"}]]},"headers":[],"git":{"createdTime":1731661457000,"updatedTime":1731893423000,"contributors":[{"name":"dss","email":"duanshuaishuai@pharmcube.com","commits":3}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"linux/command/add.md","localizedDate":"2019年11月20日","excerpt":"<p>文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 <code>cd</code>、<code>mkdir</code>、<code>cp</code> 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。</p>\\n<p>考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。</p>\\n","autoDesc":true}');export{c as comp,k as data};
