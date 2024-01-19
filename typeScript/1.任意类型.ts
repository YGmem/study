// any 任意类型 unknown 不知道的类型 

// 类型排序
// 1 any unknown  
// 2 Object
// 3 Number String Boolean
// 4 number String boolean 
// 5 1 '阳光' false
// 6 never
 
// any 和 unknown 的区别在于 any 可以赋值给任意类型 但是unknown 只能赋值给 any或者他自己 所以unknown 是要比any 更加安全的 可以优先考虑使用 unknown 

// 且any类型是对象的话可以引用对象内部的属性 但是unknown不行

// 相同点在于 他们都可以被赋值任意类型
let a:any = {'阳光':"帅"}
let a2:any
let a3:any

console.log(a['阳光']); // any 可以引用内部属性方法等

a = 2
a = {}
a = []

a2 = a
a3 = a // 可以赋值给任意类型

let b:unknown = {"阳光":"帅"}
let b2:unknown
let b3:number

console.log(b.['阳光']); // 报错 

b = 2
b = {}
b = []

b2 = b 
a = b

b3 = b // 报错因为unknown 不能赋值给除了 any 和 unknown 以外的类型
