import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";

// import "virtual:windi-base.css";
// import "virtual:windi-components.css";
import "virtual:windi-utilities.css";

export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    if (!__VUEPRESS_SSR__) {
      const TextFoldExample = await import(
        "../components/VueComs/TextFold.vue"
      );
      console.log(TextFoldExample);
      const TimeLine = await import("../components/VueComs/TimeLine/index.vue");
      const ThreeBasic = await import("../components/3d/threejs/Basic.vue");
      const CameraRectBasic = await import(
        "../components/3d/threejs/CameraRectBasic.vue"
      );
      const HighLight = await import("../components/3d/threejs/HighLight.vue");
      const HighLightAntialias = await import(
        "../components/3d/threejs/HighLightAntialias.vue"
      );
      const GuiExample = await import(
        "../components/3d/threejs/GuiExample.vue"
      );
      const PlaneExample = await import("../components/3d/threejs/Plane.vue");

      app.component("TextFoldExample", TextFoldExample.default);
      app.component("ThreeBasic", ThreeBasic.default);
      app.component("CameraRectBasic", CameraRectBasic.default);
      app.component("HighLight", HighLight.default);
      app.component("HighLightAntialias", HighLightAntialias.default);
      app.component("GuiExample", GuiExample.default);
      app.component("TimeLine", TimeLine.default);
      app.component("PlaneExample", PlaneExample.default);
    }
  },
  setup() {
    onMounted(() => {
      console.log(String.raw`

███╗   ███╗██████╗    ██╗  ██╗ ██████╗ ██████╗ ███████╗
████╗ ████║██╔══██╗   ██║  ██║██╔═══██╗██╔══██╗██╔════╝
██╔████╔██║██████╔╝   ███████║██║   ██║██████╔╝█████╗  
██║╚██╔╝██║██╔══██╗   ██╔══██║██║   ██║██╔═══╝ ██╔══╝  
██║ ╚═╝ ██║██║  ██║██╗██║  ██║╚██████╔╝██║     ███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝

__          __  _                            _                            _     _             _ 
\ \        / / | |                          | |                          | |   | |           | |
 \ \  /\  / /__| | ___ ___  _ __ ___   ___  | |_ ___    _ __ ___  _   _  | |__ | | ___   __ _| |
  \ \/  \/ / _ \ |/ __/ _ \| '_ ${"`"} _ \ / _ \ | __/ _ \  | '_ ${"`"} _ \| | | | | '_ \| |/ _ \ / _${"`"} | |
   \  /\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | | | | | | |_| | | |_) | | (_) | (_| |_|
    \/  \/ \___|_|\___\___/|_| |_| |_|\___|  \__\___/  |_| |_| |_|\__, | |_.__/|_|\___/ \__, (_)
                                                                   __/ |                 __/ |  
                                                                  |___/                 |___/   

`);
    });
  },
});
