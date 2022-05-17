<template>
  <div>
    <div>user1.name: {{ user1.name }}</div>
    <button @click="updateUser1Name">update user1 name</button>
    <div>user1.age: {{ user1.age }}</div>
    <button @click="updateUser1Age">update user1 age</button> <br />
    <button @click="updateUser1NameAndAge">update user1 name and age</button>

    <h3>deep</h3>
    <div>{{ user2.name }}</div>
    <div>{{ user2.age }}</div>
    <button @click="updateUser2Age">update user2 age</button>

    <h3>watchEffect</h3>
    <div>{{ user3.name }}</div>
    <div>{{ user3.age }}</div>
    <button @click="updateUser3Age">update user3 age</button>
    <button @click="updateUser3NameAndAge">update user3 name and age</button>

    <input type="text" v-model="text" />

    <h3>arr deep</h3>
    <div v-for="value of arr" :key="value">{{ value }}</div>
    <button @click="addArr">add arr</button>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  watch,
  watchEffect,
  onBeforeUpdate,
  nextTick,
  ref,
} from "vue";
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
      () => ({ ...user2 }),
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        // deep: true,
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
    const user3 = reactive({ name: "randy3", age: 27 });
    const updateUser3Age = () => {
      user3.age++;
    };
    const updateUser3NameAndAge = async () => {
      user3.name += "!";
      // await nextTick();
      user3.age++;
    };

    watchEffect(
      () => {
        console.log("watchEffect", user3.name, user3.age);
      },
      {
        flush: "sync",
        // onTrack(e) {
        //   console.log("onTrack: ", e);
        // },
        // onTrigger(e) {
        //   console.log("onTrigger:", e);
        // },
      }
    );

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    const text = ref("randy");
    watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        // 模拟调用后端接口
        console.log("input", text.value);
      }, 1000);
      onInvalidate(() => {
        clearTimeout(timer);
      });
      console.log("watchEffect", text.value);
    });

    const arr = reactive(["a", "b", "c"]);
    const addArr = () => {
      arr.push("哈");
    };

    watch(
      () => [...arr],
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        deep: true,
      }
    );

    return {
      user1,
      updateUser1Name,
      updateUser1Age,
      updateUser1NameAndAge,
      user2,
      updateUser2Age,
      user3,
      updateUser3Age,
      updateUser3NameAndAge,
      text,
      arr,
      addArr,
    };
  },
});
</script>
