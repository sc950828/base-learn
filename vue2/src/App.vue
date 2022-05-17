<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">基础</router-link> |
      <router-link to="/about">父子组件传值 事件</router-link> |
      <router-link to="/life">生命周期</router-link> |
      <router-link to="/event">事件</router-link> |
      <router-link to="/mixins">Mixins</router-link> |
      <router-link to="/filter">Filter</router-link> |
      <router-link to="/alive">Alive</router-link> |
      <router-link to="/jsxtest">JsxTest</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/route/72">路由</router-link> |
      <router-link to="/storetest">Store</router-link> |
      <router-link to="/father">Father</router-link> |
      <router-link to="/debounce">Debounce</router-link> |
      <router-link to="/download">下载</router-link> |
      <router-link to="/ref">ref</router-link> |
      <router-link to="/routertest">路由源码</router-link> |
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
