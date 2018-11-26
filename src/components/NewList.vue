<template>
    <div class="newList">
        <ul>
            <router-link v-for="(item,index) in listCon " :key="index" :to="{path:'/content/' + item.item_id}" tag="li"
                          class="news_box" v-if="item.title"
            >
                <div v-html="item.title" class="news_tite"></div>
                <div class="news_imgs">
                    <img v-for="(img,index) in item.image_list" v-lazy="img.url" style="width:30%;" :key="index" v-if="index < 3" >
                </div>
                <div class="news_info">
                    <span class="media_name">{{item.media_name}}</span>
                    <span class="comment_count">{{item.comment_count}}</span>
                    <span class="datetime">{{item.datetime|dateFormate}}</span>
                </div>

            </router-link>
        </ul>
        <c-loadmore :flag="flag" :ifFlag="ifFlag" @event="$emit('event')"></c-loadmore>
    </div>
</template>

<script>
    import {matState} from 'vuex';
    import CLoadmore from './LoadMore'
    export default {
        name: "new-list",
        components:{
            CLoadmore
        }
    }
</script>

<style scoped>

</style>