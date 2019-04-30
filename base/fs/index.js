const fs = require('fs')
const path = require('path')
const os = require('os')

const cb = (...args) => console.log(args)

// fs.stat('./index.js', (err, res) => {
//     // console.log(res.isBlockDevice())
//     // console.log(res)

// })

// fs.realpath('./index.js', (err, res) => {
//   console.log(err)
//   console.log(res)
//   console.log(path.relative(__dirname, './index.js'))

// })
// fs.renameSync('stat2.js','stat.js')

// fs.unlink('files/project.lnk', (err) => {
//   if (err) throw err;
//   console.log('文件已删除');
// });

// fs.watch('stat.js',(err, res) => {
//   if (err) throw err;
//   console.log('res',res)
// })

// fs.watch('../', {recursive :true}, (eventType, filename) => {
//   console.log(`事件类型是: ${eventType}`);
//   if (filename) {
//     console.log(`提供的文件名: ${filename}`);
//   } else {
//     console.log('文件名未提供');
//   }
// });
// const rs = fs.createReadStream('sta1t.js');
// const ws = fs.createWriteStream('sta2t.js');

// rs.on('data', chunk => {
//   console.log('读取文件数据:', chunk);
// })
// // ws.on('data', chunk => {
// //   console.log('写入文件数据:', chunk);
// // })

// rs.pipe(ws)

// fs.writeFile('./aa.js', 'dsdsxx', () => {})

// fs.rename('files', 'files', (err) => {
//   if (err) throw err;
//   console.log('重命名完成');
// });

// console.log(global)

// fs.watchFile('sta1t.js', (curr, prev) => {
//   console.log(`当前的最近修改时间是: ${curr.mtime}`);
//   console.log(`之前的最近修改时间是: ${prev.mtime}`);
// });

// console.log(os.cpus())

// fs.open('bb', 'a', (err, fd) => {
//   console.log(err)
//   console.log('fd', fd)

//   // fs.write(fd, '111',(...args) => {
//   //   console.log(args)
//   // })
// })

// fs.mkdirSync('bb.js')

// fs.writeFile('./bb.js', 'aa', cb)
// fs.writeFileSync('./bb2.js', 'aa1')

// fs.copyFile('aa.js', 'aa2.js',cb)

// fs.rename('bb.js', 'bb',(...args) => {
//   console.log(args)
// })

// fs.link('aa.js', 'files', cb)

// fs.symlink('aa.js', 'aa-link.js', cb)

// fs.stat('aa-link.js',cb)
// fs.lstat('aa-link.js',cb)

// fs.rmdir('bb',cb)

// console.log(os.freemem())
// Object.keys(os).forEach(key => {
//   console.log(key, typeof os[key] === 'function' ? os[key]() : os.key)
// })


// const p = '/foo/bar/baz/test.js'
// console.log(path.dirname(p))  // /foo/bar/baz
// console.log(path.basename(p)) // test.js
// console.log(path.extname(p))  // .js
// console.log(path.basename(p))


class aa {

  get b() {
    return 2
  }
}