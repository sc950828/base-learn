<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ computed1 }}</div>
    <div>store.name {{ store.state.name }}</div>
    <div>store.getName {{ store.getters.getName }}</div>
    <button @click="changeName">修改store.name</button>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useStore, mapState } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const changeName = () => {
      store.commit("changeName", "demi");
    };

    const computed1 = computed(() => store.state.name);

    return { store, changeName, computed1 };
  },
  computed: {
    ...mapState(["name"]),
  },
});
</script>
