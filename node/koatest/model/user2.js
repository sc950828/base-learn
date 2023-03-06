// model/user2.js

const Sequelize = require("sequelize");
const sequelize = require("../db/mysql");

const User2 = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

//同步数据库:没有表就新建,有就不变
User2.sync();

module.exports = User2;
