import { isRef } from "vue";

/**
* 实现以下自定义指令
* 在表单输入元素和数据间创建双向绑定
*
*/
const VOhModel = {
  mounted(el: any, { value }: { value: String; }) {
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
    delete el.$onchange;
  },
};
