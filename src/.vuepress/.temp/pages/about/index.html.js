import comp from "/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"Mister.Duan 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-07T00:00:00.000Z\",\"layout\":\"SlidePage\",\"title\":\"Mister.Duan 介绍\",\"icon\":\"people\",\"tag\":[\"个人介绍\"],\"timeline\":false,\"star\":true},\"headers\":[],\"readingTime\":{\"minutes\":0.43,\"words\":130},\"filePathRelative\":\"about/README.md\",\"localizedDate\":\"2022年1月7日\",\"excerpt\":\"\"}")
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
