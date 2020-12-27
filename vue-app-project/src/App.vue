<template>
  <div>
    <router-view></router-view>
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:"xln",
    }
  },
}
</script>>