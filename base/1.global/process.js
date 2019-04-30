const fs = require('fs')

// 1. 事件
// 1.1 beforeExit,exit
// process.on('beforeExit', code => {
//   console.log(`即将退出，退出码：${code}`)
// })
// process.on('exit', code => {
//   console.log(`即将退出，退出码：${code}`)
// })

// 1.2 uncaughtException
// process.on('uncaughtException', err => {
//   console.log(`捕获到异常：${err}`)
// })

// setTimeout(() => {
//   console.log('这里仍然会运行。')
// }, 500)

// // 故意调用一个不存在的函数，应用会抛出未捕获的异常。
// nonexistentFunc()
// console.log('这里不会运行。')

// 1.3 unhandledRejection
// let pp
// process.on('unhandledRejection', (reason, p) => {
//     console.log(p === pp)
//     console.log(reason)
//     console.log(p)
// })

// pp = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reject()
//         console.log(11)
//     }, 1000);
// })

process.on('warning', e => {
  console.log(e)
})

process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information'
})

