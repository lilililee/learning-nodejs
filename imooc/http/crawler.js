var http = require('http');
var url = 'http://www.imooc.com/video/7965';
var cheerio = require('cheerio');

//筛选信息
function filterChapters(html){
	var $ = cheerio.load(html);
	// 希望得到的数据结构
	// course_data = [{
	// 	chapter_title: title,
	// 	video_data:[{
	// 		video_id : id,
	// 		title:title
	// 	}]
	// }]
	var course_data = [];
	var chapters = $('.sec-title');
	//console.log(chapter.length);
	chapters.each(function (item1) {		//item表示数组下标
		var chapter_title = $(this).find('span').text();	//使用htnl（）会显示编码
		//console.log(chapter_title);
		var videos = $(this).nextAll();
		var video_data = [];
		videos.each(function(item2){
			var video_id = $(this).attr('data-id');
			var video_title = $(this).find('a').text();
			video_data.push({
				video_id : '      【'+video_id+'】',
				video_title : video_title
			});
		});
		course_data.push({
			chapter_title : chapter_title,
			video_data : video_data
		});
	});
	
	return course_data;
}

//打印筛选后的信息
function printCourseData(course_data) {
	course_data.forEach(function(item){		//forEach是js原生方法，表示一个成员，不是下标
		//console.log(item);
		console.log(item.chapter_title+'\n');
		var video_data = item.video_data;
		video_data.forEach(function(item2){
			//var that = video_data[item2];
			console.log(item2.video_id+item2.video_title+'\n');
		});
	});
}

http.get(url,function(res){
	var html = '';

	res.on('data',function(data){
		html += data;
	});

	res.on('end',function () {
		//筛选信息
		var course_data = filterChapters(html);
		//打印信息
		printCourseData(course_data);
	})
}).on('error',function(){
		console.log('Get data was wrong');
	});