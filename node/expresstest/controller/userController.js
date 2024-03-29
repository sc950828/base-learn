const User = require("../model/user");
const jwt = require("jsonwebtoken");
const client = require("../db/redis");
const decoded = require("jwt-decode");

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

  async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      // console.log("user", user);
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "miyao",
        { expiresIn: 60 }
      );
      // console.log("decoded token", decoded(token));

      // const result = jwt.verify(token, "miyao");
      // console.log("result", result);

      res.json({
        token,
      });
    } else {
      res.status(401).json({
        message: "账号或密码错误",
      });
    }
  }

  async testData(req, res) {
    res.json(req.auth);
  }
}

module.exports = new UserController();
