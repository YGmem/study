<template>
  <div>
    <Editor  :value="value" />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Editor from '@/components/Editor/index.vue'

const value = ref<string>('')

</script>

<style scoped lang='less'>

</style>