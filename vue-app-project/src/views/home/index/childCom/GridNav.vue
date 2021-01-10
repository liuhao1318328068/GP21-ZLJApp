<template>
    <div class="grid-nav">
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
                <van-grid  :column-num="5">
                    <van-grid-item v-for="value in gridData[0]" :key="value.title" :icon="value.icon_img_url" :text="value.title" />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item >
                <van-grid  :column-num="5">
                    <van-grid-item v-for="value in gridData[1]" :key="value.title" :icon="value.icon_img_url" :text="value.title" />
                </van-grid>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Grid, GridItem } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem)

export default {
    props:['gridData']

}
</script>

<style lang="stylus" >
.van-grid
  padding 0px 14px 24px !important
  .van-grid-item
    padding 0 !important
    width 69px
    font-size 11px
.van-grid-item__content
  padding 0  !important
  background-color #f5f5f5 !important
[class*=van-hairline]::after 
  content "" 
  border none 
.grid-nav .van-swipe__indicator
  width 14px
  height 3px 
.grid-nav .van-swipe__indicator--active
  background-color #646464 !important
.grid-nav .van-grid-item__icon
  font-size 43px 
.grid-nav .van-swipe__indicator:not(:last-child)
  margin-right 0
</style>
