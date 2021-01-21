<template>
  <div class="goods-details">
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
        <van-goods-action-icon icon="like-o" text="收藏"  />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button color="#262626" text="加入购物车" />
        <van-goods-action-button color="#ff1b1a" :text="'领卷购买卷后￥4000'" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload,GoodsAction, GoodsActionIcon, GoodsActionButton,Icon } from "vant";

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Icon)

export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
      ],
      current: 0,
      goodsData:'',
      tagName:'',
    };
  },
  async mounted() {
    // console.log(this.$route.query.id)
    let result = await this.$http.get({ // 轮播图、网格布局、盲盒数据
      url:'api/product/detail',
      params:{
        product_id:this.$route.query.id,
        x_system_type:'wx_xcx',
        x_app_version:'8.3.21'
      }
    });
    console.log(result)
    this.goodsData=result.data
    this.images=result.data.slide_pic_index[0].imgs
    this.tagName=result.data.tags.feature_tag[0].tag_name
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped lang="stylus">
.goods-details
  height 100%
  background-color #f5f5f5
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
