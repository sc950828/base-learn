<template>
  <div>
    <div>{{ $store.state.name }}</div>
    <div>{{ $store.state.user.name }}</div>
    <div>{{ $store.state.people.name }}</div>
    <div>{{ $store.getters.getterName }}</div>
    <div>{{ $store.getters.getterUserName }}</div>
    <div>{{ $store.getters["people/getterPeopleName"] }}</div>
    <button @click="changeName">改变名字</button>

    <h3>map辅助函数</h3>
    <div>{{ name }}</div>
    <div>{{ name1 }}</div>
    <div>{{ name2 }}</div>
    <div>{{ name3 }}</div>
    <div>{{ name4 }}</div>
    <div>{{ getterUserName }}</div>
    <div>{{ userName }}</div>
    <button @click="submitMutation">提交mutation</button>
    <button @click="submitAction">提交action</button>
    <button @click="submitMutation2">提交其他模块mutation</button>
    <button @click="submitAction2">提交其他模块action</button>
    <button @click="submitMutation3">命名空间提交其他模块mutation</button>
    <button @click="submitAction3">命名空间提交其他模块action</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$store);
  },
  computed: {
    ...mapState(["name"]),
    ...mapState({
      name1: "name",
    }),
    ...mapState({
      name2: (state) => state.name,
    }),
    ...mapState({
      name3: (state) => state.user.name,
    }),
    ...mapState({
      name4: (state) => state.people.name,
    }),
    ...mapGetters(["getterUserName"]),
    ...mapGetters({ userName: "getterUserName" }),
  },
  methods: {
    changeName() {
      this.$store.dispatch("setName", "demi");
    },
    submitMutation() {
      // this.SET_NAME("demi");
      this.setName1("demi");
    },
    submitAction() {
      // this.setName("demi");
      this.setName2("demi");
      this.setPeopleName("people 下的action demi 哦");
    },
    ...mapMutations(["SET_NAME"]),
    ...mapMutations({
      setName1: "SET_NAME",
    }),
    ...mapActions(["setName"]),
    ...mapActions({
      setName2: "setName",
      setPeopleName: "people/setName",
    }),

    submitMutation2() {
      this.$store.dispatch("setOtherMutation", "demi");
    },
    submitAction2() {
      this.$store.dispatch("setOtherAction", "demi");
    },
    submitMutation3() {
      this.$store.dispatch("people/submitOther", "demi");
    },
    submitAction3() {
      this.$store.dispatch("people/submitOther2", "demi");
    },
  },
};
</script>
