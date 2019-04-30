const readline = require('readline');
// const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  rl.write(`多谢你的反馈：${answer}`);        // 打印
  //console.log(`多谢你的反馈：${answer}`);   // 效果同上
  rl.close()
});

rl.on('close', () => {
    console.log('close')
})


// console.log('hello'.black); // outputs green text
// console.log('hello'.red); // outputs green text
// console.log('hello'.green); // outputs green text
// console.log('hello'.yellow); // outputs green text
// console.log('hello'.blue); // outputs green text
// console.log('hello'.magenta); // outputs green text
// console.log('hello'.cyan); // outputs green text
// console.log('hello'.white); // outputs green text
// console.log('hello'.gray); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass