const log4js = require("log4js");

log4js.configure({
  appenders: { test: { type: "file", filename: "applog.log" } },
  categories: { default: { appenders: ["test"], level: "warn" } },
});

const logger = log4js.getLogger();

logger.level = "warn"; // 需要打印的日志等级

module.exports = logger;
