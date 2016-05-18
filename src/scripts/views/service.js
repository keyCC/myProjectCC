//引入模板
var serviceTpl = require('../tpl/service.string');

//定义一个视图
SPA.defineView('service',{
	//将模板写在body 里面
	html:serviceTpl,
	
	
	
	//插件列表
	plugins:['delegated'],
	
	//给视图绑定事件
	bindEvents:{
		
	}
})
