import CodeDemo from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import FlowChart from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import Mermaid from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/carson/Desktop/Mister-Hope.github.io-main/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_flowchart.ts@3.0.1_markdown-it@14.1.0_mermaid@11.4.0_s_twoggey3yfnhlcern2l346sheq/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
};
