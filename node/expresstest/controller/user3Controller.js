const db = require("../db/mysql2");
const User3 = db.user3;

class user3Controller {
  async create(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User3.create({ username, password });

      res.send(user);
    } catch (error) {
      console.log(e);
      res.json({ code: 0, message: "保存失败" });
    }
  }

  async query(req, res) {
    const users = await User3.findAll();
    res.json(users);
  }
}

module.exports = new user3Controller();
