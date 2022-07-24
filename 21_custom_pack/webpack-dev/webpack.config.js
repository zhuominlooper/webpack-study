//配置的文件名是死的
const path = require("path"); //webpack是node写出来的，所以用node语法
let EmitPlugin=require(path.resolve(__dirname,'plugins','emit-plugin.js'))
module.exports = {
  mode: "development",
  entry: "./src/index.js", //入口
  output: {
    path: path.resolve("./build"), //必须是绝对路径
    filename: "bundle.js", //出口文件
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          path.resolve(__dirname, "./loader/style-loader.js"),
          path.resolve(__dirname, "loader", "less-loader.js"),
        ],
      },
    ],
  },
  plugins: [new EmitPlugin({
    name:'looper'
  })],
};
