<template>
  <div>
    <div>{{ user1.name }}</div>
    <div>{{ user1.age }}</div>
    <div>{{ fullName1 }}</div>
    <button @click="updateUser1Name">update user1 name</button>

    <div>{{ user2.name }}</div>
    <div>{{ user2.age }}</div>
    <div>{{ fullName2 }}</div>
    <button @click="updateUser2Name">update user2 name</button>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from "vue";
export default defineComponent({
  setup() {
    const user1 = reactive({ name: "randy1", age: 24 });
    // 接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象
    // 这里的fullName1是不能修改的
    const fullName1 = computed(() => {
      return `${user1.name}今年${user1.age}岁啦`;
    });
    const updateUser1Name = () => {
      user1.name += "!";
    };

    const user2 = reactive({ name: "randy2", age: 27 });
    // 接受一个具有 get 和 set 函数的对象，用来创建可写的 ref 对象。
    // 这里的fullName2是可以修改的
    let fullName2 = computed({
      get() {
        return `${user2.name}今年${user2.age}岁啦`;
      },
      set(val) {
        user2.name = val;
      },
    });
    const updateUser2Name = () => {
      // 需要使用value访问
      fullName2.value = "新的name";
    };

    return {
      user1,
      fullName1,
      updateUser1Name,
      user2,
      fullName2,
      updateUser2Name,
    };
  },
});
</script>
