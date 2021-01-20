<template>
  <div class="li">
    <div class="quali_title" @click="showDesInfo">
      <div class="left">
        <span class="name">{{li.attr_name}}</span>
        <span class="desc">{{li.value_name}}</span>
      </div>
      <div class="typeRight" v-if="li.attr_name === '机型' && li.value_name === userModelName">机型吻合</div>
      <div class="right" v-if="title && title !== '质检结果' && li.des_list">
        <van-icon :name="iconName" />
        <van-icon class="no_passed" name="info-o" />
      </div>
      <div class="right" v-if="title && title !== '质检结果' && !li.des_list">
        <van-icon class="passed" name="passed" />
      </div>
    </div>
    <div class="des_info" v-if="li.des_list && li.des_list[0]" v-show="show">
      <div class="left">
        <span class="name">质检结果</span>
        <span class="desc">{{li.des_list[0].des_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['li', 'title', 'userModelName'],

  data() {
    return {
      show: false,
      iconName: 'arrow-down'
    }
  },

  methods: {
    showDesInfo() {
      this.show = !this.show
      if(this.iconName === 'arrow-down') {
        this.iconName = 'arrow-up'
      } else {
        this.iconName = 'arrow-down'
      }
    }
  },
}
</script>

<style lang='stylus' scoped>
.li
  font-size .12rem
  &>div
    padding .14rem .1rem
    display flex
    justify-content space-between
    align-items center
    .left
      display flex
      align-items center
      .name
        color #999
        display inline-block
        width .56rem
        line-height .18rem
        margin-right .2rem
      .desc
        color #333
    .right
      margin-left .2rem
      display flex
      align-items center
    .typeRight
      width .55rem
      height .23rem
      line-height .23rem
      text-align center
      font-size .12rem
      color #fff
      background #37d35e
      border-radius .05rem
  .des_info
    background #f3f7fe
    
    .desc
      color #999 !important

.no_passed
  color #ff983c
  margin-left .1rem
.passed
  color #4dd19c
</style>