<template>
  <div>
    <button v-on:click="click1">click1</button>
    <button v-on:click="click2('传参', $event)">click2</button>
    <div @click="click3">
      div包裹button
      <button @click.stop="click4">stop修饰符 阻止事件冒泡</button>
      <button @click.once="click5">once修饰符 只触发一次</button>
      <a href="https://www.baidu.com" @click.prevent="click6"
        >prevent 阻止默认事件</a
      >
    </div>
    <div>
      <!-- <input type="text" @keyup.enter="enter1" v-model.trim="input1" /> -->
      <!-- <input type="text" @keyup.enter="enter1" v-model.number="input1" /> -->
      <input type="text" @keyup.enter="enter1" v-model.lazy="input1" />
      <input type="text" @keyup.ctrl="enter1" v-model.lazy="input1" />
      <!-- 注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。
        换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。
        而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。 -->
      <input type="text" @keyup.17="enter1" v-model.lazy="input1" />

      <!-- 系统修饰键
        .ctrl
        .alt
        .shift
        .meta meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)
      -->

      <!-- .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。 -->
      <button @click.meta.exact="enter1">exact</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
    };
  },
  methods: {
    click1(event) {
      // `this` 在方法里指向当前 Vue 实例
      console.log(this);
      // `event` 是原生 DOM 事件
      console.log(event);
    },
    click2(arg1, event) {
      // 传递参数的话 如果还需要event 需要显示传递$event对象 这个名字固定($event)
      console.log(arg1);
      console.log(event);
    },
    click3() {
      console.log("click3");
    },
    click4() {
      console.log("click4");
    },
    click5() {
      console.log("click5");
    },
    click6() {
      console.log("click6");
    },
    enter1() {
      console.log("enter");
      console.log(this.input1);
    },
  },
};
</script>
