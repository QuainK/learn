// x.y.z
// 1.0.15.10989
// [str1, str2, ...]
// sorted

function sortVersion(list) {
  // 使用JS自带sort方法
  return list.sort((version1, version2) => {
    // 将字符串按.分割成数组，并将字符串类型string强制转成number类型
    const arr1 = version1.split('.').map(e => e * 1)
    const arr2 = version2.split('.').map(e => e * 1)

    console.log(arr1, arr2)

    // 迭代比较版本号每段
    // 两者版本号长度不一定相同
    const len = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < len; i++) {
      // 如果当前段位的版本号不存在，则默认为0
      // version1比version2大
      if ((arr1[i] || 0) > (arr2[i] || 0)) return 1
      // version1比version2小
      if ((arr1[i] || 0) < (arr2[i] || 0)) return -1
    }

    // 一样大
    return 0
  })
}

let list = ['1.0.0', '2.0.1', '1.1.2', '0.0.1.1201', '3.0']
console.log(sortVersion(list))
