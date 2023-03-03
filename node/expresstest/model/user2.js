const knex = require("../db/mysql");

class User {
  constructor(props) {
    this.table = props;
  }

  // 查找
  all() {
    return knex(this.table).select();
  }

  // 新增
  insert(params) {
    return knex(this.table).insert(params);
  }
}

module.exports = new User("user");
