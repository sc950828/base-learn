const mongoose = require("mongoose");
// 建立用户表
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);

// 建立用户数据库模型
module.exports = mongoose.model("User", UserSchema);
