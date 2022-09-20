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
    <div>{{ user2.address.city }}</div>
    <button @click="updateUser2Age">update user2 age</button>
    <button @click="updateUser2Address">update user2 address</button>

    <h3>watch invalidate</h3>
    <div>{{ invalidate.name }}</div>
    <button @click="updateInvalidateName">updateInvalidateName</button>

    <h3>watch flush options</h3>
    <div>{{ flushOptions.name }}</div>
    <div>{{ flushOptions.num }}</div>
    <button @click="updateFlushOptionsName">updateFlushOptionsName</button>
    <button @click="updateFlushOptionsNameAndNum">
      updateFlushOptionsNameAndNum
    </button>

    <h3>watchEffect</h3>
    <div>{{ user3.name }}</div>
    <div>{{ user3.age }}</div>
    <button @click="updateUser3Age">update user3 age</button>
    <button @click="updateUser3NameAndAge">update user3 name and age</button>

    <input type="text" v-model="text" />

    <h3>arr deep</h3>
    <div v-for="value of arr" :key="value">{{ value }}</div>
    <button @click="addArr">add arr</button>
    <button @click="updateArrItem">update arr</button>
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

    // 一个改变 都会触发，并且获取不到老值
    // watch(user1, (newVal, oldVal) => {
    //   console.log(newVal, oldVal);
    // });

    // 浅拷贝 能看到新老值
    // watch(
    //   () => ({ ...user1 }),
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );

    // 监听单个属性
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

    // 一个改变 回调函数就会触发
    // watch(
    //   [() => user1.name, () => user1.age],
    //   ([newVal1, newVal2], [oldVal1, oldVal2]) => {
    //     console.log(newVal1, newVal2);
    //     console.log(oldVal1, oldVal2);
    //   }
    // );

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

    // 递归拷贝
    const _shallowCopy = (obj) => {
      const copy = Array.isArray(obj) ? [] : {};
      for (let p in obj) {
        if (typeof obj[p] === "object") {
          // 对象类型，继续递归浅拷贝
          copy[p] = _shallowCopy(obj[p]);
        } else {
          copy[p] = obj[p];
        }
      }
      return copy;
    };

    // 深拷贝
    const deepCopy = (obj) => {
      if (typeof obj === "object" && obj !== null) {
        // 如果是引用类型，进行递归拷贝
        return _shallowCopy(obj);
      } else {
        // 如果是基本类型，直接返回
        return obj;
      }
    };

    const user2 = reactive({
      name: "randy2",
      age: 27,
      address: { city: "汨罗" },
    });
    const clearWatch = watch(
      // 这种监听方式能监听到所有属性改变，但是新老值是一样的，都是新值
      // user2,

      // 引用数据类型可以直接监听，但是新老值是一样的，都是新值
      // user2.address,

      // 这种方式监听不到，除非开启 deep：true，并且新老值是一样的
      // () => user2,

      // 基本数据类型不能直接监听
      // user2.age,

      // 除非是监听某个基础属性
      // () => user2.age,

      // 这种方式也不行，意思就是 箭头函数里面只有普通属性，才能监听到。除非开启 deep：true，并且新老值是一样的
      // () => user2.address,

      // 这种浅拷贝方式可以监听到第一层，并且子属性新老值不一样。要监听深度必须开启deep：true，并且孙子新老值是一样的
      // () => ({ ...user2 }),

      // 深拷贝能深度监听，并且属性新老值不一样
      // () => deepCopy(user2),

      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        // deep: true,
      }
    );
    // 返回值是清除监听器
    // setTimeout(() => {
    //   clearWatch();
    // }, 5000);

    // deep，开启深度监听
    // watch(
    //   // 浅拷贝只能解决第一层问题，多层 还是会返回一样的新老值。
    //   () => ({ ...user2 }),
    //   // () => user2,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   },
    //   {
    //     deep: true,
    //   }
    // );

    const updateUser2Age = () => {
      user2.age++;
    };
    const updateUser2Address = () => {
      user2.address.city += "!";
    };

    // 清除副作用
    const invalidate = reactive({ name: "onInvalidate" });
    watch(
      () => ({ ...invalidate }),
      (newVal, oldVal, onInvalidate) => {
        onInvalidate(() => {
          console.log("清除副作用");
        });
        console.log(newVal, oldVal);
      }
    );

    const updateInvalidateName = () => {
      invalidate.name += "!";
    };

    // options
    const flushOptions = reactive({ name: "flushOptions", num: 1 });
    watch(
      () => ({ ...flushOptions }),
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        // flush: "pre", // 默认
        // flush: "post",
        // flush: "sync",
        // 立即执行
        // immediate: true,
        // 调试
        // onTrack(e) {
        //   console.log("onTrack: ", e);
        // },
        // onTrigger(e) {
        //   console.log("onTrigger:", e);
        // },
      }
    );

    const updateFlushOptionsName = () => {
      flushOptions.name += "!";
    };

    const updateFlushOptionsNameAndNum = () => {
      flushOptions.name += "!";
      flushOptions.num++;
    };

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
        // flush: "pre", // 默认
        // flush: "post",
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

    // 监听原数组需要deep，否则监听副本数组
    const arr = reactive(["a", "b", "c", { name: "randy" }]);
    const addArr = () => {
      arr.push("哈");
    };
    const updateArrItem = () => {
      arr[3].name = "demi";
    };

    // 监听原数组，返回的新老值是一样的
    watch(
      // 能监听到，但是新老值是一样的
      arr,

      // 这种方式监听不到，除非开启深度监听。并且新老值一样
      // () => arr,

      // 浅拷贝能监听到第一层，并且新老值不一样
      // () => [...arr],

      // 监听多层，并且需要新老值不一样，需要使用深拷贝
      // () => deepCopy(arr),
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      {
        // deep: true,
      }
    );

    return {
      user1,
      updateUser1Name,
      updateUser1Age,
      updateUser1NameAndAge,
      user2,
      updateUser2Age,
      updateUser2Address,
      invalidate,
      updateInvalidateName,
      flushOptions,
      updateFlushOptionsName,
      updateFlushOptionsNameAndNum,
      user3,
      updateUser3Age,
      updateUser3NameAndAge,
      text,
      arr,
      addArr,
      updateArrItem,
    };
  },

  // 选项式写法 只有数组被替换才会被触发
  watch: {
    arr: {
      handler(val, oldVal) {
        console.log("arr list changed", val, oldVal);
      },
      // deep: true,
    },
  },
});
</script>
