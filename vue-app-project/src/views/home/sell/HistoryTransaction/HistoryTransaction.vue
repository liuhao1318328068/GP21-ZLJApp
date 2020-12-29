<template>
   <div class="box historyTransaction">
      <SellTop :title="historyTransaction.tip" :subtitle="historyTransaction.tip_text" :look-more="'查看更多'"></SellTop>
      <van-swipe :autoplay="3000" style="height: 1.73rem;" vertical :show-indicators="false" :touchable="false">
        <van-swipe-item v-for="(hisArr, i) in historyTransactionList" :key="'hisArr'+i">
            <HistorySection :history-arr="hisArr"></HistorySection>
        </van-swipe-item>
      </van-swipe>
   </div>
</template>

<script>
import SellTop from "@/components/SellTop.vue";
import HistorySection from "@/components/HistorySection.vue";
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    props: ["historyTransaction"],
    computed: {
        historyTransactionList(){
            let arr = [], hisList = [];
            let historyList = this.historyTransaction.list;
 
            if(!historyList) return [];
            for (let index = 0; index < 70; index += 2) {
                hisList.push([historyList[index], historyList[index + 1]]);
            }
            return hisList;
        }
    },
    components: {
        SellTop,
        HistorySection
    }
}
</script>

<style lang='stylus'>
.box.historyTransaction
    .title
        .subtitle
            font-weight normal
            font-size .11rem
            color #999
            margin-left .1rem
</style>