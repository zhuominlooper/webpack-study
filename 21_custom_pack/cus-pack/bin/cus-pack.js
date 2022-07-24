#! /usr/bin/env node

console.log('开始')
const path=require('path')//webpack是node写出来的，所以用node语法
let config = require(path.resolve('webpack.config.js'));

//入口
let Compiler=require('../lib/Compiler.js')
let compiler = new Compiler(config);
//启动打包
compiler.run()
