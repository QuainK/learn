// x.y.z
// 1.0.15.10989
// [str1, str2, ...]
// sorted

function sortVersion(arr) {
  // console.log(arr)

  // 记录最大长度，防止递归溢出
  let maxLength = 0

  // 按.分割每个版本号
  arr = arr.map((version) => {
    // number
    let versionCharList = (version.split('.')).map(char => parseInt(char))
    maxLength = Math.max(versionCharList.length, maxLength)
    return versionCharList
  })

  console.log('maxLength', maxLength)

  // console.log(arr)
  // 遍历数组元素每个元素的第一项，作为主版本号
  // arr.sort((a, b) => {
  //   return b[0] - a[0]
  // })
  sortSubArr(arr, 0, arr.length, 0, maxLength)

  // 数组再用.拼接还原成字符串
  return arr.map(version => version.join('.'))
}

/**
 * 排序子数组
 * @param arr 数组
 * @param left 左边界
 * @param right 有边界
 * @param depth 递归的深度，同时也是索引为depth的点.前面的数字
 */
function sortSubArr(arr, left, right, depth = 0, maxDepth = 0) {
  // 如果递归深度超过数组最大长度，退出
  if (depth > maxDepth) return

  let subLeft = left, subRight = right
  console.log('------------------', arr, left, right, depth)
  // 如果数组长度小于2，排好序，直接返回
  if (right - left < 2) return

  // 遍历当前子数组
  for (let i = left + 1; i <= right; i++) {
    // 如果这层版本号不存在，则默认为0，放到最后
    (arr[i - 1][depth]) || (arr[i - 1][depth] = 0);
    (arr[i][depth]) || (arr[i][depth] = 0)
    // 否则正常排序
    // 当前等级的版本号一致，可以放到一组里排序
    // TODO
    if (arr[i][depth] === arr[i - 1][depth]) {
      subRight = i
    } else {
      // 当前等级的版本号不同，前面这组可以开始内部排序了
      // 递归深度+1
      sortSubArr(arr, subLeft, subRight, ++depth, maxDepth)
      // 重置双指针
      subLeft = i
      subRight = i
    }
  }
}

let arr = ['1.0.0', '2.0.1', '1.1.2', '0.0.1.1201', '3.0']
console.log(sortVersion(arr))
