"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@/test");
// import { testSay } from "./test";
var data_json_1 = __importDefault(require("./data.json"));
(0, test_1.testSay)();
console.log(data_json_1.default);
