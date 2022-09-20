<template>
  <div class="">
    <input type="textarea" />
  </div>
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
  name: "alive1_1",
  mixins: [],
  components: {},
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    onActivated(() => {
      console.log("Alive1_1 onActivated");
    });

    onDeactivated(() => {
      console.log("Alive1_1 onDeactivated");
    });

    return {};
  },
});
</script>

<style scoped lang=""></style>
