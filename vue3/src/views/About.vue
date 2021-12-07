<template>
  <div class="about">
    <h3>teleport</h3>
    <teleport to="#app">
      <div>我是通过teleport传递过来的</div>
    </teleport>

    <h3>readonly</h3>
    <div>{{ readOnlyName1 }}</div>
    <button @click="changeName1">change name1</button>

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
  </div>
</template>
<script>
import {
  defineComponent,
  readonly,
  isProxy,
  isReactive,
  isReadonly,
  shallowReactive,
  shallowReadonly,
} from "vue";

export default defineComponent({
  setup() {
    const name1 = "readonly randy";
    let readOnlyName1 = readonly(name1);
    const changeName1 = () => {
      readOnlyName1 += "!";
    };
    // 只能检查对象
    // 检查对象是否是由 reactive 或 readonly 创建的 proxy。
    console.log(isProxy(readOnlyName1));
    // 检查对象是否是由 reactive 创建的响应式代理。
    console.log(isReactive(readOnlyName1));
    // 检查对象是否是由 readonly 创建的只读代理。
    console.log(isReadonly(readOnlyName1));

    // 浅响应式
    const user1 = shallowReactive({
      name: "demi1",
      address: { city: "汨罗", count: 10 },
    });
    const changeUser1 = () => {
      user1.name = "demi1 !!!";
      user1.address.city = "岳阳";
      user1.address.count++;
    };
    console.log(isReactive(user1));
    console.log(isReactive(user1.address));

    const user2 = shallowReadonly({
      name: "demi2",
      address: { city: "汨罗2", count: 10 },
    });
    console.log(isReadonly(user2));
    console.log(isReadonly(user2.address));
    const changeUser2 = () => {
      user2.address.city = "岳阳";
      user2.address.count++;
      user2.name = "demi1 !!!";
    };
    return {
      readOnlyName1,
      changeName1,
      user1,
      changeUser1,
      user2,
      changeUser2,
    };
  },
});
</script>
