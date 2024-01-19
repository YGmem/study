<script setup lang="ts">

import MyButton from "@/components/MyButton";

const onClick = () => {
  console.log('onClick')
}

</script>
<template>
  <div>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
  </div>
</template>