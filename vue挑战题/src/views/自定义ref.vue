<script setup lang="ts">
import { watch, customRef } from "vue"

/**
 * 补全以下函数来实现防抖ref :
*/
function useDebouncedRef(value:any, delay = 200) {
  let timer:any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearInterval(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, delay);
      }
    }
  })
}
const text = useDebouncedRef("hello")

/**
 * 确保在输入框快速输入时, 只触发一次回调。
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <div>
    <input v-model="text" />
  </div>
</template>

