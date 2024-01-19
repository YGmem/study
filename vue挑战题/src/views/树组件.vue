// 你的答案
<script setup lang="ts">
import { computed } from "vue"
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
const props = defineProps<{data: TreeData[]}>()

const diff = computed(() => {
  return (item:any) => {
    return item?.children?.length > 0
  }
})
const data:any[] = [{
  key:1,
  title:1,
  children:[{
    key:2,
    title:2
  }]
}]
 
</script>

<template>
	<div>
    <ul>
    	<li v-for="item in data" :key="item">
        <span>{{ item.title }}</span>
        <slot/>
      	<TreeComponent v-if="diff(item)" :data="item.children"/>
      </li>
    </ul>
  </div>
</template>