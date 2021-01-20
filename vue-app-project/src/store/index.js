import Vue from 'vue'
import Vuex, {Store} from 'vuex'

import sellSearch from './modules/sellSearch'

Vue.use(Vuex)

export default new Store({
  modules: {
    sellSearch
  }
})