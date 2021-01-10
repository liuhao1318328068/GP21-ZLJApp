<template>
  <main  class="main">
      <div class="bg-header"></div>
      <header ref="index-header">
          <p>找靓机商城</p>
          <van-search
          v-model="value"
          shape="round"
          background="red"
          placeholder="请输入搜索关键词"
          />
      </header>
      <div class="banner"> <!-- banner图 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item :v-if="bannerList.length" v-for="item in bannerList" :key="item.banner_image_url">
                  <img :src='item.banner_image_url' alt="">
              </van-swipe-item>
          </van-swipe>
      </div>
      <GridNav :grid-data='gridData'></GridNav>
      <section>
          <div class="box1">
              <h2>{{blindBox.name}}<img :src="blindBox.superscript_img"></h2>
              <p>{{blindBox.content}}</p>
              <img :src="blindBox.img_url" alt="" >
              <img :src="blindBox.area_img" alt="" >
          </div>
          <div class="box1">
              <h2>{{sellData.title}}<span>{{sellData.add_price_per}}</span></h2>
              <p class="sellBanner">
                  <van-notice-bar :scrollable="false">
                      <van-swipe
                          vertical
                          class="notice-swipe"
                          :autoplay="7000"
                          :show-indicators="false"
                      >
                          <van-swipe-item
                            v-for="(item,index) in sellData.roll_list" :key="index"
                          >
                              <van-image
                                  round
                                  width="14px"
                                  height="14px"
                                  fit="cover"
                                  :src='item.avatar'

                              />
                              <span> {{item.text}}{{item.money_sign}}</span>
                          </van-swipe-item>
                      </van-swipe>
                  </van-notice-bar>
              </p>
              <img :src="sellData.resource_pic_url" alt="" class="img1">
              <div class="gt">
                  <span>最高价<i>￥</i><b>{{sellData.rec_price}}</b></span>
                  <p>{{sellData.is_local_text}}</p>
                  <h3>{{sellData.model_name}}</h3>
              </div>
          </div>
      </section>
      <!-- <van-popup 
        v-model="show"
        closeable
        close-icon="close"
        close-icon-position="bottom-left"
        v-if="popUpUrl"
        id="pop-up"
      >
        <img :src='popUpUrl' alt="" width="243" height="312">
      </van-popup> -->
      <Filtrate></Filtrate>
      <TabTags ></TabTags>
  </main>
</template>

<script>
import Vue from 'vue';
import { Search,Swipe, SwipeItem,NoticeBar,Image as VanImage,Popup  } from 'vant';
import GridNav from './childCom/GridNav'
import Filtrate from './childCom/Filtrate'
import TabTags from './childCom/TabTags'

Vue.use(Search).use(Swipe).use(SwipeItem).use(NoticeBar).use(VanImage).use(Popup)

export default {
    data(){
      return{
        value:'',
        bannerList:[],
        gridData:[],
        blindBox:[],
        sellData:'',
        show:false,
        // tabTags:'',
      }
    },
    async mounted(){
      let resulet = await this.$http.get({ // 轮播图、网格布局、盲盒数据
          url:'https://home.zhaoliangji.com/api/homepage/app_home?x_app_network=wifi&_=176aa30fda3.36d&x_system_version=Windows%2010%20x64&x_system_type=wx_xcx&x_app_version=8.2.31&x_device_name=microsoft&x_app_name=wx_xcx&x_api_sign=913b605a06b05eaf7b2a170ca19a9fc5',
      });
      let resulet1= await this.$http.get({ // 高价卖手机数据
          url:'https://jqa.zhaoliangji.com/evaluate/get_my_model?x_app_network=wifi&model_name=microsoft&_=176aef4463a.d1d&x_system_version=Windows%2010%20x64&x_system_type=wx_xcx&x_app_version=8.2.31&x_device_name=microsoft&x_app_name=wx_xcx&x_api_sign=77f01d173b2dad52bdff466f58b9a336'
      })
      // let resulet2= await this.$http.get({ // 获取弹出层数据
      //   url:'https://product.zhaoliangji.com/api/product/filter_rec?x_app_network=wifi&_=176cd387355.83a&x_system_version=Windows%2010%20x64&x_system_type=wx_xcx&x_app_version=8.2.31&x_device_name=microsoft&x_app_name=wx_xcx&x_api_sign=6a90975fdb62047ce53951fc6e33953b'
      // })
      // console.log(resulet2)
      this.sellData=resulet1.data
      // this.tabTags=resulet2.data

      let {bannerList,iconList,transform} = resulet.data;
      // this.bannerList=bannerList; // banner图数据
      this.gridData=iconList;
      this.blindBox=transform.resource[0]
      // console.log(this.blindBox.superscript_img,this.blindBox.content)

      this.bannerList=bannerList // banner图地址
      // this.url1=bannerList[1].banner_image_url // banner图地址
      setTimeout(()=>{
        this.show=false
      },1500)
      // console.log(resulet1) 
    },
    components:{
      GridNav,
      Filtrate,
      TabTags,
    },
    computed:{
        // url0(){
        //     return bannerList[0].banner_image_url
        // },
        // url1(){
        //     return bannerList[1].banner_image_url
        // }
    },
    watch:{
        // bannerList:{
        //     handler(arr){
        //         this.url0=arr[0].banner_image_url
        //         this.url1=arr[1].banner_image_url
        //     },
        //     deep:true
        // }
    },
    
    methods:{
      // getContainer(){
      //   return document.querySelector('.main');
      // }
//         hanldeClick(){
// @click="hanldeClick"
//         }
    },

}
</script>

<style lang="stylus" scoped>
main
  height 100%
  width 100%
  overflow-y scroll
  background #f5f5f5
  .bg-header 
    width 100%
    height 143px
    background red
    border-radius: 0 0 25px 25px
   header
    height 116px
    width 100%
    background red
    position fixed
    top 0
    z-index 999
    p
        height 64px
        color white
        font-size 17px
        text-align center
        line-height 84px
  .my-swipe .van-swipe-item 
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed
  .banner
    width 351px
    height 103px
    margin auto
    margin-top -27px
    border-radius 8px
    img 
      width 351px
      height 103px
      vertical-align top
  section 
    width 351px
    height 124px
    margin 0 auto 12px
    background-color white 
    border-radius: 9px
    display flex
    .box1 
      flex 1
      border-right 2px solid #f5f5f5
      padding-left 12px
      h2 
        font-size 14px
        line-height 15px
        margin-top 13px
        img 
          width 48px
          height 14px
          margin-left 9px
          vertical-align middle
          margin-top -3px
        span  
          width 68px
          margin-left 8px
          background-color #ff2c4c
          height 12px
          font-size 10px
          color white 
          font-weight normal
          padding 2px 3px
          border-radius 2px
          transform scale(0.5,0.5)
      p 
        color #777777
        font-size 12px
        margin-top 6px
        line-height 12px
      img
        width 65px
        height 65px
        margin-top 10px
        vertical-align top
        margin-right 15px
      .img1
        margin-top 4px
        margin-right 10px
      .gt
        display inline-block
        margin-left -3px
        padding-top 10px
        span 
          font-size 12px
          color #8d8d8d
          i 
            color #262626
            font-size 12px
          b 
            font-size 16px
            color #262626
            font-weight normal
        p 
          width 28px
          height 14px
          color white 
          background-color #999999
          line-height 14px
          font-size 12px
          text-align center 
          margin-top 0
          border-radius: 1px
        h3 
          color #666666
          font-weight 400
          

.van-search__content--round
    border-radius 8px
.banner .my-swipe,.banner .van-swipe
    height 103px
    border-radius 8px
.sellBanner 
  .notice-swipe 
    height: 40px;
    line-height: 40px;
  .van-notice-bar
    height: 18px;
    padding: 0 
    color: #777777
    font-size: 12px
    line-height: 24px
    background-color: white; 
  .van-image
    top 2px

    
</style>
<style lang="stylus">
#pop-up
  background-color transparent 
  overflow-y visible
  i 
    font-size 50px 
    bottom -82px
    left 92px
</style>