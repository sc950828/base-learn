<template>
  <div>
    <div>user1.name: {{ user1.name }}</div>
    <button @click="updateUser1Name">update user1 name</button>
    <div>user1.age: {{ user1.age }}</div>
    <button @click="updateUser1Age">update user1 age</button>
    <button @click="updateUser1NameAndAge">update user1 name and age</button>

    <h3>deep</h3>
    <div>{{ user2.name }}</div>
    <div>{{ user2.age }}</div>
    <button @click="updateUser2Age">update user2 age</button>
  </div>
</template>
<script>
import { defineComponent, reactive, watch, watchEffect } from "vue";
export default defineComponent({
  setup() {
    const user1 = reactive({ name: "randy1", age: 24 });
    // source: 可以支持 string,Object,Function,Array; 用于指定要侦听的响应式变量
    // callback: 执行的回调函数
    // options：支持 deep、immediate 和 flush 选项。
    // watch(
    //   () => user1.name,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );
    // watch(
    //   () => user1.age,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );

    watch(
      [() => user1.name, () => user1.age],
      ([newVal1, newVal2], [oldVal1, oldVal2]) => {
        console.log(newVal1, newVal2);
        console.log(oldVal1, oldVal2);
      }
    );

    const updateUser1Name = () => {
      user1.name += "!";
    };
    const updateUser1Age = () => {
      user1.age += 1;
    };
    const updateUser1NameAndAge = () => {
      user1.name += "!";
      user1.age += 1;
    };

    const user2 = reactive({ name: "randy2", age: 27 });
    const clearWatch = watch(
      user2,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        deep: true,
      }
    );
    const updateUser2Age = () => {
      user2.age++;
    };
    // 返回值是清除监听器
    // setTimeout(() => {
    //   clearWatch();
    // }, 5000);

    // 会自动收集依赖，当里面用到的数据发生变化时就会自动触发watchEffect
    // watchEffect 不需要手动传入依赖
    // watchEffect 会先执行一次用来自动收集依赖
    // watchEffect 无法获取到变化前的值， 只能获取变化后的值
    watchEffect(() => {
      console.log("watchEffect", user2.age);
      // console.log("watchEffect", user2.name);
    });

    return {
      user1,
      updateUser1Name,
      updateUser1Age,
      updateUser1NameAndAge,
      user2,
      updateUser2Age,
    };
  },
});
</script>
