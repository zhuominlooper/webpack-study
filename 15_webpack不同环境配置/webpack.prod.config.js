//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
const htmlWebpackPlugin=require('html-webpack-plugin')
const {smart}=require('webpack-merge')
const base=require('./webpack.base')
module.exports=smart(base,{
    mode:'production',
})