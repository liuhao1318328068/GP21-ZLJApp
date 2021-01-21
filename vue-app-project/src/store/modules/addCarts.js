const state = () => {
  return {
    carts: []
  }
}

const mutations = {
  addcarts(state, data) {
    // console.log(1)
    // console.log(state,data)
    state.carts.push(data)
  },
  deletcarts(state,id) {
    console.log(0)
    let index;
    state.carts.forEach((item,value)=>{
      if(item.product_id==id) index=value
    })
    state.carts.splice(index,1)
  }
}

const actions = {
  addcarts({commit}, data) {
    // console.log(0)
    commit('addcarts', data)
  },
  deletcarts({commit},id) {
    commit('deletcarts',id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}