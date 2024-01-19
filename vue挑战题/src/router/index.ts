import { createWebHistory,createRouter } from 'vue-router'

import { myRouter } from './router.config'


const router = createRouter({
  history: createWebHistory(),
  routes:myRouter
})

export default router