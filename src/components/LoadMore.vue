<template>
    <div class="myLoadMore">
        <span v-if="!flag" @click="$emit('event')">{{msg}}</span>
        <span v-else>加载中...</span>
    </div>
</template>

<script>
    export default {
        name: "load-more",
        props:{
            flag:{
                required:true
            },
            ifFlag:{
                required:true
            }
        },
        computed:{
            msg(){
                if(this.ifFlag){
                    return '点击加载更多...'
                }
                return '加载失败,点击重新加载！'
            }
        }

    }
</script>

<style scoped lang="stylus">
    @import "../assets/style/common";
    .myLoadMore
        text-align center
        cursor pointer
        padding px2rem(20px) 0

</style>