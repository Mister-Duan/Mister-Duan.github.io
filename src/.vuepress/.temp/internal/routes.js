export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"d":1641513600000,"l":"2022年1月7日","g":["个人介绍"],"r":{"minutes":0.43,"words":130},"t":"Mister.Duan 介绍","i":"people","y":"s"} }],
  ["/about/donate.html", { loader: () => import(/* webpackChunkName: "about_donate.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/about/donate.html.js"), meta: {"t":"捐赠","i":"support"} }],
  ["/about/site.html", { loader: () => import(/* webpackChunkName: "about_site.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/about/site.html.js"), meta: {"t":"关于网站","i":"info"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/en/about/", { loader: () => import(/* webpackChunkName: "en_about_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/about/index.html.js"), meta: {"d":1641513600000,"l":"January 7, 2022","g":["Personal Intro"],"r":{"minutes":0.09,"words":27},"t":"Mister.Duan Intro","i":"people","y":"s"} }],
  ["/en/about/site.html", { loader: () => import(/* webpackChunkName: "en_about_site.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/about/site.html.js"), meta: {"d":1588550400000,"l":"May 4, 2020","r":{"minutes":0.16,"words":49},"t":"About site","i":"info","y":"a"} }],
  ["/en/code/", { loader: () => import(/* webpackChunkName: "en_code_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/code/index.html.js"), meta: {"d":1641513600000,"l":"January 7, 2022","r":{"minutes":0.05,"words":16},"t":"Code Note","i":"code","y":"a"} }],
  ["/en/note/", { loader: () => import(/* webpackChunkName: "en_note_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/note/index.html.js"), meta: {"d":1641513600000,"l":"January 7, 2022","r":{"minutes":0.51,"words":154},"t":"Notes","i":"note","y":"a"} }],
  ["/en/software/", { loader: () => import(/* webpackChunkName: "en_software_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/software/index.html.js"), meta: {"d":1641513600000,"l":"January 7, 2022","r":{"minutes":0.07,"words":22},"t":"Software","i":"software","y":"a"} }],
  ["/en/software/nginx.html", { loader: () => import(/* webpackChunkName: "en_software_nginx.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/software/nginx.html.js"), meta: {"d":1588550400000,"l":"May 4, 2020","r":{"minutes":4.72,"words":1415},"t":"Nginx","i":"nginx","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/en/category/", { loader: () => import(/* webpackChunkName: "en_category_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/category/index.html.js"), meta: {"t":"Category","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/", { loader: () => import(/* webpackChunkName: "tag_个人介绍_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/tag/个人介绍/index.html.js"), meta: {"t":"标签: 个人介绍","I":false} }],
  ["/en/tag/", { loader: () => import(/* webpackChunkName: "en_tag_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/tag/index.html.js"), meta: {"t":"Tag","I":false} }],
  ["/en/tag/personal-intro/", { loader: () => import(/* webpackChunkName: "en_tag_personal-intro_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/tag/personal-intro/index.html.js"), meta: {"t":"Tag: Personal Intro","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/en/article/", { loader: () => import(/* webpackChunkName: "en_article_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/article/index.html.js"), meta: {"t":"Articles","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/en/star/", { loader: () => import(/* webpackChunkName: "en_star_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/star/index.html.js"), meta: {"t":"Star","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
  ["/en/timeline/", { loader: () => import(/* webpackChunkName: "en_timeline_index.html" */"/Users/carson/Desktop/work/cms/src/.vuepress/.temp/pages/en/timeline/index.html.js"), meta: {"t":"Timeline","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
