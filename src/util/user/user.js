var _util={
	request:function(params){
		// console.log(params)//url函数  success函数  error函数
		// console.log('util',this);//this是util这个对象
		var _this=this;
		$.ajax({
			url:params.url || '',
			method:params.method || 'get',
			//返回的数据类型
			dataType:params.dataType || 'json',
			//发送到服务器端的数据
			data:params.data || '',
			//将上面4个参数发送到后台
			
			//请求成功后调用的回调函数
			success:function(result){
				// console.log('result..',result)//code:0, errmessage:''
				//请求成功
				if(result.code==0){
					//去调用success函数
					params.success && params.success(result.data);
				//未登录
				}else if(result.code==10){
					_this.doLogin()
				//请求失败
				}else if(result.code==1){
					params.error && params.error(result.message)
				}
			},
			//请求失败后调用的回调函数
			error:function(err){
				params.error && params.error(err.statusText)
			}
		})
	},
	showErrorMsg:function(message){
		alert(message)
	},
	doLogin:function(){
		window.location.href='./user-login.html';
	}
}
module.exports=_util;