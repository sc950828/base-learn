const path = require("path");
const webpack = require("webpack");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 抽离css为单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob"); // 文件匹配模式

// 动态cdn
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

// 文件压缩
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // webpack5内置，不需要单独安装

// 多线程
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: 3 });

// 启用缓存
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin"); // webpack5不支持

// gzip
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const config = {
  // entry: "./src/index.js",
  // entry: [("./src/index.js", "./src/impModule")], // 多入口
  entry: {
    index1: "./src/index.js",
    index2: "./src/index2.js",
  }, // 入口文件
  output: {
    filename: "[name].js", // 添加哈希值，防止缓存
    path: path.resolve(__dirname, "dist"), // 输出文件夹
  },
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.jsx?$/,
        // use: ["babel-loader"],
        // use: {
        //   // 用 HappyPack 的 loader 替换当前 loaders:
        //   // loader: "happypack/loader?id=happyBabel",
        // },

        // 开启多进程打包。
        // use: [
        //   {
        //     loader: "thread-loader", // 需要安装
        //     options: {
        //       workers: 3, // 进程3个
        //     },
        //   },
        //   {
        //     loader: "babel-loader",
        //   },
        // ],
        use: [
          // {
          //   loader: "cache-loader", //需要安装
          // },
          {
            loader: "babel-loader",
            // options: {
            //   cacheDirectory: true,
            // },
          },
        ],
        exclude: /node_modules/, //排除 node_modules 目录
      },

      {
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },

      // {
      //   test: /\.less?$/,
      //   use: [
      //     // MiniCssExtractPlugin.loader,
      //     // "cache-loader", // 获取前面 loader 转换的结果
      //     "style-loader",
      //     "css-loader",
      //     "less-loader",
      //   ],
      //   exclude: /node_modules/, //排除 node_modules 目录
      // },

      // 图片处理
      // {
      //   test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
      //   // use: ["file-loader"],
      //   use: [
      //     "file-loader",
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //         },
      //         // optipng.enabled: false will disable optipng
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.9],
      //           speed: 4,
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //       },
      //     },
      //   ],
      //   exclude: /node_modules/, //排除 node_modules 目录
      // },
    ],
  },
  resolve: {
    // extensions: ["...", ".ts"], // extensions的默认值是['.js', '.json', '.wasm']
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"), // 静态文件目录
    port: 8080, // 端口号
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 动态生成 html 文件
      template: "./index.html",
      // minify: { // 压缩HTML
      //
      //   collapseWhitespace: true,
      //   removeComments: true,
      // },
    }),
    new CleanWebpackPlugin(), // 清除旧资源
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
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
    //     {
    //       module: "jquery",
    //       entry: "http://libs.baidu.com/jquery/2.0.0/jquery.min.js",
    //       global: "$",
    //     },
    //   ],
    // }),

    // new webpack.IgnorePlugin({
    //   resourceRegExp: /^\.\/locale$/,
    //   contextRegExp: /moment$/,
    // }),

    // new HappyPack({
    //   // id 标识 happypack 处理那一类文件
    //   id: "happyBabel",
    //   // 配置loader
    //   loaders: [
    //     {
    //       loader: "babel-loader?cacheDirectory=true",
    //     },
    //   ],
    //   // 共享进程池
    //   threadPool: happyThreadPool,
    //   // 日志输出
    //   verbose: true,
    // }),

    // new HardSourceWebpackPlugin(),

    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: require("cssnano"),
    //   cssProcessorPluginOptions: {
    //     preset: ["default", { discardComments: { removeAll: true } }],
    //   },
    //   canPrint: true,
    // }),

    // new CompressionWebpackPlugin(),

    // new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  // mode: "production",
  mode: "development",

  optimization: {
    // tree shaking 生产模式默认开启，只有使用到的代码才会被打包进来
    // usedExports: true,
    // 代码分割 code spliting
    // splitChunks: {
    //   chunks: "initial", //  `all`，`async` 和 `initial`
    // },
    // 是否需要压缩
    // minimize: true,
    // 配置压缩工具
    minimizer: [
      // "...",
      // 添加 css 压缩配置
      // new OptimizeCssAssetsPlugin({}),
      // new CssMinimizerPlugin(),
      // js压缩
      // new UglifyJsPlugin(),
      // new UglifyJsPlugin({ parallel: true }),
      // new TerserPlugin({ parallel: true }),
    ],
    // concatenateModules: true,
  },

  // externals: {
  //   // lodash: "_",
  //   jquery: "$",
  // },

  // cache: {
  //   type: "filesystem", // 使用文件缓存
  // },
};

module.exports = () => smp.wrap(config); //config; //smp.wrap(config);
