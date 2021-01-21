<template>
  <div class="payment">
    <div class="header">
      <div class="bcmine" @click="handeclick">&lt;</div>
      确认订单
    </div>
    <main class="main">
      <div class="pay-goods" v-for="(item,index) in list" :key="item.product_id">
        <h2>订单{{index+1}}</h2>
        <div class="pay-box">
          <div class="title">
            <img :src="item.slide_pic[0]" alt="">
            <div class="title-right"> 
              <h3>{{item.alert_product_name}}</h3>
              <div class="pay-tag">
                <span>支持七天退还</span>
                <span>顺丰包邮</span>
              </div>
              <div class="pay-price">
                ￥<span>{{item.price.toFixed(2)}}</span><em>x1</em>
              </div>
            </div>
          </div>
          <div class="subtotal">
            <p>小计:￥<span>{{item.price.toFixed(2)}}</span></p>
            <b>共1件商品</b>
          </div>
        </div>
      </div>
    </main>
    <van-submit-bar :price="price*100" button-text="提交订单" @submit="onSubmit" >
      <template #tip>
        目前有多个用户下单该商品，快点抢先一步支付吧
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

export default {
  data() {
    return {
      list:[]
    };
  },
  mounted() {
    this.list=this.$route.params.data
    console.log(this.$route.params.data)
  },
  methods:{
    handeclick() {
      history.back();
    },
    onSubmit(){
      console.log(this.$route)
    }
  },
  computed: {
    price() {
      return this.list.reduce((value,item)=>{
        return value+=item.price
      },0)
    },
  },

};
</script>

<style scoped lang="stylus">
.payment 
  height 100%
  .header
    height .44rem
    width 100%
    font-size .17rem
    font-weight 400
    line-height .44rem
    text-align center
    // text-indent .44rem
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
  .main
    background-color #f5f5f5
    height 100%
    padding 12px
    .pay-goods
      background-color #fff
      border-radius 8px
      h2
        height 42px
        line-height 42px
        text-indent 12px
        font-size 16px
        border-bottom 1px solid #eeeeee
      .pay-box
        padding 12px
        overflow hidden
        .title
          overflow hidden
          border-bottom 1px solid #eeeeee
          padding-bottom 12px
          img 
            width 80px
            height 80px
            float left
          .title-right
            float left
            margin-left 8px
            .pay-tag
              margin-top 5px
              span 
                font-size 12px
                color #f71d1e
                display inline-block
                background-color #fff3f3
                padding 2px 4px
                border-radius 3px 
                margin-right 10px
            .pay-price
              margin-top 6px
              color #ff191b
              font-size 12px
              span 
                font-size 18px
                font-weight 600
              em 
                float right 
                height 27px
                line-height 27px
                font-size 18px
                color #000
                position relative 
                top -1px
        .subtotal   
          // height 40px
          // line-height 52px
          margin-top 15px
          margin-bottom 5px
          p
            float right    
          b
            float right     
            color #b2b2b2
            font-weight 400
            margin-right 5px
.van-submit-bar__text
  text-align left
</style>
