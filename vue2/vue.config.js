module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  // publicPath: "/vue2",
  // productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "https://testexpert.morehealth.net.cn/api",
        changeOrigin: true,
        secure: false, // 是否验证SSL Certs
        pathRewrite: {
          // 需要/api所以不重写 如果不需要/api就改成''
          "^/api": "",
        },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
