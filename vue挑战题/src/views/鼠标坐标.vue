<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

type CallbackType = Parameters<typeof window.addEventListener>;
// Implement ...
function useEventListener(
  target: EventTarget,
  event: string,
  callback: EventListenerOrEventListenerObject
) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => target.removeEventListener(event, callback));
}

// Implement ...
function useMouse() {
  let x = ref(0);
  let y = ref(0);

  useEventListener(window, "mousemove", {
    handleEvent(evt: MouseEvent) {
      x.value = evt.clientX;
      y.value = evt.clientY;
    },
  });

  return { x, y };
}
const { x, y } = useMouse();
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
