const path = require("path");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 处理js
module.exports = {
  mode: "development",
  entry: "./tssrc/index1.ts",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./tsdist"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "babel-loader",

        // ts-loader必须安装typescript和ts-loader并且还需要配置文件tsconfig.josn
        // use: ["ts-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
  },
  // 2. 实例化插件
  plugins: [
    new HtmlWebpackPlugin({
      // 模板html文件的位置，我们这里是在根目录下
      template: "./tssrc/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
