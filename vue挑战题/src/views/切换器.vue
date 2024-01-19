<script setup lang='ts'>
import { ref,Ref } from 'vue'
/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
*/
function useToggle(init:Boolean):[state: Ref<Boolean> ,toggle:(payload: MouseEvent)=>void] {

  let state = ref(init)

  function toggle(event: MouseEvent) {
    state.value = !state.value
  }

  return [state, toggle]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <div>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle($event)">
    Toggle state
  </p>
</div>
</template>

