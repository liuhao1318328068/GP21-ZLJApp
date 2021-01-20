const state = () => {
  return {
    hisSearchList: []
  }
}

const mutations = {
  addHisSearch(state, data) {
    state.hisSearchList.push(data)
  },
  clearHisSearch(state) {
    state.hisSearchList = []
  }
}

const actions = {
  addHisSearch({commit}, data) {
    commit('addHisSearch', data)
  },
  clearHisSearch({commit}) {
    commit('clearHisSearch')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}