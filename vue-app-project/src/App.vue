<template>
  <div class="wrap">
    <header class="header">分类</header>
    <main class="main">

      
    </main>
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
@import '~@/assets/stylus/border.styl';
.wrap 
  display: flex;
  flex-direction: column;
  height: 100%;
  .header 
    background-color: #fff;
    color: #000;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.16rem;
    font-weight: bold;
  .main 
    flex: 1;
    overflow-y scroll

  .tabbar 
    height: 0.48rem;
    border1px(1px 0 0 0, #d7d7d7);
    overflow hidden
</style>
