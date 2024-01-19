<script setup lang='ts'>
import { ref, customRef, isRef } from "vue";

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
 */
const VOhModel = {
  mounted(el: { value: String; $onchange: (e: any) => void; addEventListener: (arg0: string, arg1: any) => void; }, { value }: { value: String }) {
    el.value = value;
    el.$onchange = (e: any) => {
      if (!isRef(value)) {
        return;
      }
      value.value = e.target?.value;
    };
    el.addEventListener("input", el.$onchange);
  },
  unmounted(el: any) {
    el.addEventListener("input", el.$onchange);
    delete el.$onchange
  },
};

const value = ref("Hello Vue.js");
</script>

<template>
  <div>
    <input v-oh-model="value" type="text" />
  </div>
</template>

