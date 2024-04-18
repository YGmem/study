<template>
  <div>
    
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive ,watch} from 'vue'
import { test  } from './js/ts'

interface User { 
  name: string
  age:number
}

// let obj = ref({
//   a:"11"
// })
let obj = ref({
  obj2: {
    a:"11"
  }
})


watch(()=>obj.value.obj2 , (nVal,oVal) => { 
  console.log('🚀 ~ watch ~ nVal,oVal:', nVal,oVal)
}, {deep:true}  )

setTimeout(() => {
  obj.value.obj2.a = '33'
  // obj.value.a = '33'
}, 1000);

// setTimeout(() => {
//     // obj.value.obj2.a = '33'
//     obj.value.a = '44'
//   }, 2000)


const a = test<User>({ name: "阳光" })


</script>

<style scoped lang='scss'>

</style>