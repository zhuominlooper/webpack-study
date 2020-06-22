//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
const htmlWebpackPlugin=require('html-webpack-plugin')
const cssExtractPlugin=require('mini-css-extract-plugin')
const cssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')
module.exports={
  optimization:{//优化配置
     minimizer:[
       new cssAssetsWebpackPlugin()//production模式有用
     ]
  },
    mode:'production',
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'js/bundle.js',//出口文件
        // publicPath:'www.baidu.com',此配置可以把打包的文件放在服务器是上，形如：<script src="www.baidu.com/js/bundle.js"></script></body>
        //cdn安全，且快速
    },
    devServer:{
        host: 'localhost',
        open: true, //第一次构建完成打开页面       
        hot: false, //保存自动更新false会自动更新页面     
        openPage: 'index.html', //打开指定页面       
        port: '8888', //自定义端口       
        contentBase: path.resolve('./src/'),
        historyApiFallback: true, //不跳转     
        inline: true, //实时刷新  
    },
    module:{
      rules:[
        {
          test:/\.css$/,
          use:[
            cssExtractPlugin.loader,          
            'css-loader',
          ],
        }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({ // 打包输出HTML       
          minify: { // 压缩HTML文件     
            removeComments: true, // 移除HTML中的注释      
            collapseWhitespace: false, // 删除空白符与换行符         
            minifyCSS: true // 压缩内联css 
          },
          filename: 'html/index.html',
          template: './src/index.html',
        }),
        new  cssExtractPlugin({
          filename:'css/index.css',
        })
      ],
   
}