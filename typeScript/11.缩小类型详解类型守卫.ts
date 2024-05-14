const getRandomValue = (list: (string | number)[]) => {
  const randomNumber = Math.random() * 10
  if (randomNumber > 5) return list[0]
  else return list[1]
}

const item = getRandomValue([1, 'w'])
// 直接这些写会报错
// 首先第一个问题是返回值的类型不确定是字符还是数字
// 数字是没有length 属性的所以这么写的判断ts 会报错的
if (item.length) {
  console.log(item.length)
} else {
  console.log(item.toFixed())
}

// 解决第一种使用类型断言
// 缺点 每一个item 都要使用对应的类型断言
if ((item as string).length) {
  console.log((item as string).length)
} else {
  console.log((item as number).toFixed())
}

// 第二种使用类型保护
// 类型保护就是使用类型守卫来缩小类型的范围
if (typeof item === 'string') {
  console.log(item.length)
} else {
  console.log(item.toFixed())
}

/* 获取value 值 -- in
1.不能直接通过'. '操作符获取 对象值 需要 用 in */
type Info = {
  name: string
  age: number
}

type Persons = {
  name: string
}

function getName(info: Info | Persons) {
  if (info.age) {
  } // 报错

  if ('age' in info) {
    return info.age
  } else {
    return info.name
  }
}

/* 自定义守卫 -- is
1.往往开发时候会吧一些判单同一封装 像下面的例子虽然封装了，但实际效果却报错
*/
function isString(params: unknown) {
  return typeof params === 'string'
}

function getNames(params: number | string) {
  // if(typeof params === "string") 可以的但是这种重复逻辑一般会封装
  if (isString(params)) {
    return params.length // 报错 现在不会报错了 ?? 
  }
}


