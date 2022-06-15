// 索引查询操作符

class User6 {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 对象键属性
type objKeys = keyof User6; // name | age
// 对象值类型
type objValues = User6[objKeys]; // string | number

const user8 = {
  username: "randy",
  id: 2300002033333333,
  token: "230000201922222",
  avatar: "http://randy.jpg",
  role: "admin",
};

function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

const res = pick(user8, ["id"]);

// 索引访问操作符
interface User7 {
  username: string;
  id: number;
  token: string;
  avatar: string;
  role: string;
}

type partial<T> = { [K in keyof T]?: T[K] };

type partialUser = partial<User7>;
