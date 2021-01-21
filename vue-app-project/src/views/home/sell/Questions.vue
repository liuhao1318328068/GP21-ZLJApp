<template>
  <div class="box" id="questions">
    <SellBlockTop
      :title="hotQuestions.title"
      :look-more-title="'更多回收问题'"
      :look-more="lookMore"
    >
    </SellBlockTop>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        v-for="item in hotQuestions.qa_list"
        :key="item.serial_number"
        :title="`${item.serial_number}.${item.question}`"
        :name="item.serial_number"
      >
        {{ item.answer }}
      </van-collapse-item>
    </van-collapse>
    <p class="sell-iconnn">&#xe625; 联系客服</p>
  </div>
</template>

<script>
import SellBlockTop from "@/components/SellBlockTop.vue"

import Vue from "vue"
import { Collapse, CollapseItem } from "vant"

Vue.use(Collapse)
Vue.use(CollapseItem)

export default {
  props: ["hotQuestions"],
  data() {
    return {
      activeName: "1",
    }
  },
  computed: {
    lookMore() {
      let lookMoreInfo = {
        name: "moreQuestions",
        url: this.hotQuestions.more_url,
      }
      return lookMoreInfo
    },
  },
  components: {
    SellBlockTop,
  },
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/icon.styl'

.box
  padding-bottom 0

  .van-collapse-item--border::after
    border none
  


  .sell-iconnn
    font-size 0.15rem
    height 0.47rem
    line-height 0.47rem
    text-align center
    color #b2b2b2
</style>

<style lang="stylus">
#questions
  .van-cell
    font-size .14rem
    line-height .24rem
    
    .van-cell__right-icon
      font-size .16rem
      height .24rem
      line-height .24rem
</style>