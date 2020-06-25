//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
const htmlWebpackPlugin=require('html-webpack-plugin')
const webpack=require('webpack')
module.exports={
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'bundle.js',//出口文件
    },
    devServer:{
        host: 'localhost',
        open: true, //第一次构建完成打开页面       
        hot: false, //保存自动更新false会自动更新页面     
        openPage: 'index.html', //打开指定页面       
        port: '8888', //自定义端口       
        contentBase: path.resolve('./build/'),
        historyApiFallback: true, //不跳转     
        inline: true, //实时刷新  
    },
    plugins: [
        new htmlWebpackPlugin({ // 打包输出HTML       
          minify: { // 压缩HTML文件     
            removeComments: true, // 移除HTML中的注释      
            collapseWhitespace: false, // 删除空白符与换行符         
            minifyCSS: true // 压缩内联css 
          },
          filename: 'index.html',
          template: './src/index.html',
        }),
        new webpack.DefinePlugin({
          Dev:JSON.stringify('dev')//DEV在js里面就是dev字符串，实现webpack变量向js传递
        })
      ],
   
}