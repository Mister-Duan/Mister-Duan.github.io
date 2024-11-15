<template><div><h2 id="squash-merge" tabindex="-1"><a class="header-anchor" href="#squash-merge"><span>Squash merge</span></a></h2>
<p>通过使用 <code v-pre>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p>
<p>也就是对于以下的例子</p>
<Mermaid id="mermaid-9" code="eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUAoolFSXmJWcopKUmlpQWpaIqggqC1SVnpCZn55eWKIB0YpplhKIGn2moKqGm5aYWpafCtQEAlZs6wQ=="></Mermaid><p><code v-pre>git merge feature</code> 得到的结果为:</p>
<Mermaid id="mermaid-13" code="eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUQhVLS00sKS1KRRcGKTXCrhRdODe1KD0VKqDEBQBpQycY"></Mermaid><p>而如果 <code v-pre>feature</code> 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 <code v-pre>git merge --squash feature</code> 得到:</p>
<Mermaid id="mermaid-17" code="eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUwhQzQhMrLixNLM5QyE0tSk9VKEotLs0pUeICAGwNGyw="></Mermaid><h2 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick"><span>Cherry pick</span></a></h2>
<p>有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。</p>
<Mermaid id="mermaid-24" code="eJxLzyxxL0osyOBSUEjOz83NLAEykooS85IzFHKLMvILUuESCpkpVkppqYklpUWpjgpGBqpKOKRMMKSSStMV0jIrcGkww22WBVQqIzU5O7+0RCE3MTMPwi8qqtQtyEzOxrAArhSf8w0NsBucm1qUngrTCgDhNlnE"></Mermaid><p>在这种情况下，我们可以回到 main 分支，执行 <code v-pre>git cherry-pick &lt;commit id&gt;</code> 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。</p>
<Mermaid id="mermaid-28" code="eJx9j0sKhDAMQPdziiDMckBlGAZ3rjxHrbENEltCC3p7BT8brbuEx8sjhkIjytsXgHbMFNahFTVqCyzWeTwBUFdlPaoQBWso83eWQN8LaqOBnqYiZfxSRpky/rthUQ8uBmBF47aLzB9PeriG79mWOO88/Vzk91VGMXioC90zaig="></Mermaid><ul>
<li><code v-pre>git cherry-pick &lt;commit id 1&gt; &lt;commit id 2&gt;</code> 表示挑拣 commit id 1 和 commit id 2</li>
<li><code v-pre>git cherry-pick &lt;commit id 1&gt;...&lt;commit id 2&gt;</code> 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交</li>
<li><code v-pre>git cherry-pick &lt;branch&gt;</code> 表示挑拣该分支最新的提交</li>
</ul>
</div></template>


