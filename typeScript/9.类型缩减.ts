/* 1.接口类型一旦定义了任意属性那么'确定属性和可选属性的类型都必须是它的类型的子集'，never是所有类型的子集 */

// 之前为了可以定义一个age 属性是number，但是有可以有不确参数我们需要将不却参数扩大可以包含age，形成父子级
// interface Person {
//   name: string
//   age: number // 报错
//   [propName: string]: string // 改正 [propName: string]: any; 或者 [propName: string]: string|number
// }


// 利用类型缩减 和never 是任意类型子集 即可声明一个 name 是string age 是number 并且其他任意key 类型是string类型
type Person =
  | {
    name: string
    age: number
  }
  | {
    age: never
    [propName: string]: string
  }


/* 这里如果对象里面有 name 那么age就必须是 number ,如果没有name age如果不为never 那么也会报错必须有name */
let per: Person = { name: '1', age: 2, www: '2' }

