#webpack文件分类
1.在每个输出文件file前加上文件夹名称：   filename:'css/index.css'
2.在打包时候会输出文件文件夹
3.在总出口配置publicPath，形如：publicPath:'www.baidu.com',此配置可以把打包的文件放在服务器是上<script src="www.baidu.com/js/bundle.js"></script></body>
4.也可以对单独文件进行publicPath
5.添加cdn的好处：快速，安全，消耗低，负载小



