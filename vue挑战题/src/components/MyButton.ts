import {h,defineComponent} from 'vue'

export default defineComponent({
  name:"MyButton",
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  },
  emit:['custom-click'],
  render:(tsx:any)=>{
    return h("button",{
      disabled:tsx.disabled,
      onClick:()=>tsx.$emit('custom-click')
    },tsx.$slots)
  }
})