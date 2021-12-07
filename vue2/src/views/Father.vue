<template>
  <div>
    <div>father</div>
    <router-link to="/father/fchild1">child1</router-link> |
    <router-link to="/father/fchild2">child2</router-link> |

    <!-- 这里的name一定要是组件的name -->
    <!-- 如果子组件有router-view 父组件的keepalive就会失效，但是子组件缓存会生效-->
    <!-- 父组件缓存 子组件一定会被缓存 -->
    <keep-alive :include="['FChild1']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {};
</script>
