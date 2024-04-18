function getParams1(param: string | number) {
  return param
}


const getLenFunc = (content: number | string) => {
  if (typeof content === 'string') { return content.length }
  else { return content.toString().length }
}
// getLenFunc(true) // 报错 只能是string 或者是number类型中的一个


/* 1.如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
简单的说'使用一个联合类型的参数只能使用共有成员'，下面案例中c虽然有age属性，但是会报错
只能使用他们的共有成员name */
interface a {
  name: string,
  age: number
}
interface b {
  name: string,
  sex: string
}
// const c:(a|b) = {
//     age:13,
//     sex:'nan'
// }  // 报错
const c: (a | b) = {
  name: 'fff',
  age: 12,
  sex: 'w'
}
// c.age// 报错
c.name



/* 1.在中增加 和 修改 这两个需求的时候往往，新增不需要id 但是修改需要id，往往这种处理一般都会集中在一个公共方法中
举个例子
复制 */
type Add = {
  name: string
  age: number
}

type Edit = {
  id: number
  name: string
  age: number
}

function submit(params: Add | Edit) {

  console.log(params.id) // 报错

  /* 解决方法缩小范围
1.使用 if 等流程控制语句，下面案例只能使用'in' */

  // 无效
  // if(params.id){ //
  //   console.log(params.id)

  // }
  // 无效
  // if(Reflect.has(params,"id")){
  //   console.log(params.id)
  // }
  // 无效
  // if(Reflect.get(params,"id")){
  //   console.log(params.id)
  // }
  if ('id' in params) {
    console.log(params.id)
  }
}


// 先 1 2 和 3 4 交叉 然后在将两个交叉联合
type UnionIntersectionA =
  | ({ id: number } & { name: string })
  | ({ id: string } & { name: number }) // 交叉操作符优先级高于联合操作符


// 改变联合顺序
type UnionIntersectionB =
  | ('px' | 'em' | 'rem' | '%')
  | ('vh' | 'em' | 'rem' | 'pt') // 调整优先级


let a: UnionIntersectionB = '%'
let b: UnionIntersectionA = { id: 1, name: '2' }
