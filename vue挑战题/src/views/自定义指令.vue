<script setup lang="ts">
import { ref, vModelText } from 'vue'
let text = ref('')

vModelText.beforeUpdate = (el, binding) => {
  if (el.value && binding.modifiers.capitalize) {
    el.value = el.value.charAt(0).toLocaleUpperCase() + el.value.slice(1)
  }

}


</script>

<template>
  <div>
    <input type="text" v-model.capitalize="text" />
  </div>
</template>
