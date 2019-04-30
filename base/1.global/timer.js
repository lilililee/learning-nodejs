const fs = require('fs')

// loop event
// 1.
setTimeout(() => {
    console.log(1)
},0)


setImmediate(() => {
    console.log(2)
})

// 输出： 随机运行
// 结论： timer在一次event loop中可能在两个地方执行，最开始以及close callbacks结束之后

// 2.
fs.readFile('./timer.js', (err, data) => {
    console.log(data)

    setTimeout(() => {
        console.log(1)
    },1)
    
    
    setImmediate(() => {
        console.log(2)
    })
    
})

// 输出： 2 1
// 结论： 在i/o事件回调中，会遵循 setImmediate 优先执行