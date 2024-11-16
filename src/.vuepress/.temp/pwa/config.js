import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa, setupViewPoint } from "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.56_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-pwa/lib/client/composables/index.js";
import { PwaReadyPopup as _PwaReadyPopup } from "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.56_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.56_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-pwa/lib/client/styles/vars.css";

const locales = {"/en/":{"install":"Install","iOSInstall":"Tap the share button and then 'Add to Home Screen'","cancel":"Cancel","close":"Close","prevImage":"Previous Image","nextImage":"Next Image","desc":"Description","feature":"Key Features","explain":"This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ","hint":"New content found.","update":"New content is available."},"/":{"install":"安装","iOSInstall":"点击分享按钮然后点击“添加到主屏幕”","cancel":"取消","close":"关闭","prevImage":"上一张图片","nextImage":"下一张图片","desc":"详情","feature":"主要特色","explain":"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。","hint":"发现新内容可用","update":"新内容已就绪"}};

export default defineClientConfig({
  setup: () => {
    setupPwa("service-worker.js", false);
    setupViewPoint();
  },
  rootComponents: [
    () => h(_PwaReadyPopup, { locales }),
  ],
});
