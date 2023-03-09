function eventLoop1() {
  console.log('script start')

  async function async1() {
    await async2()
    console.log('async1 end')
  }

  async function async2() {
    console.log('async2 end')
  }

  async1()

  setTimeout(function () {
    console.log('setTimeout')
  }, 0)

  new Promise(resolve => {
    console.log('Promise')
    resolve()
  })
    .then(function () {
      console.log('promise1')
    })
    .then(function () {
      console.log('promise2')
    })
  console.log('script end')
}

function eventLoop2() {
  console.log('start')

  setTimeout(() => {
    console.log('setTimeout')
  }, 0)

  new Promise((resolve) => {
    console.log('promise')
    resolve()
  })
    .then(() => {
      console.log('then1')
    })
    .then(() => {
      console.log('then2')
    })

  console.log('end')
}

function eventLoop3() {
  console.log("start")

  setTimeout(() => {
    console.log("setTimeout")
  }, 0)

  new Promise((resolve, reject) => {
    for (var i = 0; i < 5; i++) {
      console.log(i)
    }
    resolve() //修改promise状态为成功
  }).then(() => {
    console.log("promise回调函数")
  })

  console.log("end")
}

function eventLoop4() {
  setTimeout(() => {
    new Promise(resolve => {
      resolve()
    }).then(() => {
      console.log('test')
    })

    console.log(4)
  })

  new Promise(resolve => {
    resolve()
    console.log(1)
  }).then(() => {
    console.log(3)
    Promise.resolve().then(() => {
      console.log('before timeout')
    }).then(() => {
      Promise.resolve().then(() => {
        console.log('also before timeout')
      })
    })
  })
  console.log(2)
}

function eventLoop5() {
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }

  async function async2() {
    console.log('async2')
  }

  console.log('script start')

  setTimeout(() => {
    console.log('setTimeout')
  }, 0)

  async1()

  new Promise((resolve) => {
    console.log('promise1')
    resolve()
  }).then(() => {
    console.log("promise2")
  }).then(() => {
    console.log("promise2_then")
  })
}

function eventLoop6() {
  async function foo() {
    console.log('foo')
  }

  async function bar() {
    console.log('bar	start')
    await foo()
    console.log('bar	end')
  }

  console.log('script	start')
  setTimeout(function () {
    console.log('setTimeout')
  }, 0)
  bar()
  new Promise(function (resolve) {
    console.log('promise	executor')
    resolve()
  }).then(function () {
    console.log('promise	then')
  })
  console.log('script	end')
}

// eventLoop1()
// eventLoop2()
// eventLoop3()
// eventLoop4()
// eventLoop5()
eventLoop6()
