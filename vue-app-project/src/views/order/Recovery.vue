<template>
  <div id="recovery">
    <div class="header">
      <router-link to="/home/mine" class="bcmine">&lt</router-link>
      我的订单
    </div>
    <van-tabs v-model="activeName">
      <van-tab title="进行中" name="underway" to="/recovery/underway"
        ><van-empty description="当前没有相关订单">
          <van-button color="#FF1A1A" round type="danger" class="bottom-button"
            >前往估价</van-button
          >
        </van-empty></van-tab
      >
      <van-tab title="已结束" name="finished" to="/recovery/finished"
        ><van-empty description="当前没有相关订单">
          <van-button color="#FF1A1A" round type="danger" class="bottom-button"
            >前往估价</van-button
          >
        </van-empty></van-tab
      >
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Empty } from "vant";
import { Button } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Button);
export default {
  data() {
    return {
      activeName: "receiving",
    };
  },
  mounted() {
    console.log(this.$router.currentRoute.name);
    this.activeName = this.$router.currentRoute.name;
  },
  computed: {},
};
</script>
<style lang="stylus" scoped>
.header
    height .44rem
    width 100%
    font-size .17rem
    font-weight 700
    line-height .44rem
    text-align center
    .bcmine
      position absolute
      display block
      top .08rem
      left .08rem
      font-family "宋体"
      font-weight 900
      height .3rem
      width .3rem
      line-height .3rem
      font-size .25rem
      color #999
.van-tab__pane
    background-color #F5F7FA
    height 5.79rem
    color #fff
    display flex
    flex-direction column
    justify-content center
</style>
<style lang="stylus">
#recovery .van-tabs__line
    width 50%
#recovery .van-empty
  margin-top -2rem
  .van-empty__image
    border-radius 1rem
    overflow hidden
    height 2rem
    width 2rem
  p
    font-size .2rem
</style>
