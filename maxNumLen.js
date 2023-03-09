function maxNumLen(arr) {
  // 空数组没有结果，返回0
  if (arr.length < 1) return 0

  // 数组升序排序
  arr = arr.sort((a, b) => (a - b))
  // console.log('sorted arr', arr)

  // 当前连续长度
  let currentLen = 1
  // 当前下一个数字是
  // let expectedNum = 0
  // 最大连续长度
  let maxLen = 1

  // 遍历数组，判断后一个元素是否和前一个元素相邻
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === arr[i] + 1) {
      // 如果是后比前大1
      // 增大当前连续长度
      currentLen++
      // 如果当前连续数字的子串长度超过最大值，更新最大值
      if (currentLen > maxLen) {
        maxLen = currentLen
      }
    } else if (arr[i + 1] === arr[i]) {
      // 如果是相等
      // 直接跳过
    } else {
      // 重置计数器
      currentLen = 1
    }
  }

  // 返回结果
  return maxLen
}

let testArr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// let testArr = [100, 4, 200, 1, 3, 2]
// let testArr = [1, 2, 0, 1]
// let testArr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
console.log(maxNumLen(testArr))
