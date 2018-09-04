const path=require('path');
//HtmlWebpackPlugin相当于一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//将css单独放在一个文件里
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath='/';
//封装一个函数
const getHtmlConfig=(name)=>({	
	//配置的文件(需要自己建)
	template: './src/view/'+name+'.html',
	//在dist中打包好的文件的名字,可以自己命名
	filename:name+'.html',
	
	inject:true,
	
	//hash给生成的js/css文件添加一个唯一的hash
	hash:true,

	//只引入指定文件中进入index的js和html
	chunks:['common',name]	
})


//导出配置
module.exports={
	//模式
	mode:'development',//在开发环境下
	// mode:'production',//在生产环境下(用户使用环境下)

	//指定多个入口文件,名字是自己取的
	entry:{
		'common':'./src/pages/common/common.js',
		'index':'./src/pages/index/index.js',
		'user-login':'./src/pages/user-login/login.js'
	},
	
	//指定出口文件
	output:{
		//出口文件名称
		// filename:'bundle.js',
		filename:'js/[name].js',
		//指定文件存储路径
		path:path.resolve(__dirname,'dist'),
		publicPath:publicPath
	},
	//配置别名
	resolve:{
		alias:{//绝对路径+/src/pages从现在这个文件夹下走到src里面再往下走
			pages:path.resolve(__dirname,'./src/pages'),
			util:path.resolve(__dirname,'./src/util'),
			api:path.resolve(__dirname,'./src/api'),
			common:path.resolve(__dirname,'./src/common'),
		}
	},
	//配置loader
	module: {
	    rules: [
	      	{
		        test: /\.css$/,
		        use: [
		          	{
		           		loader: MiniCssExtractPlugin.loader,
		            	options: {
		            	}
		         	},
		          	"css-loader"
		        ]
		    },
	      	{
		        test:/\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/,
		        use:[
		        //处理图片
		        	{
			          	loader:'url-loader',
			          	options:{
			          		limit:100,
			          		name:'resource/[name].[ext]'
		          		}		          
		        	}
		        ]
	      	},
	      	//添加webpack配置babel
	      	{
		        test:/\.js$/,
		        exclude: /(node_modules)/,
		        use: {
		            loader: 'babel-loader',
		            options: {
		                presets: ['env','es2015','stage-3'],
		            }
		        }		                     
        	}
	    ]
  	},
  	//配置自动生成html
  	plugins: [
  		//new了一个实例对象 		
    	new HtmlWebpackPlugin(getHtmlConfig('index')),
    	new HtmlWebpackPlugin(getHtmlConfig('user-login')),
    	//刪除多余的文件夹
    	new CleanWebpackPlugin(['dist']),
    	new MiniCssExtractPlugin({
    		filename:'css/[name].css',
    	})
  	],
  	//自动打开页面,每次不用刷新,会自动更新, npm start 启动
  	devServer:{
  		contentBase:'./dist',
  		port:3002,
  		historyApiFallback:true,
  		//代理跨域
  		proxy:{
  			'/user':{
  				target:'http://127.0.0.1:3001',
  				changeOrigin:true
  			}
  		}
  	}
}

