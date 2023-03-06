const mongoose = require("mongoose");

module.exports = () => {
  // 数据库连接
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost/KoaApi", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
      })
      .then(() => {
        console.log("mongodb数据库连接成功");
        resolve();
      })
      .catch((e) => {
        console.log(e);
        console.log("mongodb数据库连接失败");
        reject();
      });
  });
};
