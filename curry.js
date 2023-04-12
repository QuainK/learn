/* 正常函数 */

// function sum(a, b) {
//   console.log(a + b)
// }
// sum(1, 2)
// sum(1, 3)

/* 柯里化函数 */
function currySum(a) {
  return function (b) {
    console.log(a + b)
  }
}

const sum = currySum(1)
sum(2)
sum(3)
