import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'

// 引入自定义组件
import TextFold from './components/Text/Fold.vue'

const app = createApp(App)

// 全局注册组件
app.component(TextFold.name as string, TextFold)

app.mount('#app')
