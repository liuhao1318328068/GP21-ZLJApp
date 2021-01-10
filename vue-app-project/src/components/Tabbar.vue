<template>
    <van-tabbar v-model="active" route active-color="#ff1a1a" inactive-color="#2c2c2c">
        <van-tabbar-item replace  to="/home/index" class="nav-iconnn"><span class="span-icon">&#xe61d;</span><span class="span-text">首页</span></van-tabbar-item>
        <van-tabbar-item replace to="/home/classify" class="nav-iconnn"><span class="span-icon">&#xe623;</span><span class="span-text">分类</span></van-tabbar-item>
        <van-tabbar-item replace to="/home/sell" class="nav-iconnn"><span class="span-icon">&#xe76e;</span><span class="span-text">卖手机</span></van-tabbar-item>
        <van-tabbar-item replace to="/home/group" class="nav-iconnn"><span class="span-icon">&#xe76e;</span><span class="span-text">超值拼团</span></van-tabbar-item>
        <van-tabbar-item replace to="/home/mine" class="nav-iconnn"><span class="span-icon">&#xe735;</span><span class="span-text">个人</span></van-tabbar-item>
    </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.van-tabbar-item
    display flex
    flex-direction column
    span 
        display block
        text-align center
    .span-icon
        font-size .22rem
        padding-bottom .02rem
    .span-text
        font-size .1rem
        color #979797
.van-tabbar-item--active .span-text
    color #ff1a1a
.van-tabbar
    height .48rem
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after
    border 0
</style>