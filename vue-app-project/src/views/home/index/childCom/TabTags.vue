<template>
  <van-tabs swipeable class="tab-tag">
    <van-tab v-for="item in tabTags.list" :key="item.icon_name">
        <template #title ><img :src="item.icon_img" alt="" class="icon"> {{item.icon_name}}</template>
    </van-tab>
    <GoodsList></GoodsList>
  </van-tabs>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import GoodsList from './GoodsList'


Vue.use(Tab).use(Tabs)

export default {
  data() {
    return {
      tabTags:''
    };
  },
  components:{
    GoodsList
  },
//   props:['tabTags'],
  async mounted(){
    let resulet= await this.$http.get({ // 标签页导航
    url:'https://product.zhaoliangji.com/api/product/filter_rec?x_app_network=wifi&_=176cd387355.83a&x_system_version=Windows%2010%20x64&x_system_type=wx_xcx&x_app_version=8.2.31&x_device_name=microsoft&x_app_name=wx_xcx&x_api_sign=6a90975fdb62047ce53951fc6e33953b'
    })
    this.tabTags=resulet.data
    // console.log(this.tabTags,0)
  }
}

</script>

<style lang="stylus" scoped>
.icon
  width 20px
  height 20px
  position relative 
  vertical-align center 
  top -1px

.van-tabs__line
  display none 
</style>
<style lang="stylus">
.tab-tag
  .van-tabs__nav
    background-color #f5f5f5
  .van-tabs__line
    background-color transparent
  div[class~="van-tab"]
    margin 5px
    height 36px
    background-color white
    border-radius 5px
    box-shadow 0px 0px 5px 0px #eee
</style>
