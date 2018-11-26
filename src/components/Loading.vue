<template>
    <div class="loadEffect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

    </div>
</template>

<script>
    export default {
        name: "loading.vue"
    }
</script>

<style scoped lang="stylus">
    @import "../assets/style/global.styl"
    @import "../assets/style/animation"
    .loadEffect
        position relative
        top px2rem(133px)
        left 50%
        z-index 200
        width px2rem(100px)
        height px2rem(100px)
        transform translateX(-50%)
        span
            display inline-block
            width px2rem(16px)
            height px2rem(16px)
            border-radius 50%
            background-color red
            position absolute
            opacity 0
            animation load 0.9s ease infinite

            &:nth-child(1)
                left: 0;
                top: 50%;
                margin-top:-1 * px2rem(8px);
                animation-delay:0.13s;
            &:nth-child(2)
                left: px2rem(14px);
                top: px2rem(14px);
                animation-delay:0.26s;
            &:nth-child(3)
                left: 50%;
                top: 0;
                margin-left: -1 * px2rem(8px);
                animation-delay:0.39s;
            &:nth-child(4)
                top: px2rem(14px);
                right:px2rem(14px);
                animation-delay:0.52s;
            &:nth-child(5)
                right: 0;
                top: 50%;
                margin-top:-1 * px2rem(8px);
                animation-delay:0.65s;
            &:nth-child(6)
                right: px2rem(14px);
                bottom:px2rem(14px);
                animation-delay:0.78s;
            &:nth-child(7)
                bottom: 0;
                left: 50%;
                margin-left: -1 * px2rem(8px);
                animation-delay:0.91s;
            &:nth-child(8)
                bottom: px2rem(14px);
                left: px2rem(14px);
                animation-delay:0.94s;





</style>