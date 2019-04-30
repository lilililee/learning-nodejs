const cpu = process.cpuUsage()
const execPath = process.execPath

process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`数据: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('结束');
// });




console.log("请输入用户名11:");
process.stdin.on('data',(input)=>{
  input=input.toString().trim();
  
  process.stdout.write("当前输入内容:\n" + input);
	// if(!username){
	// 	if(Object.keys(users).indexOf(input)===-1){
	// 		process.stdout.write('用户名不存在'+'\n');
	// 		process.stdout.write("请输入用户名:");
	// 		username="";
	// 	}
	// 	else 
	// 	{
	// 		process.stdout.write("请输入密码:");
	// 		username=input;
	// 	}
	// }
	// //输入密码
	// else{
	// 	if(input===users[username]){
	// 		console.log("登陆成功");
	// 	}
	// 	else{
	// 		process.stdout.write("请输入密码"+"\n");
	// 	}
		
	// }
});