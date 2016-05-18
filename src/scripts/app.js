require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

//views
require('./views/home.js');
require('./views/mall.js');
require('./views/shoppingCart.js');
require('./views/service.js');
require('./views/index.js');

//定义默认视图
SPA.config({
	indexView:'index'
})


