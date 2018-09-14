require('./index.css');
var _util=require('util');
var paginationTpl=require('./pagination.tpl');

(function($){
	//构造函数
	function Pagination($elem){
		this.$elem=$elem;
		this.bindEvent();
	}
	//原型对象
	Pagination.prototype={
		constructor:Pagination,
		bindEvent:function(){
			var _this=this;
			// console.log(this)//this是Pagination对象
			this.$elem.on('click','.pagination-item',function(){
				var $this=$(this);//$this是每一个li
				// console.log($(this).data('value'))
				if($this.hasClass('active')||$this.hasClass('disabled')){
					return;
				}
				_this.$elem.trigger('page-change',[$(this).data('value')])
			})
		},
		render:function(options){
			// console.log(options)//{current: 1, total: 42, pageSize: 5}
			//计算总共多少页
			var pages=Math.ceil(options.total/options.pageSize);
			// console.log(pages)
			if(pages<=1){
				return;
			}
			//上一页 1 2 3 4 5 *6* 7 8 9 10 下一页
			//开始页
			var start=options.current-options.range>1 ? options.current-options.range :1;
			//结束页
			var end=options.current+options.range<pages ? options.current+options.range :pages;
			
			var prev=options.current-1;
			var next=options.current+1;
			var hasPrev=prev>0 ? true : false;
			var hasNext=next<=pages ? true : false;

			//页面数据
			var pageArray=[];
			pageArray.push({
				name:'上一页',
				value:prev,
				disabled:!hasPrev
			})

			for(var i=start; i<=end;i++){
				pageArray.push({
					name:i,
					value:i,
					active:(i==options.current)
				})
			}
			pageArray.push({
				name:'下一页',
				value:next,
				disabled:!hasNext
			})
			// console.log(pageArray)
			var html=_util.render(paginationTpl,{
				pageArray:pageArray,
				current:options.current,
				pages:pages
			});
			this.$elem.html(html);
		}
	}
	Pagination.DEFAULT={
		current:1,
		total:1,
		pageSize:1,
		range:3
	}
	//$.fn是原型对象,extend把pagination方法绑定在原型对象上,所以才可以在外面调用
	$.fn.extend({
		pagination:function(fn,options){
			// console.log(fn)//render
			//each遍历数据,这里只有一个,
			// console.log(this)//this是从外面拿回来的dom节点,循环遍历,这里只有一个
			return this.each(function(){
				//在里面拿到外面的dom节点
				var $this=$(this);
				//data是$this上的属性
				var pagination=$this.data('pagination');
				if(!pagination){
					pagination=new Pagination($this);
					$this.data('pagination',pagination)
				}
				if(typeof pagination[fn] == 'function'){
					//以options为准,将options和Pagination.DEFAULT的值进行合并,且不改变options里面的值
					options=$.extend({},Pagination.DEFAULT,options)
					pagination[fn](options)
				}
			})

		}
	})
})(window.jQuery)