require('./index.css');
require('pages/common/logo');
require('pages/common/footer');

var _util=require('util');
var _user=require('service/user');

var formError={
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
	}
}


//登录页面逻辑
var page={
	init:function(){
		this.bindEvent();
	},
	//处理提交事件
	bindEvent:function(){
		// console.log(this)//this是page这个对象
		var _this=this;
		$('#btn-submit').on('click',function(){
			// console.log(this)//this是btn-submit这个DOM节点
			_this.submit();
		});
		//键盘回车提交
		$('input').on('keyup',function(e){
			// console.log(e.keyCode)
			if(e.keyCode==13){
				_this.submit();
			}
		})
	},
	submit:function(){
		//1.获取数据
		var formData={
			username:$.trim($('[name="username"]').val()),//去除两边的空格,只拿出输入的内容,不包括空格
			password:$.trim($('[name="password"]').val()),
		}
		// console.log(formData)
		//2.验证规则
		var validataResult=this.validata(formData);
		//3.提交

		//验证通过
		if(validataResult.status==true){
			formError.hide();
			//发送登录请求
			_user.login(formData,function(){
				_util.goHome();
				
			},function(msg){
				formError.show(msg)
			})

		}else{//验证失败
			formError.show(validataResult.msg)
		}
	},
	//验证
	validata:function(formData){
		var result={
			status:false,
			msg:''
		}
		//验证(封装成一个函数)
		//如果没有value就返回用户名不能为空
		if(!_util.validata(formData.username,'require')){
			result.msg='用户名不能为空';
			return result;
		}
		//用户名格式错误
		if(!_util.validata(formData.username,'username')){
			result.msg='用户名格式错误';
			return result;
		}
		//密码不能为空
		if(!_util.validata(formData.password,'require')){
			result.msg='密码不能为空';
			return result;
		}
		//密码格式错误
		if(!_util.validata(formData.password,'password')){
			result.msg='密码格式错误';
			return result;
		}

		//符合条件
		result.status=true;
		return result;
	}
}

$(function(){
	page.init()
})
