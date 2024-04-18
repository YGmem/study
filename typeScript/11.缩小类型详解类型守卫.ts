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
