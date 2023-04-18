// 提供操作的对象
const o = { a: 111, b: 222 }

// 真正的对象
const _o = { a: 'qqq', b: 'www' }

Object.defineProperty(o, 'b', {
  configurable: true,
  enumerable: true,
  get() {
    // 读取真正的对象
    return _o.b
  },
  set(val) {
    // 将新值赋值给真正的对象
    _o.b = val
  }
})

console.log('修改o.b前', o.b, _o.b)
o.b = 123123
console.log('修改o.b后', o.b, _o.b)

console.log('修改_o.b前', o.b, _o.b)
_o.b = 'qwe'
console.log('修改_o.b后', o.b, _o.b)
