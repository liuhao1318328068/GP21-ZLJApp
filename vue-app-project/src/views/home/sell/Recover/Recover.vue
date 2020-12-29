<template>
   <div class="box recover">
      <SellTop :title="processInfo.title" :subtitle="processInfo.subtitle" :look-more="'查看流程'"></SellTop>
      <p class="recoverImg"><img :src="processInfo.process_img" alt="" ></p>
   </div>
</template>

<script>
import SellTop from "@/components/SellTop.vue"
export default {
    props: ["processInfo"],
    components: {
        SellTop
    }
}
</script>

<style lang='stylus'>
.box.recover
    .title
        .subtitle
            font-weight normal
            font-size .08rem
            padding 0 .04rem
            background #ffeded
            color #fe6c6c
            margin-left .04rem

    .recoverImg
        img
            height .71rem
</style>