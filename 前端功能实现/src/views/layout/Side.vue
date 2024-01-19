<template>
  <el-scrollbar height="800px">
    <el-menu
      default-active="2"
      class="menu"
      :router="true"
    >
      <el-menu-item
        :index="menu.path"
        v-for="(menu, index) in myRouter"
        :key="menu.name"
      >
        <template #title>
          <span v-if="menu.meta">{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
import { myRouter } from "@/router/router.config";
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
  /* width: 200px; */
  min-height: 400px;
}
</style>