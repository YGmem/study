<template>
  <div id="pdf">
    <div>我将被导出为pdf11111</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <div>我将被导出为pdf</div>
    <el-button @click="pdf"  type="primary">点击我导出当前页面为pdf</el-button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { htmlToPDF } from './index'

const pdf = () => {
  htmlToPDF('pdf', 'test pdf')
}

</script>

<style scoped lang='less'>

</style>
