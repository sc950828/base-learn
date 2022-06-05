<template>
  <div>
    <div>{{ name }}</div>
    <button @click="changeName">changeName</button>
    <div>user: {{ user.age }}</div>
    <button @click="changeUserAge">changeUserAge</button>

    <LifeChild
      :name1="name"
      @changeChildName="changeChildName"
      ref="childRef"
    />
  </div>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
  reactive,
  provide,
} from "vue";
import LifeChild from "@/components/LifeChild";
export default defineComponent({
  components: {
    LifeChild,
  },
  setup() {
    const name = ref("randy");
    const changeName = () => {
      name.value = "demi";
    };
    const user = reactive({ age: 27 });

    const changeChildName = (value) => {
      name.value = value;
    };

    const changeUserAge = () => {
      user.age = 72;
    };

    const childRef = ref(null);

    provide("fName", "父组件数据");
    provide("say", () => {
      console.log("say say say");
    });

    console.log("setup");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
      // childRef.value.childSay(); // childSay
      // console.log(childRef.value.sex); // male
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(({ key, target, type }) => {
      console.log("onRenderTracked", { key, target, type });
    });
    onRenderTriggered(({ key, target, type }) => {
      console.log("onRenderTriggered", { key, target, type });
    });

    return {
      name,
      changeName,
      user,
      changeUserAge,
      changeChildName,
      childRef,
    };
  },
  // vue2选项式写法都还是支持的
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
});
</script>
