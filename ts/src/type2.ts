// 类型守卫
class Person {
  name = "xiaomuzhu";
  age = 20;
}

class Animal3 {
  name = "petty";
  color = "pink";
}

function getSometing(arg: Person | Animal3) {
  // 不类型守卫 不管使用啥属性都报错。
  // console.log(arg.age); // Error
  // console.log(arg.color); // Error

  // 类型细化为 Person
  if (arg instanceof Person) {
    // console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
    console.log(arg.age); // ok
  }
  // 类型细化为 Person
  if (arg instanceof Animal3) {
    // console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
    console.log(arg.color); // ok
  }
}

// in
class Person4 {
  name = "randy";
  age = 24;
}

class Animal4 {
  name = "dog";
  color = "green";
}

function getSometing2(arg: Person4 | Animal4) {
  // 不类型守卫 不管使用啥属性都报错。
  // console.log(arg.age); // Error
  // console.log(arg.color); // Error

  if ("age" in arg) {
    // console.log(arg.color); // Error
    console.log(arg.age); // ok
  }
  if ("color" in arg) {
    // console.log(arg.age); // Error
    console.log(arg.color); // ok
  }
}
