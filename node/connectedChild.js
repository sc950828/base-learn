process.on("message", (msg) => {
  console.log("Message from parent:", msg);
  // 如果当前进程是子进程，且与父进程之间通过IPC通道连接着，则process.connected为true
  console.log("process.connected: " + process.connected);
});

setTimeout(() => {
  process.send({ name: "child message" });
  // 断开与父进程之间的IPC通道，此时会将 process.connected 置为false
  process.disconnect();
  console.log("process.connected: " + process.connected);
}, 1000);
