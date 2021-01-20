<template>
  <div id="redPacket">
    <CommenHeader :back="1" :title="'跨年红包-H5'"></CommenHeader>
    <iframe :src="$route.params.jump_link" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
import CommenHeader from "@/components/CommenHeader.vue"

export default {
  components: {
    CommenHeader
  },
}
</script>

<style lang='stylus'>
#redPacket
  padding-top .4rem
  width 100%
  height 100%
</style>