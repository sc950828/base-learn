// 新建postcss.config.js 在里面配置插件 注意插件需要安装然后引入才能使用
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer],
};
