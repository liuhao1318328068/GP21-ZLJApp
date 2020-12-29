<template>
   <div class="box">
      <SellTop :title="whyChooseUs.title"></SellTop>
      <ul class="why">
          <li v-for="(w, i) in whyChooseUs.img_list" :key="'w' + i">
              <img :src="w.img_url" width="100%" alt="">
          </li>
      </ul>
   </div>
</template>

<script>
import SellTop from "@/components/SellTop.vue"

export default {
    props: ["whyChooseUs"],
    components: {
        SellTop
    }
}
</script>

<style lang='stylus' scoped>
.why
    display flex
    justify-content space-between
    li
        margin 0 .05rem
        img
            border-radius .05rem
</style>