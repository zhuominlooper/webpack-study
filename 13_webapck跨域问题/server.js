//webpack内置了express框架，

let express=require('express')
let app=express()
// let webpack=require('webpack')
// let middle=require('webpack-dev-middleware')

// let config=require('./webpack.config.js')
// let compiler=webpack(config)
// app.use(middle(compiler))把webpack启动项注入到服务端里，服务端启动时候把webapck也启动

app.get('/user/test',(req,res)=>{
    res.json({name:'webpack111'})
})
app.listen(3000)