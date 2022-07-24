#webpack配置
#webpack.config.js这个名字是webpack cli指定的，在bin里会去匹配这个名字，我们在执行webpack的时候就会去找这个配置

#打包原理
webpack会递归打包，在打包的文件里：
1.会生成一个立即自行的匿名函数
2.传入的参数是一个对象modules，对象的每个属性就是key-->value形式，每个key就是我们依赖的js或者其他文件，
3.在主的function里主要是一个function __webpack_require__(moduleId) {}函数，
4.在主function第一次执行会调用__webpack_require__(moduleId) {}函数，moduleid是我们的入口文件
5.在__webpack_require__(moduleId) {}函数里调用	modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
6.此时	modules[moduleId]就是入口文件，call方法里又会去找一个依赖文件，调用__webpack_require__(moduleId) {}函数
7.就这样循环加载依赖，把所有的依赖都加载了，打包在了一起
