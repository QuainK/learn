/**
 * 手动封装Promise
 * @param func 同步任务
 * @param successCallback 成功状态的回调
 * @param errorCallback 失败状态的回调
 */
function myPromise(func, successCallback, errorCallback) {
  new Promise((resolve, reject) => {
    // 根据同步任务的布尔返回值判断Promise状态
    func() ? resolve('then') : reject('catch')
  }).then((res) => {
    successCallback(res)
  }).catch((err) => {
    errorCallback(err)
  })
}

myPromise(() => {
  console.log('exec promise sync task')
  // 模拟Promise成功或者失败，各一半概率
  return Math.random() < .5
}, (res) => {
  console.log('success', res)
}, (err) => {
  console.log('error', err)
})
