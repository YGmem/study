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


const c: forA
