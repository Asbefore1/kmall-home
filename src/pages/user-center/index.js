require('./index.css');
require('pages/common/nav');
require('pages/common/search');
require('pages/common/footer');

var _side=require('pages/common/side');



//登录页面逻辑
var page={
	//自动触发这个函数
	init:function(){
		this.onload();
	},
	onload:function(){
		/*
		方法一：
		_side.render(1)
		*/
		_side.render('user-center')
	}	
}

$(function(){
	page.init()
})
