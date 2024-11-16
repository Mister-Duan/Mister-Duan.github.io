import comp from "/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/about/\",\"title\":\"Mister.Duan Intro\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-07T00:00:00.000Z\",\"layout\":\"SlidePage\",\"title\":\"Mister.Duan Intro\",\"icon\":\"people\",\"tag\":[\"Personal Intro\"]},\"headers\":[],\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"en/about/README.md\",\"localizedDate\":\"January 7, 2022\",\"excerpt\":\"\"}")
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
