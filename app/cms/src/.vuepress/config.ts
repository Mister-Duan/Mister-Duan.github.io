import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
import windicss from "vite-plugin-windicss";
import theme from "./theme.js";

const windicssPlugin = {
  name: "windicss-plugin",
  extendsBundlerOptions: (bundlerOptions, app) => {
    if (!bundlerOptions.viteOptions.plugins) {
      bundlerOptions.viteOptions.plugins = [];
    }
    bundlerOptions.viteOptions.plugins.push(
      windicss({
        // config: join(resolve(), "windi.config.js"),
        // prefix: "c-",
        scan: {
          dirs: ["."], // all files in the cwd
          // dirs: [join(resolve(), "./src")], // all files in the cwd
          fileExtensions: ["vue", "html", "jsx", "tsx", "js", "ts", "md"], // also enabled scanning for js/ts
        },
      })
    );
  },
};

export default <UserConfig>defineUserConfig({
  dest: "../../dist",
  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mister.Duan",
      description: "Where there is light, there is hope.",
    },

    "/en/": {
      lang: "en-US",
      title: "My name is Mister.Duan",
      description: "Mister.Duan personal blog",
    },
  },

  theme,
  plugins: [
    appendDatePlugin(),
    cachePlugin({ type: "filesystem" }),
    windicssPlugin,
  ],
  shouldPrefetch: false,
});
