<template>
  <div>
    <MyInput :aaa="aaa" maxlength="4" v-model="text"></MyInput>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide, onMounted } from 'vue'
import MyInput from '@/components/MyInput.vue'

const aaa = ref(1222)

onMounted(() => {
  void Promise.resolve().then(() => {
    aaa.value = 12222222
  })
})

// function bar () {
//   console.log('bar')
// }

// function foo () {
//   // setTimeout(bar, 0);
//   for (let i = 0; i < 5000; i++) {
//     const i = 5 + 8 + 8 + 8
//     console.log(i)
//   }
// }

setTimeout(() => {
  // foo()
}, 2000)

const text = ref('1')
const a = ref(1)

provide('a', a)

setTimeout(() => {
  a.value = 2
}, 2000)

// const arr = ref<number[]>([1, 2])
</script>

<style scoped lang="scss"></style>
