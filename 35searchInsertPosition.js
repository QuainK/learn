/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target)
}

/**
 * 二分查找
 * @param arr 要查找的数组
 * @param left 左边界
 * @param right 右边界
 * @param target 目标值
 */
function binarySearch(arr, left = 0, right = arr.length - 1 || 0, target) {
  console.log(arr, left, right, target)

  // 如果左右边界出错
  if (left > right) {
    return -1
  }

  // 如果仅有一位
  if (left === right) {
    // 刚好相等，则找到这个元素
    // 比它小，则插入位置就是当前元素的位置
    // 比它大，则插入位置就是当前元素后面一个位置
    return target <= arr[left] ? left : left + 1
  }

  // 计算出中间的位置
  let middle = Math.floor((left + right) / 2)
  console.log('middle', middle, arr[middle])

  // 目标值和中间位置的元素比较大小
  if (target === arr[middle]) {
    // 和它相等，则直接找到
    return middle
  } else if (target < arr[middle]) {
    // 比它小，则向左半区间查找
    return binarySearch(arr, left, middle, target)
  } else {
    // 比它大，则向右半区间查找
    return binarySearch(arr, middle + 1, right, target)
  }
}

let nums = [1, 3, 5, 6], target = 5
// let nums = [1, 3, 5, 6], target = 2
// let nums = [1, 3, 5, 6], target = 7
console.log(searchInsert(nums, target))
