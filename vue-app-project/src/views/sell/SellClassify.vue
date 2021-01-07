<template>
  <div id="sellClassify">
    <CommenHeader :back="1" :title="'分类'"></CommenHeader>
    <div class="searchContainer">
      <van-search
        placeholder="搜索您要卖的机型"
        input-align="center"
        shape="round"
        @click="toSearch"
      />
    </div>
    <van-tabs
      v-model="activeName"
      color="#262626"
      @click="changeCategory"
    >
      <van-tab
        v-for="(category, i) in categoryList" 
        :key="'category' + i"
        :title="category.category_name"
        :name="category.category_id"
      >
        <van-tree-select
          :items="items"
          :main-active-index.sync="activeIndex"
          @click-nav="changeBrand"
        >
          <template #content>
            <ul>
              <li v-for="(model, i) in modelList" :key="'model' + i" @click="toEvaluate(model.model_id)">
                <img :src="model.img_url" alt="">
                <div class="modelInfo">
                  <p>{{model.model_name}}</p>
                  <div class="modelPrice">
                    <span class="modelPriceText">{{model.max_price_text}}</span>
                    <span class="modelMaxPrice">￥{{model.max_price}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </van-tree-select>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import evaluate from '@/mixins/evaluate'
import CommenHeader from "@/components/CommenHeader.vue"
import Vue from "vue"
import { Search, Tab, Tabs, TreeSelect } from "vant"

Vue.use(Search).use(Tab).use(Tabs).use(TreeSelect)

export default {
  mixins: [evaluate],
  
  data() {
    return {
      activeName: '1',
      category_id: 1,
      brand_id: 'recommend_1',
      categoryList: [],
      brandList: [],
      modelList: [],
      items: [],
      activeIndex: 0
    }
  },

  methods: {
    async getCategory() {
      let result = await this.$http.get({
        url: "/evaluate/get_category",
      })
      this.categoryList = result.data.category_list
    },
    async getBrand(category_id) {
      let result = await this.$http.get({
        url: "/evaluate/get_brand",
        params: {
          category_id
        }
      })
      this.brandList = result.data
      this.brand_id = this.brandList[0].brand_id
    },
    async getModel(brand_id) {
      let result = await this.$http.get({
        url: "/evaluate/get_model",
        params: {
          brand_id
        }
      })
      this.modelList = result.data.model_list
    },

    toSearch() {
      this.$router.push('/sellEntry/searchProduct')
    },

    async changeCategory(category_id) {
      await this.getBrand(category_id)
      this.activeIndex = 0
      this.changeBrand(0)
    },

    changeBrand(index) {
      this.getModel(this.brandList[index].brand_id)
    },
  },

  async mounted() {
    if(this.$route.params.category_id) {
      this.category_id = this.$route.params.category_id
      this.activeName = this.category_id
    }

    await this.getCategory()
    await this.getBrand(this.category_id)
    await this.getModel(this.brand_id)
  },

  watch: {
    activeName(newValue) {
      this.category_id = newValue
    },
    brandList(newValue) {
      this.items = newValue.map(v => {
        return {
          text: v.brand_name
        }
      })
    },
  },
  
  components: {
    CommenHeader
  }
}
</script>

<style lang='stylus' scoped>
@import "~@/assets/stylus/border.styl"

#sellClassify
  height 100%
  padding-top .4rem
  .van-tabs
    height 5.73rem
    .van-tree-select__content
      li
        display flex
        align-items center
        img
          width .4rem
          height .4rem
          margin .05rem
        .modelInfo
          flex 1
          border1px(0 0 1px, #f5f5f5)
          display flex
          justify-content space-between
          align-items center
          margin-right .1rem
          p
            font-size .12rem
            flex 1
          .modelPrice
            width .6rem
            height .61rem
            margin-left .1rem
            display flex
            flex-direction column
            justify-content center
            align-items flex-end
            .modelPriceText
              color #b2b2b2
              font-size .1rem
            .modelMaxPrice
              color #ff1a1a
              font-size .09rem
              font-weight bold
</style>

<style lang="stylus">
@import "~@/assets/stylus/border.styl"

#sellClassify
  .searchContainer
    margin .1rem .2rem
    .van-search
      padding 0
      position relative
      .van-field__left-icon
        position absolute
        top .05rem
        left .8rem

  .van-tab
    font-size .14rem
    color #888
    margin 0 .14rem
    &:first-child
      margin-left 0
      
  .van-tab--active
    color #262626
    font-weight bold
  .van-tabs__wrap
    border1px(0 0 1px, #e8e8e8)
    box-shadow 0 1px 1px #f0f0f0
  .van-tabs__content
    height 5.29rem
    .van-tab__pane
      height 100%
      
      .van-tree-select
        height 100% !important
        .van-tree-select__nav
          .van-tree-select__nav-item
            padding .16rem 0
            text-align center
            font-size .13rem
            color #666
          .van-sidebar-item--select
            &::before
              width .03rem
              height .21rem
              background-color #ff1a1a
            .van-sidebar-item__text
              color #ff1a1a
              font-weight bold
</style>