// 创建一个长度为 16 的 buffer 它会分配一个 16 字节（byte）的连续内存空间，并用 0 进行预填充。
const buffer1 = new ArrayBuffer(16);
console.log(buffer1);

// Uint8Array —— 将 ArrayBuffer 中的每个字节视为 0 到 255 之间的单个数字（每个字节是 8 位，因此只能容纳那么多）。这称为 “8 位无符号整数”。
// Uint16Array —— 将每 2 个字节视为一个 0 到 65535 之间的整数。这称为 “16 位无符号整数”。
// Uint32Array —— 将每 4 个字节视为一个 0 到 4294967295 之间的整数。这称为 “32 位无符号整数”。
// Float64Array —— 将每 8 个字节视为一个 5.0x10-324 到 1.8x10308 之间的浮点数。
const uint8 = new Uint8Array(buffer1);
const uint16 = new Uint16Array(buffer1);
const uint32 = new Uint32Array(buffer1);
const float64 = new Float64Array(buffer1);
console.log(uint8);
console.log(uint16);
console.log(uint32);
console.log(float64);

uint8[0] = 257;
console.log(uint8);

// 可以转成各种格式
const dataView1 = new DataView(buffer1);
console.log(dataView1);
console.log(dataView1.getUint8(0));
console.log(dataView1.getUint16(0));
console.log(dataView1.getUint32(0));
console.log(dataView1.getFloat64(0));