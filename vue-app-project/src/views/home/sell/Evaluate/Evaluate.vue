<template>
   <div class="box">
      <div class="model_main">
          <div class="model_img">
              <img :src="lastLocalModel.model_img" alt="">
          </div>
          <div class="info">
              <p><span class="price_title">{{lastLocalModel.price_title}}</span><span class="price">￥<b>{{lastLocalModel.price}}</b></span></p>
              <p>
                  <span class="icon">{{lastLocalModel.icon_text}}</span>
                  <span class="model_name">{{lastLocalModel.model_name}}</span>
              </p>
          </div>
      </div>
      <div class="toEvaluate">
          {{lastLocalModel.btn_text}}
          <img :src="lastLocalModel.animate_url" />
      </div>
   </div>
</template>

<script>
export default {
    props: ["lastLocalModel"]
}
</script>

<style lang='stylus' scoped>
@import "~@/assets/stylus/border.styl"

.box
    display flex
    justify-content space-between
    align-items center
    .model_main
        display flex
        height .63rem
        .model_img
            width .62rem
            border1px(2px, #eee, solid, 6px)
            display flex
            align-items center
            img
                width 100%
        .info
            margin-left .05rem
            font-size .1rem
            white-space nowrap
            display flex
            flex-direction column
            justify-content space-between
            p
                .price_title
                    vertical-align top

                .price
                    color #ff1a1a
                    b
                        font-size .24rem
                        vertical-align sub
                        display inline-block
                        height .24rem
                        line-height .24rem

                &:last-child
                    height .24rem
                    .icon
                        background #262626
                        color #fff
                        border-radius .05rem
                        font-size .08rem
                        padding 0.04rem 0.03rem

                    .model_name
                        font-size .1rem
                        vertical-align sub
                        margin-left .03rem

    .toEvaluate
        color #fff
        background #ff2d2d
        width .74rem
        height .32rem
        line-height .32rem
        text-align center
        font-size .1rem
        position relative
        border-radius .16rem

        img
            width .58rem
            position absolute
            top -.18rem
            left .24rem
</style>