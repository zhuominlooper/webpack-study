//配置的文件名是死的
const path=require('path')//webpack是node写出来的，所以用node语法
const htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    optimization:{
      splitChunks:{//分割代码块，对应多文件入口
        cacheGroups:{//缓存组,分离自己的公共代码
            common:{
              chunks:'initial',//初始化分割
              minSize:0,//文件大小
              minChunks:2//至少引用1次就分割
            },
            vendor:{//分离第三方用到的公共包
              priority:1,//加上权重，先执行抽离第三方包
              test:/node_modules/,//在node_modules下抽离
              chunks:'initial',//初始化分割
              minSize:0,//文件大小
              minChunks:2//至少引用1次就分割
            }
        },

      }
    },
    mode:'development',
    entry:{
          index:'./src/index.js',
          other:'./src/other.js'
    },//多文件入口
    output:{
        path:path.resolve('./build'),//必须是绝对路径
        filename:'[name].js',//出口文件
    },
    devServer:{
        host: 'localhost',
        open: true, //第一次构建完成打开页面       
        hot: false, //保存自动更新false会自动更新页面     
        openPage: 'index.html', //打开指定页面       
        port: '8888', //自定义端口       
        contentBase: path.resolve('./build/'),
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