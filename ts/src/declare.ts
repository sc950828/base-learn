interface VueOption {
  el: string;
  data: any;
}

// class Vue {
//   options: VueOption;
//   constructor(options: VueOption) {
//     this.options = options;
//   }
// }
declare class Vue {
  options: VueOption;
  constructor(options: VueOption);
}

const app = new Vue({
  el: "#app",
  data: {
    message: "hello world",
  },
});
