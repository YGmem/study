<template>
  <div>
    <div> 
    <a :href="pdf">pdf</a>
    <div>测试</div>
  </div>
    <div> 
      <a href="/src/assets/file/1).pdf">pdf2</a>
  </div>
  <div>
    <a href="/src/assets/file/10.19修改意见.docx">word</a>
  </div>
    <a href="/src/assets/file/测试.pptx">ppt</a>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import pdf from '@/assets/file/1).pdf'

</script>

<style scoped lang='less'>

</style>