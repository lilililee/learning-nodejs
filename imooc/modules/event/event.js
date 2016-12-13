
var EventEmitter = require('events').EventEmitter;

var boy = new EventEmitter();

boy.setMaxListeners(11);	//可修改最多绑定同一事件个数

//绑定事件用on或eventListener，两者一样
boy.on('speak',function(word){
	console.log('1.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('2.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('3.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('4.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('5.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('6.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('7.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('8.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('9.the boy speak :'+word);
});

boy.on('speak',function(word){
	console.log('10.the boy speak :'+word);
});

//默认可绑定同一事件10个，多了能执行，但会有警告！
// boy.on('speak',function(word){		
// 	console.log('11.the boy speak :'+word);
// });
boy.on('sing',function(word){			//还可以绑定其他事件，而且能正常运行
	console.log('1.the boy sing :'+word);
});

//移除事件
//这样绑定的匿名函数不能移除
// boy.on('sing',function(word){			
// 	console.log('1.the boy sing :'+word);
// });
//修改如下
function forSing(word) {
	console.log('22.the boy sing :'+word);
}
boy.on('sing',forSing);
//boy.removeListener('sing',forSing);			//单个移除事件，只有这一个方法，没有off方法
//boy.removeAllListeners('speak');			//批量移除事件，不传参数时移除所有事件

//事件统计
console.log('事件绑定统计,方法一：'+boy.listeners('speak').length);
console.log('事件绑定统计,方法二：'+boy.listenerCount('speak'));	//两种方法都可以，必须都传入事件名




//触发事件
boy.emit('speak','one word');
boy.emit('sing','one word');