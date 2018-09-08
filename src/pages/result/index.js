require('./index.css');
require('pages/common/logo');
require('pages/common/footer');
var _util=require('util');


$(function(){
	// console.log(window.location.href)
	// console.log(window.location.search)//?type=register
	// console.log(window.location.search.substr(1))//输出除了?之外的type=register

	//第一个type是调用getParamsFromUrl返回回来的数据
	//第二个type是字符串type
	var type=_util.getParamsFromUrl('type') || 'default';
	// console.log(type)
	$('.'+type).show();

})
