<template>
   <div class="box">
      <div class="model_img">
          <img :src="lastLocalModel.model_img" alt="">
      </div>
      <div class="info">
          <p>{{lastLocalModel.price_title}}<span class="price">￥<b>{{lastLocalModel.price}}</b></span></p>
          <p>
              <span class="icon">{{lastLocalModel.icon_text}}</span>
              <span class="model_name">{{lastLocalModel.model_name}}</span>
          </p>
      </div>
      <div class="toEvaluate">
          {{lastLocalModel.btn_text}}
          <img :src="lastLocalModel.animate_url" />
      </div>
   </div>
</template>

<script>
export default {
    props: ["lastLocalModel"]
}
</script>

<style lang='stylus' scoped>
.box
    display flex
    justify-content space-between

    // .model_img


    // .info

    //     .price

    //         b

        
    //     .icon

    //     .model_name
    

    .toEvaluate
        color #fff
        background rgb(255,60,60)
        position relative

        img
            position absolute
</style>