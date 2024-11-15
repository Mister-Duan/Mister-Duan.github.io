import comp from "/Users/carson/Desktop/Mister-Hope.github.io-main/src/.vuepress/.temp/pages/note/book/index.html.vue"
const data = JSON.parse("{\"path\":\"/note/book/\",\"title\":\"Book\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Book\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.com/note/book/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mr.Hope\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Book\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Book\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
