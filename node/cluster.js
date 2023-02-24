const cluster = require("cluster");
const http = require("http");

console.log(cluster.isMaster, process.pid);

if (cluster.isMaster) {
  for (var i = 0; i < 4; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer(function (req, res) {
      res.end(`response from worker ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
