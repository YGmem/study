
/* 1.交叉类型：我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性,取多个类型的并集 
    简单的说' 交叉类型是将多个类型合并为一个类型',用'&' 来表示
2.下面的案例是将两个对象合并，并且返回合并后的对象 */
const jxType = <T extends object, U extends object>(arg: T, argTwo: U): T & U => {
  let res = {} as T & U
  res = Object.assign(arg, argTwo)

  return res

}



let x = jxType({ a: 1 }, { b: '2' })


/* 3.仅仅把原始类型、字面量类型、函数类型等原子类型合并成交叉类型，是没有任何用处的，因为任何类型都不能满足同时
属于多种原子类型'比如既是 string 类型又是 number 类型' */
type StrAndNum = string & number



/* 1.合并时候两个都有相同定义，但类型不同就会产生一个'无用类型'即类型为never */
// type IntersectionType = { id: number; name: string } & { age: number, id: string }

// const mixed: IntersectionType = {
//   id: 1, // 报错
//   name: 'name',
//   age: 18,
// }


/*number 和 2 子类型因此是 2 所以此时赋值1有问题 */
type IntersectionType = { id: 2; name: string } & { age: number, id: number }

const mixed: IntersectionType = {
  id: 1, // 报错
  name: 'name',
  age: 18,
}


