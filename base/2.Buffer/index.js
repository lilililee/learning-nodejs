let buf = Buffer.alloc(10, 266)

// console.log(Buffer.byteLength('我们'))

// console.log(Buffer.compare(Buffer.alloc(9, 2), Buffer.alloc(10, 1)))

// console.log(Buffer.isEncoding('utf-238'))

// console.log(buf[0])   // 10 number 类型  范围0-256
// console.log(buf[10])  // undefined

// console.log(buf.buffer)  // ArrayBuffer { byteLength: 10 }
// console.log(buf.byteOffset)  // 0

// let buf1 = Buffer.from('abcd')
// let buf2 = Buffer.from('efgh')
// console.log(buf1)
// console.log(buf2)
// buf.copy(buf2, 1, 1, 2)

// console.log(buf1)
// console.log(buf2)

// for (const key of buf.keys()) {
//   console.log(key)
// }

// console.log(buf.toJSON())  // { type: 'Buffer',data: [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ] }

