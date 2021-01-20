<template>
  <div v-if="this.obj.msg" id="goods-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="van-list"
        :immediate-check="false"
      >
        <div v-for="(item,index) in list" :key="item.model_name+index" class="goods-item">
          <div class="lg">
            <img :src="item.main_pic" alt="">
            <p v-if="item.ds_price"><span>{{item.ds_price}}</span></p>
          </div>
          <div class="rg">
            <h2>
              <img v-if="item.certified_icon_url_arr" :src="item.certified_icon_url_arr[0].img_url" alt="">
              {{item.product_name}}
            </h2>
            <p>
              <span>{{item.degree_name}}</span>
              <span> | {{item.degree_desc}}</span> 
              <span v-for="value in item.combination_param" :key="value.param_name"> | {{value.param_name}}</span> 
            </p>
            <h3>
              <span>￥</span>{{item.price}} 
              <em v-if="item.gap_price"><img :src="item.money_icon_url" alt="">比新机立省 ￥{{item.gap_price}} 元</em>
            </h3>
            <van-button 
              v-for="elem in item.feature_tag" 
              :color="'#'+elem.font_color" 
              plain 
              size="mini" 
              :key="elem.tag_name" 
              :v-if="item.feature_tag.length"
            >{{elem.tag_name}}</van-button>
            <van-button
              v-for="elem1 in item.difference_info_tag"
              :color="'#'+elem1.font_color" 
              plain 
              size="mini" 
              :key="elem1.tag_name"
              :v-if="item.difference_info_tag.length"
            >{{elem1.tag_name}}</van-button>
          </div>
          <router-link 
          :to="{
            path:'/goodsdetails',
            query:{
              id:item.product_id
            }
          }" 
          tag="div" 
          class="goodsDetailsLink" 
          ></router-link>
        </div>
          <router-view></router-view>
      </van-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button,List  } from 'vant';

Vue.use(Button).use(List)

export default {
  data() {
    return {
      obj:{},
      list: [],
      loading: false,
      finished: false,
      page:2
    };
  },
  async mounted() {
    let result= await this.$http.get({ 
        url:'https://product.zhaoliangji.com/api/product/filter_res?x_app_network=wifi&x_device_id=88e9d5efed1e8ce4270755a9c24df110&_=176ce359e94.485&x_system_version=Windows%2010%20x64&x_system_type=wx_xcx&x_app_version=8.2.31&x_device_name=microsoft&x_app_name=wx_xcx&x_api_sign=bee9799d18d388158b1d384b30446ac5'
    })
    this.obj = result
    this.list= result.data.filterData
    // console.log(this.obj)
    // console.log(result)
  },
  methods:{
    async onLoad() {
        let result=await this.$http.get({
          url:'/api/product/filter_res',
          params:{
            page:this.page
          }
        })
        
        console.log(result) // TODO 拿到数据后，将列表数据合并，需要再声明一个变量
        result.data.filterData.forEach((item)=>{
          this.list.push(item)
        })
        this.loading = false
        this.page++
      },
    },
};
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/ellipsis.styl'
#goods-list
  background-color white
  .van-list 
    padding-left 12px
    .goods-item 
      position relative
      overflow-y scroll
      padding-top 18px
      clear both
      .goodsDetailsLink 
        position absolute
        top 0px 
        right 0px 
        width 100%
        height 100%
      .lg
        float left 
        position relative
        margin-right 8px
        img 
          width 80px
          height 80px
          display block
          border-radius 3px
        p 
          position absolute
          width 77px
          height 20px 
          background-color #fd5f50
          border-radius 0px 10px 0px 0px
          color white 
          bottom 0
          line-height 20px
          // padding-left 1px
          text-indent 2px
          span 
            display inline-block
            font-size 12px
            transform scale(0.75)
            text-indent -2px
      .rg 
        float left 
        width 263px
        font-weight 300
        font-size 12px
        h2 
          ellipsis()
          img 
            width 33px
            height 14px
            margin-right 4px
        p 
          font-size 12px
          color #000
          transform scale(0.8)
          font-weight 700
          text-indent -30px
        h3 
          color #ff191a
          font-size 18px
          line-height 18px
          span 
            font-size 12px
          em 
            display inline-block
            font-size 12px
            font-weight 400 
            color #000
            transform scale(0.9)
            position relative 
            top -1.5px
            img 
              position relative 
              top -1px
              margin-right 1px
              widht 13px
              height 13px
              vertical-align center
        i 
          display inline-block
          padding 2px 4px 
          
</style>
<style lang="stylus">
#goods-list 
  .van-button--mini
    height 20px
  
</style>
