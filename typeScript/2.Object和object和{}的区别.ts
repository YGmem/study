function study2() {

  // 大写的Oject是所有类型的原型 所有原始类型和复杂类型最终都指向这个Object
  let a:Object = {}
  let b:Object = []
  let c:Object = ''
  let d:Object = 123
  

  // 但是小写的就不行 因为 小写的只能赋值除了非原始类型的参数
  let e:object = []  
  let f:object = {} 
  let g:object = ''  // 错
  let h:object = 12  // 错

  // {} 的话和Object一样支持所有类型 但是无法调用内部属性参数 对变量进行修改和添加等操作的
  let a1:{} = {a:1}   a1.c = ''
  let a2:{} = ''
  let a3:{} = []
  let a4:{} = 1

}
