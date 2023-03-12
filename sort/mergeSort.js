function mergeSort(arr1, arr2) {
  let result = []

  // 用两个指针，比较两个数组当前元素大小，取出较小的那个
  let i = 0
  let j = 0
  for (let k = 0; k < arr1.length + arr2.length; k++) {
    console.log('i =', i, 'j =', j)
    // 如果其中一个数组已经全部取出
    // 另一组剩下的一次性全部放进去
    if (i >= arr1.length) {
      while (j < arr2.length) {
        result.push(arr2[j])
        j++
      }
      break
    } else if (j >= arr2.length) {
      while (i < arr1.length) {
        result.push(arr1[i])
        i++
      }
      break
    }

    // 取出两个数组里较小的当前元素
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i])
      if (i < arr1.length) i++
    } else {
      result.push(arr2[j])
      if (j < arr2.length) j++
    }

    console.log('result', result)
  }

  return result
}

/**
 * 第二版
 */
function mergeSortVer2(arr1, arr2) {
  let result = []

  // 两个数组不断比较元素大小，将小的元素放进结果数组
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }

  // 如果其中一个数组已经取完了，剩下的数组直接全部放进结果数组
  while (arr1.length) {
    result.push(arr1.shift())
  }
  while (arr2.length) {
    result.push(arr2.shift())
  }

  return result
}

let mergeArr1 = [1, 2, 3]
// let mergeArr1 = [1, 6, 9]
let mergeArr2 = [1, 3, 5]
console.log(mergeSort(mergeArr1, mergeArr2))
