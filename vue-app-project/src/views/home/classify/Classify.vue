<template>
  <main class="main">
    <header class="classifyHeader">
      <van-search
        shape="round"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
      <div class="shopingCar nav-iconnn">&#xe609;</div>
    </header>
    <div class="itemClassify">
      <itemClassify></itemClassify>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import itemClassify from "@/components/ItemClassify";
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    itemClassify,
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
@import '~@/assets/stylus/border.styl';
.main
  height: 6.18rem;
  .classifyHeader
    height .44rem
    width 100%
    .van-search
      padding .10rem 0 .10rem .12rem
      width 3.14rem
      height .44rem
      .van-search__content--round
        border-radius .10rem
    .shopingCar
      overflow-y scroll
      position absolute
      right 0
      top 0
      height .44rem
      width .62rem
      line-height .44rem
      font-weight bold
      font-size .28rem
      text-align center
  .itemClassify
    height 5.74rem
</style>
