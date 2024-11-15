<template><div><p>每个微信小程序都可以有自己的本地缓存，可以通过 <code v-pre>wx.setStorage</code> / <code v-pre>wx.setStorageSync</code>、<code v-pre>wx.getStorage</code> / <code v-pre>wx.getStorageSync</code>、<code v-pre>wx.clearStorage</code> / <code v-pre>wx.clearStorageSync</code>，<code v-pre>wx.removeStorage</code> / <code v-pre>wx.removeStorageSync</code> 对本地缓存进行读写和清理。</p>
<p>同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。</p>
<!-- more -->
<h2 id="api-文档" tabindex="-1"><a class="header-anchor" href="#api-文档"><span>API 文档</span></a></h2>
<ul>
<li><RouteLink to="/code/mini-app/guide/service/api/storage.html">点击前往</RouteLink></li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 storage，以防储存空间不足或用户换设备的情况。</p>
</div>
</div></template>


