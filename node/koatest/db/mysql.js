const Sequelize = require("sequelize");

const sequelize = new Sequelize("KoaApi", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

// 测试数据库链接
sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });

module.exports = sequelize;
