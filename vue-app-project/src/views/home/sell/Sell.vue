<template>
  <main class="main sellPhone">
    <Search></Search>
    <Banner :banner-info="banner_info"></Banner>
    <Trust :trust-info="trust_info"></Trust>
    <Evaluate :last-local-model="last_local_model"></Evaluate>
    <Recover :process-info="process_info"></Recover>
    <HistoryTransaction :history-transaction="history_transaction"></HistoryTransaction>
  </main>
</template>

<script>
import Search from "./comp/Search";
import Banner from "./comp/Banner";
import Trust from "./comp/Trust";
import Evaluate from "./comp/Evaluate";
import Recover from "./comp/Recover";
import HistoryTransaction from "./comp/HistoryTransaction";

export default {
  data() {
    return {
      banner_info: "",
      trust_info: "",
      last_local_model: "",
      process_info: "",
      history_transaction: ""
    };
  },
  async mounted() {
    let result = await this.$http.get({
      url: "/evaluate/new_index2",
    });
    let { banner_info, trust_info, last_local_model, process_info, history_transaction } = result.data;
    this.banner_info = banner_info;
    this.trust_info = trust_info;
    this.last_local_model = last_local_model;
    this.process_info = process_info;
    this.history_transaction = history_transaction;
  },
  components: {
    Search,
    Banner,
    Trust,
    Evaluate,
    Recover,
    HistoryTransaction
  },
};
</script>
<style lang='stylus'>
.sellPhone
   background-color rgb(245,247,250)
.box
    width 351px
    margin 10px auto
    border-radius 15px
    background-color #fff
</style>