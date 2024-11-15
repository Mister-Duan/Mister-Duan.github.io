<template><div><p>GitHub Actions 的配置文件叫做 <code v-pre>workflow</code> 文件，存放在代码仓库的 <code v-pre>.github/workflows</code> 目录。</p>
<p><code v-pre>workflow</code> 文件采用 <code v-pre>YAML</code> 格式，文件名可以任意取，但是后缀名统一为 <code v-pre>.yml</code>，比如<code v-pre>foo.yml</code>。</p>
<p>一个库可以有多个 <code v-pre>workflow</code> 文件。GitHub 只要发现 <code v-pre>.github/workflows</code> 目录里面有 <code v-pre>.yml</code> 文件，就会自动运行该文件。</p>
<!-- more -->
<h2 id="常见字段" tabindex="-1"><a class="header-anchor" href="#常见字段"><span>常见字段</span></a></h2>
<p><code v-pre>workflow</code> 文件的配置字段非常多。下面是一些基本字段。</p>
<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3>
<p><code v-pre>name</code> 字段是 <code v-pre>workflow</code> 的名称。如果省略该字段，默认为当前 <code v-pre>workflow</code> 的文件名。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">GitHub Actions Demo</span></span></code></pre>
</div><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on"><span>on</span></a></h3>
<p><code v-pre>on</code> 字段指定触发 <code v-pre>workflow</code> 的时机，通常是某些事件。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定 push 事件触发 workflow。</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">push</span></span></code></pre>
</div><p><code v-pre>on</code> 字段也可以是事件的数组。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定 push 事件或 pull_request 事件都可以触发 workflow。</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">pull_request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
</div><p>完整的事件列表，请查看官方文档。
除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。</p>
<h4 id="on-push-pull-request-tags-branches" tabindex="-1"><a class="header-anchor" href="#on-push-pull-request-tags-branches"><span>on.&lt;push|pull_request&gt;.&lt;tags|branches&gt;</span></a></h4>
<p>指定触发事件时，可以限定分支或标签。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定只有 main 分支发生 push 事件时，才会触发 workflow。</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">main</span></span></code></pre>
</div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs"><span>jobs</span></a></h3>
<p><code v-pre>workflow</code> 文件的主体是 <code v-pre>jobs</code> 字段，表示要执行的一项或多项任务。</p>
<p><code v-pre>jobs</code> 字段里面，需要写出每一项任务的 <code v-pre>job_id</code>，具体名称自定义。</p>
<h4 id="jobs-job-id-name" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-name"><span>jobs.&lt;job_id&gt;.name</span></a></h4>
<p><code v-pre>job_id</code> 里面的 <code v-pre>name</code> 字段是任务的说明(可填可不填)。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  my_first_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">My first job</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  my_second_job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">My second job</span></span></code></pre>
</div><p>上面代码的 <code v-pre>jobs</code> 字段包含两项任务，<code v-pre>job_id</code> 分别是 <code v-pre>my_first_job</code> 和 <code v-pre>my_second_job</code>。</p>
<h4 id="jobs-job-id-needs" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-needs"><span>jobs.&lt;job_id&gt;.needs</span></a></h4>
<p><code v-pre>needs</code> 字段指定当前任务的依赖关系，即运行顺序。</p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 这个 workflow 的运行顺序依次为: job1、job2、job3。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  job1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  job2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    needs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">job1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  job3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    needs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">job1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">job2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
</div><h4 id="jobs-job-id-runs-on" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-runs-on"><span>jobs.&lt;job_id&gt;.runs-on</span></a></h4>
<p><code v-pre>runs-on</code> 字段指定运行所需要的虚拟机环境。
它是<strong>必填字段</strong>。目前可用的虚拟机如下。</p>
<p><code v-pre>ubuntu-latest</code>，<code v-pre>ubuntu-18.04</code> 或 <code v-pre>ubuntu-16.04</code></p>
<p><code v-pre>windows-latest</code>，<code v-pre>windows-2019</code> 或 <code v-pre>windows-2016</code></p>
<p><code v-pre>macOS-latest</code> 或 <code v-pre>macOS-10.14</code></p>
<div class="language-yml" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 代码指定虚拟机环境为 ubuntu-18.04。</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ubuntu-18.04</span></span></code></pre>
</div><h4 id="jobs-job-id-steps" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-steps"><span>jobs.&lt;job_id&gt;.steps</span></a></h4>
<p><code v-pre>steps</code> 字段指定每个 <code v-pre>Job</code> 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。</p>
<ul>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.name</code>: 步骤名称。</li>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.run</code>: 该步骤运行的命令或者 action。</li>
<li><code v-pre>jobs.&lt;job_id&gt;.steps.env</code>: 该步骤所需的环境变量。</li>
</ul>
<p>下面是一个完整的 <code v-pre>workflow</code> 文件的范例。</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Greeting from Mona</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">push</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  my-job</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">My Job</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># steps 字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Print a greeting</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        env</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          MY_VAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Hi there! My name is</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          FIRST_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Mona</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          MIDDLE_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">The</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">          LAST_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Octocat</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档"><span>官方文档</span></a></h2>
<p>关于完整的工作流程语法，详见 <a href="https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">GitHub 操作的工作流程语法</a></p>
</div></template>


