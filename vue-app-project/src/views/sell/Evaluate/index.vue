<template>
  <div id="evaluate" v-if="show">
    <CommenHeader :back="1" :title="'机型评估'"></CommenHeader>
    <ModelTitleInfo :evaluate-data="evaluateData"></ModelTitleInfo>
    <MemoryPrice :memory-price="evaluateData.memory_price"></MemoryPrice>
    <div class="box">
      <img :src="evaluateData.recovery_process.img_url" width="100%" alt="">
    </div>
    <Transaction :transaction="evaluateData.history_transaction"></Transaction>
    <EvaButton></EvaButton>
  </div>
</template>

<script>
import CommenHeader from '@/components/CommenHeader.vue'
import ModelTitleInfo from './ModelTitleInfo'
import MemoryPrice from './MemoryPrice'
import Transaction from './Transaction'
import EvaButton from './EvaButton'

export default {
  data() {
    return {
      evaluateData: {},
      show: false
    }
  },
  
  components: {
    CommenHeader,
    ModelTitleInfo,
    MemoryPrice,
    Transaction,
    EvaButton
  },

  methods: {
    async _loadData(model_id) {
      let result = await this.$http.get({
        url: '/evaluate/model_memory_price',
        params: {
          model_id
        }
      })
      
      this.evaluateData = result.data
      this.show = true
    }
  },

  async mounted() {
    await this._loadData(this.$route.params.model_id)
  },
}
</script>

<style lang='stylus' scoped>

#evaluate
  width 100%
  height 100%
  background #fcfcfc
  padding .4rem 0 .99rem
  overflow-y scroll
  .box
    margin 0 .16rem .12rem
</style>