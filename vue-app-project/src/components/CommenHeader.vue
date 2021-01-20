<template>
  <header>
    <van-icon name="arrow-left" v-if="back" @click="hisBack"/>
    {{title}}
  </header>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
  props: ["back", "title"],
  methods: {
    hisBack() {
      this.$router.push('/home/sell')
    }
  },
}
</script>

<style lang='stylus' scoped>
header 
  background #fff
  color #000
  font-size .16rem
  font-weight: 700;
  height .4rem
  line-height .4rem
  text-align center
  position fixed
  top 0
  width 100%
  z-index 9999
  .van-icon
    position absolute
    left .17rem
    top .12rem
    font-size .16rem
    font-weight: 700;
</style>