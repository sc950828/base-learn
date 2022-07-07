const path = require("path");
// 1.引入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 1.引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      // Less 配置
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "less-loader"],
        // 3. 替换style-loader
        // use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      // Sass 配置
      {
        test: /\.scss$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        // 3. 替换style-loader
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // stylus 配置
      {
        test: /\.styl$/,
        // use: ["style-loader", "css-loader", "stylus-loader"],
        // 3. 替换style-loader
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      // css配置
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  // 2. 实例化插件
  plugins: [
    new HtmlWebpackPlugin({
      // 模板html文件的位置，我们这里是在根目录下
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};
