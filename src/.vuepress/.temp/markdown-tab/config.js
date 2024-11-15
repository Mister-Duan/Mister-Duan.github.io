import { CodeTabs } from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
