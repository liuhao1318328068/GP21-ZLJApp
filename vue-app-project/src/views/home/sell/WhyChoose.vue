<template>
  <div class="box">
    <SellBlockTop :title="whyChooseUs.title"></SellBlockTop>
    <ul class="why">
      <li v-for="(w, i) in whyChooseUs.img_list" :key="'w' + i">
        <img :src="w.img_url" width="100%" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import SellBlockTop from "@/components/SellBlockTop.vue";

export default {
  props: ["whyChooseUs"],
  components: {
    SellBlockTop,
  },
};
</script>

<style lang='stylus' scoped>
.why
  display flex
  justify-content space-between

  li
    margin 0 0.05rem

    img
      border-radius 0.05rem
</style>