import { watchEffect } from "vue";

/**
* 实现该指令 :
* 当切换该选项卡时，列表项文本颜色变为红色
*
*/
const VActiveStyle = {
  mounted(el: any, { value }: any) {
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
