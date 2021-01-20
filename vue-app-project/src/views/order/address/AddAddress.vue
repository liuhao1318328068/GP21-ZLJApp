<template>
<div>
    <div class="header">
      <router-link to="/address/addressList" class="bcmine">&lt;</router-link>
      新增收货地址
    </div>
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import areaList from "./address"
import Vue from 'vue';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
import { Toast } from 'vant';

export default {
  data() {
    return {
      areaList,
      searchResult: [],

    };
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
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