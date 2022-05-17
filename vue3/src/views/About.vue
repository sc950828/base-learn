<template>
  <div class="about">
    <h3>teleport</h3>
    <teleport to="#app">
      <div>我是通过teleport传递过来的，挂载在app下面</div>
    </teleport>

    <h3>readonly</h3>
    <div>{{ readOnlyName1 }}</div>
    <button @click="changeName1">changeName1</button>
    <div>readonlyUser1: {{ readonlyUser1.name }}</div>
    <button @click="changeUserName1">changeUserName1</button>

    <h3>shallowReactive</h3>
    <div>
      user1.name {{ user1.name }} user1.address.city
      {{ user1.address.city }} user1.address.count {{ user1.address.count }}
    </div>
    <button @click="changeUser1">change user1</button>

    <h3>shallowReadonly</h3>
    <div>
      user2.name {{ user2.name }} user2.address.city
      {{ user2.address.city }} user2.address.count {{ user2.address.count }}
    </div>
    <button @click="changeUser2">change user2</button>

    <h3>shallowRef</h3>
    <div>sRef1: {{ sRef1 }}</div>
    <div>sRef2.name: {{ sRef2.name }}</div>
    <div>sRef2.address.city: {{ sRef2.address?.city }}</div>
    <button @click="changeShallowRef">changeShallowRef</button>

    <h3>markRaw</h3>
    <div>
      user3.name: {{ user3.name }} user3.info.sex:
      {{ user3.info.sex }}
    </div>
    <button @click="changeUser3">change user3</button>
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
  reactive,
  readonly,
  isProxy,
  isReactive,
  isReadonly,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  markRaw,
  triggerRef,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    let name1 = ref("readonly randy");
    let readOnlyName1 = readonly(name1);
    const changeName1 = () => {
      readOnlyName1.value += "!";
      // 这里直接修改源对象还是可以的
      // name1.value += "!";
    };

    let readOnlyName2 = readonly("readonly randy");
    readOnlyName2 = "randy";
    console.log(readOnlyName2); // randy

    const reactiveUser1 = reactive({ name: "readonly randy" });
    let readonlyUser1 = readonly(reactiveUser1);
    const changeUserName1 = () => {
      readonlyUser1.name += "!";
      // 这里直接修改源对象还是可以的
      // reactiveUser1.name += "!";
    };

    let readonlyUser2 = readonly({ name: "readonly randy" });
    readonlyUser2.name = "randy";
    console.log(readonlyUser2.name); // readonly randy

    // 只能检查对象
    // 检查对象是否是由 reactive 或 readonly 创建的 proxy。
    console.log(isProxy(name1)); // false
    console.log(isProxy(readOnlyName1)); // true
    console.log(isProxy(readOnlyName2)); // false
    console.log(isProxy(reactiveUser1)); // true
    console.log(isProxy(readonlyUser2)); // true
    // 检查对象是否是由 reactive 创建的响应式代理。
    console.log(isReactive(name1)); // false
    console.log(isReactive(reactiveUser1)); // true
    console.log(isReactive(readonlyUser1)); // true
    console.log(isReactive(readonlyUser2)); // false
    // 检查对象是否是由 readonly 创建的只读代理。
    console.log(isReadonly(readOnlyName1)); // true
    console.log(isReadonly(readOnlyName2)); // false
    console.log(isReadonly(readonlyUser1)); // true
    console.log(isReadonly(readonlyUser2)); // true

    const sRef1 = shallowRef(0);
    console.log("shallowRef:", sRef1.value);
    const sRef2 = shallowRef({ name: "demi1" });
    const changeShallowRef = () => {
      // 基本数据类型不会影响，页面会同步修改，也就是会响应式
      // sRef1.value++;

      // sRef2.value.name = "randy";
      // sRef2.value.address = { city: "汨罗" };
      // // 这里数据虽然改变了，但是页面不会更新，也就是说不会响应式
      // console.log(sRef2.value); // {address: {city: '汨罗'}, name: "randy"}

      sRef2.value = { name: "randy", address: { city: "汨罗" } };
    };

    // 浅响应式
    const user1 = shallowReactive({
      name: "demi1",
      address: { city: "汨罗", count: 10 },
    });
    const changeUser1 = () => {
      // user1.name = "demi1 !!!";

      // 非响应式，也就是页面不会发生变化
      user1.address.city = "岳阳";
      user1.address.count++;
      console.log(user1); // {address: {city: '岳阳', count: 11}, name: "demi1 !!!"}
    };
    console.log(isReactive(user1)); // true
    console.log(isReactive(user1.address)); // false

    const user2 = shallowReadonly(
      reactive({
        name: "demi2",
        address: { city: "汨罗2", count: 10 },
      })
    );
    console.log(isReadonly(user2)); // true
    console.log(isReadonly(user2.address)); // false
    const changeUser2 = () => {
      user2.address.city = "岳阳";
      user2.address.count++;
      user2.name = "demi1 !!!";
    };

    const info = markRaw({ sex: "male" });
    console.log(isReactive(reactive(info))); // false
    const user3 = reactive({ name: "randy", info });
    const changeUser3 = () => {
      // user3.name = "demi1";

      // 这里数据虽然变了，但是页面并不会重新渲染，也就是说不会响应式
      user3.info.sex = "female";
      console.log(user3); // {info: {sex: 'female'}, name: "randy"}
    };

    const shallow = shallowRef({
      greet: "Hello, world",
    });

    // 第一次运行时记录一次 "Hello, world"
    watchEffect(() => {
      console.log(shallow.value.greet);
    });

    // 这不会触发作用 (effect)，因为 ref 是浅层的
    shallow.value.greet = "Hello, universe";

    // 记录 "Hello, universe"
    triggerRef(shallow);
    return {
      readOnlyName1,
      changeName1,
      readonlyUser1,
      changeUserName1,
      user1,
      changeUser1,
      user2,
      changeUser2,
      user3,
      changeUser3,
      sRef1,
      sRef2,
      changeShallowRef,
    };
  },
});
</script>
