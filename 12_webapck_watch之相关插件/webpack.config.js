//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack=require('webpack')
module.exports={
    mode:'development',
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'bundle.js',//出口文件
    },
    watch:true,
    watchOptions:{
    aggregateTimeout:1000,//防抖，  
       ignored:/node_modules/, //排除文件
       poll:10000,//轮训多少秒检查一次
    },
    plugins: [
          new CleanWebpackPlugin(),//每次打包时候请空
          new CopyWebpackPlugin({patterns:[
              { from: './doc/'}]}),   
         new webpack.BannerPlugin('翻版必究')//为生成的js打上标签
      ], 
}