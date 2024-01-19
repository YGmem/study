import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import  './assets/index.css'
import 'ant-design-vue/dist/reset.css';

let app = createApp(App)

app.use(router)

app.mount('#app')


