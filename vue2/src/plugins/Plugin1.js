const myPlugin = {
  install(Vue, options) {
    console.log(Vue);
    // 传递过来的参数
    console.log(options);
  },
};

export default myPlugin;
