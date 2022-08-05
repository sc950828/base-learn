const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "[name].js", // 添加哈希值，防止缓存
    path: path.resolve(__dirname, "dist"), // 输出文件夹
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.vue$/, // 处理 .vue 文件
        loader: "vue-loader",
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.css$/, // 处理 .vue 文件
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "[name].[ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 超过10kb不转 base64
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", "tsx", "vue"],
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"), // 静态文件目录
    port: 8080, // 端口号
  },

  plugins: [
    new HtmlWebpackPlugin({
      // 动态生成 html 文件
      template: "./index.html",
    }),
    new CleanWebpackPlugin(), // 清除旧资源
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(), // 这里 vue 需要额外添加一个插件，将定义的 .js 、 .css 规则应用到 .vue 文件中
  ],
};

module.exports = (env, argv) => {
  // 不同环境配置不同mode、devtool
  if (process.env.MODE === "development") {
    config.mode = "development";
    config.devtool = "eval-cheap-module-source-map"; //开发环境下使用
  } else if (process.env.MODE === "staging") {
    config.mode = "production";
    config.devtool = "source-map";
  } else {
    config.mode = "production";
    config.devtool = false;
  }
  // 根据参数，重新定义三种模式
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.MODE": JSON.stringify(process.env.MODE),
    })
  );

  return config;
};

// vue-style-loader 跟 style-loader 基本用法跟功能是一样的，都是往 dom 里面插入一个 style 标签去让样式生效的，
// 但是 vue-style-loader 支持 vue 中的 ssr（服务端渲染），所以如果需要支持服务端渲染的 vue 项目，
// 就需要用到 vue-style-loader了，如果一般的 vue 项目的话，推荐使用 style-loader，
// 毕竟 style-loader 支持的功能还是丰富些，比如可以懒注入、可以指定位置插入标签等等。
