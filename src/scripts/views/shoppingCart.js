//引入模板
var shoppingCartTpl = require('../tpl/shoppingCart.string');

//定义一个视图
SPA.defineView('shoppingCart',{
	//将模板写在body 里面
	html:shoppingCartTpl,
	
	
	
	//插件列表
	plugins:['delegated'],
	
	//给视图绑定事件
	bindEvents:{
		
	}
})
