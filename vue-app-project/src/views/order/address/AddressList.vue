<template>
  <div>
    <div class="header">
      <router-link to="/home/mine" class="bcmine">&lt;</router-link>
      收货地址管理
    </div>
    <div class="addresslist">
      <van-empty
        v-if="!list.length"
        image="search"
        description="快把你的地址告诉我手机马上送到家"
      ></van-empty>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        to="/address/AddAddress"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Empty } from "vant";
Vue.use(Empty);

import { AddressList } from "vant";

Vue.use(AddressList);
import { Toast } from "vant";

export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
      //   disabledList: [

      //   ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/address/AddAddress");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
};
</script>

<style lang="stylus" scoped>
.addresslist
    height 5.73rem
    overflow-y scroll
.header
    height .44rem
    width 100%
    font-size .17rem
    font-weight 700
    line-height .44rem
    text-align center
    background-color #fff
    .bcmine
      position absolute
      display block
      top .08rem
      left .08rem
      font-family "宋体"
      font-weight 900
      height .3rem
      width .3rem
      line-height .3rem
      font-size .25rem
      color #999
</style>
<style lang="stylus">
#address .van-empty
  text-align center
  .van-empty__image
    border-radius 1rem
    overflow hidden
    height 2rem
    width 2rem
  p
    font-size .2rem
    padding 0 .8rem
</style>
