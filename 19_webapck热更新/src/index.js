
import str from './a.js'
console.log(str)
if(module.hot){
    console.log('支持热更新')
    document.getElementById('div').innerText=str
    module.hot.accept('./index.js',()=>{
        console.log('文件更新了')
       var test1= require('./a.js')
       console.log(test1)
       //document.getElementById('div').innerText=test1 //如果重新渲染页面hrm就不会生效
    })
}