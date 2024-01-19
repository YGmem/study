<template>
    <div>
    <el-button type="success" round disabled >11</el-button>
    el
</div>
</template>

<script setup lang='ts'>
import { ref, reactive, effect } from 'vue'

const a = (): void => {}

//  /*#__PURE__*/ 的作用就是告诉打包工具这段代码不会产生副作用放心进行 tree shaking

/* #__PURE__ */ a()
</script>
<style scoped lang='less'>
</style>
