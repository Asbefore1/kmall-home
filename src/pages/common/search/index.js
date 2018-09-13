require('./index.css');
require('pages/common/logo');
require('pages/common/footer');

var _util=require('util');

//登录页面逻辑
var page={
	init:function(){
		this.onload();
		this.bindEvent();
	},
	//自动触发onload事件
	onload:function(){
		//关键字回填
		//在地址栏里输入http://localhost:3002/?keyword=ssss搜索框里会自动出现ssss
		//第一个keyword是调用getParamsFromUrl返回回来的数据
		//第二个keyword是字符串名字
		var keyword=_util.getParamsFromUrl('keyword');
		// console.log('s::',keyword)
		if(keyword){
			$('#search-input').val(keyword)
		}
	},
	//处理提交事件
	bindEvent:function(){
		// console.log(this)//this是page这个对象
		var _this=this;
		//点击提交
		$('#serarch-btn').on('click',function(){
			// console.log(this)//this是btn-submit这个DOM节点
			_this.submit();
		});
		//键盘回车提交
		$('#search-input').on('keyup',function(e){
			// console.log(e.keyCode)
			if(e.keyCode==13){
				_this.submit();
			}
		})
	},
	submit:function(){
		//处理搜索关键字
		var keyword=$.trim($('#search-input').val());
		// console.log(keyword)
		if(keyword){
			window.location.href='./list.html?keyword='+keyword;
		}else{//关键词是空也就是没有关键词就跳转到首页
			_util.goHome();
		}
	},
	
}

$(function(){
	page.init()
})
