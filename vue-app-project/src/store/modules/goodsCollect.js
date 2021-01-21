const state = () => {
  return {
    collections: []
  }
}

const mutations = {
  addCollections(state, data) {
    // console.log(1)
    // console.log(state,data)
    let index;
    state.collections.forEach((item,value)=>{
      if(item.product_id==data.product_id) index=value
    })
    if(index!==undefined){
      state.collections.splice(index,1)
    }else{
      state.collections.push(data)
    }
  },
  deletCollections(state,id) {
    let index;
    state.collections.forEach((item,value)=>{
      if(item.id==id) index=value
    })
    state.collections.splice(index,1)
  }
}

const actions = {
  addCollections({commit}, data) {
    // console.log(0)
    commit('addCollections', data)
  },
  deletCollections({commit},id) {
    commit('deletCollections',id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}