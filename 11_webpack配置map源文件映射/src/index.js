
console.log('hello webpack')

let fn=()=>{
    console.lg('这里会出错')
}

console.log(fn())

class A{
    a='class类转义成功'
  
}//es6里的高级特性需要添加专门的插件
let b=new A()

function * Gna(){
    console.log('Gna来了')
    yield '1'
}

console.log(Gna().next())


