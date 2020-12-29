<template>
  <div class="top">
    <div class="title">
      {{title}}
      <span class="subtitle" v-if="subtitle">{{subtitle}}</span>
    </div>
    <div v-if="LookMore" class="lookMore">{{LookMore}}<van-icon name="arrow" /></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
    props:["title", "subtitle", "LookMore"]
};
</script>

<style lang='stylus' scoped>
.top
  display flex
  justify-content space-between
  align-items center
  margin-bottom .11rem

  .title
    color #444
    font-size 0.16rem
    font-weight bold
    display flex
    align-items center

  .lookMore
    font-size .11rem
    color #999
    display flex
    align-items center
</style>