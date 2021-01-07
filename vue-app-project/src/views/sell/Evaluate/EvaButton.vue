<template>
  <main>
    <div class="exactEva">精准估价</div>
    <div class="quickEva">快速估价<img :src="require('@/assets/images/giveRedPacket.png')" /></div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/border.styl'

main
  position fixed
  bottom 0
  background #fff
  width 100%
  height .68rem
  display flex
  justify-content space-around
  align-items center
  div
    height .42rem
    line-height .42rem
    text-align center
    border-radius 0.04rem
  .exactEva
    width 1.06rem
    color #ff1a1a
    font-size .14rem
    border1px(1px, #ff1a1a, solid, .04rem)
  .quickEva
    width 2.23rem
    color #fff
    background #ff1a1a
    position relative
    img
      width .58rem
      position absolute
      top -.18rem
      right .24rem
</style>