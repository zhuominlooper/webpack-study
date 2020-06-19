#搭建本地服务
安装webpack-dev-server，再配置一些参数，比如port，hot等
webpack-dev-server不会再本地生成打包文件，而是把打包的文件放在内存中，加快读取速度，同时不会打包html文件
要支持打包html文件，需要安装html-webpack-plugin，照常我们也可以配置很多参数， filename: 'index.html', template: './src/index.html',是必不可少的，template是我们打包的路径名，filename就是我们打包成的html文件
配置好之后，我们就可以实现热部署功能
注意hot参数，设置为false时候，html页面修改才会触发浏览器自动刷新

