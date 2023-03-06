// controller/user2Controller.js

const User2 = require("../model/user2.js");

class user2Controller {
  async create(ctx) {
    const { username, password } = ctx.request.body;

    try {
      const user = await User2.create({ username, password });
      ctx.body = user;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { code: 0, message: "保存失败" };
    }
  }

  async query(ctx) {
    const users = await User2.findAll();
    ctx.body = users;
  }
}

module.exports = new user2Controller();
