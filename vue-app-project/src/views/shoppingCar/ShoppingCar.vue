<template>
  <div>
    <div class="header">
      <div class="bcmine" @click="handeclick">&lt;</div>
      我的订单
    </div>
    <van-empty v-if="!carts.length" description="哎呦，购物车空空如也" />
    <van-submit-bar
      v-if="carts.length"
      :price="price*100"
      :button-text="result.length ? `结算(${result.length})` : '结算'"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="toggleAll">全选</van-checkbox>
    </van-submit-bar>
    <van-checkbox-group v-model="result" ref="checkboxGroup" >
      <div v-for="elem in carts" :key="elem.product_id">
        <van-swipe-cell>
          <van-card
            num="1"
            :thumb="elem.slide_pic_index[0].imgs[0]"
            :title="elem.alert_product_name"
            :price="elem.price.toFixed(2)"
            v-if="elem.slide_pic_index"
          >
            <template #tags>
              <van-checkbox :name="elem.product_id" style="position:absolute; right:0"
                ></van-checkbox
              >
            </template>
            <!-- 比新机 -->
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deletcarts(elem.product_id)" />
          </template>
        </van-swipe-cell>
      </div>
    </van-checkbox-group>
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
      // list: [1, 2, 3],
    };
  },
  mounted() {
    // this.list=this.$store.state.addCarts.carts
    // console.log(this.list)
  },
  methods: {
    onSubmit() {
      // console.log(0);
      console.log(this.result)
    },
    handeclick() {
      history.back();
    },
    toggleAll(){
      // console.log(this.checked)
      this.$refs.checkboxGroup.toggleAll(this.checked);
    },
    // ...mapActions('addCarts',['deletcarts']),
    deletcarts(id){
      this.$store.dispatch("addCarts/deletcarts",id)
      let index = this.result.indexOf(id)
      if(index>-1) this.result.splice(index,1)
    },
  },
  watch:{
    result(newValue){
      // console.log(newValue.lenght)
      // console.log(this.$store.state.addCarts.carts.lenght)
      if(newValue.length===this.$store.state.addCarts.carts.length) {
        // console.log(1) 
        this.checked=true
      }else{
        this.checked=false
      }
    }
  },
  computed: {
    price() {
      let { carts } = this.$store.state.addCarts
      let arr=carts.filter(item=>{
        return this.result.indexOf(item.product_id)>-1
      })
      return arr.reduce((value,item)=>{
        return value+=item.price
      },0)
    },
    ...mapState('addCarts', ['carts'])
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
