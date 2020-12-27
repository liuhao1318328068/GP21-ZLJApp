<template>
   <div class="box">
      <div class="top">
          <div>{{historyTransaction.tip}}<span>{{historyTransaction.tip_text}}</span></div>
          <div>查看更多</div>
      </div>
      
   </div>
</template>

<script>
export default {
    props: ["historyTransaction"]
}
</script>

<style lang='stylus' scoped>

</style>