<template>
  <div class="box">
      <div class="top">
          <div class="left">
              <p>
                  <img :src="trustInfo.icon" alt=""><span>{{trustInfo.title}}</span>
              </p>
              <p>{{trustInfo.text}}</p>
          </div>
          <div class="right">累计回收<span><i>500</i>万+</span>机器</div>
      </div>
      <div class="bottom">
          <div class="sellBlock">
              <h3>卖手机</h3>
              <p>苹果/华为/小米等</p>
          </div>
          <div class="sellBlock">
              <h3>卖数码</h3>
              <p>平板/电脑等</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["trustInfo"],
};
</script>

<style lang='stylus' scoped>
.box
    display flex
    flex-direction column
    justify-content space-between
    padding 20px
    box-sizing border-box

    .top
        display flex
        height 90px
        justify-content space-between

        .left
            p
                img
                    width 20px
                span
                    font-size 18px
                &:last-child
                    font-size 12px
                    color rgb(155,155,155)
        .right
            height 90px
            line-height 90px
            color #999999
            font-size 16px

            span 
                color rgb(255,51,51)
                i
                    font-style normal
                    font-weight bold

    .bottom
        display flex
        justify-content space-between

        .sellBlock
            border-radius 10px
            color #fff
            padding 10px

            &:first-child
                background linear-gradient(to right bottom, rgb(62,109,254) 0%, rgb(14,198,254) 100%) 
            &:last-child
                background linear-gradient(to right bottom, rgb(2,206,174) 0%, rgb(134,217,211) 100%) 
</style>