import logo from '../test.jpg'//图片必须引入才能打包

//file-loader会在打包文件下生成图片
console.log('hello webpack')
let image=new Image()
image.src=logo
document.body.appendChild(image)