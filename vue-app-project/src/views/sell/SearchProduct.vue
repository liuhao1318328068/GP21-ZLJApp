<template>
  <div id="searchProduct">
    <CommenHeader :back="1" :title="'搜索'"></CommenHeader>
    <van-loading size="1rem" v-if="loading"></van-loading>
    <div class="content" v-else>
      <van-search
        v-model="value"
        placeholder="搜索您要卖的机型"
        input-align="left"
        shape="round"
        show-action
        @cancel="onCancel"
      />
      <section class="hisSearch" v-if="hisSearchList.length > 0">
        <div class="header">
          <span class="title">历史记录</span>
          <span class="sell-iconnn" @click="clearHisSearch">&#xe61a;</span>
        </div>
        <div class="tagList">
          <span
          class="tag"
          v-for="(tag, i) in hisSearchList" 
          :key="'tag' + i"
          >
            {{tag.model_name}}
          </span>
        </div>
      </section>
      <hr v-if="hisSearchList.length > 0">
      <section class="hotSearch">
        <div class="header">
          <span class="title">热门搜索</span>
        </div>
        <div class="tagList">
          <span
          class="tag"
          v-for="(tag, i) in hot_list" 
          :key="'tag' + i"
          @click="addHisSearch(tag)"
          >
            <span class="sell-tag" v-if="i <= 2"></span>
            {{tag.model_name}}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue"
import { mapState, mapMutations, mapActions } from 'vuex'

import Vue from "vue"
import { Search } from "vant"
Vue.use(Search)

export default {
  data() {
    return {
      loading: true,
      value: "",
      hot_list: []
    }
  },

  computed: {
    ...mapState('sellSearch', ['hisSearchList'])
  },

  methods: {
    async loadData() {
      let result = await this.$http.get({
        url: '/evaluate/hot_search'
      })
      this.hot_list = result.data
    },
    onCancel() {
      this.$router.push('/home/sell')
    },
    ...mapActions('sellSearch', ['addHisSearch', 'clearHisSearch'])
  },

  async mounted() {
    await this.loadData()

    this.loading = false
  },

  components: {
    CommenHeader,
  },
}
</script>

<style lang='stylus' scoped>
@import "~@/assets/stylus/icon.styl"

#searchProduct
  padding .4rem 0
  height 100%
  .van-search
    padding .1rem .12rem

  hr
    background-color #e5e5e5
    height .01rem
    border none

  section
    padding .1rem .15rem
    line-height .2rem
    .header
      display flex
      justify-content space-between
      color #333
      font-size .13rem
      margin .1rem 0
      .sell-iconnn
        font-size .2rem
      
    .tagList
      .tag
        display inline-block
        margin .05rem .1rem .05rem 0
        padding .07rem .1rem
        background #f5f7fa
        color #666
        font-size .1rem
        border-radius .2rem
        
        .sell-tag
          display inline-block
          width 0
          height 0
          border-top .16rem solid #fb7027
          border-bottom .04rem solid transparent
          border-left .07rem solid #fb7027
          border-right .08rem solid #fb7027
          border-radius .03rem
          position relative
          transform translateY(-.02rem)
          &::after
            position absolute
            content '热'
            color #fff
            font-size .15rem
            transform scale(0.7)
            top -.17rem
            left -.07rem
</style>