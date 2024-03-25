<template>
  <div>

    误差{{ error }}
    <el-button type="primary" @click="handlerTime"
      >点击我触发定时器(等2秒)</el-button
    >

  <!-- <div>{{ html }}</div> -->

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineComponent, h } from 'vue'

const error = ref(0)
const delay = 2000


const handlerTime = () => {
  const start = new Date().getTime()

  //   setTimeout(() => {
  //   let now = new Date().getTime()
  //    let activeTime = now - start
  //    error.value = activeTime - delay
  //    console.log("🚀 ~ file: index.vue:19 ~ setTimeout ~ now - start:", now , start)
  //  }, delay);
  timer()
  /* 添加js线程阻碍 */
  for (let i = 0; i < 50000; i++) {
    console.log(i)
    const element = i
  }
}



function timer (): void {
  const speed = 500
  let counter = 1
  const start = new Date().getTime()

  function instance (): void {
    const ideal = counter * speed
    const real = new Date().getTime() - start

    counter++

    const diff = real - ideal
    error.value = diff

    window.setTimeout(function () {
      instance()
    }, speed - diff) // 通过系统时间进行修复
  }

  window.setTimeout(function () {
    instance()
  }, speed)
}
</script>

<style lang="less">


</style>
