// js检测
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    // node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: 1,
    "space-before-function-paren": 2,
    // "no-multi-spaces": 2
  },
  globals: {
    TEST: true,
    // Promise: "off",
  },
  parser: "espree",
};
