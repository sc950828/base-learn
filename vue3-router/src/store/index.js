import { createStore } from "vuex";

export default createStore({
  state: {
    userInfo: null,
    userMenus: null,
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
    getUserMenus: (state) => state.userMenus,
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUserMenus(state, payload) {
      state.userMenus = payload;
    },
  },
  actions: {
    async getUserInfoAction({ commit }) {
      // 模拟后端获取用户信息api
      const getUserInfoApi = () => {
        return Promise.resolve({ role: "manage", name: "jack" });
      };

      const userInfo = await getUserInfoApi();

      commit("setUserInfo", userInfo);

      return userInfo;
    },

    async getUserMenuAction({ commit }) {
      // 模拟后端获取用户信息api
      const getUserMenuApi = () => {
        // 假设当前用户只有 about、parent、child1菜单
        return Promise.resolve([
          {
            path: "/about",
            name: "About",
            component: "../views/About.vue",
            title: "关于",
          },
          {
            path: "/userlist",
            name: "UserList",
            component: "../views/UserList.vue",
            title: "关于",
            btns: ["select", "add"],
          },
          {
            path: "/parent",
            name: "Parent",
            component: "../views/Parent.vue",
            title: "父页面",
            children: [
              {
                path: "child1",
                name: "Child1",
                component: "../views/Child1.vue",
                title: "child1页面",
              },
            ],
          },
        ]);
      };

      const userMenus = await getUserMenuApi();

      commit("setUserMenus", userMenus);

      return userMenus;
    },
  },
});
