<template>
  <div id="sellContainer">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);

export default {

}
</script>

<style lang='stylus'>
#sellContainer
  width 100%
  height 100%
  .van-loading
    height 100%
    width 100%
    display flex
    justify-content center
    align-items center
</style>