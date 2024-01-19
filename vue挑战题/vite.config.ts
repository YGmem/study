import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import viteCompression from "vite-plugin-compression"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  define:{
    __VUE_OPTIONS_API__:JSON.stringify(false)  // 关闭选项API特效 当前项目确认不会使用选项式 写法 修改这个后 就不会打包对应的选项式代码
  },
  resolve: {
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteCompression({ // gzip 压缩
      verbose: true,    
      disable: false,
      threshold: 10240, 
      algorithm: 'gzip',
      ext: '.gz',
      })
  ],
  build:{
    minify : 'terser',
    terserOptions : {
      compress : {
          drop_console : true ,
          drop_debugger : true ,
      }
   }
  }
})
