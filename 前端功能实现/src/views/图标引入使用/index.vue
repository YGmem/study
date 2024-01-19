<template>
  <div>
    <video width="320" height="240" controls>
      <source src="../../assets/11.mp4" type="video/mp4" />
      <source src="../../assets/11.mp4" type="video/ogg" />
    </video>
    <i class="iconfont icon-info"></i>
    <i class="iconfont icon-xing"></i>
    <div class="garden">
      <div class="garden-content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const time = ref('1s')

setTimeout(() => {}, 1000)
setTimeout(() => {
  time.value = '3s'
}, 2000)
</script>

<style scoped lang="less">
.garden::before {
  content: '';
  position: absolute;
  width: 174px;
  height: 174px;
  border: 2px solid #f77062;
  border-radius: 100%;
  box-sizing: border-box;
  animation: rotateSmall v-bind(time) linear forwards;
  z-index: 2;
}

@keyframes rotateSmall {
  0% {
    clip-path: inset(0px 174px 87px 0px);
  }

  50% {
    clip-path: inset(0px 87px 87px 0px);
  }

  100% {
    clip-path: inset(0px 0px 87px 0px);
  }
}
</style>
