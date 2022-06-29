namespace SomeNameSpace1 {
  export const a1 = 1;
  export const str1 = "randy";
  export const say = () => {
    console.log("SomeNameSpace1");
  };
}

namespace SomeNameSpace2 {
  export const a1 = 1;
  export const str1 = "randy";
  export const say = () => {
    console.log("SomeNameSpace2");
  };
}

console.log(SomeNameSpace2.a1);
