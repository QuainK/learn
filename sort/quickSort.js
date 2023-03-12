/**
 * 快速排序
 * 递归，挖坑法
 * @param arr 要排序的数组
 * @param leftBound 当前递归的子数组的左边界
 * @param rightBound 当前递归的子数组的右边界
 * @return {*} 返回值是数组本身
 */
function quickSort(arr, leftBound = 0, rightBound = arr.length - 1) {

  // 如果子数组长度小于等于2，可以比较大小并输出结果
  let len = rightBound - leftBound + 1
  // console.log('当前区间', leftBound, rightBound, len)
  if (len <= 1) {
    return arr
  }
  if (len === 2) {
    let temp = arr[rightBound]
    if (arr[leftBound] > arr[rightBound]) {
      arr[rightBound] = arr[leftBound]
      arr[leftBound] = temp
    }
    return arr
  }

  // 以数组左右边界为双指针，向中间靠拢直到双指针重合
  let left = leftBound
  let right = rightBound
  // 选取数组的第一个元素作为枢轴pivot
  let pivot = arr[left]

  // 此时左指针留下空位（因为实际数据已经缓存到枢轴里了）
  while (left < right) {
    // 右指针向左移动，直到找到小于枢轴的元素，放到左指针所在空位
    while (arr[right] >= pivot && left < right) {
      right--
    }
    // 左边的空位填上，右边留下新空位
    arr[left] = arr[right]
    arr[right] = ''
    // console.log('right', pivot, left, right, arr)
    // 左指针向右移动，直到找到大于等于枢轴的元素，放到右指针所在空位
    while (arr[left] < pivot && left < right) {
      left++
    }
    // 右边的空位填上，左边留下新空位
    arr[right] = arr[left]
    arr[left] = ''
    // console.log('left', pivot, left, right, arr)
  }

  // 左右指针重合，将枢轴元素放进这里
  arr[left] = pivot

  // console.log('当前区间结果', left, arr)

  // 枢轴的最终位置确定，左右半区间开始递归
  if (leftBound < left - 1) quickSort(arr, leftBound, left - 1)
  if (left + 1 < rightBound) quickSort(arr, left + 1, rightBound)

  return arr
}

//         0  1  2  3  4  5  6  7  8  9
let arr = [4, 1, 7, 6, 9, 2, 8, 0, 3, 5]
console.log(quickSort(arr))
