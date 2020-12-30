<template>
    <main class="main">
      <header class="classifyHeader">
        <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" />
        <div class="shopingCar nav-iconnn">&#xe609;</div>
      </header>
      <div class="itemClassify">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(type,i) in list" :to="'/home/classify/'+type.cate_id" :title="type.type_name" :key="type+i"/>
        </van-sidebar>
        <div class="goods">
          <router-view :infoList="infoList" ></router-view>
        </div>
      </div>
    </main>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
export default {
  data(){
    return {
      value: '',
      activeKey: 0,
      list:[],
      infoList:[]
    }
  },
  async mounted(){
    let result = await this.$http.get({
      url: '/api/product/cate_v3',
      params: {
          x_system_type:"wx_xcx",
          x_app_version:"8.2.31"
        }
    })
    result.data.list.map((item ,index ,arr)=>{
    this.list.push(item)
    })
    // console.log(this.$route.params.id)
    //获取数据后，给一个初始数据，不写i=0，是因为如果不在第一个分类页刷新，那么舒心后应该显示的是当前刷新页
    let num=this.$route.params.id-0//获取当前cate_id，查找id所在元素（一个对象）的下标，将该元素传入组件渲染
    for(let i=0;i<this.list.length;i++){
        if(this.list[i].cate_id==num){
          this.activeKey=i
          this.infoList=this.list[i].info
        }
      }
  },
  watch:{
    //观察路由改变，将传入的数据改变
    $route(to,from){
      var index=0
      for(let i=0;i<this.list.length;i++){
        if(this.list[i].cate_id==to.params.id) index=i
      }
      this.infoList=this.list[index].info
      // console.log(this.infoList)
    }
  },
  methods:{
  }
  
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/stylus/icon.styl"
@import '~@/assets/stylus/border.styl';
.main 
  height: 6.18rem;
  .classifyHeader
    height .44rem
    width 100%
    .van-search 
      padding .10rem 0 .10rem .12rem
      width 3.14rem
      height .44rem
      .van-search__content--round 
        border-radius .10rem
    .shopingCar
      overflow-y scroll
      position absolute
      right 0
      top 0
      height .44rem
      width .62rem
      line-height .44rem
      font-weight bold
      font-size .28rem
      text-align center
  .itemClassify
    height 5.74rem
    .van-sidebar
      height 5.74rem
      overflow-y scroll
      .van-sidebar-item
        text-align center
        padding .15rem .12rem
    .goods
      height 5.74rem
      padding 0 .12rem
      overflow-y scroll
      width 2.95rem
      position absolute
      right 0
      top .44rem

</style>
