<template>
  <div>
    <div class="header">
      <div class="bcmine" @click="handeclick">&lt</div>
      我的订单
    </div>
    <van-empty v-if="!list.length" description="哎呦，购物车空空如也" />
    <van-submit-bar
      v-if="list.length"
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <div v-for="(elem,i) in list" :key="elem+i">
      <van-swipe-cell>
        <van-card
          num="1"
          price="3858.00"
          desc="备注信息"
          title="Mate30 Pro  5G"
          thumb="http://cdn.huodao.hk/upload_img/20191101/b98f884870db187eee1f199d9f0851bb.jpg"
        >
          <template #tags>
            <van-checkbox v-model="checked" style="position:absolute; right:0"
              ></van-checkbox
            >
          </template>
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
import { SubmitBar } from "vant";
import { Checkbox } from "vant";
import { SwipeCell } from "vant";
import { Card } from "vant";

Vue.use(Card);

Vue.use(SwipeCell);

Vue.use(Checkbox);

Vue.use(SubmitBar);

Vue.use(Empty);
export default {
  data() {
    return {
      checked: false,
      list: [1, 2, 3],
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log(0);
    },
    handeclick() {
      return history.back();
    },
  },
  computed: {
    price() {
      return 0;
    },
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
