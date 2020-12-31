<template>
  <div class="yantongwei">
    <div v-for="item in infoList" :key="item.group_name">
      <div class="goodstitle">
        <p>
          {{ item.group_name }}<span>{{ item.group_desc }}</span>
        </p>
      </div>
      <div class="goodsitemwrap">
        <div class="goods" v-for="goods in item.group_content" :key="goods.icon_name+Math.random()*100"><img :src="goods.icon_img"><span>{{goods.icon_name}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoList: {
      type: Array,
      required: true,
    },
  },
  methods:{
    
  },
  computed: {
    // 如果想要打印查看传过来的数据，必须使用计算属性或者watch，
    
  },
  mounted() {},
   
};
</script>

<style lang="stylus" scoped>
.yantongwei
  .goodstitle
    height .5rem
    width 100%
    overflow hidden
    p
      font-size .2rem
      line-height .39rem
      padding-top .11rem
      padding-left .11rem
      color #03081a
      span 
        font-size .12rem
        padding-left .09rem
        color #9d9d9d
  .goodsitemwrap
    display flex
    flex-wrap wrap
    width 100%
    .goods
      width .90rem
      height 1.12rem
      text-align center
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      img
        display block
        height .5rem
        width .5rem
      span 
        display block
        font-size .1rem
</style>
