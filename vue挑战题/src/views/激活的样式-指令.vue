<script setup lang='ts'>
import { ref, watchEffect } from "vue";

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 *
 */
const VActiveStyle = {
  mounted(el: { style: { [x: string]: string; }; }, { value }: { value: [Record<string, string>, () => boolean] }) {
    const [style, condition] = value;
    watchEffect(() => {
      console.log(el);

      if (condition?.()) {
        // 可选链操作符，if true
        // 用于返回一个给定对象自身可枚举属性的键值对数组
        Object.entries(style).forEach(([key, value]) => {
          el.style[key] = value;
        });
      } else {
        Object.keys(style).forEach((key) => {
          el.style[key] = "";
        });
      }
    });
  },
};

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const activeTab = ref(0);
function toggleTab(index: number) {
  activeTab.value = index;
}
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      v-active-style="[{ color: 'red' }, () => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

