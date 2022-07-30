const say = () => {
  console.log("hello world");
};

// say();

document.getElementById("button").addEventListener("click", () => {
  console.log("say  haha");
  console.log(process.env);
});
