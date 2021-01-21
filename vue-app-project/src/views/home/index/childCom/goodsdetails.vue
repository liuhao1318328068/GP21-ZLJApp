<template>
  <div class="goods-details">
    <div 
      class="arrow-box"
      @click="hisBack"
    >
      <span class="arrow">&lt;</span>
    </div>
    <van-swipe :autoplay="3000" class="goods-banner" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          实拍图({{ current + 1 }}/{{ images.length }})
        </div>
      </template>
    </van-swipe>
    <div class="info">
      <div class="goods-price">
        ￥<strong v-if="goodsData.price">{{goodsData.price}}</strong><i>新机价￥</i><em v-if="goodsData.ori_price">{{goodsData.ori_price}}</em><b>立省</b><span>￥{{goodsData.gap_price}}</span>
      </div>
      <div class="good-coupon" v-if="tagName">
        <p>
          <span><van-icon name="gold-coin" color="#fe1a19" /></span>
          <em>{{tagName}}</em>
        </p>
        <h4>立即领卷<span></span></h4>
      </div>
      <div class="good-title">
        <!-- <img src="" alt=""> -->
        <h3><span>官方质检</span>{{goodsData.product_name}}</h3>
        <p>{{goodsData.recommend_str}}</p>
      </div>
    </div>
    <div class="goods-nav">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"  />
        <van-goods-action-icon :icon="iconType" :text="iconText" :color="iconColor" @click="addCollections(goodsData,$event)" />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="$store.state.addCarts.carts.length || '' " @click="clickHandle" />
        <van-goods-action-button :color="btnColor" :text="btnText" :disabled="btnBool" @click="addcarts(goodsData)" />
        <van-goods-action-button color="#ff1b1a" text="立即购买" @click="toPayment" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations, mapActions } from 'vuex'
import { Swipe, SwipeItem, Lazyload,GoodsAction, GoodsActionIcon, GoodsActionButton,Icon } from "vant";

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Icon)

export default {
  // $store.state.addCarts.carts.length
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
      ],
      current: 0,
      goodsData:'',
      tagName:'',
      iconType:'like-o',
      iconText:'收藏',
      iconColor:'',
      // iconBool:false,
      btnText:'加入购物车',
      btnColor:'#262626',
      btnBool:false
    };
  },
  async mounted() {
    // console.log(this.$store.state)
    // console.log(this.$route.query.id)
    let result = await this.$http.get({ // 轮播图、网格布局、盲盒数据
      url:'api/product/detail',
      params:{
        product_id:this.$route.query.id,
        x_system_type:'wx_xcx',
        x_app_version:'8.3.21'
      }
    });
    // console.log(result)
    this.goodsData=result.data
    this.images=result.data.slide_pic_index[0].imgs
    this.tagName=result.data.tags.feature_tag[0].tag_name

    let { goodsCollect,addCarts } =this.$store.state

    let iconFind=goodsCollect.collections.find(item=>{
      return item.product_id==result.data.product_id
    })
    if(iconFind){
      this.iconType='like',
      this.iconText="已收藏",
      this.iconColor="#ff0000"
    }

    let btnFind=addCarts.carts.find(item=>{
      return item.product_id==result.data.product_id
    })
    if(btnFind){
      this.btnBool=true;
      this.btnText="已加入购物车";
      this.btnColor="#b4b4b4"
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    hisBack() {
      history.back()
    },
    // ...mapActions('goodsCollect', ['addCollections'])
    // ...mapActions('addCarts', ['addcarts']),
    addCollections(data,e){
      // console.log(e)
      if(!this.iconColor){
        this.iconType='like',
        this.iconText="已收藏",
        this.iconColor="#ff0000"
      }else{
        this.iconType='like-o',
        this.iconText="收藏",
        this.iconColor=""
      }
      this.$store.dispatch("goodsCollect/addCollections",data)
    },
    addcarts(data){
      this.btnBool=true;
      this.btnText="已加入购物车";
      this.btnColor="#b4b4b4"
      this.$store.dispatch("addCarts/addcarts",data)
    },
    clickHandle(){
      this.$router.push("/shoppingCar")
    },
    toPayment(){
      this.$router.push({
        name: 'payment',
        params: { data:[this.goodsData] }
      })
    }
  },
};
</script>

<style scoped lang="stylus">
.goods-details
  height 100%
  background-color #f5f5f5
.arrow-box
  position: fixed
  z-index 999
  top 33px
  left 18px
  width 27px
  height 27px
  border-radius 14px
  background #686866
  .arrow
    display block
    font-family "宋体"
    text-align center
    width 27px
    height 27px
    line-height 27px
    font-size .22rem
    color #fff
    position relative 
    left -2px
.goods-banner 
  img 
    width: 375px;
    height: 375px;
  .custom-indicator 
    position: absolute
    right: 50% 
    bottom: 20px
    transform translateX(50%)
    width 86px
    height 32px
    font-size: 12px
    background: #ff3d3d
    border-radius 16px
    line-height 32px
    text-align center
    color #fffcfd
.info
  padding 0 16px
  background-color #ffffff
.good-coupon
  height 33px
  background-color #fff7f5
  padding 5px
  color #ff2827
  // line-height 33px
  p 
    // width 100px
    // height 20px
    padding 1px 5px 
    line-height 20px
    text-align center
    color #fe1a19
    border 1px solid #fe1a19
    border-radius 3px
    float left
    font-size 12px
    span 
      margin-right 5px
      position relative
      top 1px
  h4 
    float right
    font-weight 400
    position relative
    padding-right 24px
    span 
      width: 7px;
      height: 7px;
      border-top: 2px solid #fe1a19;
      border-right: 2px solid #fe1a19;
      transform: rotate(45deg);
      position: absolute;
      right: 10px;
      top 7px
.goods-price
  background-color #ffffff
  // padding 0 16px
  height 70px
  line-height 70px
  color #fe1a19
  font-size 14px
  strong
    font-size 22px
    padding-right 9px
  i 
    color #999999
    font-size 12px
  em 
    text-decoration line-through
    color #999999
    font-size 12px
    padding-right 5px
    
  b 
    color #262626
    font-weight 400
.good-title
  // padding 0 16px
  background-color #ffffff
  h3 
    font-size 12px
    line-height 24px
    padding-top 5px
    font-weight 400
    margin-bottom 5px
    span 
      margin-right 7px
  p 
    font-size 12px
    // transform scale(0.75)
    color #666666
    padding-bottom 9px

.goods-nav
  .van-goods-action-button--first,.van-goods-action-button--last
    border-radius 5px
    margin-left 5px
  // .van-goods-action-button
  //   height 44px

</style>
