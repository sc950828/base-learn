const path = require("path");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

// 处理js
module.exports = {
  // './src/index.js' //webpack的默认配置
  // entry: "./jssrc/es1.js",
  // entry: "./jssrc/es2.js",
  entry: "./jssrc/provideTest.js",
  // entry: "./jssrc/defineTest.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./jsdist"),
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
  mode: "development",
  devtool: false,
  // 2. 实例化插件
  plugins: [
    new HtmlWebpackPlugin({
      // 模板html文件的位置，我们这里是在根目录下
      template: "./jssrc/index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("哈哈"),
      "process.env.TEST": { name: JSON.stringify("test") },
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "jssrc/component"),
    },
  },

  externals: {
    jquery: "$",
  },
};
