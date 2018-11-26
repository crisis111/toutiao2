<template>
    <div class="home_nav">
        <ul class="home_nav_list" ref="homenav">
            <router-link
                     v-for="(item,index) in nav" class="home_nav_item"
                     :key="index" :to="item.url + '/' +item.type"
                     tag="li"
            >
                {{item.text}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home-nav",
        data(){
            return {
                nav: [
                    {url: '/home', type: '__all__', text: '推荐'},
                    {url: '/home', type: 'news_hot', text: '热点'},
                    {url: '/home', type: 'news_society', text: '社会'},
                    {url: '/home', type: 'news_entertainment', text: '娱乐'},
                    {url: '/home', type: 'news_tech', text: '科技'},
                    {url: '/home', type: 'news_car', text: '汽车'},
                    {url: '/home', type: 'news_sports', text: '体育'},
                    {url: '/home', type: 'news_finance', text: '财经'},
                    {url: '/home', type: 'news_military', text: '军事'},
                    {url: '/home', type: 'news_world', text: '国际'},
                    {url: '/home', type: 'news_fashion', text: '时尚'}
                ],
                navPosition : 0
            }
        },
        watch:{
            $route(to,from){

            }
        }

    }
</script>

<style scoped lang="stylus">
    @import "../assets/style/global.styl"
    .home_nav
        position: fixed
        z-index:200
        top px2rem(80px)
        left:0
        width 100%
        height px2rem(60px)
        background #eee
        .home_nav_list
            display flex
            align-items center
            overflow auto
            width 100%
            .home_nav_item
                flex-basis px2rem(90)
                flex-shrink 0
                font-dpr(16px)
                color #000
                line-height px2rem(60px)
                text-align center

    .router-link-active
        color tomato
        font-weight bold



</style>