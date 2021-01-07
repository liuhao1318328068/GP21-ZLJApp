<template>
  <div class="box" :class="arrow">
    <div class="price_con">
      <div class="price_info" v-for="(p, i) in memoryPrice" :key="'p' + i">
        <div class="name">{{p.val_name}}</div>
        <div class="info">
          最高回收价：<span class="price">￥<b class="price_num">{{p.price}}</b></span>
        </div>
      </div>
    </div>
    <van-icon name="arrow-down" class="arrow"  v-if="arrow.hasArrow && down" @click="changeShow"/>
    <van-icon name="arrow-up" class="arrow"  v-if="arrow.hasArrow && up" @click="changeShow"/>
  </div>
</template>

<script>
export default {
  props: ['memoryPrice'],

  data() {
    return {
      arrow: {
        hasArrow: false,
        show: false,
      },
      down: true,
      up: false
    }
  },
  
  methods: {
    showArrow() {
      if(this.memoryPrice.length > 3){
        this.arrow.hasArrow = true
      }
    },

    changeShow() {
      this.down = !this.down
      this.up = !this.up
      this.arrow.show = !this.arrow.show
    }
  },

  mounted() {
    this.showArrow()
  },


}
</script>

<style lang='stylus' scoped>
.box
  background #f7f7f7
  padding 0 .39rem
  display flex
  flex-direction column
  align-items center
  .price_info
    height .4rem
    line-height .4rem
    display flex
    .name
      font-weight bold
      font-size .11rem
      color #434343
      width 1.44rem
    .info
      color #9a9a9a
      font-size .11rem
      .price
        color #262626
        font-size .09rem
        .price_num
          font-size .13rem
  .arrow
    color #999

.hasArrow
  padding-bottom .1rem
  .price_con
    max-height 1.2rem
    overflow hidden
.show
  .price_con
    max-height 999rem
</style>