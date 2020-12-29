<template>
   <div class="box">
      <SellTop :title="hotQuestions.title" :look-more="'更多回收问题'"></SellTop>
      <van-collapse v-model="activeName" accordion >
        <van-collapse-item v-for="item in hotQuestions.qa_list" :key="item.serial_number" :title="`${item.serial_number}.${item.question}`" :name="item.serial_number">
            {{item.answer}}
        </van-collapse-item>
      </van-collapse>
      <p class="sell-iconnn">&#xe625; 联系客服</p>
   </div>
</template>

<script>
import SellTop from "@/components/SellTop.vue";

import Vue from 'vue';
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);

export default {
    props: ["hotQuestions"],
    data() {
        return {
            activeName: '1',
        };
    },
    components: {
        SellTop,
    }
}
</script>

<style lang='stylus' scoped>
@import "~@/assets/stylus/icon.styl"

.box
    padding-bottom 0
    .van-collapse-item--border::after
        border none

    .sell-iconnn
        font-size .15rem
        height .47rem
        line-height .47rem
        text-align center
        color #b2b2b2
</style>