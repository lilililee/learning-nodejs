
var http = require('http');
var url = require('url');

function start(route,handle) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Received '+pathname+' request!');

		//(F)此方法虽然不会阻塞了，但是得不到预期的结果
		// var info = route(handle,pathname);

		// response.writeHead(200,{'Content-Type':'Text/plain'});
		// response.write(info);
		// response.end();

		//针对上面的优化方案，把response传递给路由模块处理
		//route(handle,pathname,response);

		//开始测试对post请求执行响应
		var post_data = '';
		request.setEncoding('utf8');
		//监听data事件，post数据是分片发送过来的
		request.addListener('data',function(some_post_data){
			post_data += some_post_data;
			console.log('Received some post data:'+some_post_data);
		});
		//监听end事件，表示所有post数据接受成功
		request.addListener('end',function () {
			console.log('All post data was received!!');
			route(handle,pathname,response,post_data);
		});
	}


	http.createServer(onRequest).listen(3000);
	console.log('Server has started');
}

exports.start = start;


// http.createServer(function (request,response) {
// 	console.log('received request');
// 	response.writeHead(200,{'Content-Type':'Text/plain'});
// 	response.write('hello worldzzz');
// 	response.end();
// }).listen(3000,function(){
// 	console.log('server is running');
// });

//官方代码
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });