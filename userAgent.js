function getDevice() {
  console.log(navigator.platform, navigator.userAgent)
  let ua = navigator.userAgent.toLowerCase()
  let up = navigator.platform.toLowerCase()
  if (ua.indexOf('iphone') > -1) {
    return 'iphone'
  } else if (ua.indexOf('ipad') > -1 || up === 'macintel') {
    return 'ipad'
  } else if (ua.indexOf('android') > -1) {
    return 'android'
  } else {
    return 'pc'
  }
}

console.log(getDevice())
