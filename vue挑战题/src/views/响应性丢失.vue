<template>
  <div>
    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive,toRefs,toRef } from "vue";

function useCount() {
  const state = reactive({
    count: 0,
  });

  function update(value: number) {
    state.count = value;
  }

  return {
    state:toRefs(state),
    update,
  };
}

// 确保解构不丢失响应性
const {
  state: { count },
  update,
} = useCount();
</script>


