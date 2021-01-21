<template>
  <div>
    <div class="header">
      <div class="bcmine" @click="handeclick">&lt;</div>
      我的收藏
    </div>
    <van-empty v-if="!collections.length" description="还没有任何收藏呢" />
    <!-- <van-checkbox-group v-model="result" ref="checkboxGroup" > -->
      <div v-for="elem in collections" :key="elem.product_id">
        <van-swipe-cell>
          <van-card
            :thumb="elem.slide_pic_index[0].imgs[0]"
            :title="elem.alert_product_name"
            :price="elem.price.toFixed(2)"
            v-if="elem.slide_pic_index"
          >
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deletcollections(elem.product_id)" />
          </template>
        </van-swipe-cell>
      </div>
  </div>
</template>

<script>
import Vue from "vue"
import { Card,Empty,SubmitBar,Checkbox,CheckboxGroup,SwipeCell } from "vant"
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(Card).use(SwipeCell).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(Empty)

export default {
  data() {
    return {
      checked: false,
      result:[],
    };
  },
  mounted() {
  },
  methods: {
    handeclick() {
      history.back();
    },
    deletcollections(id){
      this.$store.dispatch("goodsCollect/deletCollections",id)
      let index = this.result.indexOf(id)
      if(index>-1) this.result.splice(index,1)
    },
  },
  computed: {
    price() {
      let { collections } = this.$store.state.goodsCollect
      let arr=collections.filter(item=>{
        return this.result.indexOf(item.product_id)>-1
      })
      return arr.reduce((value,item)=>{
        return value+=item.price
      },0)
    },
    ...mapState('goodsCollect', ['collections'])
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
