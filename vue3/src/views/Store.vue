<template>
  <div>
    <div>{{ name }}</div>
    <div>computed： {{ computed1 }}</div>
    <div>$store.name {{ $store.state.name }}</div>
    <div>store.name {{ store.state.name }}</div>
    <div>store.getName {{ store.getters.getName }}</div>
    <div>$store.getters.getName {{ $store.getters.getName }}</div>
    <button @click="changeName">修改store.name</button>

    <!-- 除了 state按模块化，其他都不按模块化 -->
    <h3>模块化</h3>

    <div>store.state.user.name: {{ store.state.user.name }}</div>
    <div>
      store.getters.getterUserName:
      {{ store.getters.getterUserName }}
    </div>
    <button @click="handleUserNameAction">setUserNameAction</button>
    <button @click="handleGoodsMutation">setGoodsMutation</button>
    <button @click="handleGoodsAction">setGoodsAction</button>

    <h3>命名空间</h3>
    <div>store.state.goods.name: {{ store.state.goods.name }}</div>
    <div>
      store.getters["goods/getterGoodsName"]:
      {{ store.getters["goods/getterGoodsName"] }}
    </div>
    <button @click="handleGoodsNameAction">setGoodsNameAction</button>
    <button @click="handleUserMutation">setUserMutation</button>
    <button @click="handleUserAction">setUserAction</button>

    <h3>action 异步操作</h3>
    <div>
      <button @click="getComment">getComment</button>
    </div>
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

    const handleUserNameAction = () => {
      store.dispatch("setUserNameAction", "demi");
    };
    const handleGoodsMutation = () => {
      store.dispatch("setGoodsMutation", "提交其他模块mutation");
    };
    const handleGoodsAction = () => {
      store.dispatch("setGoodsAction", "提交其他模块action");
    };

    const handleGoodsNameAction = () => {
      store.dispatch("goods/setGoodsNameAction", "demi");
    };
    const handleUserMutation = () => {
      store.dispatch("goods/setUserMutation", "提交其他模块mutation");
    };
    const handleUserAction = () => {
      store.dispatch("goods/setUserAction", "提交其他模块action");
    };

    const getComment = async () => {
      // 不管有没有异步操作返回的是一个promise
      // const result = store.dispatch("getCommentAction");
      const result = await store.dispatch("getCommentAction");
      console.log(result);
    };

    return {
      store,
      changeName,
      computed1,
      handleUserNameAction,
      handleGoodsMutation,
      handleGoodsAction,
      handleGoodsNameAction,
      handleUserMutation,
      handleUserAction,
      getComment,
    };
  },
  computed: {
    ...mapState(["name"]),
  },
  mounted() {
    // 都是支持的
    console.log(this.$store);
    // console.log(this.$router);
    // console.log(this.$route);
  },
});
</script>
