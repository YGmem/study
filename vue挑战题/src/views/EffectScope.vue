<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from "vue";

const counter = ref(1);
const doubled = computed(() => counter.value * 2);

const scope = effectScope();

scope.run(() => {
  watch(doubled, () => console.log(doubled.value));
  watchEffect(() => console.log(`Count: ${doubled.value}`));
});

scope.stop()

counter.value = 2;

setTimeout(() => {
  counter.value = 4;
});
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
