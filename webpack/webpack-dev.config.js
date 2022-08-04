const path = require("path");
const webpack = require("webpack");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 处理js
const config = {
  entry: "./devsrc/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./devdist"),
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
      template: "./devsrc/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    // 新版 配置static而不是
    static: path.resolve(__dirname, "./devdist"), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
    onBeforeSetupMiddleware(devServer) {
      devServer.app.get("/user", (req, res) => {
        res.json({ name: "randy" });
      });
    },
  },
};

// mode有三种模式 development production none

// 这个参数由命令行传递进来，只能在该配置文件访问
// 所以就有dev、staging、prod三种模式 在这里可以根据不同环境来修改配置
console.log("process.env.MODE=", process.env.MODE);

module.exports = (env, argv) => {
  // { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
  console.log("env=", env);
  // {
  //   config: [ './webpack-dev.config.js' ],
  //   mode: 'production',
  //   env: { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true }
  // }
  console.log("argv=", argv);
  // 这里可以通过不同的模式修改 config 配置

  if (process.env.MODE === "development") {
    config.mode = "development";
    config.devtool = "eval-cheap-module-source-map"; //开发环境下使用
  } else {
    config.mode = "production";
    config.devtool = false;
    // config.devtool = "inline-source-map";
    // config.devtool = "cheap-source-map";
    // config.devtool = "cheap-module-source-map";
    // config.devtool = "eval-source-map";
    // config.devtool = "hidden-source-map";
  }
  // 根据参数，重新定义三种模式
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env.MODE": JSON.stringify(process.env.MODE),
    })
  );

  return config;
};
