
import { DocSearch, injectDocSearchConfig } from "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.56_@algolia+client-search@5.14.0_search-insights@2.17.2_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/Users/carson/Desktop/work/cms/node_modules/.pnpm/@docsearch+css@3.8.0/node_modules/@docsearch/css/dist/style.css'
import '/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.56_@algolia+client-search@5.14.0_search-insights@2.17.2_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-docsearch@2.0.0-rc.56_@algolia+client-search@5.14.0_search-insights@2.17.2_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
