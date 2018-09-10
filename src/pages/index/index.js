require('./index.css');
require('pages/common/logo')
require('pages/common/footer');
require('pages/common/nav');
require('pages/common/search');
require('util/carousel');


var _util=require('util');
var keyWordsTpl=require('./keywords.tpl');
var carouselTpl=require('./carousel.tpl');



//登录页面逻辑
var page={
	keywords:[//keyword是每一个li
		{item:[{name:'手机'},{name:'华为'},{name:'宠物'}]},//item是每一个a
		{item:[{name:'女装'},{name:'秋装'},{name:'鲜花'}]},
		{item:[{name:'鞋靴'},{name:'箱包'},{name:'配件'}]},		
		{item:[{name:'家电'},{name:'数码'},{name:'家饰'}]},
		{item:[{name:'美妆'},{name:'洗护'},{name:'保健品'}]},
		{item:[{name:'珠宝'},{name:'手表'},{name:'眼镜'}]},
		{item:[{name:'运动'},{name:'户外'},{name:'乐器'}]},
		{item:[{name:'游戏'},{name:'动漫'},{name:'影视'}]},
		{item:[{name:'美食'},{name:'生鲜'},{name:'零食'}]},
		{item:[{name:'童装玩具'},{name:'孕产'},{name:'用品'}]},
	],
	carousel:[
		{categoryId:'1111',image:require('images/carousel/01.jpg')},
		{categoryId:'2222',image:require('images/carousel/02.jpg')},
		{categoryId:'3333',image:require('images/carousel/03.jpg')},
		{categoryId:'4444',image:require('images/carousel/04.jpg')},
		{categoryId:'5555',image:require('images/carousel/05.jpg')},
	],
	init:function(){
		this.loadKeyWords();
		this.loadCarousel();
	},
	loadKeyWords:function(){
		//调用hogan函数
		var html=_util.render(keyWordsTpl,{
			keywords:this.keywords
		});
		$('.keywords').html(html)
	},
	loadCarousel:function(){
		//调用hogan函数
		var html=_util.render(carouselTpl,{
			carousel:this.carousel
		});
		$('.carousel').html(html);

		//轮播图事件
		var $carousel=$('.carousel').unslider({
			dots: true,
			keys: true
		});
		//按钮事件
		$('.arrow').on('click',function(){
			let direction=$(this).hasClass('next') ? 'next' : 'prev';
			$carousel.data('unslider')[direction]();
		})
	}
}

$(function(){
	page.init()
})