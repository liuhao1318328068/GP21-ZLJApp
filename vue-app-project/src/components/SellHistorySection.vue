<template>
  <div>
    <router-link
      tag="div"
      class="historySection" 
      v-for="(his, idx) in historyArr"
      :to="{
        name: 'qualityReport',
        params: {
          order_no: his.re_order_no,
        },
      }"
      :key="'his' + idx"
    >
      <div class="top">
        <img class="user_img" :src="his.user_img"/>
        <div class="user_name">{{his.user_name}}</div>
        <div class="check_money">预估<span class="money">￥{{his.check_money}}</span></div>
        <div class="get_money_type">{{his.get_money_type}}<span class="money">￥{{his.money}}</span></div>
      </div>
      <div class="bottom">{{his.model_info_str}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["historyArr"]
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/stylus/ellipsis.styl'

.historySection
  display flex
  flex-direction column
  justify-content space-between
  background #fafafa
  height .76rem
  border-radius .06rem
  padding .13rem
  margin .06rem auto
  .top
    display flex
    justify-content space-between
    font-size .11rem
    color #666
    .user_img 
      width .19rem
    .user_name
      font-size .09rem
    .money
      color #ff1a1a
      font-weight bold
  .bottom
    font-size .13rem
    ellipsis()
</style>