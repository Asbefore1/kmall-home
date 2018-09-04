require('./index.css')
var _user=require('')
var nav={
	init:function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartInfo();
	},
	loadUserInfo:function(){
		_user.logout(function(result){

		},function(error){

		})
	},
	loadCartInfo:function(){

	}
}

module.exports=nav;