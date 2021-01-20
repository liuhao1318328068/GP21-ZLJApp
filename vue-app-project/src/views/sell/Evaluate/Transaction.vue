<template>
  <div class="box">
    <h1>实时交易动态<span>{{transaction.tip_text}}</span></h1>
    <van-swipe
      :autoplay="3000"
      style="height: 2.48rem"
      vertical
      :show-indicators="false"
      :touchable="false"
      :lazy-render="true"
      v-if="show"
    >
      <van-swipe-item
        v-for="(hisArr, i) in hisList"
        :key="'hisArr' + i"
      >
        <SellHistorySection :history-arr="hisArr"></SellHistorySection>
      </van-swipe-item>
    </van-swipe>
    <router-link to="/sellEntry/moreHistory" tag="div" class="toMore">更多成交历史<van-icon name="arrow" /></router-link>
  </div>
</template>

<script>
import SellHistorySection from "@/components/SellHistorySection.vue"
import Vue from "vue"
import { Swipe, SwipeItem, Icon } from "vant"

Vue.use(Swipe).use(SwipeItem).use(Icon)

export default {
  props: ['transaction'],

  data() {
    return {
      hisList: [],
      show: false
    }
  },

  methods: {
    transactionList() {
      let historyList = this.transaction.list
      if(historyList) {
        for (let index = 0; index < historyList.length; index += 3) {
          if(historyList[index + 1] && historyList[index + 2]) {
            this.hisList.push([historyList[index], historyList[index + 1], historyList[index + 2]])
          } else if(historyList[index + 1]) {
            this.hisList.push([historyList[index], historyList[index + 1]])
          } else {
            this.hisList.push([historyList[index]])
          }
        }
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  },

  mounted() {
    this.transactionList()
  },

  components: {
    SellHistorySection
  }
}
</script>

<style lang='stylus' scoped>
.box
  padding-bottom 0
h1
  font-size .15rem
  color #262626
  height .31rem
  line-height .31rem
  span
    font-size .12rem
    color #9f9f9f
    margin-left .06rem
.van-swipe-item
  height 2.48rem !important
.toMore
  height .42rem
  line-height .42rem
  text-align center
  font-size .12rem
  color #9f9f9f
</style>