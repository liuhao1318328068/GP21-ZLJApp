<template>
  <div id="moreQuestions">
    <CommenHeader :back="1" :title="'回收客服'"></CommenHeader>
    <iframe :src="$route.params.url" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue"

export default {
  components: {
    CommenHeader
  }
}
</script>

<style lang='stylus' scoped>
#moreQuestions
  padding-top .4rem
  width 100%
  height 100%
</style>