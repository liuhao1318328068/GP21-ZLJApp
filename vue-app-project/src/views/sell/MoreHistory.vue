<template>
  <div id="moreHistory">
    <CommenHeader :back="1" :title="'历史成交'"></CommenHeader>
    <van-loading size="1rem" v-if="loading"></van-loading>
    <main v-else>
      <div class="content">
        <section
          class="section"
          v-for="(his, i) in historyList.list"
          :key="'h' + i"
        >
          <div class="title">{{ his.model_info_str }}</div>
          <div class="info">
            预估<span class="check_money">￥{{ his.check_money }}</span
            ><span class="price"
              >回收价<span class="money">￥{{ his.money }}</span></span
            ><span class="price"
              >多卖<span class="money">￥{{ his.earn_more_money }}</span></span
            >
          </div>
          <router-link
            tag="div"
            class="lookRep"
            :to="{
              name: 'qualityReport',
              params: {
                order_no: his.re_order_no,
              },
            }"
          >
            查看质检报告
            <van-icon name="arrow" />
          </router-link>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue";

import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

export default {
  data() {
    return {
      loading: true,
      historyList: "",
    };
  },

  methods: {
    async loadData() {
      let result = await this.$http.get({
        url: "/evaluate/history_transaction",
      })

      this.historyList = result.data.history_transaction
    },
  },

  async mounted() {
    await this.loadData()
    this.loading = false
  },
  
  components: {
    CommenHeader,
  },
};
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/ellipsis.styl'

#moreHistory
  width 100%
  height 100%
  background #f5f5f5
  padding-top .4rem

  main
    height 100%
    overflow scroll

    .content
      margin 0.06rem 0.14rem
      padding 0 0.13rem
      background #fff
      border-radius 0.06rem
      overflow-y scroll

      .section
        margin 0.12rem
        padding 0.1rem 0.13rem 0.21rem
        background #fafafa
        position relative
        border-radius 0.05rem

        .title
          font-size 0.13rem
          height 0.29rem
          line-height 0.29rem
          color #282828
          ellipsis()
        
        .info
          font-size 0.11rem
          height 0.27rem
          line-height 0.27rem
          color #686868

          .price
            margin-left 0.1rem          

          .check_money
            color #3c3c3c

          .money
            color #ff1a1a

        .lookRep
          color #999
          font-size 0.11rem
          height 0.11rem
          line-height 0.11rem
          position absolute
          right 0.14rem
          bottom 0.14rem
          display flex
          align-items center
</style>