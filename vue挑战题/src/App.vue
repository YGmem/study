
<template>
  <Header class="header" />
  <div class="page">
    <Side class="side" />
    <Content  class="content"/>
  </div>
</template>
<script setup lang="ts">
import Content from "@/views/layout/Content.vue";
import Header from "@/views/layout/Header.vue";
import Side from "@/views/layout/Side.vue";

</script>

<style scoped lang="less">
.header{
    height: 10%;
}
.page{
  height: 90%;
  display: flex;

  .side{
    width: 200px;
  }
  .content{
    margin: 20px;
    width: 100%;
    height: 100%;
  }
 
}
</style>
