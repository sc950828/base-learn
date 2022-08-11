const path = require("path");
const webpack = require("webpack");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob"); // 文件匹配模式
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "[name].js", // 添加哈希值，防止缓存
    path: path.resolve(__dirname, "dist"), // 输出文件夹
  },
  module: {
    // noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        // use: ["thread-loader", "babel-loader"],
        // use: [
        //   {
        //     loader: "babel-loader",
        //     options: {
        //       cacheDirectory: true,
        //     },
        //   },
        // ],
        exclude: /node_modules/, //排除 node_modules 目录
      },

      {
        test: /\.less?$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "cache-loader", // 获取前面 loader 转换的结果
          "css-loader",
          "less-loader",
        ],
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
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
    new BundleAnalyzerPlugin(),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${path.join(__dirname)}/index.html`, { nodir: true }),
    // }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: "lodash",
    //       entry:
    //         "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
    //       global: "_",
    //     },
    //   ],
    // }),

    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
  // mode: "development",
  mode: "production",

  optimization: {
    // tree shaking 生产模式默认开启，只有使用到的代码才会被打包进来
    // usedExports: true,
    // 代码分割 code spliting
    // splitChunks: {
    //   chunks: "all", // 公用的类库拆分，默认全部
    // },

    // 是否需要压缩
    minimize: true,
    // 配置压缩工具
    minimizer: [
      // 添加 css 压缩配置
      new OptimizeCssAssetsPlugin({}),
      new TerserPlugin({}),
    ],
  },

  // externals: {
  //   lodash: "_",
  // },

  cache: {
    type: "filesystem", // 使用文件缓存
  },
};

module.exports = () => config; //smp.wrap(config);
