<template>
  <div>
    <h3>基础</h3>
    <router-link to="/router/route1">/router/route1</router-link> |
    <router-link :to="{ path: '/router/route1' }">对象</router-link> |
    <button @click="goRoute1">方法跳转</button>

    <h3>动态参数</h3>
    <div>
      <router-link to="/router/route2/72">route2 传递动态参数 72</router-link> |
      <router-link to="/router/route2/73">route2 传递动态参数 73</router-link> |
    </div>

    <div>
      <router-link to="/router/route3"
        >route3 传递动态可选参数 不传不会报错</router-link
      >
      |
      <router-link to="/router/route3/randy"
        >route3 传递动态可选参数name randy</router-link
      >
      |
    </div>

    <h3>vue2 不区分大小写和尾部/</h3>
    <router-link to="/router/route4">/router/route4</router-link> |
    <router-link to="/router/route4/">/router/route4/</router-link> |
    <router-link to="/ROUTER/route4">/ROUTER/route4</router-link> |
    <router-link to="/ROUTER/route4/">/ROUTER/route4/</router-link> |
    <router-link to="/router/ROUTE4">/router/ROUTE4</router-link> |
    <router-link to="/router/ROUTE4/">/router/ROUTE4/</router-link> |
    <router-link to="/ROUTER/ROUTE4">/ROUTER/ROUTE4</router-link> |
    <router-link to="/ROUTER/ROUTE4/">/ROUTER/ROUTE4/</router-link> |

    <h3>滚动</h3>
    <router-link to="/router/route6">/router/route6</router-link> |

    <h3>go back forward 会触发相应的事件监听</h3>
    <button @click="go">go</button>
    <button @click="back">back</button>
    <button @click="forward">forward</button>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    goRoute1() {
      this.$router.push("/router/route1");
    },
    go() {
      this.$router.go(-1);
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>
<style lang="less">
// 激活状态
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

// 开始进入 和 离开
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// opacity默认是1 所以可以不写
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
