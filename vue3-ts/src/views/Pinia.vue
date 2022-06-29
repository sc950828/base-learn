<template>
  <div class="">
    <div>name: {{ name }}</div>
    <div>getterName: {{ getterName }}</div>
    <div>
      <button @click="updateMainName">修改main name</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mainStore } from "@/pinia/main";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "PiniaView",
  mixins: [],
  components: {},
  props: {},
  emits: {},
  setup() {
    const store = mainStore();

    const updateMainName = async () => {
      // 直接修改 不建议
      // store.name = "demi woman";

      // 对象形式修改
      // store.$patch({ name: "demi woman" });

      // 函数形式修改
      // store.$patch((state) => {
      //   state.name = "demi woman";
      // });

      // 通过action修改
      const result = store.changeName("demi woman");
      console.log(result);

      // 返回的值不会被Promise包裹
      const result2 = await store.fetchData(1);
      console.log(result2);
    };

    // 直接解构不能响应式
    // const { name, getterName } = store;

    // 这样响应式
    const name = computed(() => store.name);
    const getterName = computed(() => store.getterName);

    // store.address

    // 这样也能响应式
    // const { name, getterName } = storeToRefs(store);

    return {
      name,
      getterName,
      updateMainName,
    };
  },
});
</script>
