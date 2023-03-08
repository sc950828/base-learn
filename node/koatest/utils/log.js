const log4js = require("log4js");
const logger = log4js.getLogger();

log4js.configure({
  appenders: { test: { type: "file", filename: "applog.log" } },
  categories: { default: { appenders: ["test"], level: "warn" } },
});

// logger.level = "debug"; // 需要打印的日志等级

module.exports = logger;
