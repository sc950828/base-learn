const knex = require("knex");

module.exports = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "ExpressApi",
  },
});
