<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";

interface UseCounterOptions {
  min?: number;
  max?: number;
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置
 * 4. 最小值 & 最大值 选项支持
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue);
    
  const { min, max } = options;

  const inc = () => {
    if (min) {
      console.log(count.value - 1 <= min, min, count.value - 1);
      count.value - 1 <= min && count.value--;
    }
  };
  const dec = () => {
    count.value++;
  };
  const reset = () => {
    count.value = initialValue;
  };
  return { count, inc, dec, reset };
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 });
</script>


<style scoped lang="less">


</style>
