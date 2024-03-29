const User2 = require("../model/user2.js");

class user2Controller {
  async create(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User2.create({ username, password });

      res.send(user);
    } catch (error) {
      console.log(e);
      res.json({ code: 0, message: "保存失败" });
    }
  }

  async query(req, res) {
    const users = await User2.findAll();
    res.json(users);
  }
}

module.exports = new user2Controller();
