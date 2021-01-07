<template>
  <div  id="sellBanner">
    <van-swipe class="box" :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in bannerInfo.banner_list"
        :key="index"
      >
        <router-link
          tag="img"
          v-lazy="image.img_url"
          :to="{
            name: 'redPacket',
            params: image
          }"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  props: ["bannerInfo"],
};
</script>
<style lang='stylus'>
#sellBanner
  background linear-gradient(to bottom, #fff 0%, rgb(246,248,250) 100%)
  overflow hidden
  .van-swipe__track
    width 100% !important
    .van-swipe-item
      width 100% !important
      img 
        width 100% !important
        border-radius .05rem
  &.box
    padding 0
</style>