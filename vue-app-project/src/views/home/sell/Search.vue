<template>
  <van-search
    placeholder="搜索您要卖的机型、品牌"
    input-align="center"
    shape="round"
    @click="toSearch"
    class="sell-search"
  />
</template>

<script>
import Vue from "vue"
import { Search } from "vant"
Vue.use(Search)

export default {
  data() {
    return {
      value: "",
    }
  },

  methods: {
    toSearch() {
      this.$router.push('/sellEntry/searchProduct')
    }
  },
}
</script>
<style lang='stylus' scoped>
.van-search
  padding 0.05rem 0.12rem

  .van-cell
    font-size .14rem
    height .24rem
    line-height .2rem
</style>

<style lang="stylus">
.sell-search
  .van-icon
    font-size .16rem !important
</style>