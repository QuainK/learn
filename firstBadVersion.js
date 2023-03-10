/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

isBadVersion = function (version) {
  return version >= 27
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return binarySearch(1, n)
  }

  function binarySearch(left, right) {
    // let middle = Math.floor((left + right) / 2)
    // 防止数值过大，求中值时溢出
    let middle = Math.floor((left + (right - left) / 2))

    console.log('middle', middle)

    // 前一个版本正常，当前版本错误，那就找到结果，返回这个版本
    if (left >= right) {
      return isBadVersion(left) ? left : -1
    }

    if (isBadVersion(middle)) {
      // 错误比中间版本早或者就是错误版本，往前查找
      return binarySearch(left, middle)
    } else {
      // 错误比中间版本晚，往后查找
      return binarySearch(middle + 1, right)
    }
  }
}

console.log(solution(isBadVersion)(60))
