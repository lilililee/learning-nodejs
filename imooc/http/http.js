var http = require('http');

http.createServer(function(req,res){
	console.log('Reviced a Request');
	res.writeHead(200,{'Content-Type':'Text/plain'});
	res.write('hello nodejs');
	res.end();
}).listen(3000);
console.log('Server has started~');