<template>
  <div id="order">
    <div class="header">
      <router-link to="/home/mine" class="bcmine">&lt</router-link>
      我的订单
    </div>
    <van-tabs v-model="activeName">
      <van-tab title="全部" name="all" to="/order/all"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
      <van-tab title="待付款" name="obligation" to="/order/obligation"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
      <van-tab title="待发货" name="pending" to="/order/pending"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
      <van-tab title="待收货" name="receiving" to="/order/receiving"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
      <van-tab title="可晒单" name="scheduling" to="/order/scheduling"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
      <van-tab title="售后" name="aftersale" to="/order/aftersale"
        ><van-empty description="还没有相关订单呢"
      /></van-tab>
    </van-tabs>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

import { Empty } from "vant";

Vue.use(Empty);
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
  // watch: {
  //   //观察路由改变，将传入的数据改变
  //   $route(to, from) {
  //     console.log(to)
  //   },
  // },
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
#order .van-empty
  margin-top -2rem
  .van-empty__image
    height 2rem
    width 2rem
  p
    font-size .2rem
</style>
