<template>
  <div>
    <!-- 添加按键修饰符让即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button  @keyup.alt.shift="onClick1">A</button>

    <!-- 添加按键修饰符让有且只有 Shift 被按下的时候才触发 -->
    <button @click.shift="onCtrlClick">A</button>

    <!-- 添加按键修饰符让没有任何系统修饰符被按下的时候才触发 -->
    <button @click.exact="onClick2">A</button>
  </div>
</template>

<script setup lang="ts">
function onClick1() {
  console.log('onClick1')
}
function onCtrlClick() {
  console.log('onCtrlClick')
}
function onClick2() {
  console.log('onClick2')
}
</script>