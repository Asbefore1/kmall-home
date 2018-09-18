var _util=require('util');

var _product={
	getProductList:function(data,success,error){
		_util.request({
			url:'/product/productList',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:data,
			success:success,
			error:error
		})
	},
	getProductDetail:function(data,success,error){
		_util.request({
			url:'/product/productDetail',//代理跨域,http://127.0.0.1:3001发送到服务器
			data:data,
			success:success,
			error:error
		})
	}
}
module.exports=_product;