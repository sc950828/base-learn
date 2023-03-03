const User = require("../model/user");

class UserController {
  async create(req, res) {
    const { username, password } = req.body;
    const repeatedUser = await User.findOne({ username, password });
    if (repeatedUser) {
      res.status(409).json({
        message: "用户已存在",
      });
    } else {
      const user = await new User({ username, password }).save();
      res.json(user);
    }
  }

  async query(req, res) {
    const users = await User.find();
    res.json(users);
  }
}

module.exports = new UserController();
