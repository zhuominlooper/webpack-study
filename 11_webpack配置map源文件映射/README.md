#webpack配置webpack进行源码映射  

#用途：  
方便我们在使用高阶语法报错时候，告诉我们具体是哪行代码报错了，快速查找问题  
我们的代码通常是经过es6转换成es5，所有报错的时候是es5代码所在的位置，行号是不对的，那么这样就不合理了，通过devtoll来设置  

 
配置：  
 1.source-map：生成一个map文件，当代码运行出错了会标识和定位当前列，但是生成的map文件很大(开发环境)  
 2.cheap-module-source-map:也会产生一个较小的map文件，但是报错没那么细节  
 3.eval-source-map:不会产生map文件，但是报错会标识，定位  
 4.cheap-module-eval-source-map:不会产生map文件，不会报错会标识，定位  
 5.有一些浏览器不配置也可以定位到具体的地方  
 6.官网：https://www.webpackjs.com/configuration/devtool/      



