import obj from './a.js'//import导入，在prduction下自动删除无用代码
console.log(obj.sum(2,3))

 var obgReq=require('./a.js')//es6导入方式，在prduction下不会删除无用代码
 console.log(obgReq.default.sum(2,3))
console.log('hello webpack')


var a=1
var b=1
var c=1
var d=a+b+c
console.log('求和',d)//webpack会自动优化变量