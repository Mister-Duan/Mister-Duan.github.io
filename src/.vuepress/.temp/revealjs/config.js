import { RevealJs, injectRevealJsConfig } from "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/index.js";
import { SlidePage } from "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/layouts/index.js";

import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/reveal.js@5.1.0/node_modules/reveal.js/dist/reveal.css";
import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/styles/base.css";
import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/styles/vars.css";
import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/league-gothic.css";
import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/styles/fonts/source-sans-pro.css";
import "/Users/carson/Desktop/work/cms/node_modules/.pnpm/@vuepress+plugin-revealjs@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18/node_modules/@vuepress/plugin-revealjs/lib/client/styles/themes/auto.css";

export default {
  enhance: ({ app }) => {
    injectRevealJsConfig(app)
    app.component("RevealJs", RevealJs)
  },
  layouts: { "SlidePage": SlidePage },
};
