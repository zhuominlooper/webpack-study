//配置的文件名是死的
const path = require('path') //webpack是node写出来的，所以用node语法
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js', //入口
    output: {
      path: path.resolve('./dist'), //必须是绝对路径
      filename: 'bundle.js', //出口文件
    },
        devServer: {
          // before(app){
          //   app.get('/api/test',(req,res)=>{
          //     console.log(3333)
          //     res.json({name:'webpack-before'})
          // })   
          // },
          //在启动程序时候直接去mock数据返回，因为webpack内置了express，所以可以获取app实例操作
          //使用了before就不会再执行proxy,此时没得服务端，因为是我们自己mock数据
          proxy: {
            '/api': {
              target: "http://localhost:3000", //配置一个转发代理
              pathRewrite: {
                '/api': '/user'
              } //重写的方式把请求代理挂在服务器上，前提是该服务器要启动
            }

          },
          host: 'localhost',
          open: true, //第一次构建完成打开页面       
          hot: false, //保存自动更新false会自动更新页面     
          openPage: 'index.html', //打开指定页面       
          port: '8888', //自定义端口       
          contentBase: path.resolve('./dist/'),
          historyApiFallback: true, //不跳转     
          inline: true, //实时刷新  
        },
        plugins: [
          new htmlWebpackPlugin({ // 打包输出HTML       
            minify: { // 压缩HTML文件     
              removeComments: true, // 移除HTML中的注释      
              collapseWhitespace: false, // 删除空白符与换行符         
              minifyCSS: true // 压缩内联css 
            },
            filename: 'index.html',
            template: './src/index.html',
          }),
        ],

      }