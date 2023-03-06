const User = require("../model/user");
const jwt = require("jsonwebtoken");
const decoded = require("jwt-decode");

class UserController {
  async create(ctx) {
    const { username, password } = ctx.request.body;
    const repeatedUser = await User.findOne({ username, password });
    if (repeatedUser) {
      ctx.status = 409;
      ctx.body = {
        message: "用户已存在",
      };
    } else {
      const user = await new User({ username, password }).save();
      ctx.body = user;
    }
  }

  async query(ctx) {
    const users = await User.find();
    ctx.body = users;
  }

  async login(ctx) {
    const { username, password } = ctx.request.body;
    const user = await User.findOne({ username, password });
    if (user) {
      // console.log("user", user);
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "miyao",
        { expiresIn: 60 }
      );
      console.log("decoded token", decoded(token));

      // const result = jwt.verify(token, "miyao");
      // console.log("result", result);

      ctx.body = {
        token,
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        message: "账号或密码错误",
      };
    }
  }

  async testData(ctx) {
    console.log(ctx.request.user);
    ctx.body = ctx.request.user;
  }
}

module.exports = new UserController();
