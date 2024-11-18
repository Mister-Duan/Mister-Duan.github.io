export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"Linux":{"path":"/category/linux/","indexes":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]},"基础":{"path":"/category/%E5%9F%BA%E7%A1%80/","indexes":[48]}}},"/en/":{"path":"/en/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"个人介绍":{"path":"/tag/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/","indexes":[49]},"介绍":{"path":"/tag/%E4%BB%8B%E7%BB%8D/","indexes":[46,47]},"Bash":{"path":"/tag/bash/","indexes":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}}},"/en/":{"path":"/en/tag/","map":{"Personal Intro":{"path":"/en/tag/personal-intro/","indexes":[50]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

