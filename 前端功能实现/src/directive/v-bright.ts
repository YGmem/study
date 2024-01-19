import { Directive } from 'vue';


interface BrightHTMLElement extends HTMLElement {
  _onMouseover: () => void;
  _onMouseout: () => void;
}

/**
 * @description: 鼠标划入高亮
 */
const BrightOnHoverDirective: Directive = {
  beforeMount(el: BrightHTMLElement) {
    el.style.transition = 'all 0.5s ease';
    el._onMouseover = function (): void {
      this.style.filter = 'brightness(1.2)';
    }
    el._onMouseout = function (): void {
      this.style.filter = 'brightness(1)';
    }
    el.addEventListener('mouseover', el._onMouseover);
    el.addEventListener('mouseout', el._onMouseout);
  },
  unmounted(el: BrightHTMLElement) {
    el.removeEventListener('mouseover', el._onMouseover);
    el.removeEventListener('mouseout', el._onMouseout!);
  }
}

export default BrightOnHoverDirective;
