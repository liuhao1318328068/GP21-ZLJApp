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
    padding 0.12rem
    .pay-goods
      background-color #fff
      border-radius 0.08rem
      h2
        height 0.42rem
        line-height 0.42rem
        text-indent 0.12rem
        font-size 0.16rem
        border-bottom 0.01rem solid #eeeeee
      .pay-box
        padding 0.12rem
        overflow hidden
        .title
          overflow hidden
          border-bottom 0.01rem solid #eeeeee
          padding-bottom 0.12rem
          img 
            width 0.8rem
            height 0.8rem
            float left
          .title-right
            float left
            margin-left 0.08rem
            .pay-tag
              margin-top 0.05rem
              span 
                font-size 0.12rem
                color #f71d1e
                display inline-block
                background-color #fff3f3
                padding 0.02rem 0.04rem
                border-radius 0.03rem 
                margin-right 0.1rem
            .pay-price
              margin-top 0.06rem
              color #ff191b
              font-size 0.12rem
              span 
                font-size 0.18rem
                font-weight 600
              em 
                float right 
                height 0.27rem
                line-height 0.27rem
                font-size 0.18rem
                color #000
                position relative 
                top -0.01rem
        .subtotal   
          // height 0.4rem
          // line-height 0.52rem
          margin-top 0.15rem
          margin-bottom 0.05rem
          p
            float right    
          b
            float right     
            color #b2b2b2
            font-weight 400
            margin-right 0.05rem
.van-submit-bar__text
  text-align left
</style>
