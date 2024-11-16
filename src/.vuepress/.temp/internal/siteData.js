export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/assets/safari-pinned-tab.svg\",\"color\":\"#5c92d1\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-192.png\",\"type\":\"image/png\",\"sizes\":\"192x192\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/chrome-mask-512.png\",\"type\":\"image/png\",\"sizes\":\"512x512\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#5c92d1\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/assets/icon/apple-touch-icon.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"white\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/assets/icon/ms-icon-144.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#ffffff\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Mister.Duan\",\"description\":\"Where there is light, there is hope.\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"My name is Mister.Duan\",\"description\":\"Mister.Duan personal blog\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
