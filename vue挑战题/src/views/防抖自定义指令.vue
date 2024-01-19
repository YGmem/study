<script setup lang='ts'>
import { Callback } from "element-plus"
/**
 * @description: 防抖
 */
function debounce(callback: Function, time: number) {
  let timer: NodeJS.Timeout | null = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
    }, time);
  };
}

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 */
const VDebounceClick = {
  created(el: HTMLElement, binding: any) {
    let delay = binding.arg;
    let fn = binding.value;
    el.addEventListener("click", debounce(fn, delay));
  },
  unmounted: (
    el: HTMLElement,
    { arg: delay, value: callback }: { arg: number; value: Function }
  ) => {
    el.removeEventListener("click", debounce(callback, delay));
  },
};

function onClick() {
  console.log("Only triggered once when clicked many times quicky");
}
</script>

<template>
  <div>
    <button v-debounce-click:200="onClick">
      Click on it many times quickly
    </button>
  </div>
</template>

