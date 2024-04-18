function study3() {
  // interface 定义 首字母大写  定义内容不可多 也不可少
  interface Yg {
    name: string,
    id: number
  }

  let a: Yg = { // 不可少
    name: "阳光",
    // age:""  // 不可多
  }


  // interface 重复 重名  会自动合并两个的类型
  interface A {
    name: string
  }
  interface A {
    age: number
  }
  let b: A = {
    name: "",
    age: 1
  }


  // interface 任意key
  interface C {
    name: string,
    [anyKey: string]: any  // 添加这个表示可以添加任意属性 属性为字符串类型 值为any
  }

  let c: C = {
    name: "",
    age: 1
  }

  // interface 只读
  interface D {
    readonly name: string
  }
  let d: D = { name: "阳光" }
  // d.name = "" // 只读无法修改


  // interface 继承
  interface D extends D { // 继承了d的name
    age: number
  }

  let e: D = { name: "", age: 1 }

  // interface 定义函数类型
  interface Fn {
    (name: number): string[]
  }
  // 就可以约束name 的类型和返回的值的类型
  let fn: Fn = (name) => ['1']

}

// 错误示范
// age 和name 必须是 任意属性的子集
interface Person {
  name: string
  age?: number // 报错
  [propName: string]: string | number // 改正 [propName: string]: any; 或者 [propName: string]: string|number
}

interface Baseinfo {
  name: string,
  sex: string,
  // [other: string]: any
}
// 人
function printPesonInfo(parmasinfo: Baseinfo) {
  console.log(`姓名：${parmasinfo.name}性别：${parmasinfo.sex}`)
}
// 动物
function printAnimalInfo(parmasinfo: Baseinfo) {
  console.log(`姓名：${parmasinfo.name}性别：${parmasinfo.sex}`)
}

let paramsinfo = { name: 'wang', age: 12, sex: '男' }
printPesonInfo(paramsinfo) // 姓名：wang性别：男
let paramsAnimainfo = { name: '小黑', age: 12, sex: '公' }
printAnimalInfo(paramsAnimainfo) // 姓名：小黑性别：公


// interface Baseinfo {
//   name:string,
//   sex?:string
// }
// // 人
// function printPesonInfo(parmasinfo: Baseinfo) {
//   console.log(`姓名：${parmasinfo.name }`)
// }

// // 如果直接传递参数，且传递的参数key未在接口中定义会提示错误
// printPesonInfo( {name:'wang',age:13} ) // 报错的

// 利用类型兼容性
// let paramsinfo = {name:'wang',age:13} 
// // 类型兼容性就是我们定义的paramsinfo 不管有都少东西，只要包含接口中定义的即可
// printPesonInfo(paramsinfo) // 姓名：wang


type DeepValueFetch<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
  ? DeepValueFetch<T[K]>
  : T[K]
}[keyof T]

const a = {
  a: 1,
  b: 2,
  c: '3',
  d: {
    f: '4'
  }
} as const

type forA = DeepValueFetch<typeof a> & {}




{
  interface DynamicLanguage {
    rank: number // 定义新属性
  }

  interface TypeSafeLanguage {
    typeChecker: string // 定义新的属性
  }

  /** 继承多个 */

  interface TypeScriptLanguage extends DynamicLanguage, TypeSafeLanguage {
    name: 'TypeScript'
  }
  /** ts(6196) 错误的继承，name 属性不兼容 */
  interface WrongTypeLanguage extends TypeScriptLanguage {
    typeChecker: number; //  typeChecker: string; 可以的
  }
}



interface a {
  name:string,
  age:number
}
interface b {
  name:string,
  sex:string
}
// const c:(a|b) = {
//     age:13,
//     sex:'nan'
// }  // 报错
const c:(a|b) = {
  name:'fff',
  age:12,
  sex:'w'
}
// c.age// 报错
c.name 




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