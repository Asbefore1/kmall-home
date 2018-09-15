<div class="product-intro clearfix">
	<div class="product-img">
		<div class="product-main-img">
			<img src="{{mainImg}}" alt="" />
		</div>
		<ul class="product-small-img-list clearfix">
			{{#Image}}
				<li class="product-small-img-item">
					<img src="{{.}}" alt="" />
				</li>
			{{/Image}}
		</ul>
	</div>
	<div class="product-info">
		<h2 class="product-name">{{name}}</h2>
		<p class="product-desc">{{description}}</p>
		<div class="product-info-item product-price">
			<span class="label">价格:</span>
			<span class="info">{{price}}</span>
		</div>
		<div class="product-info-item">
			<span class="label">库存:</span>
			<span class="info">{{stock}}</span>
		</div>
		<div class="product-info-item product-count">
			<span class="label">数量:</span>
			<input type="text" value="1" class="count-input" />
			<span class="count-btn plus">+</span>
			<span class="count-btn minus">-</span>
		</div>
		<div class="add-cart">
			<a href="javascript:;" class="btn">添加购物车</a>
		</div>
	</div>
	</div>	
	<div class="product-detail">
	<div class="tab">
		<ul class="tab-list">
			<li class="tab-item active">商品详情</li>
			<li class="tab-item">用户评论</li>
		</ul>
		<div class="tab-content">
			{{{detail}}}
		</div>
	</div>
</div>	