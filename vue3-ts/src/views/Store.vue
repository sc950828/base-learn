<template>
  <div class="home">
    <div>rootName: {{ rootName }}</div>
    <div>getRootInfo: {{ getRootInfo }}</div>
    <div>getRootName: {{ getRootName }}</div>
    <!-- <div>test1Name: {{ test1Name }}</div> -->
    <!-- <div>allName: {{ allName }}</div> -->
    <!-- <div>test1Count: {{ test1Count }}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";
// import { key } from "@/store";
import { useStore } from "@/store";

export default defineComponent({
  name: "HomeView",
  setup() {
    // const store = useStore(key);
    const store = useStore();
    // store.state.aa;
    // store.state.test1.

    return {
      rootName: store.state.name,
      getRootInfo: store.getters.getRootInfo,
      getRootName: store.getters.getRootName,
      // test1Name: store.state.test1.name,
      // test1Count: store.state.test1.count,
    };
  },
});
</script>
