const dns = require("dns");

dns.lookup("www.qq.com", function (err, address, family) {
  if (err) throw err;
  console.log("ip地址为: " + address); // 101.91.22.57
});

const options = { all: true };

dns.lookup("www.qq.com", options, function (err, address, family) {
  if (err) throw err;

  console.log("ip地址为: " + JSON.stringify(address)); // [{"address":"101.91.22.57","family":4},{"address":"101.91.42.232","family":4}]
});

dns.resolve4("www.qq.com", function (err, address) {
  if (err) throw err;
  console.log(JSON.stringify(address)); // ["101.91.22.57","101.91.42.232"]
});
