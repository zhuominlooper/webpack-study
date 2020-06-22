#打包文件
1.图片必须要通过require或者import引入才能打包
2.安装file-loader和url-loader
3.对于url-loader，如果limit大于图片大小，则不会生成图片，只能在js里生成bas64，只加载一次
4.当limit小于图片大小，则会生成一张hash取名的图片

