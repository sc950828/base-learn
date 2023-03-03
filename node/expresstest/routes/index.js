const fs = require("fs");
const path = require("path");

// 批量注册路由
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") {
      return;
    }
    const route = require(`./${file}`);
    app.use(`/${path.basename(file, ".js")}`, route);
  });
};
