<template>
  <div>
    <van-swipe class="my-swipe box" :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in bannerInfo.banner_list"
        :key="index"
      >
        <img v-lazy="image.img_url" />
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
  mounted() {},
};
</script>
<style lang='stylus' scoped>
.my-swipe
  .van-swipe__track
    width 100%
    img 
      width 100%
  
.box
  padding 0
</style>