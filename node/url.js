const url = require("url");
const str =
  "http://user:password@randy.com:8080/index.html?nick=%E4%B8%AD%E6%96%87#part=1";

const obj = url.parse(str);
console.log(obj);

const obj2 = url.parse(str, true);
console.log(obj2);

const str2 = "//randy/nick";

const obj3 = url.parse(str2, true, false);
console.log(obj3);
const obj4 = url.parse(str2, true, true);
console.log(obj4);

const pathObj = {
  protocol: "http:",
  slashes: true,
  auth: "user:password",
  host: "randy.com:8080",
  port: "8080",
  hostname: "randy.com",
  hash: "#part=1",
  search: "?nick=%E4%B8%AD%E6%96%87",
  query: "nick=%E4%B8%AD%E6%96%87",
  pathname: "/index.html",
  path: "/index.html?nick=%E4%B8%AD%E6%96%87",
  href: "http://user:password@randy.com:8080/index.html?nick=%E4%B8%AD%E6%96%87#part=1",
};

console.log(url.format(pathObj)); // http://user:password@randy.com:8080/index.html?nick=%E4%B8%AD%E6%96%87#part=1

console.log(url.resolve("/one/two/three", "four")); // /one/two/four
console.log(url.resolve("http://example.com/", "/one")); // http://example.com/one
console.log(url.resolve("http://example.com/one", "/two")); // http://example.com/two
console.log(url.resolve("http://example.com/one/ddd/ddd/ddd", "./two")); // http://example.com/one/ddd/ddd/two
console.log(url.resolve("http://example.com/one/ddd/ddd/ddd", "../two")); // http://example.com/one/ddd/two
console.log(url.resolve("http://example.com/one/ddd/ddd/ddd", ".../two")); // http://example.com/one/ddd/ddd/.../two
