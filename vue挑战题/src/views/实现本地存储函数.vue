<script setup lang='ts'>
import { ref, watch } from "vue";

/**
 * Implement the composable function
 * Make sure the function works correctly
 */

// function useLocalStorage(key: string, initialValue: any) {
//   const value = ref(window.localStorage.getItem(key) ?? initialValue);

//   !window.localStorage.getItem(key) &&
//     window.localStorage.setItem(key, initialValue);

//   let counter = computed({
//     get() {
//       value.value = window.localStorage.getItem(key);
//       return value.value;
//     },
//     set(val) {
//       window.localStorage.setItem(key, val);
//       console.log(val);

//       value.value = val;
//     },
//   });

//   return counter;
// }

function useLocalStorage(key: string, initialValue: any) {
  const value = ref(window.localStorage.getItem(key) || initialValue);

  watch(value, (newVal: string) => {
    window.localStorage.setItem(key, newVal);
    value.value = newVal;
  });

  return value;
}

const counter = useLocalStorage("counter", 0);

// We can get localStorage by triggering the getter:
console.log(counter.value);

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++;
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <el-button @click="update">Update</el-button>
  </div>
</template>
