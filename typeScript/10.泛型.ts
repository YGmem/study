/* 什么是泛型
1.泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的
类型，而在使用的时候再指定类型的一种特性。
2.泛型指的是类型参数化，即将原来某种具体的类型进行参数化。和定义函数参数一样，我们可以给泛型定义
若干个类型参数，并在调用时给泛型传入明确的类型参数。设计泛型的目的在于有效约束类型成员之间的关系，
比如函数参数和返回值、类或者接口成员和方法之间的关系。
3.也就是说在使用时候可以规定类型，让其动态起来，来解决上面的问题 */

// function getParams(params: unknown) {
//   return params
// }
// // 虽然传入的参数是字符，确定知道返回类型也是字符串，但实际类型推导是unknown
// // 并不能将unknown 根据传入参数实时推导
// getParams("1")

/* 使用联合类型来改造 */
// function getParamsTwo(params: string | number) {
//   return params
// }

// // 但是相对的类型也为联合类型
// getParamsTwo("1")

/* 使用函数重载 -- 完美解决现在问题 */
// function getParams(params: number): number
// function getParams(params: string): string
// function getParams(params: unknown) {
//   return params
// }

// getParams('1')

// function getParams<T>(params: T): T {
//   return params
// }

// getParams<number>(1)
// getParams<number>("1") // 报错因为已经指定的类型为number了

function getParams<T>(p: T): T {
  return p
}

getParams('1')

function reflectArray<P>(param: P[]) {
  return param
}

const reflectArr = reflectArray([1, '1']) // reflectArr 是 (string | number)[]

// function getArray<T, U>(value1: T, value2: U, items: number = 5): Array<[T, U]> {
//   return new Array(items).fill([value1, value2])
// }

// getArray("1", 1, 1).forEach((items) => {
//   console.log(items[0].length)
//   console.log(items[1].length) // 帮我们自动检测数字没有length 属性
// })

// let getArray: <T>(arg: T, times: number) => T[]

// // 泛型对应参数类型为any
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }
// getArray(123, 3).map((item) => item.length) //  报错帮你自动检测了

// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }

//泛型和 interface
interface KeyPair<T, U> {
  key: T
  value: U
}

let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123 }

interface ReturnItemFn<T> {
  (para: T): T
}
const returnItem: ReturnItemFn<number> = (para) => para
// const returnItem: ReturnItemFn<number> = (para: any) => para

/* 泛型类 generic class */

// 在代码中存在一个问题，它允许你向队列中添加任何类型的数据，当然，当数据被弹出
// 队列时，也可以是任意类型。在上面的示例中，看起来人们可以向队列中添加string 类型的数据
// 但是那么在使用的过程中，就会出现我们无法捕捉到的错误，
// class Queue {
//   private data: unknown[] = []
//   push(item: unknown) {
//     return this.data.push(item)
//   }
//   pop() {
//     return this.data.shift()
//   }
// }

// const queue = new Queue()
// queue.push(1)
// queue.push('str')

//   用泛型改造 Transform with Generics
class Queue<T> {
  name: T[]
  push(a: T) {
    return this.name.push(a)
  }
  pop() {
    return this.name.pop()
  }
}

let a = new Queue<Number>()

a.push(1)
let bb = a.pop()

/* 泛型约束 类型约束 */
function cc<T extends string | number>(a: T) {
  return a
}

// cc(true) // x 类型“boolean”的参数不能赋给类型“string | number”的参数。
cc(1)
cc('1')

/* 泛型约束 必须包含约束 */
interface sun<T extends { id: number; name: string }> {
  state: T
}

let a1: sun<{ id: number; name: string }> // 在内可以
let a2: sun<{ id: number; name: string; age: number }> // 多可以
let a3: sun<{ id: string; name: string }> // 少 或类型不同不行

// 泛型约束结合索引类型的使用
// 1.看下面案例想 获取对象value 输出出来
// type Info = {
//   name: string
//   age: number
// }

// function getVal(obj: Info, key: any) {
//   return obj[key] // 报错
// }

let a4 = getVal({ name: '1', age: 1 }, 'a')

type Info = {
  name: string
  age: number
}

/* keyof 相当于把类型的key取出来当成一个联合类型 就是必须是其中一个 */
function getVal(obj: Info, key: keyof Info) {
  return obj[key]
}

let a5 = getVal({ name: '1', age: 1 }, 'a')
let a6 = getVal({ name: '1', age: 1 }, 'name')

/* keyof 可以用来约束对象的key */
type GetVal = <T extends Object, K extends keyof T>(obj: T, key: K) => T[K]
const a11: GetVal = (obj, key) => {
  return obj[key]
}

a11({ name: 1 }, 'nam')
a11({ name: 1 }, 'name')

/* 多重约束 */
interface a {
  a(): string
}
interface b {
  b(): string
}

class demo<T extends a & b> {
  c: T

  use() {
    this.c.a() // 可以
    this.c.b() // 可以
    this.c.d() // 没有
  }
}

/* 泛型类 */

function f<T>(fn: T): T {
  return new fn() // 此表达式不可构造。 类型 "unknown" 没有构造签名。ts(2351)
}

function f2<T>(fn: new () => T): T {
  // 用 new ()=> 就可以
  return new fn()
}

/* ts的泛型 */

/* 泛型约束 -- 来约束泛型参数
1.现在泛型会根据你传入的值还进行动态类型，问题来了有一些不具备我们代码中属性的值传入，会导致编译
阶段报错如图一，这时候需要对泛型传入的参数加以约束，这时候使用泛型约束
2.思路就是让泛型类型去继承接口或者一些类，让在编译过程去检测传入的，泛型约束需要关键字('extends')
泛型是具有当前指定的属性
3.简单的说泛型约束解决在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操
作它的属性或方法
4.有些更详细的案例可以看一下开篇文章的地址
 */

interface L {
  length: number
}

function f3<T extends L>(a: T, time: number): T[] {
  return new Array(time).fill(a)
}

f3([1, 2], 5)
f3('12', 5)
f3(1, 5) // 报错 数字类型是没有length 的
