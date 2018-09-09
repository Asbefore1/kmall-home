require('./index.css');
require('pages/common/nav');
require('pages/common/search');
require('pages/common/footer');

var _side=require('pages/common/side');

//引入服务器里面的_user
var _user=require('service/user');
var _util=require('util');
var _tpl=require('./index.tpl');

//登录页面逻辑
var page={
	//自动触发这个函数
	init:function(){
		this.onload();
		this.loadUserCenterInfo();
	},
	onload:function(){
		/*
		方法一：
		_side.render(1)
		*/
		_side.render('user-center')
	},
	loadUserCenterInfo:function(){
		_user.getUserCenterInfo(function(userInfo){
			// console.log('1:::',userInfo)//test1
			var html=_util.render(_tpl,userInfo);
			$('.side-content').html(html)
		},function(){
			console.log('err....')
		});
	}
}

$(function(){
	page.init()
})
