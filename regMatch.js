/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let arr = s.split('')
  let patternArr = p.split('')
  // 字符串指针
  let strIndex = 0
  // 模式指针
  // let patternIndex = 0

  // 当前正在匹配的字符串
  let current = ''
  // 遍历模式数组，匹配字符串
  patternArr.forEach((char, i) => {
    // 是字母
    // let deltaA = char.toLowerCase().charCodeAt() - 'a'.charCodeAt()
    // let deltaZ = char.toLowerCase().charCodeAt() - 'z'.charCodeAt()
    // if (deltaA >= 0 && deltaZ <= 0) {
    if (/[a-z]/.test(char)) {
      current += char
    } else {
      // 不是字母，重置
      current = ''
      // 开始判断
      // 看当前模式字符是.还是*
      // TODO
      if (char === '.') {
        // .单个字符
      } else if (char === '*') {
        // *匹配一次
      }
    }
  })
}

// 力扣 10 正则表达式匹配
isMatch('aa', 'a*')
