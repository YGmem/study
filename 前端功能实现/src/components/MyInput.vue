<template>
  {{ a }} {{ aaa }}
  <el-input v-model="inputValue"  placeholder="请输入内容" v-bind="$attrs">
    <template #[slotName]="slotProps" v-for="(slot, slotName) in $slots" >
          <slot :name="slotName" v-bind="slotProps"></slot>
      </template>
  </el-input>
</template>

<script setup lang='ts'>
import { ref, reactive,toRefs,computed ,inject,watch} from 'vue'

let a = inject('a')


interface Props {
  modelValue?: string,
  aaa:number
}

 
let props = withDefaults(defineProps<Props>(), {
  modelValue: 'hello',
  aaa:1
})


let { aaa } = props
console.log(aaa);


// watch(aaa, (newa,old) => { 
//   console.log(newa,old);
// })


let emit = defineEmits(['update:modelValue'])

let inputValue = computed({
  get(){
    return props.modelValue
  },
  set(val){
    emit('update:modelValue',val)
  }
})

</script>

<style scoped lang='scss'>

</style>