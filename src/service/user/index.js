var _util=require('util');

var _user={
	logout:function(success,error){
		_util.request({
			url:'/user/logout',//代理跨域,http://127.0.0.1:3001发送到服务器
			success:success,
			error:error
		})
	},
	login:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/login',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:data,
			success:success,
			error:error
		})
	},
	register:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/register',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:data,
			success:success,
			error:error
		})
	},
	//获取导航栏欢迎xxx用户信息
	getUserInfo:function(success,error){
		_util.request({
			url:'/user/userInfo',//代理跨域,http://127.0.0.1:3001发送到服务器
			success:success,
			error:error
		})
	},
	//获取用户中心的用户信息
	getUserCenterInfo:function(success,error){
		_util.request({
			url:'/user/userCenterInfo',//代理跨域,http://127.0.0.1:3001发送到服务器
			success:success,
			error:error
		})
	},
	checkUsername:function(username,success,error){
		_util.request({
			url:'/user/checkUsername',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:{
				username:username
			},
			success:success,
			error:error
		})
	},
	updatePassword:function(data,success,error){
		_util.request({
			method:'put',//修改
			url:'/user/updatePassword',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:data,
			success:success,
			error:error
		})
	}
}
module.exports=_user;