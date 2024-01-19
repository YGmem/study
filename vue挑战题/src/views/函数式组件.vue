<script setup lang="ts">
// import a from 'lib/components/a/index'
import { ref, h } from "vue"
/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */
// const ListComponent = (props: any, { emit, slots, attrs }: any) => {
//   let listVDom: any = []
//   listVDom = props?.list?.map((item: any, index: number) => {
//     return h(
//       "li",
//       {
//         onClick: () => emit('toggle', index),
//         style: { color: +index === +props['active-index'] ? "red" : "" }
//       },
//       item.name
//     )
//   })

//   return h('ui', listVDom)
// }

// const ListComponent = (props,{ emit }) => {
//   const c = props.list.map((item,index)=>{
//     return h(
//     "li",{
//       style:{
//         color:props['active-index'] === index?'lightblue':'gray',
//       },
//       onClick:()=>{
//         emit('toggle',index);
//       }
//     },
//       item.name
//     )
//   })
//   return h('ul',c)
// }
// ListComponent.props = ['list', 'activeIndex']
// ListComponent.emits = ['toggle']

const list = [
  {
    name: "John",
  },
  {
    name: "Doe",
  },
  {
    name: "Smith",
  },
]

const activeIndex = ref(0)

// function toggle(index: number) {
//   activeIndex.value = index
// }
</script>

<template>
  <div>
    <!-- <list-component :list="list" :active-index="activeIndex" @toggle="toggle" /> -->
  </div>
</template>
