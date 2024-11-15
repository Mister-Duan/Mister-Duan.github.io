import { hasGlobalComponent } from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/@vueuse+core@11.2.0_vue@3.5.12/node_modules/@vueuse/core/index.mjs";
import Badge from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_vuepress@2.0.0-rc.18/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css");
`);
  },
  rootComponents: [

  ],
};
