<template>
  <div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="(type, i) in list"
        :to="'/home/classify/' + type.cate_id"
        :title="type.type_name"
        :key="type + i"
      />
    </van-sidebar>
    <div class="goods">
      <router-view :infoList="infoList"></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem } from "vant";

Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      list: [],
      infoList: [],
    };
  },
  async mounted() {
    let result = await this.$http.get({
      url: "/api/product/cate_v3",
      params: {
        x_system_type: "wx_xcx",
        x_app_version: "8.2.31",
      },
    });
    result.data.list.map((item, index, arr) => {
      this.list.push(item);
    });
    // console.log(this.$route.params.id)
    //获取数据后，给一个初始数据，不写i=0，是因为如果不在第一个分类页刷新，那么舒心后应该显示的是当前刷新页
    let num = this.$route.params.id - 0; //获取当前cate_id，查找id所在元素（一个对象）的下标，将该元素传入组件渲染
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].cate_id == num) {
        this.activeKey = i;
        this.infoList = this.list[i].info;
      }
    }
  },
  watch: {
    //观察路由改变，将传入的数据改变
    $route(to, from) {
      document.querySelector(".goods").scrollTop = 0;
      var index = 0;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].cate_id == to.params.id) index = i;
      }
      this.infoList = this.list[index].info;
      // console.log(this.infoList)
    },
  },
  methods: {},

  computed: {
    // 如果想要打印查看传过来的数据，必须使用计算属性或者watch，
  },
};
</script>

<style lang="stylus" scoped>
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
