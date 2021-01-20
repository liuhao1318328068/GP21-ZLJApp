<template>
  <div id="qualityRep">
    <CommenHeader :back="1" :title="'质检报告'"></CommenHeader>
    <main>
      <div class="face">
        <div class="top">
          <img :src="require('@/assets/images/reportLogo.png')" alt="">
          <h2>质检报告</h2>
          <p>Inspection Report</p>
        </div>
        <div class="bottom">
          <p>
            <span>高级质检师</span>
            {{basic_info.quality_name}}
          </p>
          <p>
            <span>机器接收时间</span>
            {{get_package_time}}
          </p>
          <p>
            <span>报告生成时间</span>
            {{report_created_time}}
          </p>
        </div>
      </div>

      <div class="cleanInfo">
        <img :src="require('@/assets/images/cleanIcon.png')" alt="">
        <span>找靓机在检测之前已为手机进行隐私清除</span>
      </div>

      <ReportSection
        :title="'质检结果'"
        :list="quality_result"
        :user-model-name="user_model_name"
      >
      </ReportSection>

      <div class="quali_num">
        <section>
          <van-icon class="no_passed" name="info-o" />
          异常项：
          <span><span class="num">{{diff_num}}</span>项</span>
        </section>
        <section>
          <van-icon class="passed" name="passed" />
          吻合项：
          <span><span class="num">{{same_num}}</span>项</span>
        </section>
      </div>

      <div class="quality_desc">
        <div class="head">
          <img class="headImg" :src="basic_info.head_img" />
          <div class="headInfo">
            <h3>{{basic_info.quality_name}}</h3>
            <p>{{basic_info.quality_title}}</p>
          </div>
        </div>
        <div class="desc" v-if="basic_info.quality_desc_data">
          <van-icon name="play" />
          <span>{{basic_info.quality_desc_data.title}}</span>
          {{basic_info.quality_desc_data.desc}}
        </div>
      </div>

      <ReportSection
        :title="'设备属性'"
        :same-num="sku_same" 
        :diff-num="sku_diff"
        :list="sku_items"
      >
      </ReportSection>

      <ReportSection 
        :title="'机况'"
        :same-num="jk_same"
        :diff-num="jk_diff"
        :list="jk_items"
      >
      </ReportSection>

      <div class="propagate">找靓机3C产品质检研究院官方认证</div>
    </main>
    <div class="toEva" @click="toClassify">前往估价下单</div>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue"
import ReportSection from "@/components/ReportSection.vue"
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)

export default {
  data() {
    return {
      user_model_name: "",
      basic_info: {},
      get_package_time: "",
      report_created_time: "",
      sku_same: 0,
      jk_same: 0,
      sku_diff: 0,
      jk_diff: 0,
      same_num: 0,
      diff_num: 0,
      sku_items: [],
      jk_items: [],
      quality_result: {}
    }
  },

  methods: {
    async loadData(order_no) {
      return await this.$http.get({
        url: "/quality/get_quality_info",
        params: {
          re_order_no: order_no
        }
      })
    },

    toClassify() {
      this.$router.push({
        name: 'sellClassify'
      })
    }
  },

  async mounted() {
    let result = await this.loadData(this.$route.params.order_no)
    
    if(result.code === 1) {
      let {
        basic_info,
        get_package_time,
        report_created_time,
        sku_same,
        jk_same,
        sku_diff,
        jk_diff,
        sku_items,
        jk_items
      } = result.data

      this.user_model_name = basic_info.user_model_name.split('  ')[1]
      this.basic_info = basic_info
      this.get_package_time = get_package_time.split(' ')[0]
      this.report_created_time = report_created_time.split(' ')[0]
      this.sku_same = sku_same
      this.jk_same = jk_same
      this.sku_diff = sku_diff
      this.jk_diff = jk_diff
      this.same_num = sku_same + jk_same
      this.diff_num = sku_diff + jk_diff
      this.sku_items = sku_items
      this.jk_items = jk_items

      this.quality_result = [
        {
          attr_name: '机型',
          value_name: this.basic_info.model_name
        },
        {
          attr_name: 'IMEI',
          value_name: this.basic_info.imei
        },
        {
          attr_name: '估价方式',
          value_name: '极速估价'
        },
      ]
    }
  },

  components: {
    CommenHeader,
    ReportSection
  }
}
</script>

<style lang="stylus">
html, body
  overflow visible !important
</style>

<style lang='stylus' scoped>
@import '~@/assets/stylus/border.styl'

#qualityRep
  padding .4rem 0 1rem

  main
    margin .1rem .13rem
    border1px(2px, #a8c4e6)
    padding .2rem .13rem
    overflow-y scroll
    .face
      padding .5rem 0
      border1px(0 0 1px, #eceff2)
      .top
        display flex
        flex-direction column
        align-items center
        h2
          margin-top .2rem
          margin-left .15rem
          font-size .25rem
          letter-spacing .15rem
        p
          color #999
          height .16rem
          line-height .16rem
          font-size .12rem
      .bottom
        margin .4rem
        p
          font-size .18rem
          margin .1rem 0
          span
            margin-right .1rem
            display inline-block
            width 1.2rem
            text-align-last justify

    .cleanInfo
      margin .1rem 0
      display flex
      align-items center
      span 
        margin-left .1rem
        color #427ec9
        font-size .12rem

    .quali_num
      display flex
      justify-content space-between
      margin-bottom .2rem
      section
        width 1.55rem
        height .56rem
        background #fafafa
        color #a1a1a1
        display flex
        justify-content center
        align-items center
        border-radius .05rem
        .van-icon-info-o, .van-icon-passed
          font-size .18rem
          margin-right .02rem
        &>span
          color #4b4b4b
          font-size .09rem
          margin-left .05rem
          .num
            color #262626
            font-size .16rem
            margin-right .03rem
            font-weight bold
        .no_passed
          color #ff983c
        .passed
          color #4dd19c

    .quality_desc
      margin .2rem auto
      .head
        margin .12rem auto
        display flex
        align-items center
        .headImg
          width .5rem
          border-radius .5rem
        .headInfo
          margin-left .1rem
          h3
            font-size .16rem
            color #262626
          p
            font-size .12rem
            color #9c9c9c
      .desc
        border1px(1px, #dddfe8, solid, .06rem)
        background #f5f6fa
        color #262626
        line-height .2rem
        border-radius .06rem
        font-size .12rem
        padding  .1rem
        position relative
        .van-icon-play
          color #f5f6fa
          transform rotate(-90deg)
          position absolute
          top -.1rem
          left .2rem
          font-size .15rem
          
        span
          display inline-block
          height .2rem
          color #fff
          background #2a6ec2
          border-radius .02rem
          padding 0 .04rem

            
    .propagate
      text-align center
      font-size .2rem
      height .54rem
      transform scale(0.5)
      line-height .54rem
      margin-top .34rem
      color #427ec9
  
  .toEva
    text-align center
    width 3.4rem
    height .4rem
    line-height .4rem
    font-size .18rem
    border-radius .05rem
    position fixed
    left 0
    right 0
    bottom .1rem
    margin auto
    z-index 999
    background #ff1a1a
    color #fff
</style>