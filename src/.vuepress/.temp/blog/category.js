export const categoriesMap = {"category":{"/":{"path":"/category/","map":{}},"/en/":{"path":"/en/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"个人介绍":{"path":"/tag/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/","indexes":[0]}}},"/en/":{"path":"/en/tag/","map":{"Personal Intro":{"path":"/en/tag/personal-intro/","indexes":[1]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

