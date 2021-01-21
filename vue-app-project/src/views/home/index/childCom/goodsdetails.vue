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
  top 0.33rem
  left 0.18rem
  width 0.27rem
  height 0.27rem
  border-radius 0.14rem
  background #686866
  .arrow
    display block
    font-family "宋体"
    text-align center
    width 0.27rem
    height 0.27rem
    line-height 0.27rem
    font-size 22px
    color #fff
    position relative 
    left -0.02rem
.goods-banner 
  img 
    width: 3.75rem;
    height: 3.75rem;
  .custom-indicator 
    position: absolute
    right: 50% 
    bottom: 0.2rem
    transform translateX(50%)
    width 0.86rem
    height 0.32rem
    font-size: 0.12rem
    background: #ff3d3d
    border-radius 0.16rem
    line-height 0.32rem
    text-align center
    color #fffcfd
.info
  padding 0 0.16rem
  background-color #ffffff
.good-coupon
  height 0.33rem
  background-color #fff7f5
  padding 0.05rem
  color #ff2827
  // line-height 0.33rem
  p 
    // width 1rem
    // height 0.2rem
    padding 0.01rem 0.05rem 
    line-height 0.2rem
    text-align center
    color #fe1a19
    border 0.01rem solid #fe1a19
    border-radius 0.03rem
    float left
    font-size 0.12rem
    span 
      margin-right 0.05rem
      position relative
      top 0.01rem
  h4 
    float right
    font-weight 400
    position relative
    padding-right 0.24rem
    span 
      width: 0.07rem;
      height: 0.07rem;
      border-top: 0.02rem solid #fe1a19;
      border-right: 0.02rem solid #fe1a19;
      transform: rotate(45deg);
      position: absolute;
      right: 0.1rem;
      top 0.07rem
.goods-price
  background-color #ffffff
  // padding 0 0.16rem
  height 0.7rem
  line-height 0.7rem
  color #fe1a19
  font-size 0.14rem
  strong
    font-size 0.22rem
    padding-right 0.09rem
  i 
    color #999999
    font-size 0.12rem
  em 
    text-decoration line-through
    color #999999
    font-size 0.12rem
    padding-right 0.05rem
    
  b 
    color #262626
    font-weight 400
.good-title
  // padding 0 0.16rem
  background-color #ffffff
  h3 
    font-size 0.12rem
    line-height 0.24rem
    padding-top 0.05rem
    font-weight 400
    margin-bottom 0.05rem
    span 
      margin-right 0.07rem
  p 
    font-size 0.12rem
    // transform scale(0.75)
    color #666666
    padding-bottom 0.09rem

.goods-nav
  .van-goods-action-button--first,.van-goods-action-button--last
    border-radius 0.05rem
    margin-left 0.05rem
  // .van-goods-action-button
  //   height 0.44rem

</style>
