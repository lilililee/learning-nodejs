var http = require('http');
//var cheerio = require('cheerio');
var base_url = 'http://www.imooc.com/learn/';

function catchSinglePage(id) {
	return new Promise(function (resolve,reject) {
		var url = base_url + id;
		http.get(url,function(res){
			var html = '';
			//接收数据
			res.on('data',function(chunk){
				html += chunk;
			});
			//接受完后开始处理
			res.on('end',function(){
				console.log(html);
				dealDate(html);
				resolve();
			});
		});

		function dealDate(html){

		}
	});
}

catchSinglePage(259);

// var url = base_url;
// http.get(url,function(res){
// 	var html = '';
// 	//接收数据
// 	res.on('data',function(chunk){
// 		html += chunk;
// 	});
// 	//接受完后开始处理
// 	res.on('end',function(){
// 		console.log(html);
// 		dealDate(html);
// 		//resolve();
// 	});
// });

// function dealDate(html){

// }
