<template><div><h2 id="bmi" tabindex="-1"><a class="header-anchor" href="#bmi"><span>BMI</span></a></h2>
<p>小明的成绩从去年的 72 分提升到了今年的 85 分，请计算小明成绩提升的百分点，并用字符串格式化显示出 'xx.x%'，只保留小数点后 1 位:</p>
<p>答案<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">score1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 72</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">score2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 85</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (score2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> score1) </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> score1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 100</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'小明成绩提升了</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">%.1f%%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> result)</span></span></code></pre>
</div> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></li>
</ol>
</section>
</div></template>


