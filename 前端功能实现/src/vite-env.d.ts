
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}



declare interface ImportMetaEnv {
  NODE_ENV: 'development' | 'production'
}

declare interface ImportMeta {
  env: ImportMetaEnv
}


