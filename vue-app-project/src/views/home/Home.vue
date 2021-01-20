<template>
  <div class="wrap">
    <router-view></router-view>
    <nav class="tabbar">
      <Tabbar />
    </nav>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
export default {
  components: {
    Tabbar
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.wrap 
  display: flex;
  flex-direction: column;
  height: 100%;
  .main 
    flex: 1;
  .tabbar 
    height: 0.48rem;
    border1px(1px 0 0 0, #d7d7d7);
    overflow hidden
</style>
