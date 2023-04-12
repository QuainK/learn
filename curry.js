/* 正常函数 */

// function sum(a, b) {
//   console.log(a + b)
// }
// sum(1, 2)
// sum(1, 3)

/* 柯里化函数 */
// function currySum(a) {
//   return function (b) {
//     console.log(a + b)
//   }
// }

// const sum = currySum(1)
// sum(2)
// sum(3)

// 函数柯里化封装（这个封装可以直接复制走使用）
function curry(fn, args) {
  const length = fn.length
  args = args || []
  return function () {
    let newArgs = args.concat(Array.prototype.slice.call(arguments))
    console.log('curry', fn, length, args, newArgs)
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

// 需要被柯里化的函数
function multiFn(a, b, c) {
  return a * b * c
}

// multi是柯里化之后的函数
const multi = curry(multiFn)
console.log(multi(2)(3)(4))
console.log(multi(2, 3, 4))
console.log(multi(2)(3, 4))
console.log(multi(2, 3)(4))
