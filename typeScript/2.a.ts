
// console.log("1"); // 1 同步代码：立即执行 [1]

// setTimeout(function() {
//   console.log("2"); // 3 同步代码执行执行 输出2
//   process.nextTick(function() {
//     console.log("3"); // 4 进入微任务队列 [3]
//   });
//   new Promise(function(resolve) {
//     console.log("4"); // 3 同步代码执行执行 输出4
//     resolve();
//   }).then(function() {
//     console.log("5"); // 4 进入微任务队列 [3, 5]
//   });
// });

// process.nextTick(function() {
//   console.log("6"); // 2 进入微任务队列 [6]
// });

// new Promise(function(resolve) {
//   console.log("7"); // 1 宏任务：立即执行 [1, 7]
//   resolve();
// }).then(function() {
//   console.log("8"); // 2 进入微任务队列 [6, 8]
// });

// setTimeout(function() {
//   console.log("9"); // 5 宏任务：立即执行 [9]
//   process.nextTick(function() {
//     console.log("10"); // 6 进入微任务队列 [10]
//   });
//   new Promise(function(resolve) {
//     console.log("11"); // 5 宏任务：立即执行 [9, 11]
//     resolve();
//   }).then(function() {
//     console.log("12"); // 6 进入微任务队列 [10, 12]
//   });
// });


// 执行顺序：1 7 6 8 2 4 3 5 9 11 10 12


Promise.resolve().then(() => {
  console.log(0)
  return Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(4))))))  // 这里不管多少层 只会创建两层微任务
}).then((res) => {
  console.log(res);
  console.log(7)
})
Promise.resolve().then(() => {
  console.log(1)

}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
  setTimeout(() => {
    console.log(8);
  }, 0);
}).then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})
