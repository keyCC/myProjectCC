//引入模板
var mallTpl = require('../tpl/mall.string');

//定义一个视图
SPA.defineView('mall',{
	//将模板写在body 里面
	html:mallTpl,
	
	
	
	//插件列表
	plugins:['delegated'],
	
	//给视图绑定事件
	bindEvents:{
		
	}
})
