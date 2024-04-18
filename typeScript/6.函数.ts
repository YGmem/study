// let add: (x: number, y: number) => number

const add2: (x: number, y: number, z?: number) => number = add

/* 重载 传入什么类型就是什么 返回类型就是什么 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): any {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}



// 如果y 有值返回的是 x+y 的字符串
// 如果y 没值返回是 x
// function convert(x: number, y?: string) {
//   if (y) {
//     return String(x) + y
//   }
//   return x
// }
// const str = convert(1, '1') // 类型推导const str: string | number
// const num = convert(1) // 类型推导const num: string | number


function aaa([a, b]: [string, number]) {

}

function convert(x: number): number
function convert(x: number, y: string): string
function convert(x: number, y?: string) {
  if (y) {
    return String(x) + y
  }
  return x
}
const str = convert(1, '1') // 类型推导const str: string 
const num = convert(1) // 类型推导const num:  number


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;

