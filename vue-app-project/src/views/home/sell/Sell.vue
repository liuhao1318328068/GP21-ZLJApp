<template>
  <main class="main" id="sellPhone">
    <CommenHeader :title="'买卖二手手机'"></CommenHeader>
    <van-loading size="1rem" v-if="loading"></van-loading>
    <div class="content" v-show="!loading">
      <Search></Search>
      <Banner :banner-info="banner_info"></Banner>
      <Trust :trust-info="trust_info"></Trust>
      <GiftRoom></GiftRoom>
      <Evaluate :last-local-model="last_local_model"></Evaluate>
      <Recover :process-info="process_info"></Recover>
      <WhyChoose :why-choose-us="why_choose_us"></WhyChoose>
      <HistoryTransaction :history-transaction="history_transaction"></HistoryTransaction>
      <Questions :hot-questions="hot_questions"></Questions>
      <div class="footer_text">{{footer_text}}</div>
      <div class="eva_btn" ref="eva_btn" @click="toClassify">测一测值多少钱</div>
      <div class="custom_btn sell-iconnn">&#xe625;</div>
    </div>
  </main>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue"

import Search from "./Search"
import Banner from "./Banner"
import Trust from "./Trust"
import GiftRoom from "./GiftRoom"
import Evaluate from "./Evaluate"
import Recover from "./Recover"
import WhyChoose from "./WhyChoose"
import HistoryTransaction from "./HistoryTransaction"
import Questions from "./Questions"

import Vue from 'vue'
import { Loading } from 'vant'

Vue.use(Loading)

export default {
  data() {
    return {
      loading: true,
      banner_info: "",
      trust_info: "",
      last_local_model: "",
      process_info: "",
      why_choose_us: "",
      history_transaction: "",
      hot_questions: "",
      footer_text: ""
    }
  },

  methods: {
    async loadData() {
      let result = await this.$http.get({
        url: "/evaluate/new_index2",
      })

      let { 
        banner_info,
        trust_info,
        last_local_model,
        process_info,
        why_choose_us,
        history_transaction,
        hot_qa_info,
        footer_text
      } = result.data

      this.banner_info = banner_info
      this.trust_info = trust_info
      this.last_local_model = last_local_model
      this.process_info = process_info
      this.why_choose_us = why_choose_us
      this.history_transaction = history_transaction
      this.hot_questions = hot_qa_info
      this.footer_text = footer_text
    },

    toClassify() {
      this.$router.push({
        name: 'sellClassify'
      })
    }
  },

  async mounted() {
    await this.loadData()

    this.loading = false

    // 页面下方eva_btn按钮缩放动画
    let eva_btn = this.$refs.eva_btn
    eva_btn.style = "transform:scale(0.9)"
    setInterval(() => {
      eva_btn.style = "transform:scale(1.1)"
      setTimeout(() => {
        eva_btn.style = "transform:scale(0.9)"
      }, 500)
    }, 1000)
  },

  components: {
    CommenHeader,
    Search,
    Banner,
    Trust,
    GiftRoom,
    Evaluate,
    Recover,
    WhyChoose,
    HistoryTransaction,
    Questions
  },
}
</script>
<style lang='stylus'>
@import "~@/assets/stylus/icon.styl"

#sellPhone
  background rgb(246,248,250)
  padding .4rem 0 .65rem
  position relative
  .content
    height 5.8rem
    overflow-y scroll 
  
  .van-loading
    height 100%
    width 100%
    display flex
    justify-content center
    align-items center

  .footer_text
    font-size .12rem
    transform scale(0.75)
    text-align center
    height .48rem
    line-height .48rem
    color #999

  .eva_btn
    color #fff
    background #ff1a1a
    width 2.8rem
    height .4rem
    line-height .4rem
    text-align center
    border-radius .4rem
    font-size .17rem
    position fixed
    z-index 999
    left 0
    right 0
    margin auto
    bottom .65rem
    box-shadow 0 .05rem .1rem #f7babf
    transition all 1s

  .custom_btn
    position fixed
    right .3rem
    bottom 1.92rem
    background #fff
    color #262626
    width .42rem
    height .42rem
    line-height .42rem
    text-align center
    border-radius .42rem
    box-shadow 0 0 .1rem .03rem #e5e5e5
    font-size .2rem
</style>