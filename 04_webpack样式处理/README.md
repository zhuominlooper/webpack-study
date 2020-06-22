#webpack处理css样式，预处理样式

#处理css
1.需要下载对应的css-loader，因为webpack只能识别js，所以我们需要loader去转义为webpack能识别的代码
2.需要下载style-loader，此loader的作用是自动把css绑定到head标签中
3.css-loser和style-loader还有很多配置，可以参考https://www.webpackjs.com/loaders/css-loader/

#预处理样式的处理，以sass举例(less，stylus用法一致)
1.下载node-sass，sass-loader
2.同样需要css-loader和style-loader
3.执行过程，当我们引入了sass文件后，sass会先编译成css，之后的处理流程和css一致
4.sass-loader的配置参考https://www.webpackjs.com/loaders/sass-loader/

#注意点：
1.loader的执行是从右到左，从下往上执行
2.如果我们同时引入一些样式文件，有些样式文件文件可能不会生效
3.原因是可能会同时生成几个<style></style>标签，后者会覆盖前者
