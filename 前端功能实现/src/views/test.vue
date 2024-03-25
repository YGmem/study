<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Props {
  name: string
  age: number
  email: string
}

export default defineComponent({
  name: 'MyComponent',
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: `Hello, ${this.name}`
    }
  }
})
</script>

<style scoped>
</style>
