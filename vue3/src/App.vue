<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/parent">Parent</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/base">Base</router-link>|
    <router-link to="/key">Key</router-link>|
    <router-link to="/slot">Slot</router-link>|
    <router-link to="/jsx">Jsx</router-link>|
    <router-link to="/render">Render</router-link>|
    <router-link to="/life">Life</router-link>|
    <router-link to="/customref">CustomRef</router-link>|
    <router-link to="/computed">Computed</router-link>|
    <router-link to="/watch">Watch</router-link>|
    <router-link to="/customhook">CustomHook</router-link>|
    <router-link to="/style">Style样式</router-link>|
    <router-link to="/ref">Ref</router-link>|
    <router-link to="/router">Router</router-link>|
    <router-link to="/store">Store</router-link>|
    <router-link to="/alive">Alive</router-link>|
    <router-link to="/video">Video</router-link>|
    <router-link to="/is">Is</router-link>|
    <router-link to="/md">Md</router-link>|
    <router-link to="/vue2">vue2</router-link>|
  </div>

  <router-view />
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
