import { DirectiveBinding, VNode } from 'vue'


const observers = new WeakMap<HTMLImageElement, IntersectionObserver>();

/**
 * @description v-lazy懒加载
 */
export default {
  /**
   * 组件挂载前的操作
   * @param el - HTMLImageElement实例
   */
  beforeMount(el: HTMLImageElement) {
    el.dataset.lazySrc = el.src
  },
  /**
   * 组件挂载后的操作
   * @param el - HTMLImageElement实例
   */
  mounted(el: HTMLImageElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.src = el.dataset.lazySrc || ''
          observer.unobserve(el);
        } else {
          el.src = ''
        }
      });
    });
    observer.observe(el);
    observers.set(el, observer);
  },
  /**
  * 组件卸载后的操作
  * @param el - HTMLImageElement实例
  */
  unmounted(el: HTMLImageElement) {
    const observer = observers.get(el);
    if (observer) {
      observer.unobserve(el);
    }
    observers.delete(el);
  },
};