<template><div><h1 id="git-large-file-storage" tabindex="-1"><a class="header-anchor" href="#git-large-file-storage"><span>Git Large File Storage</span></a></h1>
<p>Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.</p>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2>
<ol>
<li>
<p>Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lfs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span></span></code></pre>
</div><p>You’ll need to run this in your repository directory, once per repository.</p>
</li>
<li>
<p>Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.</p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> lfs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> track</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "*.psd"</span></span></code></pre>
</div><p>Make sure to track <code v-pre>.gitattributes</code></p>
<div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .gitattributes</span></span></code></pre>
</div></li>
</ol>
</div></template>


