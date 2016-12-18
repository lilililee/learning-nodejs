var https = require('https');
var fs = require('fs');

var options = {
	key : fs.readFileSync('./privatekey.pem'),		//https密钥文件
	cert : fs.readFileSync('./certificate.pem')		//https证书文件
}

https.createServer(options,function(req,res){
	res.writeHead('200');
	res.end('hello https');
}).listen(3000);

console.log('https server is running')