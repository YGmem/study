<template>
  <div>
    <div class="animation">我是动画</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style scoped lang="less">
.animation {
  /* 帮我写一个半圆，内容从左到右填充的动画 */
  animation: fill 1s linear infinite; /* 帮我写一个半圆，内容从左到右填充的动画 */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}
@keyframes fill {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}

// .animation {
//   /* 帮我写一个圆圈不停的转的动画 */
//   animation: rotate 1s linear infinite;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background: red;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
</style>
