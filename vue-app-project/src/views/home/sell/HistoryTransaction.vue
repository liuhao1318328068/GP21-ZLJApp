<template>
  <div class="box" id="historyTransaction">
    <SellBlockTop
      :title="historyTransaction.tip"
      :subtitle="historyTransaction.tip_text"
      :look-more-title="'查看更多'"
      :look-more="lookMore"
    >
    </SellBlockTop>
    <van-swipe
      :autoplay="3000"
      style="height: 1.73rem"
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
  </div>
</template>

<script>
import SellBlockTop from "@/components/SellBlockTop.vue"
import SellHistorySection from "@/components/SellHistorySection.vue"
import Vue from "vue"
import { Swipe, SwipeItem } from "vant"

Vue.use(Swipe).use(SwipeItem)

export default {
  props: ["historyTransaction"],

  data() {
    return {
      lookMore: { name: "moreHistory" },
      hisList: [],
      show: false
    }
  },

  methods: {
    historyTransactionList() {
      let historyList = this.historyTransaction.list
      if(historyList) {
        for (let index = 0; index < historyList.length; index += 2) {
          if(historyList[index + 1]) {
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

  watch: {
    historyTransaction: {
      handler: 'historyTransactionList'
    }
  },

  components: {
    SellBlockTop,
    SellHistorySection
  },
}
</script>

<style lang='stylus'>
#historyTransaction
  .title
    .subtitle
      font-weight normal
      font-size 0.11rem
      color #999
      margin-left 0.1rem
  .van-swipe__track
    height auto !important
    .van-swipe-item
      height 1.73rem !important
</style>