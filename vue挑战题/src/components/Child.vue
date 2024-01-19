
<template>
  <div>
    <p>Child Component: {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, inject, Ref, toRef } from "vue";

const timer: Ref<number> = inject("timer") as Ref<number>;
const count: Ref<number> = inject("count") as Ref<number>;

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++;
  }, 1000);
});
onUnmounted(() => {
  window.clearInterval(timer.value);
});
</script>

