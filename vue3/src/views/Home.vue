<template>
  <div class="home">
    <h3>count1</h3>
    <div>count1: {{ count1 }}</div>
    <button @click="plus">plus</button>
    <button @click="decrease">decrease</button>

    <h3>user1</h3>
    <div>user1: {{ user1.name }}</div>
    <button @click="updateUser1Name">update user1 name</button>

    <h3>user2</h3>
    <div>user2: {{ user2.name }}</div>
    <button @click="updateUser2Name">update user2 name</button>

    <h3>user3</h3>
    <div>user3 name: {{ name }} user3 age: {{ age }}</div>
    <button @click="updateUser3Name">update user3 name</button>

    <h3>count2</h3>
    <div>count2: {{ count2 }}</div>
    <button @click="plus2">plus2</button>
    <button @click="decrease2">decrease2</button>

    <h3>Vue.reactive</h3>
    <div>reac1 name: {{ reac1?.name }}</div>
    <button @click="updateReac1Name">updateReac1Name</button>

    <basic-button>123</basic-button>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  unref,
  isRef,
  toRef,
} from "vue";
export default defineComponent({
  name: "Home",
  // setup 执行时机是在 beforeCreate 之前执行
  // props: 组件传入的属性
  // props是响应式的， 当传入新的 props 时，会及时被更新。由于是响应式的， 所以不可以使用 ES6 解构，解构会消除它的响应式。
  // context中就提供了this中最常用的三个属性：attrs、slot 和emit，分别对应 Vue2.x 中的 $attr属性、slot插槽 和$emit发射事件。
  setup(props, context) {
    const count1 = ref(0);
    // console.log(props);
    // console.log(context);

    const plus = () => {
      count1.value++;
    };
    const decrease = () => {
      count1.value--;
    };

    const user1 = ref({ name: "randy1" });
    const updateUser1Name = () => {
      // ref定义的变量需要使用.value修改
      user1.value.name += "!";
    };
    console.log("unref: ", unref(user1), user1.value);
    console.log("isRef: ", isRef(user1));

    const _user = { name: "randy2" };
    const user2 = reactive(_user);
    const updateUser2Name = () => {
      // reactive定义的变量可以直接修改
      user2.name += "!";

      // 原始对象的修改并不会响应式
      // _user.name += "!";
      // 原始对象会被修改
      // console.log(_user);
    };
    // 使用toRefs可以响应式解构出来
    const user3 = reactive({ name: "randy3", age: 24 });
    const updateUser3Name = () => {
      // 解构出来的就不能响应式了 需要使用toRefs解构
      user3.name += "!";
    };

    // reactive定义基本数据类型会报错
    const count2 = reactive(0);

    const plus2 = () => {
      count2.value++;
    };
    const decrease2 = () => {
      count2.value--;
    };

    // toRef
    const user4 = reactive({ name: "randy3", age: 24 });
    const toRef1 = toRef(user4, "age");
    console.log("toRef", toRef1.value);

    return {
      count1,
      plus,
      decrease,
      user1,
      updateUser1Name,
      user2,
      updateUser2Name,
      // ...user3,
      ...toRefs(user3),
      updateUser3Name,
      count2,
      plus2,
      decrease2,
    };
  },
});
</script>
