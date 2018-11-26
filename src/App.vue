<template>
  <div id="app">
    <transition :name="page">
      <keep-alive>
        <router-view class="container"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<style lang="stylus">
  @import"./assets/style/common";
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50


  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
