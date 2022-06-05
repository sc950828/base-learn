<template>
  <div class="parent">
    <h3 class="title1">child1</h3>
    {{ name1 }}
    <Child1 v-model="name1" />
    <!-- <Child1 v-model:name="name1" /> -->

    <h3 class="title2">Child2</h3>
    name1: {{ name1 }} name2: {{ name2 }}
    <Child2 v-model:name1="name1" v-model:name2="name2" />
    <!-- <Child2
      v-model:name1="name1"
      v-model:name2="name2"
      class="child2"
      id="child2"
      style="color: blue"
    /> -->

    <h3>Child3</h3>
    <Child3>
      <div class="slot1">我是slot传递过来的</div>
    </Child3>

    <h3>Child4</h3>
    <Child4 @submit="handleSubmit" @click="handleClick" />

    <h3 class="title5">Child5</h3>
    {{ name3 }}
    <Child5 v-model.capitalize="name3" />

    <h3 class="title6">Child6</h3>
    {{ name4 }}
    <Child6 v-model="name4" />

    <h3 class="title7">props emit</h3>
    <Child7 :msg="msg" @changeMsg="handleChangeMsg"></Child7>

    <h3 class="title7">ref</h3>
    <RefChild :msg="msg" ref="ref1"></RefChild>

    <h3 class="title7">异步组件</h3>
    <!-- <AsyncPage /> -->

    <Suspense>
      <template #default>
        <AsyncPage />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>

    <component :is="'Child1'"> </component>
    <component :is="Child2"> </component>
    <section is="vue:Child1"></section>
    <!-- <section :is="'Child1'"></section> -->
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
  defineAsyncComponent,
  provide,
  onMounted,
} from "vue";
import Child1 from "@/components/Child1";
import Child2 from "@/components/Child2";
import Child3 from "@/components/Child3";
import Child4 from "@/components/Child4";
import Child5 from "@/components/Child5";
import Child6 from "@/components/Child6";
import Child7 from "@/components/Child7";
import RefChild from "@/components/RefChild";

export default defineComponent({
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
    Child6,
    Child7,
    RefChild,
    // 无配置项异步组件
    AsyncPage: defineAsyncComponent(() => import("@/components/AsyncCom.vue")),
    // 有配置项异步组件
    // AsyncPage: defineAsyncComponent({
    //   loader: () => import("@/components/AsyncCom.vue"),
    //   delay: 3000,
    //   timeout: 3000,
    //   // errorComponent: () => import("./ErrorComponent.vue"),
    //   // loadingComponent: () => import("./LoadingComponent.vue"),
    // }),
  },

  setup() {
    const name1 = ref("randy");
    const name2 = ref("randy");
    const name3 = ref("randy");
    const name4 = ref("randy");
    const msg = ref("message");
    const ref1 = ref(null);

    provide("inject1", name1);

    const handleSubmit = (data) => {
      console.log(data.name);
    };
    const handleClick = (data) => {
      console.log(data.value);
    };

    const handleChangeMsg = (newValue) => {
      msg.value = newValue;
    };

    onMounted(() => {
      console.log(ref1.value);
      console.log(ref1.value.name);
      console.log(ref1.value.user);
      ref1.value.say();
      // console.log(ref1.value.$data);
      // console.log(ref1.value.$props);
      // console.log(ref1.value.$el);
      console.log(ref1.value.$parent);
      console.log(ref1.value.$root);
    });

    return {
      name1,
      name2,
      name3,
      name4,
      msg,
      handleChangeMsg,
      handleSubmit,
      handleClick,
      Child2,
      ref1,
    };
  },
});
</script>
<style scoped lang="scss">
.parent {
  // /deep/ .chuantou {
  //   color: lightcoral;
  //   font-weight: bold;
  // }

  :deep(.chuantou) {
    color: lightcoral;
    font-weight: bold;
  }

  // ::v-deep(.chuantou) {
  //   color: lightcoral;
  //   font-weight: bold;
  // }

  // .slot1 {
  //   color: red;
  // }
}

// :global(.red) {
//   color: red;
// }
::v-global(.red) {
  color: red;
}
</style>

<style scoped>
/* >>> 不适用与less和scss */
/* .parent >>> .chuantou {
  color: lightblue;
  font-weight: bold;
} */
</style>
