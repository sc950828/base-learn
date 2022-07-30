const path = require("path");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 处理js
module.exports = {
  mode: "development",
  // './src/index.js' //webpack的默认配置
  entry: "./jssrc/es1.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./jsdist"),
    // https://abc/main.1f4b5c16b07760b27d4b.js
    // publicPath: "https://abc/", //通常是CDN地址
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
  },
  // 2. 实例化插件
  plugins: [
    new HtmlWebpackPlugin({
      // 模板html文件的位置，我们这里是在根目录下
      template: "./jssrc/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
