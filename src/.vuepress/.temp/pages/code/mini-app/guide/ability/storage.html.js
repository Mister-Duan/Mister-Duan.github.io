import comp from "/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/code/mini-app/guide/ability/storage.html.vue"
const data = JSON.parse("{\"path\":\"/code/mini-app/guide/ability/storage.html\",\"title\":\"存储\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2020-10-09T00:00:00.000Z\",\"title\":\"存储\",\"icon\":\"storage\",\"category\":\"小程序\",\"description\":\"每个微信小程序都可以有自己的本地缓存，可以通过 wx.setStorage / wx.setStorageSync、wx.getStorage / wx.getStorageSync、wx.clearStorage / wx.clearStorageSync，wx.removeStorage / wx.removeStorageSync 对本地缓存进行...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-duan.github.io/code/mini-app/guide/ability/storage.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mister.Duan\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"存储\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"每个微信小程序都可以有自己的本地缓存，可以通过 wx.setStorage / wx.setStorageSync、wx.getStorage / wx.getStorageSync、wx.clearStorage / wx.clearStorageSync，wx.removeStorage / wx.removeStorageSync 对本地缓存进行...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-10-09T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"存储\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-10-09T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mister.Duan\\\",\\\"url\\\":\\\"https://mister-duan.github.io\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"API 文档\",\"slug\":\"api-文档\",\"link\":\"#api-文档\",\"children\":[]}],\"readingTime\":{\"minutes\":0.59,\"words\":178},\"filePathRelative\":\"code/mini-app/guide/ability/storage.md\",\"localizedDate\":\"2020年10月9日\",\"excerpt\":\"<p>每个微信小程序都可以有自己的本地缓存，可以通过 <code>wx.setStorage</code> / <code>wx.setStorageSync</code>、<code>wx.getStorage</code> / <code>wx.getStorageSync</code>、<code>wx.clearStorage</code> / <code>wx.clearStorageSync</code>，<code>wx.removeStorage</code> / <code>wx.removeStorageSync</code> 对本地缓存进行读写和清理。</p>\\n<p>同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
