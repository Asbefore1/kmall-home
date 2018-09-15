require('./index.css');
//引入模块
require('pages/common/logo')
require('pages/common/footer');
require('pages/common/nav');
require('pages/common/search');


var _util=require('util');
//向后台发送数据
var _product=require('service/product');
var detailTpl=require('./detail.tpl');

//登录页面逻辑
var page={
	params:{
		productId:_util.getParamsFromUrl('productId') || ''
	},
	init:function(){
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		if(this.params.productId){
			this.loadProductDetail();
		}
	},
	bindEvent:function(){
		var _this=this;
		// console.log(_this)//this是page这个对象
		//切换图片
		$('.detail-box').on('mouseenter','.product-small-img-item',function(){
			var $this=$(this);
			// console.log($this)//this是dom节点
			$this.addClass('active')
			.siblings('.product-small-img-item').removeClass('active');

			var imgSrc=$this.find('img').attr('src');
			$('.product-main-img img').attr('src',imgSrc)
		});

		//购物数量处理
		$('.detail-box').on('click','.count-btn',function(){
			var $this=$(this);//this是+或者-这个dom节点
			var $Input=$('.count-input');
			var stock=_this.stock;
			var min=1;
			var current=parseInt($Input.val());
			if($this.hasClass('plus')){
				$Input.val(current >= stock ? stock : current+1 )
			}else{
				$Input.val(current > min ? current-1 : min )
			}
		})	
	},
	loadProductDetail:function(){
		var _this=this;
		_product.getProductDetail({productId:this.params.productId},function(product){
			// console.log(product)
			if(product){
				if(product.Image){
					product.Image=product.Image.split(',');
				}else{
					product.Image=[require('images/product/product-default.jpg')]
				}
				// console.log(product)
				product.mainImg=product.Image[0];
				// console.log(product)

				//缓存库存为了修改购买数量使用
				_this.stock = product.stock;

				//调用hogan函数
				var html=_util.render(detailTpl,product);
				$('.detail-box').html(html);
			}else{
				$('.detail-box').html('<p class="empty-message">你要找的商品去火星了!!!</p>');
			}
		},function(msg){
			_util.showErrorMsg(msg)
		})
	}
}

$(function(){
	page.init()
})