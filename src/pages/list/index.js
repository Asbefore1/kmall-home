require('./index.css');
require('pages/common/logo')
require('pages/common/footer');
require('pages/common/nav');
require('pages/common/search');
require('util/carousel');


var _util=require('util');
//向后台发送数据
var _product=require('service/product');
var productTpl=require('./product.tpl');

//登录页面逻辑
var page={
	listParams:{
		page:_util.getParamsFromUrl('page') || 1,
		keyword:_util.getParamsFromUrl('keyword') || '',
		categoryId:_util.getParamsFromUrl('categoryId') || '',
		orderBy:_util.getParamsFromUrl('orderBy') || 'default',
	},
	init:function(){
		this.bindEvent();
		//进到这个页面就先加载一次,然后每次点击之后又会加载
		this.loadProductList();
	},
	bindEvent:function(){
		var _this=this;
		// console.log(_this)//this是page这个对象
		$('.sort-item').on('click',function(){
			var $this=$(this);//$this是DOM节点
			//点击的是默认排序
			if($this.hasClass('default')){
				//已经有class是active再点就直接返回不作处理
				if($this.hasClass('active')){
					return;
				}
				$this.addClass('active')
				.siblings('.sort-item')
				.removeClass('active');
				_this.listParams.orderBy='default';
			//点击的是按价格排序
			}else if($this.hasClass('price')){
				$this.addClass('active')
				.siblings('.sort-item')
				.removeClass('active')
				if(!$this.hasClass('sort-up')){
					$this.addClass('sort-up')
					.removeClass('sort-down');
					_this.listParams.orderBy='price-sort-up';
				}else{
					$this.addClass('sort-down')
					.removeClass('sort-up');
					_this.listParams.orderBy='price-sort-down';
				}
			};
			_this.loadProductList()
		});
		
	},
	loadProductList:function(){
		this.listParams.keyword
		? (delete this.listParams.categoryId)
		: (delete this.listParams.keyword)
		// console.log(this.listParams)
		_product.getProductList(this.listParams,function(result){
			// console.log(result)
			var list=result.list.map(function(product){
				console.log(product)//product是从list数组中拿出的5个对象
				if(product.Image){
					product.Image=product.Image.split(',')[0];
				}else{
					product.Image=require('images/product/product-default.jpg');
				}
				return product;
			})
			//调用hogan函数
			var html=_util.render(productTpl,{
				list:result.list
			});
			$('.product-list').html(html);
		},function(){

		})
	}
}

$(function(){
	page.init()
})