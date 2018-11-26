<template>
  <div class="home">
      <div class="header">
        <span class="logo">今日头条</span>
        <router-link tag="div" to="/search" class="search">
          <i class="fa fa-search"></i>
          <div class="search_input">搜索...</div>
        </router-link>
          <div ref="refresh" class="refresh_icon">
             <i class="fa fa-refresh"></i>
          </div>
      </div>
      <div class="content home_content">
        <c-home-nav></c-home-nav>
        <c-loading v-show=""></c-loading>
        <transition name="fadeIn">
            <c-newslist
                    :listCon="listCon"
                    v-show="!loading && ifReturnMsg"
                    @event="loadmoreNews"
                    :flag="loadmore"
                    :ifFlag="ifReturnMore">

            </c-newslist>
        </transition>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHomeNav from '@/components/HomeNav.vue'
import CLoading from '@/components/Loading.vue'

export default {
  name: 'home',
  components: {
    CHomeNav,
    CLoading
  }
}
</script>


<style scoped lang="stylus">
  @import "../assets/style/common";
  @import "../assets/style/global.styl"
  @import "../assets/style/transition.styl"

.header
  background red
  line-height px2rem(80px)
  .refresh_icon
        font-size: px2rem(50px);
        position: absolute;
        top: px2rem(80px);
        left: 50%;
        transform: translateX(-50%);
  .logo
    font-size:px2rem(40px)
    color: #ffffff
    line-height:px2rem(80px)
    padding 0 px2rem(40)
    font-weight bold
    display inline-block
  .search
    position absolute
    right px2rem(30)
    top px2rem(15)
    font-size px2rem(26);
    .fa-search
      position absolute
      top px2rem(12px)
      left px2rem(11px)
    .search_input
      width px2rem(300)
      height:px2rem(50px)
      border 1px solid #aaa
      border-radius px2rem(10)
      line-height px2rem(50px)
      background: #fff
      cursor pointer
      text-indent px2rem(50px)


</style>
