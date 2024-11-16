export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0]},"/en/":{"path":"/en/article/","indexes":[1,2,3,4,5,6]}},"star":{"/":{"path":"/star/","indexes":[0]},"/en/":{"path":"/en/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[]},"/en/":{"path":"/en/timeline/","indexes":[1,2,3,4,5,6]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

