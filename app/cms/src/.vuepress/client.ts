import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";
import TextFoldExample from "../components/VueComs/TextFold.vue";
import ThreeBasic from "../components/3d/threejs/Basic.vue";
import CameraRectBasic from "../components/3d/threejs/CameraRectBasic.vue";
import HighLight from "../components/3d/threejs/HighLight.vue";
import HighLightAntialias from "../components/3d/threejs/HighLightAntialias.vue";
import GuiExample from "../components/3d/threejs/GuiExample.vue";

// import "virtual:windi-base.css";
// import "virtual:windi-components.css";
import "virtual:windi-utilities.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("TextFoldExample", TextFoldExample);
    app.component("ThreeBasic", ThreeBasic);
    app.component("CameraRectBasic", CameraRectBasic);
    app.component("HighLight", HighLight);
    app.component("HighLightAntialias", HighLightAntialias);
    app.component("GuiExample", GuiExample);
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
