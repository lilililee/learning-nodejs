# learning-nodejs
nodejs test

根据在线教程Nodejs入门编写的测试代码

[nodejs入门](http://nodebeginner.org/index-zh-cn.html)

## 模块划分
### index.js
调用server的接口启动http

### server.js
实例化一个server对象，并对http请求进行监听

### router.js
分发路由，根据url解析出来的目录调用相应的方法

### requestHandler.js
路由指向到这里对请求进行处理s

