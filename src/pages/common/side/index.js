require('./index.css');


var _util=require('util');
var _tpl=require('./index.tpl');

//登录页面逻辑
var side={
	list:[
		{name:'user-center',desc:'用户中心',href:'./user-center.html'},
		{name:'order-list',desc:'我的订单',href:'./order-list.html'},
		{name:'user-update-password',desc:'修改密码',href:'./user-update-password.html'},
	],
	render:function(name){//如果使用方法一参数就是index
		/*
		// 方法一:
		$('.side-item').removeClass('active')
		.eq(index).addClass('active')
		*/

		//方法二:
		/*
		var tmp='<div>{{data}}</div>';
		//html是调用_util的render函数返回回来的数据
		var html=_util.render(tmp,{data:123});
		console.log(html)
		*/
		// console.log(this)//this是side这个对象
		for(var i=0;i<this.list.length;i++){
			//如果传进来的name等于list中的name,就加上一个active
			if(this.list[i].name==name){
				this.list[i].isActive=true;
			}
		}
		//html是调用_util的render函数返回回来的数据
		var html=_util.render(_tpl,{
			list:this.list
		});
		$('.side').html(html)
	}
	
}

module.exports=side;