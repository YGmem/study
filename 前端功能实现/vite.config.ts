import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import RemoveConsole from './plugin/remove-console-plugin'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
// import { VitePWA } from 'vite-plugin-pwa'

const mode = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // __VUE_OPTIONS_API__:JSON.stringify(false)  // 关闭选项API特效 当前项目确认不会使用选项式 写法 修改这个后 就不会打包对应的选项式代码
  },
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, './src'),
      // 设置路径
      '~': path.resolve(__dirname, './'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    RemoveConsole(),
    WindiCSS(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // VitePWA({
    //   manifest: {
    //     name: 'PWA应用',
    //     short_name: 'PWA',
    //     description: 'PWA应用测试',
    //     theme_color: '#182330',
    //     icons: [
    //       //添加图标， 注意路径和图像像素正确
    //       {
    //         src: '/img/03b0d39583f48206768a7534e55bcpng.png',
    //         sizes: '180x180',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    //   injectManifest: {

    //   },
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}'], //缓存相关静态资源
    //     runtimeCaching: [
    //       // 配置自定义运行时缓存
    //       mode !== 'production'
    //         ? {
    //             urlPattern: ({ url }) => url.origin === 'http://127.0.0.1:5173',
    //             handler: 'NetworkFirst',
    //             options: {
    //               cacheName: 'wisbayar-api',
    //               cacheableResponse: {
    //                 statuses: [200],
    //               },
    //             },
    //           }
    //         : {
    //             urlPattern: ({ url }) => url.origin === 'http://127.0.0.1:5173',
    //             handler: 'NetworkFirst',
    //             options: {
    //               cacheName: 'wisbayar-api',
    //               cacheableResponse: {
    //                 statuses: [200],
    //               },
    //             },
    //           },
    //       {
    //         urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'wisbayar-images',
    //           expiration: {
    //             // 最多30个图
    //             maxEntries: 30,
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /.*\.js.*/,
    //         handler: 'StaleWhileRevalidate',
    //         options: {
    //           cacheName: 'wisbayar-js',
    //           expiration: {
    //             maxEntries: 30, // 最多缓存30个，超过的按照LRU原则删除
    //             maxAgeSeconds: 30 * 24 * 60 * 60,
    //           },
    //           cacheableResponse: {
    //             statuses: [200],
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /.*\.css.*/,
    //         handler: 'StaleWhileRevalidate',
    //         options: {
    //           cacheName: 'wisbayar-css',
    //           expiration: {
    //             maxEntries: 20,
    //             maxAgeSeconds: 30 * 24 * 60 * 60,
    //           },
    //           cacheableResponse: {
    //             statuses: [200],
    //           },
    //         },
    //       },
    //       {
    //         urlPattern: /.*\.html.*/,
    //         handler: 'StaleWhileRevalidate',
    //         options: {
    //           cacheName: 'wisbayar-html',
    //           expiration: {
    //             maxEntries: 20,
    //             maxAgeSeconds: 30 * 24 * 60 * 60,
    //           },
    //           cacheableResponse: {
    //             statuses: [200],
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   devOptions: {
    //     enabled: true,
    //   },
    // }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://mock.mengxuegu.com/mock/6539ca6e82cf792009576ae3',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, '')
        },
      },
    },
  },
})
