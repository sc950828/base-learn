<template>
  <div class="parent">
    <Child1 v-model="name" />
    <Child2 v-model:name1="name1" v-model:name2="name2" class="p-child2" />
    <Child3 />

    <AsyncPage />

    <!-- <Suspense>
      <template #default>
        <AsyncPage />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense> -->
  </div>
</template>
<script>
import { defineComponent, ref, defineAsyncComponent, provide } from "vue";
import Child1 from "@/components/Child1";
import Child2 from "@/components/Child2";
import Child3 from "@/components/Child3";
export default defineComponent({
  components: {
    Child1,
    Child2,
    Child3,
    // 无配置项异步组件
    // AsyncPage: defineAsyncComponent(() => import("@/components/AsyncCom.vue")),
    // 有配置项异步组件
    AsyncPage: defineAsyncComponent({
      loader: () => import("@/components/AsyncCom.vue"),
      delay: 3000,
      timeout: 3000,
      // errorComponent: () => import("./ErrorComponent.vue"),
      // loadingComponent: () => import("./LoadingComponent.vue"),
    }),
  },

  setup() {
    const name = ref("randy");
    const name1 = ref("randy");
    const name2 = ref("randy");

    provide("inject1", name);
    return {
      name,
      name1,
      name2,
    };
  },
});
</script>
<style scoped lang="scss">
.parent {
  // .p-child2 .title {
  //   font-size: 24px;
  // }

  // .p-child2 /deep/ .title {
  //   font-size: 24px;
  // }

  // .p-child2 :deep(.title) {
  //   font-size: 24px;
  // }
}
</style>

<style scoped>
/* >>> 不适用与less和scss */
/* .p-child2 >>> .title {
  font-size: 24px;
} */
</style>
