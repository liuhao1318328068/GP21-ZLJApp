<template>
  <div class="top">
    <div class="title">
      {{title}}
      <span class="subtitle" v-if="subtitle">{{subtitle}}</span>
    </div>
    <router-link 
     tag="div" 
     v-if="lookMoreTitle" 
     class="lookMoreTitle" 
     :to="moreInfo">
        {{lookMoreTitle}}
        <van-icon name="arrow" />
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
    props:["title", "subtitle", "lookMoreTitle", "lookMore"],
    computed: {
      moreInfo() {
        let lookInfo = {
          name: this.lookMore.name,
          params: {
            url: this.lookMore.url
          }
        }
        return lookInfo;
      }
    },
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

  .lookMoreTitle
    font-size .11rem
    color #999
    display flex
    align-items center
</style>