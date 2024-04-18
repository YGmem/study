import { reactive, toRefs } from 'vue'


export function test<T extends object>(obj: Partial<T>) {
  let state = reactive(obj)

  return toRefs(state)
}