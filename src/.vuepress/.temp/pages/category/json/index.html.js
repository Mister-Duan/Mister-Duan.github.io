import comp from "/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/category/json/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/json/\",\"title\":\"JSON 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JSON 分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"JSON\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-duan.github.io/category/json/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mister.Duan\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JSON 分类\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"JSON 分类\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
