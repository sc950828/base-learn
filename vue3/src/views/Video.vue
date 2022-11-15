<template>
  <div class="">
    <div id="dplayer"></div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import DPlayer from "dplayer";

export default defineComponent({
  name: "",
  mixins: [],
  components: {},
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      const dp = new DPlayer({
        container: document.getElementById("dplayer"),
        video: {
          url: "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
        },
      });
    });

    return {};
  },
});
</script>

<style scoped lang=""></style>
