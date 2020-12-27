<template>
   <div class="box">
      <div class="top">
          <div class="titile">{{processInfo.title}}<span>{{processInfo.subtitle}}</span></div>
          <div>查看流程</div>
      </div>
      <p><img :src="processInfo.process_img" alt="" ></p>
   </div>
</template>

<script>
export default {
    props: ["processInfo"]
}
</script>

<style lang='stylus' scoped>
.top
    display flex
    justify-content space-between
</style>