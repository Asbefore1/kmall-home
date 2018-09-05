require('./index.css');
//引入服务器里面的_user
var _user=require('service/user/user.js');
var _util=require('util/user/user.js');



var nav={
	init:function(){
		// console.log('this...',this)//this就是nav这个对象
		this.bindEvent();//处理退出事件
		this.loadUserInfo();
		this.loadCartInfo();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			_user.logout(//点击退出按钮去调用_user上的logout函数发送ajax请求
						//里面的函数是一个回调函数,发送ajax请求成功之后会走成功函数
						//失败会调用失败函数,调用一定是在发送ajax请求之后
				function(result){//成功函数
					//重新加载页面
					window.location.reload();
				},function(message){//失败函数
					_util.showErrorMsg(message)
				}
			)
		})
	},
	loadUserInfo:function(){
		
	},
	loadCartInfo:function(){

	}

}
//返回出去时直接调用init对象
module.exports=nav.init();