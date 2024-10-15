"use strict";

require("log-timestamp")(`${process.pid}`);
const fs = require("fs");
const Nls = require("alibabacloud-nls");
const sleep = (waitTimeInMs) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));
const util = require("util");
const readline = require("readline");
const args = process.argv.slice(2);
//const Memwatch = require("node-memwatch-new")

const URL = "wss://nls-gateway-cn-shanghai.aliyuncs.com/ws/v1";
const APPKEY = "5HVkUA8MrlTGJGOW"; //获取Appkey请前往控制台：https://nls-portal.console.aliyun.com/applist
const TOKEN = "ff288fb8c31f43d19f325fb09c50d4e2"; //获取Token具体操作，请参见：https://help.aliyun.com/document_detail/450514.html

let b1 = [];
let loadIndex = 0;
//let hd = new Memwatch.HeapDiff()
let needDump = true;

async function runOnce(line) {
  console.log(`speak: ${line}`);
  loadIndex++;

  //let dumpFile = fs.createWriteStream(`${process.pid}.wav`, {flags:"w"})
  let tts = new Nls.SpeechSynthesizer({
    url: URL,
    appkey: APPKEY,
    token: TOKEN,
  });

  tts.on("meta", (msg) => {
    console.log("Client recv metainfo:", msg);
  });

  tts.on("data", (msg) => {
    console.log(`recv size: ${msg.length}`);
    //console.log(dumpFile.write(msg, "binary"))
  });

  tts.on("completed", (msg) => {
    console.log("Client recv completed:", msg);
  });

  tts.on("closed", () => {
    console.log("Client recv closed");
  });

  tts.on("failed", (msg) => {
    console.log("Client recv failed:", msg);
  });

  let param = tts.defaultStartParams();
  param.text = line;
  param.voice = "aixia";
  try {
    await tts.start(param, true, 6000);
  } catch (error) {
    console.log("error on start:", error);
    return;
  } finally {
    //dumpFile.end()
  }
  console.log("synthesis done");
  await sleep(2000);
}

async function test() {
  console.log(args);
  console.log("load test case:", args[0]);
  const fileStream = fs.createReadStream(args[0]);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    b1.push(line);
  }

  while (true) {
    for (let text of b1) {
      await runOnce(text);
    }
  }
}

test();
