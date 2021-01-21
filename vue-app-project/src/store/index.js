import Vue from 'vue'
import Vuex, {Store} from 'vuex'

import sellSearch from './modules/sellSearch'
import goodsCollect from './modules/goodsCollect'
import addCarts from './modules/addCarts'

Vue.use(Vuex)

export default new Store({
  modules: {
    sellSearch,
    goodsCollect,
    addCarts
  }
})