<template>
    <main ref="filtrate-main" class="main">
        <div id="ldh_box1">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1"  />
            </van-dropdown-menu>
        </div>
        <div class="top-box2">
            <van-cell @click="showPopup" title="价格" is-link arrow-direction="down"></van-cell>
            <van-popup 
            v-model="show" 
            position="top" 
            :style="{ height: '20%' }" 
            :get-container="getContainer"
            >1111
            </van-popup>
        </div>
        <div>
            <van-cell @click="showPopup" title="机型"></van-cell>
            <van-popup 
            v-model="show" 
            position="top" 
            :style="{ height: '20%' }" 
            :get-container="getContainer"
            >&#xe71f;
            </van-popup>
        </div>
        <div>
            <van-cell @click="showPopup" title="筛选"></van-cell>
            <van-popup 
            v-model="show" 
            position="top" 
            :style="{ height: '20%' }" 
            :get-container="getContainer"
            >&#xe71f;
            </van-popup>
        </div>
    </main>
</template>

<script>
import Vue from 'vue';
import { Popup,DropdownMenu,DropdownItem,Tab,Tabs,Icon,Cell  } from 'vant';

Vue.use(Popup).use(DropdownMenu).use(DropdownItem).use(Tab).use(Tabs).use(Icon).use(Cell)


export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: '综合排序', value: 0 },
        { text: '价格最低', value: 1 },
        { text: '价格最高', value: 2 },
        { text: '差价最大', value: 3 },
      ],
      show: false,
    };
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return this.$refs['filtrate-main']
    },
    },
    mounted(){
        // console.log(this.$refs)
    }
  }
</script>

<style lang="stylus" scoped>
.main 
  display flex
  height 38px
  background-color white
  position sticky
  top 116px
  z-index 9999
  text-align center
  overflow-y visible
  div 
    height 38px
    flex 1
  .top-box2
    text-align right 
    font-size 12px
    line-height 38px
    .van-cell--clickable 
      matgin-top -5px
    .van-cell__right-icon
      font-size: 12px
      margin-left: 2px

</style>
<style lang="stylus">
#ldh_box1
  .van-dropdown-menu__bar
    height 38px
    .van-ellipsis
      font-size 12px
      text-align right
</style>

