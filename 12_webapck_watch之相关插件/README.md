#webpack之watch配置  
1.watch的用途是监听我们的代码，只要有改动，就会重新打包到目录下  
2.但是如果我们打包的js带有hash，每次打包都会有上次打包的代码遗留，所以需要clean-webapck-plugin，在打包前去清空打包的目录  
3.copy-webapck-plugin可以指定把我们的文件拷到打包目录下  
4.webapck自带的插件BannerPlugin可以给打包出的js代码添加标签  

