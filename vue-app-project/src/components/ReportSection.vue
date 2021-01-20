<template>
  <div>
    <div class="title">
      <span>{{title}}</span>
      <div class="checkResult">
        <span v-if="diffNum">
          <van-icon class="no_passed" name="info-o" />{{diffNum}}项异常
        </span>
        <span v-if="sameNum">
          <van-icon class="passed" name="passed" />{{sameNum}}项吻合
        </span>
      </div>
    </div>
    <div class="listInfo">
      <ReportListInfo v-for="(li, i) in list" :key="'li' + i" :li="li" :title="title" :user-model-name="userModelName">
      </ReportListInfo>
    </div>
  </div>
</template>

<script>
import ReportListInfo from './ReportListInfo'
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
  props: ['title', 'sameNum', 'diffNum', 'list', 'userModelName'],
  
  components: {
    ReportListInfo
  }
}
</script>

<style lang='stylus' scoped>
.title
  height .4rem
  line-height .4rem
  font-size .12rem
  color #333
  background #f3f7fe
  border-radius .04rem
  padding 0 .1rem
  display flex
  justify-content space-between
  .checkResult
    display flex
    span
      margin-left .1rem
      display flex
      align-items center
      .van-icon-info-o, .van-icon-passed
        font-size .14rem
        margin-right .02rem

.listInfo
  padding-top .05rem
  
.no_passed
  color #ff983c
  margin-left .1rem
.passed
  color #4dd19c
</style>