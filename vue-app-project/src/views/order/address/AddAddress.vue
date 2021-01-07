<template>
<div>
    <div class="header">
      <router-link to="/address/addressList" class="bcmine">&lt</router-link>
      新增收货地址
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.addresslist
    height 5.73rem
    overflow-y scroll
.header
    height .44rem
    width 100%
    font-size .17rem
    font-weight 700
    line-height .44rem
    text-align center
    background-color #fff
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
</style>