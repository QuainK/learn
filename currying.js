function sum(a, b, c, d, e) {
  console.log(a + b + c + d + e)
}

// sum(1, 2, 3, 4, 5)

function sumCurrying(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          // console.log(a, b, c, d, e)
          console.log(a + b + c + d + e)
        }
      }
    }
  }
}

sumCurrying(1)(2)(3)(4)(5)
