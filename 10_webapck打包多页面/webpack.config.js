//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:{
      index:'./src/index.js',
      other:'./src/other.js',
    },//入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'[name].js',//出口文件
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
          filename: 'other.html',
          template: './src/index.html',
          chunks:['other']//对应入口的other
        }),
        new htmlWebpackPlugin({ // 打包输出HTML       
          filename: 'index.html',
          template: './src/index.html',
          chunks:['other','index']//对应入口的other和idnex
        }),
      ],
   
}