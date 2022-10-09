<template>
  <div class="home">
    <h3>循环</h3>
    <ul>
      <li v-for="(list, index) of lists" :key="index">
        {{ index }}: {{ list }}
      </li>
    </ul>
    <ul>
      <li v-for="(list, index) of lists" :key="index">
        <div v-if="index === 0">{{ index }}: {{ list }}</div>
        <div v-else-if="index === 1">{{ index }}: {{ list }}</div>
        <div v-else>{{ index }}: {{ list }}</div>
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) of obj1" :key="key">
        {{ index }} : {{ key }}: {{ value }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in obj1" :key="key">
        {{ index }} : {{ key }}: {{ value }}
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(list, index) of lists2" :key="index" v-if="list.show">
        {{ list.name }}
      </li>
    </ul> -->

    <!-- <template v-for="(list, index) of lists" :key="index">
      <div>{{ index }}: {{ list }}</div>
    </template> -->

    <span v-for="n in 10" :key="n">{{ n }} </span>
    <h3>计算属性</h3>
    <p v-text="fullName"></p>
    <p v-text="fullName2"></p>
    <h3>监听</h3>
    <div>{{ title1 }}</div>
    <button @click="click1">修改title1</button>
    <div>{{ obj3.name }}</div>
    <button @click="click2">修改obj3的name</button>
    <div>{{ obj3.age }}</div>
    <button @click="click3">修改obj3的age</button>
    <div>{{ title2 }}</div>
    <button @click="click4">修改title2</button>

    <h3>对象重新赋值</h3>
    <div>{{ obj4.name }}</div>
    <div v-if="obj4.age">{{ obj4.age }}</div>
    <button @click="click5">obj4重新赋值</button>
    <h3>数组重新赋值</h3>
    <div v-for="item of arr1" :key="item">{{ item }}</div>
    <button @click="click6">数组重新赋值</button>

    <div></div>

    <template>
      没有特殊指令的标记 (v-if/else-if/else、v-for 或 v-slot) 的 template
      现在被视为普通元素，并将渲染为原生的 template 元素，而不是渲染其内部内容。
    </template>

    <basic-button>123</basic-button>

    <el-button @click="testItem.dialogVisible = true"
      >点击打开 Dialog</el-button
    >

    <el-dialog title="提示" :visible.sync="testItem.dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import "mui-player/dist/mui-player.min.css";
import { CLIENT_RENEG_LIMIT } from "tls";
export default {
  name: "Home",
  data() {
    return {
      lists: ["a", "b", "c", "d"],
      obj1: { a: "A", b: "B" },
      lists2: [
        { name: "randy", show: true },
        { name: "demi", show: false },
        { name: "jack", show: true },
      ],
      firstName: "randy",
      lastName: "su",
      title1: "title1",
      obj3: {
        name: "randy3",
        age: 24,
      },
      title2: "title2",
      obj4: {
        name: "randy4",
      },
      arr1: ["a", "b", "c"],
      testItem: {},

      // 以 _ 或 $ 开头的 property 不会被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。
      // _title3: "_title3",
    };
  },
  computed: {
    // 计算属性默认只有 get，不过在需要时你也可以提供一个 set
    fullName() {
      return this.firstName + this.lastName;
    },
    fullName2: {
      get() {
        return this.firstName + this.lastName + "2";
      },
      // 提供set方法后计算属性的值可以更改了
      set(newVal) {
        const names = newVal.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  },
  watch: {
    title1(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    obj3: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      // 深度监听
      deep: true,
      // 立即执行
      // immediate: true,
    },
    // 监听对象某属性
    "obj3.age"(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    // 数组监听 里面的方法都会执行
    title2: [
      () => {
        console.log("修改了title2-1");
      },
      () => {
        console.log("修改了title2-2");
      },
    ],
  },
  created() {
    // 没有set 不能重新赋值
    // this.fullName = "123";
    // 提供set方法后计算属性的值可以更改了
    // this.fullName2 = "demi yan";
    console.log(this);
    setTimeout(() => {
      console.log(this);
    });
    setTimeout(function () {
      console.log(this);
    });
  },
  mounted() {
    // this.testItem.dialogVisible = false;
    this.$set(this.testItem, "dialogVisible", false);
  },
  methods: {
    click1() {
      // debugger;
      this.title1 = this.title1 + 1;
      // debugger;
    },
    click2() {
      this.obj3.name = "demi";
    },
    click3() {
      this.obj3.age = 28;
    },
    click4() {
      this.title2 = "title2!!!";
    },
    click5() {
      // 重新赋值也可以响应式
      // if (this.obj4.name.includes("demi")) {
      //   this.obj4.name += "!!!";
      // } else {
      //   // this.obj4 = JSON.parse(JSON.stringify({ name: "demi" }));
      //   this.obj4 = { name: "demi" };
      // }

      if (this.obj4.age) {
        this.obj4.age++;
      } else {
        // this.obj4.age = 24;
        // 对象新属性需要使用Vue.set或者this.$set添加新属性
        this.$set(this.obj4, "age", 24);
      }
    },
    click6() {
      if (this.arr1.length >= 4) {
        // 不能直接通过下标改
        // this.arr1[this.arr1.length] = Math.random().toFixed("2");
        // 数组新属性需要使用Vue.set或者this.$set添加新属性
        this.$set(this.arr1, this.arr1.length, Math.random().toFixed("2"));
        // 或者使用数组的变异方法 push pop unshit shift splice reverse sort
        // this.arr1.push(Math.random().toFixed("2"));
      } else {
        this.arr1 = ["A", "B", "C", "D"];
      }
    },
  },
};
</script>
