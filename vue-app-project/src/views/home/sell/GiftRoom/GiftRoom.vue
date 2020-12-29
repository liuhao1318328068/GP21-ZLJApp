<template>
   <div class="box">
      <div class="block" v-for="(item, i) in infoList" :key="'block' + i">
          <div class="left">
            <h4>{{item.title}}</h4>
            <p>{{item.info}}</p>
          </div>
          <img :src="item.img" alt="">
      </div>
      <div class="line"></div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            infoList: [
                {
                    title: "超值买二手",
                    info: "放心买 超低价",
                    img: require("@/assets/images/phoneIcon.png")
                },
                {
                    title: "惊喜盲盒馆",
                    info: "赢iPhone12",
                    img: require("@/assets/images/giftIcon.png")
                }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
.box
    display flex
    justify-content space-between
    align-items center
    position relative

    .block
        display flex
        justify-content space-between
        .left
            display flex
            flex-direction column
            justify-content space-between
            margin-right .29rem
            h4
                color #262626
                font-size .11rem
            p
                color #999
                font-size .1rem
    .line
        width .02rem
        height .4rem
        transform scale(0.5)
        background #f0f0f0
        position absolute
        left 0
        right 0
        margin auto
</style>