<template>
  <div class="model_title_info">
    <div class="left">
      <div class="image">
        <img :src="evaluateData.resource_pic_url" alt="">
      </div>
      <div class="info">
        <div class="top">{{evaluateData.model_name}}</div>
        <div class="bottom">
          <div class="price_title2">{{evaluateData.price_title2}}</div>
          <div class="price_info">
            ￥<span class="max_price">{{evaluateData.max_price}}</span>
            <span class="add_text">{{evaluateData.coupon_info.add_text}}</span>
            <span class="add_price_percent">{{evaluateData.coupon_info.add_price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right"><router-link tag="span"  to="/sellEntry/sellClassify">重选机型</router-link></div>
  </div>
</template>

<script>
export default {
  props: ['evaluateData']
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/border.styl'

.model_title_info
  height 1.12rem
  background #f98129
  padding .11rem .16rem
  display flex
  justify-content space-between
  color #fff
  position relative
  margin-bottom .18rem
  .left
    min-width 2.4rem
    display flex
    .image
      padding-bottom .06rem
      height 100%
      margin-right .13rem
      img
        height 100%
        border-radius .07rem
    .info
      display flex
      flex-direction column
      justify-content space-between
      .top
        font-size .11rem
      .bottom
        .price_title2
          font-size .1rem
          color #ffdfcc
        .price_info
          font-size .12rem
          .max_price
            font-size .22rem
            font-weight bold
            margin-right .1rem
          .add_text
            color #fff4ec
          .add_price_percent
            font-weight bold
            font-size .13rem

  .right
    span
      display inline-block
      width .6rem
      height .2rem
      line-height .2rem
      text-align center
      font-size .1rem
      color #ffe5d5
      border1px(1px, #ffa46a, solid, .2rem)
      margin-top .1rem

  &::after
    content ''
    width 0
    height 0
    border-top .09rem solid #f98129
    border-left .15rem solid transparent
    border-right .15rem solid transparent
    border-bottom 0 solid transparent
    position absolute
    bottom -.09rem
    left 0
    right 0
    margin auto
</style>