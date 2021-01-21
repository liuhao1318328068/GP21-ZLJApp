<template>
  <div id="sellBanner">
    <van-swipe class="box" :autoplay="3000" :touchable='false'>
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
import Vue from "vue"
import { Swipe, SwipeItem } from "vant"
import { Lazyload } from "vant"

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

export default {
  props: ["bannerInfo"],
}
</script>
<style lang='stylus'>
#sellBanner
  overflow hidden
  height 0
  font-size 0
  padding-bottom 36.149%
  position relative
  .van-swipe
    position absolute
    top 0
    right 0
    bottom 0
    left 0
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