<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <p>
          <img :src="trustInfo.icon" alt="" /><span>{{ trustInfo.title }}</span>
        </p>
        <p>{{ trustInfo.text }}</p>
      </div>
      <div class="right">
        累计回收<span><i>500</i>万+</span>机器
      </div>
    </div>
    <div class="bottom">
      <div class="sellBlock" @click="toClassify(1)">
        <h3>卖手机</h3>
        <p>苹果/华为/小米等</p>
        <div class="sell-iconnn">&#xe6c7;</div>
      </div>
      <div class="sellBlock" @click="toClassify(2)">
        <h3>卖数码</h3>
        <p>平板/电脑等</p>
        <div class="sell-iconnn">&#xe688;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trustInfo"],
  methods: {
    toClassify(category_id) {
      this.$router.push({
        name: 'sellClassify',
        params: {
          category_id
        }
      })
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/icon.styl'

.box
  display flex
  flex-direction column
  justify-content space-between
  box-sizing border-box

  .top
    display flex
    justify-content space-between
    color #999

    .left
      p
        height 0.35rem
        line-height 0.35rem
        display flex
        align-items center

        img
          height 0.17rem

        span
          font-size 0.15rem
          color #000

        &:last-child
          font-size 0.1rem
      
    .right
      height 0.72rem
      line-height 0.72rem
      font-size 0.1rem

      span
        color #f33

        i
          font-style normal
          font-weight bold
          font-size 0.15rem

  .bottom
    display flex
    justify-content space-between

    .sellBlock
      height 1rem
      border-radius 0.1rem
      color #fff
      padding 0.15rem
      position relative

      h3
        font-size 0.16rem

      p
        font-size 0.12rem

      .sell-iconnn
        position absolute
        right 0.1rem
     
      &:first-child
        width 1.69rem
        background linear-gradient(to right bottom, #3e6eff 0%, #0bcdfe 100%)

        .sell-iconnn
          bottom 0.08rem
          font-size 0.42rem

      &:last-child
        width 1.42rem
        background linear-gradient(to right bottom, #02cfae 0%, #89dad4 100%)

        .sell-iconnn
          bottom 0.04rem
          font-size 0.5rem
</style>