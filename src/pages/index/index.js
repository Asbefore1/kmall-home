require('./index.css');
require('pages/common/logo')
require('pages/common/footer');
require('pages/common/nav');
require('pages/common/search');
require('util/carousel');


var _util=require('util');
var keyWordsTpl=require('./keywords.tpl');
var carouselTpl=require('./carousel.tpl');
var floorTpl=require('./floor.tpl');



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
	floor:[
		{
			title:'F1 手机电脑',
			item:[
				{categoryId:'1111',text:'荣耀8X系列',image:require('images/floor/floor-01.jpg')},
				{categoryId:'2222',text:'红米S2 64G',image:require('images/floor/floor-02.jpg')},
				{categoryId:'3333',text:'华为P20系列',image:require('images/floor/floor-03.jpg')},
				{categoryId:'4444',text:'OPPO R17',image:require('images/floor/floor-04.jpg')},
				{categoryId:'5555',text:'vivo X23',image:require('images/floor/floor-05.jpg')}
			]
		},
		{
			title:'F2 数码汽车',
			item:[
				{categoryId:'1111',text:'奥林巴斯',image:require('images/floor/floor-06.jpg')},
				{categoryId:'2222',text:'3C配件',image:require('images/floor/floor-07.jpg')},
				{categoryId:'3333',text:'奇瑞',image:require('images/floor/floor-08.jpg')},
				{categoryId:'4444',text:'海马',image:require('images/floor/floor-09.jpg')},
				{categoryId:'5555',text:'别克',image:require('images/floor/floor-10.jpg')}
			]
		},
		{
			title:'F3 生活家装',
			item:[
				{categoryId:'1111',text:'客厅家具',image:require('images/floor/floor-11.jpg')},
				{categoryId:'2222',text:'午睡椅 ',image:require('images/floor/floor-12.jpg')},
				{categoryId:'3333',text:'电视柜',image:require('images/floor/floor-13.jpg')},
				{categoryId:'4444',text:'实木床',image:require('images/floor/floor-14.jpg')},
				{categoryId:'5555',text:'双人床',image:require('images/floor/floor-15.jpg')}
			]
		},
		{
			title:'F4 美味生活',
			item:[
				{categoryId:'1111',text:'生鲜水果',image:require('images/floor/floor-16.jpg')},
				{categoryId:'2222',text:'水杯水壶',image:require('images/floor/floor-17.jpg')},
				{categoryId:'3333',text:'白酒',image:require('images/floor/floor-18.jpg')},
				{categoryId:'4444',text:'食用油',image:require('images/floor/floor-19.jpg')},
				{categoryId:'5555',text:'生活用纸',image:require('images/floor/floor-20.jpg')}
			]
		},
		{
			title:'F5 母婴美妆',
			item:[
				{categoryId:'1111',text:'面膜',image:require('images/floor/floor-01.jpg')},
				{categoryId:'2222',text:'玩具装备',image:require('images/floor/floor-02.jpg')},
				{categoryId:'3333',text:'营养奶粉',image:require('images/floor/floor-03.jpg')},
				{categoryId:'4444',text:'洗护发',image:require('images/floor/floor-04.jpg')},
				{categoryId:'5555',text:'车床座椅',image:require('images/floor/floor-05.jpg')}
			]
		},
	],
	init:function(){
		this.loadKeyWords();
		this.loadCarousel();
		this.loadFloor();
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
			//下方小圆点
			dots: true,
			//键盘上的左右键
			keys: true
		});
		//按钮事件
		$('.arrow').on('click',function(){
			//如果有class是next的就是下一页,反之就是上一页
			let direction=$(this).hasClass('next') ? 'next' : 'prev';
			//参考http://www.bootcss.com/p/unslider/网站
			$carousel.data('unslider')[direction]();
		})
	},
	//模板楼层页面
	loadFloor:function(){
		//调用hogan函数
		var html=_util.render(floorTpl,{
			floor:this.floor
		});
		$('.floor-wrap').html(html)
	}
}

$(function(){
	page.init()
})