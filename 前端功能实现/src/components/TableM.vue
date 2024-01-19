<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" class="custom-table">
      <template #name="{ text }">
        <div class="column-content">
          {{ text }}
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { ref,defineComponent } from "vue";

let columns = ref([
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  // 其他列...
])
let dataSource = ref([
  {
    key: "1",
    name: "张三adasdasdas",
    age: 18,
  },
  {
    key: "2",
    name: "李四",
    age: 25,
  },
  // 其他数据...
])
</script>

<style scoped>
</style>
