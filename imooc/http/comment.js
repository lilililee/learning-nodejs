//模拟慕课网评论提交

var http = require('http');
var querystring = require('querystring');

var post_data = querystring.stringify({			//序列化成json对象
	'content' : '唛哩唛哩轰，测试成功！',
	'mid' : 8837
});

var options = {
	hostname : 'www.imooc.com',
	port : 80,
	path : '/course/docomment',
	method : 'POST',
	headers : {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':post_data.length,	//服务器可能会做内容长度验证，拒绝请求，所以使用这个
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=71578477-ca83-451c-821a-08a45d2cafce; imooc_isnew_ct=1474213982; last_login_username=466066891%40qq.com; PHPSESSID=opp21i1rdb7koivhvomfp90ff2; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=79; loginstate=1; apsid=lhOGJkOWUzYmFjZWFiZjkxZDgzN2IwM2E1M2M0MjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDU5NjMwNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQ3NjM3NTJlOTVlYmUxZjZlOGRlMWMwMjYwMjVkOTE4zglQWM4JUFg%3DNz; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1481198267,1481338166,1481436497,1481635180; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1481640871; imooc_isnew=2; cvde=584ff5c31d773-58',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end',function () {
		console.log('评论成功！')
	})
});

req.on('error',function(err){
	console.log('Error:'+err.message);
})

req.write(post_data);	//发送request数据给imooc网
req.end();


