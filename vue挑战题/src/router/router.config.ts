export const myRouter:any = [
  { 
    path:"/",
    name:"functionalComponents",
    component:()=> import('@/views/函数式组件.vue'),
    meta:{
      title:"函数式组件"
    }
  },
  { 
    path:"/renderH",
    name:"renderFunctionH",
    component:()=> import('@/views/渲染函数h的使用.vue'),
    meta:{
      title:"渲染函数h的使用"
    }
  },
  { 
    path:"/tree",
    name:"tree",
    component:()=> import('@/views/树组件.vue'),
    meta:{
      title:"树组件"
    }
  },
  { 
    path:"/toggle",
    name:"toggle",
    component:()=> import('@/views/切换器.vue'),
    meta:{
      title:"切换器"
    }
  },
  { 
    path:"/counting",
    name:"counting",
    component:()=> import('@/views/计数器.vue'),
    meta:{
      title:"计数器"
    }
  },
  { 
    path:"/local",
    name:"local",
    component:()=> import('@/views/实现本地存储函数.vue'),
    meta:{
      title:"实现本地存储函数"
    }
  },
  { 
    path:"/coord",
    name:"coord",
    component:()=> import('@/views/鼠标坐标.vue'),
    meta:{
      title:"鼠标坐标"
    }
  },
  { 
    path:"/life",
    name:"life",
    component:()=> import('@/views/生命周期钩子.vue'),
    meta:{
      title:"生命周期钩子"  
    }
  },
  { 
    path:"/response",
    name:"response",
    component:()=> import('@/views/响应性丢失.vue'),
    meta:{
      title:"响应性丢失"  
    }
  },
  { 
    path:"/computed",
    name:"computed",
    component:()=> import('@/views/可写计算属性.vue'),
    meta:{
      title:"可写计算属性"  
    }
  },
  { 
    path:"/watch",
    name:"watch",
    component:()=> import('@/views/watch全家桶.vue'),
    meta:{
      title:"watch全家桶"  
    }
  },
  { 
    path:"/EffectScope",
    name:"EffectScope",
    component:()=> import('@/views/EffectScope.vue'),
    meta:{
      title:"EffectScope使用"  
    }
  },
  { 
    path:"/Debounced",
    name:"自定义ref",
    component:()=> import('@/views/自定义ref.vue'),
    meta:{
      title:"自定义ref使用"  
    }
  },
  { 
    path:"/directive",
    name:"自定义指令",
    component:()=> import('@/views/自定义指令.vue'),
    meta:{
      title:"自定义指令"  
    }
  },
  { 
    path:"/MyDirective",
    name:"创建自定义指令",
    component:()=> import('@/views/创建自定义指令.vue'),
    meta:{
      title:"创建自定义指令"  
    }
  },
  { 
    path:"/DebouncedDirective",
    name:"防抖自定义指令",
    component:()=> import('@/views/防抖自定义指令.vue'),
    meta:{
      title:"防抖自定义指令"  
    }
  }, { 
    path:"/activeDirective",
    name:"激活的样式-指令",
    component:()=> import('@/views/激活的样式-指令.vue'),
    meta:{
      title:"激活的样式-指令"  
    }
  }, { 
    path:"/vModelDirective",
    name:"简易版v-model指令",
    component:()=> import('@/views/简易版v-model.vue'),
    meta:{
      title:"简易版v-model指令"  
    }
  }, { 
    path:"/Modifiers",
    name:"按键修饰符",
    component:()=> import('@/views/按键修饰符.vue'),
    meta:{
      title:"按键修饰符"  
    }
  }
]