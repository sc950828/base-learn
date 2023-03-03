// 引用用户模版数据
const User = require("../model/user2.js");

class user2Controller {
  async query(req, res, next) {
    try {
      let users = await User.all();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.json({ code: 0, message: "查询失败" });
    }
  }

  async create(req, res, next) {
    try {
      const { username, password } = req.body;
      await User.insert({ username, password });
      res.json({ code: 1, message: "保存成功" });
    } catch (e) {
      console.log(e);
      res.json({ code: 0, message: "保存失败" });
    }
  }
}

module.exports = new user2Controller();
