//引入模板
var homeTpl = require('../tpl/home.string');

//定义一个视图
SPA.defineView('home',{
	//将模板写在body 里面
	html:homeTpl,
	
	
	
	//插件列表
	plugins:['delegated'],
	
	//给视图绑定事件
	bindEvents:{
		//在视图还没有打开的时候触发
		beforeShow:function(){
			var mySwiper = new Swiper('#home-swiper',function(){
			loop:true;
			autoplay:1000;
			pagination : '.swiper-pagination';
			})
		}
	}
})
