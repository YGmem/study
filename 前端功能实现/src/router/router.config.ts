import { RouteRecordRaw } from 'vue-router'

export const myRouter: Array<RouteRecordRaw> = [
  {
    path: '/draggable',
    alias: '/',
    name: 'draggable',
    component: () => import('@/views/拖拽排序.vue'),
    meta: {
      title: '拖拽排序',
    },
  },
  {
    path: '/svg',
    name: 'svg',
    component: () => import('@/views/svg.vue'),
    meta: {
      title: 'svg',
    },
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/map.vue'),
    meta: {
      title: 'map',
    },
  },
  {
    path: '/keepAttr',
    name: '封装第三方组件保留属性监听和插槽',
    component: () => import('@/views/封装第三方组件保留属性监听和插槽.vue'),
    meta: {
      title: '封装第三方组件保留属性监听和插槽',
    },
  },
  {
    path: '/virtual',
    name: '虚拟列表',
    component: () => import('@/views/虚拟列表.vue'),
    meta: {
      title: '虚拟列表',
    },
  },
  {
    path: '/pdf',
    name: '页面导出pdf',
    component: () => import('@/views/页面导出pdf/index.vue'),
    meta: {
      title: '页面导出pdf',
    },
  },
  {
    path: '/setTimeout',
    name: '减少setTimeout和setInterval误差',
    component: () =>
      import('@/views/减少setTimeout和setInterval误差/index.vue'),
    meta: {
      title: '减少setTimeout和setInterval误差',
    },
  },
  {
    path: '/icon',
    name: '图标引入使用',
    component: () => import('@/views/图标引入使用/index.vue'),
    meta: {
      title: '图标引入使用',
    },
  },
  {
    path: '/iframe',
    name: 'iframe文件预览',
    component: () => import('@/views/iframe文件预览/index.vue'),
    meta: {
      title: 'iframe文件预览',
    },
  },
  {
    path: '/echarts',
    name: 'myEcharts',
    component: () => import('@/views/myEcharts/index.vue'),
    meta: {
      title: 'myEcharts',
    },
  },
  {
    path: '/lazy',
    name: '懒加载',
    component: () => import('@/views/页面导出pdf/懒加载/index.vue'),
    meta: {
      title: '懒加载',
    },
  },
  {
    path: '/animation',
    name: '动画',
    component: () => import('@/views/动画/index.vue'),
    meta: {
      title: '动画',
    },
  },
  {
    path: '/customEcharts',
    name: '自定义图表',
    component: () => import('@/views/myEcharts/自定义图表/index.vue'),
    meta: {
      title: '自定义图表',
    },
  },
  {
    path: '/Editor',
    name: '富文本',
    component: () => import('@/views/富文本/index.vue'),
    meta: {
      title: '富文本',
    },
  },
    {
        path: "/fileAddWater",
        name: "文件加水印",
        component: () => import("@/views/文件加水印/index.vue"),
        meta: {
          title: "文件加水印"
        }
      },
]
