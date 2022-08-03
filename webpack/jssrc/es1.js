const say = () => {
  console.log("hello world");
};

say();

const arr = [1, 2, 3];
console.log(arr.includes(4));

class People {}

const p1 = new People();

console.log(p1);

document.getElementById("button").addEventListener("click", () => {
  console.log("say  haha");
  console.log(process.env);
});
