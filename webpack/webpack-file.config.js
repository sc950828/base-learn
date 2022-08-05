const path = require("path");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 处理js
module.exports = {
  mode: "development",
  // './src/index.js' //webpack的默认配置
  entry: "./filesrc",

  // 出口只能是一个
  output: {
    filename: "[name].js",
    // 必须是绝对路径
    path: path.resolve(__dirname, "./filedist"),
    // https://abc/main.1f4b5c16b07760b27d4b.js
    // publicPath: "https://abc/", //通常是CDN地址
  },
  module: {
    rules: [
      // css配置
      {
        test: /\.css$/,
        // use: ["css-loader"],
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
      // 图片处理
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,

        // webpack5用法 不需要再使用file-loader和url-loader，已经内置了
        // type: "asset",
        // generator: {
        //   // 输出文件位置以及文件名
        //   filename: "[name][ext]",
        // },
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 10 * 1024, // 超过10kb不转 base64
        //   },
        // },

        // css里面的图片识别不了
        // 原因：因为webpack新版本中可以不需要新增loader进行资源打包
        // 所以要自定义需要设置： esModule: false 和 type: "javascript/auto"
        use: [
          {
            loader: "file-loader",
            // loader: "url-loader",
            options: {
              name: "[name].[ext]",
              esModule: false,
              // 打包后的目录
              outputPath: "assets",
              // url-loader的好处是可以实现dataurl，也就是base64链接
              limit: 1024 * 20,
              // limit: 1024,
            },
          },
        ],
        type: "javascript/auto", //默认使用自定义的
        exclude: /node_modules/, //排除 node_modules 目录
      },

      // 字体处理
      {
        test: /\.(eot|ttf|woff|woff2)$/,

        // webpack5用法 不需要再使用file-loader和url-loader，已经内置了
        // type: "asset/resource",

        use: [
          {
            loader: "file-loader",
            // loader: "url-loader",
            options: {
              name: "[name].[ext]",
              esModule: false,
              // 打包后的目录
              outputPath: "assets",
              // limit: 1024 * 1000 * 10,
            },
          },
        ],
        type: "javascript/auto", //默认使用自定义的
        exclude: /node_modules/, //排除 node_modules 目录
      },

      // 原始文件
      {
        test: /\.txt$/,
        // 加载文件原始内容（utf-8）
        use: "raw-loader",
        // type: "asset/source",
      },

      // xml
      {
        test: /\.xml$/,
        // 加载文件原始内容（utf-8）
        // use: "raw-loader",
        use: "xml-loader",
      },

      // csv tsv
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
    ],
  },
  // 2. 实例化插件
  plugins: [
    new HtmlWebpackPlugin({
      // 模板html文件的位置，我们这里是在根目录下
      template: "./filesrc/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
