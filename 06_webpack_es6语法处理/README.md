#webpack es6语法转化
1.webapck只认识js的写法，像es6,7的一些语法是不支持的，所以我们需要转化成低级的js语法浏览器才能识别
2.我们需要引入如下的包：
{
    "@babel/core": "^7.10.3" :核心模块，转为js语法
    "@babel/preset-env": "^7.10.3",//识别es语法，进行转义
    "babel-loader": "^8.1.0",//基础配置
    "babel-plugin-transform-runtime": "^6.23.0", 
}
3.如果我们写一些高级ers语法，需要专门去引用loader或者插件
{
    "@babel/plugin-proposal-class-properties": "^7.10.1" ：识别es中的class，进行转义
    "@babel/plugin-proposal-decorators": "^7.10.3" ：识别装饰器。
}
4.对于一些es6里的api，特性，也需要添加专门的loader或者环境
{
    "@babel/plugin-transform-runtime": "^7.10.3",
    "@babel/runtime": "^7.10.3", 
}//添加es的运行时


