// 库的入口文件
// 核心就是导出一个 install 方法

import type { App, Plugin } from 'vue'
// 引入组件
import TextFold from './components/Text/Fold.vue'

const components = [TextFold]

// 定义插件的 install 方法
// 回头用户在使用 use 注册你这个库的时候，就会调用这个方法
const install = (app: App) => {
  components.forEach((com) => {
    app.component(com.name as string, com)
  })
}

const vuecoms: Plugin = {
  install
}

export default vuecoms
export { TextFold }
