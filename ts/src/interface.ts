interface IUser {
  // 必须属性
  name: string;
  // 可选属性
  age?: number;
  // 只读属性
  readonly isMale: boolean;
  // 可选函数
  say?: (str: string) => string;
  // 必须函数
  hi: (num: number) => number;
  // 没有返回值的方法
  hi2(): void;
  // 任意属性
  [prop1: string]: any;
}

const user1: IUser = {
  name: "randy",
  age: 24,
  isMale: true,
  hi: (num) => {
    return num;
  },
  hi2: () => {},
  // 没有该属性， 除非加上任意属性
  wu1: 123,
  wu2: "haha",
};
user1.age = 25;
// 只读属性不能被修改
// user1.isMale = false

const getUserName = (user: IUser) => user.name;

// 接口定义函数
interface Say {
  (str: string): string;
}

// 可索引类型 字符串的key和value
interface Concat {
  [prop2: string]: string;
}

interface IUser2 {
  say: Say;
  concat: Concat;
}

const user2: IUser2 = {
  say(str: string) {
    return str;
  },
  concat: {
    email: "qq.com",
    phone: "17673485272",
    // phone: 17673485272,
  },
};

// 接口继承 支持多继承
interface Child extends IUser2 {
  name: string;
}

const child1: Child = {
  name: "randy",
  say(str) {
    return str;
  },
  concat: {
    phone: "17673485272",
  },
};
