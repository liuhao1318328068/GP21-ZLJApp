<template>
  <div class="box" id="recover">
    <SellBlockTop
      :title="processInfo.title"
      :subtitle="processInfo.subtitle"
      :look-more-title="'查看流程'"
      :look-more="lookMore"
    >
    </SellBlockTop>
    <p class="recoverImg"><img :src="processInfo.process_img" alt="" /></p>
  </div>
</template>

<script>
import SellBlockTop from "@/components/SellBlockTop.vue"
export default {
  props: ["processInfo"],
  data() {
    return {
      lookMore: { name: "recoverProcess" },
    }
  },
  components: {
    SellBlockTop,
  },
}
</script>

<style lang='stylus'>
#recover
  .title
    .subtitle
      font-weight normal
      font-size 0.08rem
      padding 0 0.04rem
      background #ffeded
      color #fe6c6c
      margin-left 0.04rem

  .recoverImg
    img
      width 100%
</style>