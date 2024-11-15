<template><div><p>在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。</p>
<!-- more -->
<h2 id="响应-send-按钮" tabindex="-1"><a class="header-anchor" href="#响应-send-按钮"><span>响应“Send”按钮</span></a></h2>
<p>您可按照以下步骤，向 MainActivity 类添加一个在用户点按 Send 按钮时调用的方法：</p>
<ol>
<li>
<p>在 app &gt; java &gt; com.example.myfirstapp &gt; MainActivity 文件中，添加以下 sendMessage() 方法桩：</p>
<CodeTabs id="15" :data='[{"id":"Kotlin"},{"id":"Java"}]' tab-id="android">
<template #title0="{ value, isActive }">Kotlin</template>
<template #title1="{ value, isActive }">Java</template>
<template #tab0="{ value, isActive }">
<div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MainActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    override</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> fun</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">?) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(R.layout.activity_main)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    /** Called when the user taps the Send button */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    fun</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(view: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">View</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // Do something in response to button</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MainActivity</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> savedInstanceState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">activity_main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    /** Called when the user taps the Send button */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">View</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        // Do something in response to button</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>您可能会看到一条错误，因为 Android Studio 无法解析用作方法参数的 View 类。若要清除错误，请点击 View 声明，将光标置于其上，然后按 <code v-pre>Alt + Enter</code>（在 Mac 上则按 <code v-pre>Option + Enter</code>）进行快速修复。如果出现一个菜单，请选择 Import class。</p>
</li>
<li>
<p>返回到 activity_main.xml 文件，并从该按钮调用此方法:</p>
<ol>
<li>选择布局编辑器中的相应按钮。</li>
<li>在 Attributes 窗口中，找到 onClick 属性，并从其下拉列表中选择 <code v-pre>sendMessage [MainActivity]</code>。</li>
</ol>
<p>现在，当用户点按该按钮时，系统将调用 <code v-pre>sendMessage()</code> 方法。</p>
<p>请注意此方法中提供的详细信息。系统需要这些信息来识别此方法是否与 android:onClick 属性兼容。具体来说，此方法具有以下特性：</p>
<ol>
<li>公开。</li>
<li>返回值为空，或在 Kotlin 中为隐式 Unit。</li>
<li>View 是唯一的参数。这是您在第 1 步结束时点击的 View 对象。</li>
</ol>
</li>
<li>
<p>接下来，填写此方法，以读取文本字段的内容，并将该文本传递给另一个 activity。</p>
</li>
</ol>
<h2 id="构建一个-intent" tabindex="-1"><a class="header-anchor" href="#构建一个-intent"><span>构建一个 intent</span></a></h2>
<p><code v-pre>Intent</code> 是在相互独立的组件（如两个 activity）之间提供运行时绑定功能的对象。Intent 表示应用执行某项操作的意图。您可以使用 intent 执行多种任务，但在本课中，您的 intent 将用于启动另一个 activity。</p>
<p>在 MainActivity 中，添加 EXTRA_MESSAGE 常量和 sendMessage() 代码，如下所示：</p>
<CodeTabs id="82" :data='[{"id":"Kotlin"},{"id":"Java"}]' tab-id="android">
<template #title0="{ value, isActive }">Kotlin</template>
<template #title1="{ value, isActive }">Java</template>
<template #tab0="{ value, isActive }">
<div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> EXTRA_MESSAGE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "com.example.myfirstapp.MESSAGE"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MainActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    override</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> fun</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">?) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(R.layout.activity_main)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    /** Called when the user taps the Send button */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    fun</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(view: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">View</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> editText </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> findViewById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">EditText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>(R.id.editTextTextPersonName)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> message </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> editText.text.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> intent </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, DisplayMessageActivity::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.java).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">            putExtra</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(EXTRA_MESSAGE, message)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        startActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(intent)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MainActivity</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> final</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> EXTRA_MESSAGE </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "com.example.myfirstapp.MESSAGE"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> savedInstanceState</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">activity_main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    /** Called when the user taps the Send button */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">View</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> view</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        Intent</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> intent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">DisplayMessageActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        EditText</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> editText</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (EditText) </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">findViewById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">editTextTextPersonName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> message</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> editText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">putExtra</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(EXTRA_MESSAGE, message);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        startActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(intent);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>预计 Android Studio 会再次遇到 Cannot resolve symbol 错误。如需清除这些错误，请按 Alt+Enter（在 Mac 上则按 Option+Return）。您最后应导入以下内容：</p>
<CodeTabs id="93" :data='[{"id":"Kotlin"},{"id":"Java"}]' tab-id="android">
<template #title0="{ value, isActive }">Kotlin</template>
<template #title1="{ value, isActive }">Java</template>
<template #tab0="{ value, isActive }">
<div class="language-kotlin" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> androidx.appcompat.app.AppCompatActivity</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.content.Intent</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.os.Bundle</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.view.View</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.widget.EditText</span></span></code></pre>
</div></template>
<template #tab1="{ value, isActive }">
<div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> androidx.appcompat.app.AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.content.Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.os.Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.view.View</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.widget.EditText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
</div></template>
</CodeTabs>
<p>DisplayMessageActivity 仍有错误，但没有关系。您将在下一部分中修复该错误。</p>
<p>sendMessage() 将发生以下情况：</p>
<ul>
<li>
<p>Intent 构造函数会获取两个参数：Context 和 Class。</p>
<p>首先使用 Context 参数，因为 Activity 类是 Context 的子类。</p>
<p>在本例中，系统将 Intent, 传递到的应用组件的 Class 参数是要启动的 activity。</p>
</li>
<li>
<p>putExtra() 方法将 EditText 的值添加到 intent。Intent 能够以称为“extra”的键值对形式携带数据类型。</p>
<p>您的键是一个公共常量 EXTRA_MESSAGE，因为下一个 activity 将使用该键检索文本值。为 intent extra 定义键时，最好使用应用的软件包名称作为前缀。这样可以确保这些键是独一无二的，这在您的应用需要与其他应用进行交互时会很重要。</p>
</li>
<li>
<p>startActivity() 方法将启动一个由 Intent 指定的 DisplayMessageActivity 实例。接下来，您需要创建该类。</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>导航架构组件允许您使用导航编辑器将一个 activity 与另一个 activity 相关联。建立这种关联后，您可以利用 API 在用户触发关联的操作（例如，用户点击某个按钮时）时启动第二个 activity。如需了解详情，请参阅导航。</p>
</div>
<h2 id="创建第二个-activity" tabindex="-1"><a class="header-anchor" href="#创建第二个-activity"><span>创建第二个 activity</span></a></h2>
<p>若要创建第二个 activity，请按以下步骤操作：</p>
<ol>
<li>在 Project 窗口中，右键点击 app 文件夹，然后依次选择 New &gt; Activity &gt; Empty Activity。</li>
<li>在 Configure Activity 窗口中，输入“DisplayMessageActivity”作为 Activity Name。将所有其他属性保留为默认设置，然后点击 Finish。</li>
</ol>
<p>Android Studio 会自动执行下列三项操作：</p>
<ol>
<li>创建 DisplayMessageActivity 文件。</li>
<li>创建 DisplayMessageActivity 文件对应的布局文件 activity_display_message.xml。</li>
<li>在 AndroidManifest.xml 中添加所需的 <code v-pre>&lt;activity&gt;</code> 元素。</li>
</ol>
<p>如果您运行应用并点按第一个 activity 上的按钮，将启动第二个 activity，但它为空。这是因为第二个 activity 使用模板提供的空布局。</p>
<h2 id="添加文本视图" tabindex="-1"><a class="header-anchor" href="#添加文本视图"><span>添加文本视图</span></a></h2>
<p>新 activity 包含一个空白布局文件。请按以下步骤操作，在显示消息的位置添加一个文本视图：</p>
<ol>
<li>打开 app &gt; res &gt; layout &gt; activity_display_message.xml 文件。</li>
<li>点击工具栏中的 Enable Autoconnection to Parent 。系统将启用 Autoconnect。参见图 1。</li>
<li>在 Palette 面板中，点击 Text，将 TextView 拖动到布局中，然后将其放置在靠近布局顶部中心的位置，使其贴靠到出现的垂直线上。Autoconnect 将添加左侧和右侧约束条件，以便将该视图放置在水平中心位置。</li>
<li>再创建一个从文本视图顶部到布局顶部的约束条件，使该视图如图 1 中所示。</li>
</ol>
<p>或者，您可以对文本样式进行一些调整，方法是在 Attributes 窗口的 Common Attributes 面板中展开 textAppearance，然后更改 textSize 和 textColor 等属性。</p>
<h2 id="显示消息" tabindex="-1"><a class="header-anchor" href="#显示消息"><span>显示消息</span></a></h2>
<p>在此步骤中，您将修改第二个 activity 以显示第一个 activity 传递的消息。</p>
<ol>
<li>
<p>在 DisplayMessageActivity 中，将以下代码添加到 <code v-pre>onCreate()</code> 方法中：</p>
<CodeTabs id="221" :data='[{"id":"Kotlin"},{"id":"Java"}]' tab-id="android">
<template #title0="{ value, isActive }">Kotlin</template>
<template #title1="{ value, isActive }">Java</template>
<template #tab0="{ value, isActive }">
<div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">override</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> fun</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">?) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(R.layout.activity_display_message)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Get the Intent that started this activity and extract the string</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> message </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> intent.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getStringExtra</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(EXTRA_MESSAGE)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Capture the layout's TextView and set the string as its text</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> textView </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> findViewById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">TextView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>(R.id.textView).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> message</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">protected</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> savedInstanceState) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">onCreate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    setContentView</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">activity_display_message</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Get the Intent that started this activity and extract the string</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Intent</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> intent </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getIntent</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> message </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">getStringExtra</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">MainActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">EXTRA_MESSAGE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // Capture the layout's TextView and set the string as its text</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    TextView</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> textView </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> findViewById</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">textView</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">    textView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(message);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</li>
<li>
<p>按 <code v-pre>Alt + Enter</code>（在 Mac 上则按 <code v-pre>Option + Return</code>）导入其他所需的类：</p>
<CodeTabs id="234" :data='[{"id":"Kotlin"},{"id":"Java"}]' tab-id="android">
<template #title0="{ value, isActive }">Kotlin</template>
<template #title1="{ value, isActive }">Java</template>
<template #tab0="{ value, isActive }">
<div class="language-kotlin" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> androidx.appcompat.app.AppCompatActivity</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.content.Intent</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.os.Bundle</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> android.widget.TextView</span></span></code></pre>
</div></template>
<template #tab1="{ value, isActive }">
<div class="language-java" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> androidx.appcompat.app.AppCompatActivity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.content.Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.os.Bundle</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> android.widget.TextView</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
</div></template>
</CodeTabs>
</li>
</ol>
<h2 id="添加向上导航功能" tabindex="-1"><a class="header-anchor" href="#添加向上导航功能"><span>添加向上导航功能</span></a></h2>
<p>在您的应用中，不是主入口点的每个屏幕（所有不是主屏幕的屏幕）都必须提供导航功能，以便将用户引导至应用层次结构中的逻辑父级屏幕。为此，请在应用栏中添加向上按钮。</p>
<p>若要添加向上按钮，您需要在 <code v-pre>AndroidManifest.xml</code> 文件中声明哪个 activity 是逻辑父级。打开 app &gt; manifests &gt; AndroidManifest.xml 文件，找到 DisplayMessageActivity 的 <code v-pre>&lt;activity&gt;</code> 标记，然后将其替换为以下代码：</p>
<div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activity</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> android:name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">".DisplayMessageActivity"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">          android:parentActivityName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">".MainActivity"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!-- The meta-data tag is required if you support API level 15 and lower --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta-data</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        android:name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"android.support.PARENT_ACTIVITY"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        android:value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">".MainActivity"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
</div><p>Android 系统现在会自动向应用栏添加向上按钮。</p>
<h2 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用"><span>运行应用</span></a></h2>
<p>点击工具栏中的 Apply Changes 以运行应用。当应用打开后，在文本字段中输入一条消息，点按 Send 即会看到该消息显示在第二个 activity 中。</p>
</div></template>


