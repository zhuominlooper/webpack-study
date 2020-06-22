
console.log('hello webpack')

let fn=()=>{
    console.log('es6语法')
}

console.log(fn())

@log
class A{
    a='class类转义成功'
}//es6里的高级特性需要添加专门的插件
let b=new A()

console.log(b.a)


function log(target){
    console.log(target,2323)

}

function * Gna(){
    console.log('Gna来了')
    yield '1'
}

console.log(Gna().next())


