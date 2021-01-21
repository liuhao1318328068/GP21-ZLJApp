<template>
<main class="main">
        <div class="bg-header">
            <div class="header-title">个人中心</div>
            <div class="user-massage">
                <div class="user-warp">
                    <div class="user-logo"></div>
                    <span>登录</span>
                </div>
                <div class="service-icon"><span class="mine-icon">&#xe695;</span></div>
            </div>
        </div>
        <div class="user-card">
            <div class="order-form">
                <div class="my-dingdan">我的订单</div>
                <div class="dingdan-list">
                    <router-link class="dingdan-wrap" to="/order/obligation">
                        <span class="dingdan-icon mine-icon">&#xe63e;</span>
                        <span class="dingdan-text">待付款</span>
                    </router-link>
                    <router-link class="dingdan-wrap" to="/order/pending">
                        <span class="dingdan-icon mine-icon">&#xe669;</span>
                        <span class="dingdan-text">待发货</span>
                    </router-link>
                    <router-link class="dingdan-wrap" to="/order/receiving">
                        <span class="dingdan-icon mine-icon">&#xe620;</span>
                        <span class="dingdan-text">待收货</span>
                    </router-link>
                    <router-link class="dingdan-wrap" to="/order/aftersale">
                        <span class="dingdan-icon mine-icon">&#xe687;</span>
                        <span class="dingdan-text">售后</span>
                    </router-link>
                    <router-link class="dingdan-wrap" to="/recovery">
                        <span class="dingdan-icon mine-icon">&#xe75f;</span>
                        <span class="dingdan-text">回收订单</span>
                    </router-link>
                </div>
            </div>
            <div class="detection">
                <div class="ceyice">测一测，手机还能卖多少钱？</div>
                <div class="ceyice-list">
                    <div class="phone-img"><img :src="model_img"></div>
                    <div class="ceyice-text-wrap">
                        <div class="ceyice-text"><span>{{price_title}}</span><p>{{re_money}}</p></div>
                        <div class="small-pinpai"><span>{{is_local_text}}</span><p>{{model_name}}</p></div>
                        <div class="ceyice-button" @click="toEvaluate(model_id)">测一测</div>
                    </div>
                </div>
            </div>
            <div class="services-tools">
                <div class="fuwugongju">服务与工具</div>
                <div class="tools-list">
                    <router-link class="tools-wrap" to="/order/all">
                        <span class="tools-icon mine-icon">&#xe60f;</span>
                        <span class="tools-text">拼团订单</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/address">
                        <span class="tools-icon mine-icon">&#xe611;</span>
                        <span class="tools-text">收货地址</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/save">
                        <span class="tools-icon mine-icon">&#xe610;</span>
                        <span class="tools-text">我的收藏</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/youhuiquan">
                        <span class="tools-icon mine-icon">&#xe763;</span>
                        <span class="tools-text">优惠券</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/home/mine">
                        <span class="tools-icon mine-icon">&#xe6c4;</span>
                        <span class="tools-text">电子保修卡</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/home/mine">
                        <span class="tools-icon mine-icon">&#xe649;</span>
                        <span class="tools-text">用户反馈</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/home/mine">
                        <span class="tools-icon mine-icon">&#xe68e;</span>
                        <span class="tools-text">电话客服</span>
                    </router-link>
                    <router-link class="tools-wrap" to="/home/mine">
                        <span class="tools-icon mine-icon">&#xe61d;</span>
                        <span class="tools-text">设置</span>
                    </router-link>
                </div>
            </div>
        </div>
</main>
</template>

<script>
import evaluate from '@/mixins/evaluate'

export default {
mixins: [evaluate],
data(){
    return{
        is_local_text:"",
        price_title:"",
        re_money:"",
        model_name:"",
        model_img:"",
        model_id: ''
    }
},
watch: {

  },
async mounted() {
    let result = await this.$http.get({
      url: "/evaluate/local_evaluate",
      params: {
        x_system_type: "wx_xcx",
        x_app_version: "8.2.31",
        model_name:"microsoft"
      },
    });
    this.model_img=result.data.model_img
    this.is_local_text=result.data.is_local_text
    this.price_title=result.data.price_title
    this.re_money=result.data.re_money
    this.model_name=result.data.model_name
    this.model_id=result.data.model_id
}
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
.main
    height: 6.18rem;
    background-color #f5f5f5
    .bg-header
        width 100%
        height 1.7rem
        background-color red
        border-radius 0 0 .25rem .25rem
        overflow hidden
        .header-title
            font-weight 700
            text-align center
            line-height .44rem
            font-size .16rem
            height .44rem
            color white
        .user-massage
            margin .25rem .14rem 0 .14rem 
            height .52rem
            width 3.47rem
            display flex
            justify-content space-between
            .user-warp
                display flex
                line-height .45rem
                .user-logo
                    background-image url("../../../assets/goutou.jpg")
                    background-size .52rem .52rem
                    height .52rem
                    width .52rem
                    border-radius .26rem
                    margin-right .09rem
                span 
                    display block
                    margin-top .07rem
                    font-size .18rem
                    color #fff
            .service-icon
                height .52rem
                width .52rem
                span 
                    font-size .34rem
                    color white
                    display block
                    padding-top .07rem
    .user-card
        position relative
        top -.22rem
        .order-form
            width 3.47rem
            height 1.21rem
            background-color #fff
            margin .12rem .14rem .12rem .14rem 
            border-radius .10rem
            overflow hidden
            .my-dingdan
                font-size .15rem
                font-weight 700
                height .44rem
                text-indent .16rem
                line-height .44rem
            .dingdan-list
                display flex
                justify-content space-around
                height .77rem
                padding-top .03rem
                .dingdan-wrap
                    text-align center
                    display flex
                    flex-direction column
                    height .60rem
                    .dingdan-icon
                        font-size .25rem
                        color #ff1a1a
                        font-weight 700
                    .dingdan-text
                        color #1e1e1e
                        font-size .12rem
        .detection
            width 3.47rem
            height 1.05rem
            background-color #fff
            margin .12rem .14rem .12rem .14rem 
            border-radius .10rem
            overflow hidden
            .ceyice
                font-size .15rem
                font-weight 700
                height .44rem
                text-indent .16rem
                line-height .44rem
            .ceyice-list
                height .61rem
                display flex
                .phone-img
                    height .50rem
                    width .50rem
                    background-color #000
                    margin-left .12rem
                    img
                        border none
                        display block
                        width .5rem
                        height .5rem
                .ceyice-text-wrap
                    margin-left .07rem
                    width 2.85rem
                    position relative
                    .ceyice-text
                        width 1.8rem
                        display flex
                        font-weight 700
                        span 
                            font-size .14rem
                            color 3333333
                            line-height .27rem
                        p
                            color #fc6161
                            font-size .14rem
                            line-height .27rem
                    .small-pinpai
                        display flex
                        span 
                            display block
                            height .15rem
                            width .28rem
                            background-color #e8f4ff
                            color #1f93ff
                            border-radius .03rem
                            font-size .09rem
                        p
                            font-size .09rem
                            text-indent .03rem
                    .ceyice-button
                        height .28rem
                        width .60rem
                        background-color red
                        position absolute
                        top .10rem
                        right .12rem
                        border-radius .14rem
                        font-size .12rem
                        line-height .28rem
                        color #f5f5f5
                        text-align center
                        
        .services-tools
            width 3.47rem
            height 1.97rem
            background-color #fff
            margin .12rem .14rem 0 .14rem 
            border-radius .10rem
            overflow hidden
            .fuwugongju
                font-size .15rem
                font-weight 700
                height .44rem
                text-indent .16rem
                line-height .44rem
            .tools-list
                height 1.54rem
                display flex
                justify-content space-around
                padding-top .03rem
                flex-wrap wrap
                .tools-wrap
                    width .86rem
                    text-align center
                    display flex
                    flex-direction column
                    height .60rem
                    .tools-icon
                        font-size .25rem
                        color #393939
                        font-weight 700
                    .tools-text
                        color #414141
                        font-size .12rem
</style>