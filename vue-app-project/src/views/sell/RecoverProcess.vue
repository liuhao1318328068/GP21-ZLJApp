<template>
  <div id="process">
    <CommenHeader :back="1" :title="'流程与服务'"></CommenHeader>
    <van-loading size="1rem" v-if="loading"></van-loading>
    <div class="page" v-html="processPage" v-else></div>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue";

export default {
  data() {
    return {
      loading: true,
      processPage: "",
    };
  },
  methods: {
    async loadData() {
      let result = await this.$http.get({
        url: "/pages/process-service/",
      })
      this.processPage = result
    }
  },
  async mounted() {
    await this.loadData()

    this.loading = false
  },
  components: {
    CommenHeader,
  },
};
</script>

<style lang='stylus'>
#process
  height 100%
  padding .4rem 0 0.26rem

  .page
    height 100%

    #app
      overflow-y scroll
</style>