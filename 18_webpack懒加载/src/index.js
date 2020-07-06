
console.log('hello webpack')

 var btn=document.createElement('button')
btn.innerHTML='点击动态加载'
btn.onclick=function(){
    import('./a').then(res=>{
        console.log('结果:',res.default)
    })
}

document.body.appendChild(btn)