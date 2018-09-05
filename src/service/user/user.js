var _util=require('util/user/user.js');

var _user={
	logout:function(success,error){
		_util.request({
			url:'/user/logout',//代理跨域,http://127.0.0.1:3001发送到服务器
			success:success,
			error:error
		})
	}
}
module.exports=_user;