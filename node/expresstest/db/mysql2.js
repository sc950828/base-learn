const Sequelize = require("sequelize");

const sequelize = new Sequelize("ExpressApi", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});
console.log(123);

// 测试数据库链接
sequelize
  .authenticate()
  .then(() => {
    console.log("mysql数据库连接成功");
  })
  .catch((err) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });

module.exports = sequelize;
