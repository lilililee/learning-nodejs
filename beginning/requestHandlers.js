
var exec = require('child_process').exec;

function start(response,post_data) {
	console.log('Request handler -start- was called.');


	//模拟阻塞测试
	//当有start和upload两个请求同时发起时，upload也会被阻塞10s
	// function sleep(time) {
	// 	var start_time = new Date().getTime();
	// 	while (new Date().getTime() < start_time+time);
	// }
	// sleep(10000);

	//(F)非阻塞测试，依旧会有的问题
	// var content = 'It is nothing!';
	// exec('ls -lah',function (error,stdout,stderr) {
	// 	content = stdout;
	// });
	// return content;
	//return 'hello start!';

	//!!最终修正版本
	// exec('ls -lah',function(error,stdout,stderr){
	// 	//response.writeHead(200,{'Content-Type':'Text/plain'});
	// 	response.writeHead(200,{'Content-Type':'Text/plain'});
	// 	response.write(stdout);
	// 	response.end();
	// });

	//再次测试阻塞
	// exec('find /',{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
	// 	//response.writeHead(200,{'Content-Type':'Text/plain'});
	// 	response.writeHead(200,{'Content-Type':'Text/plain'});
	// 	response.write(stdout);
	// 	response.end();
	// });

	//响应post请求
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
	response.writeHead(200,{'Content-Type':'Text/plain'});
	response.write(body);
	response.end();
}

function upload(response,post_data) {
	console.log('Request handler -upload- was called.');
	//(F)
	//return 'hello upload!';
	// response.writeHead(200,{'Content-Type':'Text/plain'});
	// response.write('hello upload!!!');
	// response.end();

	//post请求测试
	console.log('You have send in server:'+post_data);
	response.writeHead(200,{'Content-Type':'Text/plain'});
	response.write('You have send:'+post_data);
	response.end();
}

exports.start = start;
exports.upload = upload;