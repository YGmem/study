import { createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/index'
import 'normalize.css' // 重置项目默认css的库
import './assets/index.css' // 引入全局css
import './assets/icon.css' // 引入icon
import directive from '@/directive/index'
import { createPinia } from 'pinia'

import F from './views/副作用.vue'
import '@/api/version'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

// 在主入口监听PWA注册事件 pwa就是可以将网页当成app进行安装使用大小也很小
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  window.deferredPrompt = e
})

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(directive)
app.use(createPinia())
app.mount('#app')

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.log('全局错误处理', err, vm, info)
}
