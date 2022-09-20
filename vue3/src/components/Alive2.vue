<template>
  <div class="">alive2: <input type="text" /></div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onActivated,
  onDeactivated,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "alive2",
  mixins: [],
  components: {},
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    onActivated(() => {
      console.log("Alive2 onActivated");
    });

    onDeactivated(() => {
      console.log("Alive2 onDeactivated");
    });

    return {};
  },
});
</script>

<style scoped lang=""></style>
