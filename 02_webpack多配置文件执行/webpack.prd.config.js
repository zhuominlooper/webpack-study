//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
module.exports={
    mode:'development',
    entry:'./src/index.js',//入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'bundle1.js',//出口文件
    }
   
}