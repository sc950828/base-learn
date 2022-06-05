<template>
  <div>
    <h3>入门</h3>
    <router-link to="/router/route1">to 传递字符串</router-link> |
    <router-link :to="{ path: '/router/route1' }">to 传递对象</router-link>
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

    <h3>strict 和 sensitive</h3>
    <div>
      没配置strict 和
      sensitive，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。
    </div>
    <div>当 sensitive 为true 严格匹配大小写，也就是字母大小写一定要对</div>
    <div>当 strict 为true 严格匹配尾/，也就是严格遵循尾/，配置有/就必须有</div>
    <div>当 sensitive 为true strict 为true 将严格匹配尾/和字母大小写</div>
    <router-link to="/router/route4">/router/route4</router-link> |
    <router-link to="/router/route4/">/router/route4/</router-link> |
    <router-link to="/ROUTER/route4">/ROUTER/route4</router-link> |
    <router-link to="/ROUTER/route4/">/ROUTER/route4/</router-link> |
    <router-link to="/router/ROUTE4">/router/ROUTE4</router-link> |
    <router-link to="/router/ROUTE4/">/router/ROUTE4/</router-link> |
    <router-link to="/ROUTER/ROUTE4">/ROUTER/ROUTE4</router-link> |
    <router-link to="/ROUTER/ROUTE4/">/ROUTER/ROUTE4/</router-link> |

    <h3>路由元信息</h3>
    <router-link to="/router/route5">/router/route5</router-link> |

    <h3>滚动</h3>
    <router-link to="/router/route6">/router/route6</router-link> |

    <!-- 过渡效果 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log("route.params: ", route.params);
    console.log("route.query: ", route.query);
    console.log("route.path: ", route.path);
    console.log("route.fullPath: ", route.fullPath);

    const goRoute1 = () => {
      router.push("/router/route1");
    };
    return {
      goRoute1,
    };
  },
});
</script>

<style lang="scss">
// 激活状态
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

// 开始进入 和 离开
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// opacity默认是1 所以可以不写
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
