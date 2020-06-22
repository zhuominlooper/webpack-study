#webpack样式抽离
1.下载mini-css-extract-plugin插件，用于抽离css，less等，用法代码可见
2.mini-css-extract-plugin也是一个loader，是替换style-loader的，只生成一个<link href="index.css" rel="stylesheet"></head>标签
3.index.css就是mini-css-extract-plugin产生的文件名，它会把所有配置了此插件loader的样式都放在里面
4.如果我们对抽离的css文件想做压缩为一行，可以安装optimize-css-assets-webpack-plugin，这样就压缩了css文件


