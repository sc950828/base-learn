// 2.x版本
// const { override, addDecoratorsLegacy } = require("customize-cra");

// module.exports = override(
//   // enable legacy decorators babel plugin
//   addDecoratorsLegacy()
// );

// config-overrides.js 内容
const path = require("path");
const { override, addDecoratorsLegacy } = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const customize = () => (config, env) => {
  config.resolve.alias["@"] = resolve("src");
  if (env === "production") {
    config.externals = {
      react: "React",
      "react-dom": "ReactDOM",
    };
  }

  return config;
};

module.exports = override(addDecoratorsLegacy(), customize());
