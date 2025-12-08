import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  setup() {
    onMounted(() => {
      console.log(String.raw`
 /$$$$$$$  /$$   /$$  /$$$$$$  /$$   /$$
| $$__  $$| $$  | $$ /$$__  $$| $$$ | $$
| $$  \ $$| $$  | $$| $$  \ $$| $$$$| $$
| $$  | $$| $$  | $$| $$$$$$$$| $$ $$ $$
| $$  | $$| $$  | $$| $$__  $$| $$  $$$$
| $$  | $$| $$  | $$| $$  | $$| $$\  $$$
| $$$$$$$/|  $$$$$$/| $$  | $$| $$ \  $$
|_______/  \______/ |__/  |__/|__/  \__/


    Welcome to Mister-Duan's Blog!                              
`);
    });
  },
});
