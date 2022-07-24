let less=require('less')

//转换成css源码
module.exports=function(source){
  let css=''
  less.render(source,(err,result)=>{
    css=result.css
    css=css.replace(/\n/g,'\\n')
  })
   return css
}