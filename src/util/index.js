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
					// _this.doLogin()
				//请求失败(用户名或密码错误)
				}else if(result.code==1){
					// console.log(result.errmessage)
					params.error && params.error(result.errmessage)
				}
			},
			//请求失败后调用的回调函数
			//数据没法出去,没开后台等
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
	},
	goHome:function(){
		window.location.href='/';
	},
	validata:function(value,type){
		//验证用户名和密码不能为空
		if(type === 'require'){
			return value;
		}
		//验证用户名格式
		if(type === 'username'){
			return /^[a-z | A-Z | _ | 0-9 ]{3,10}$/.test(value);
		}
		//验证密码格式
		if(type === 'password'){
			return /^[a-z | A-Z | _ | 0-9 ]{3,10}$/.test(value);
		}
		//验证手机号格式
		if(type === 'phone'){
			return /^1[3568]\d{9}$/.test(value);
		}
		//验证邮箱格式
		if(type === 'email'){
			return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value);
		}
	}
}
module.exports=_util;