import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";

// import "virtual:windi-base.css";
// import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import { registerComponents } from "../components";
export default defineClientConfig({
  async enhance({ app, router, siteData }) {
    if (!__VUEPRESS_SSR__) {
      await registerComponents(app);
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
