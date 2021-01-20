<template>
  <div>
    <div class="header">
      <div class="bcmine" @click="handeclick">&lt;</div>
      我的收藏
    </div>
    <van-empty v-if="!list.length" description="还没有相关收藏呢" />
    
    <div v-for="(elem,i) in list" :key="elem+i">
      <van-swipe-cell>
        <van-card
          num="1"
          price="1198.00"
          desc="备注信息"
          title="iPhone 8"
          thumb="http://cdn.huodao.hk/upload_img/20191108/15a0bb69c07bd6f3739a20f154e557f6.jpg"
        >
        </van-card>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Empty } from "vant";
import { SwipeCell } from "vant";
import { Card } from "vant";

Vue.use(Card);

Vue.use(SwipeCell);

Vue.use(Empty);
export default {
  data() {
    return {
      checked: false,
      list: [1, 2, 3],
    };
  },
  methods: {
    handeclick() {
      return history.back();
    },
  },
  computed: {
    
  },
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
.goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
</style>
