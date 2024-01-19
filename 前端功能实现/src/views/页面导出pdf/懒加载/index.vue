<template>
  <div class="overflow-auto h-52">

    <img
    :key="i"
      src="@/assets/img/one.png"
      style="min-height: 50px"
      v-lazy
      v-for="i in 50"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
// import { ref, reactive } from 'vue'
</script>

<style scoped lang="less"></style>
