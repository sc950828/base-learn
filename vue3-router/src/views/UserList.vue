<template>
  <div class="user-list">
    <h1>User List addRoutes</h1>

    <!-- <h3>v-if 控制</h3>
    <button
      v-if="
        !$route?.meta.btns || $route?.meta.btns[userInfo.role].includes('add')
      "
    >
      add
    </button>
    <button
      v-if="
        !$route?.meta.btns ||
        $route?.meta.btns[userInfo.role].includes('delete')
      "
    >
      delete
    </button>
    <button
      v-if="
        !$route?.meta.btns || $route?.meta.btns[userInfo.role].includes('edit')
      "
    >
      edit
    </button>
    <button
      v-if="
        !$route?.meta.btns ||
        $route?.meta.btns[userInfo.role].includes('select')
      "
    >
      select
    </button>

    <h3>自定义指令控制 directive</h3>
    <button v-action:add="$route.meta.btns[userInfo.role]">add</button>
    <button v-action:delete="$route.meta.btns[userInfo.role]">delete</button>
    <button v-action:edit="$route.meta.btns[userInfo.role]">edit</button>
    <button v-action:select="$route.meta.btns[userInfo.role]">select</button>

    <div style="margin-top: 20px">
      <button @click="changeRole">改变角色</button>
    </div> -->

    <!-- 第二种方式 后端返回按钮 -->
    <h3>v-if 控制</h3>
    <button v-if="!$route?.meta.btns || $route?.meta.btns.includes('add')">
      add
    </button>
    <button v-if="!$route?.meta.btns || $route?.meta.btns.includes('delete')">
      delete
    </button>
    <button v-if="!$route?.meta.btns || $route?.meta.btns.includes('edit')">
      edit
    </button>
    <button v-if="!$route?.meta.btns || $route?.meta.btns.includes('select')">
      select
    </button>

    <h3>自定义指令控制 directive</h3>
    <button v-action:add="$route.meta.btns">add</button>
    <button v-action:delete="$route.meta.btns">delete</button>
    <button v-action:edit="$route.meta.btns">edit</button>
    <button v-action:select="$route.meta.btns">select</button>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    // 改变用户的角色
    const changeRole = () => {
      store.commit("setUserInfo", { role: "admin", name: "jack" });
    };

    return {
      userInfo: computed(() => store.getters.getUserInfo), //
      changeRole,
    };
  },
});
</script>
