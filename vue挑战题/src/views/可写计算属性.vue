<script setup lang="ts">
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed({
  get() {
    return count.value;
  },
  set(val) {
    count.value = val;
  },
});

/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
 */

plusOne.value++;
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>

