import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },

  mutations: {
    mutateItems(state, items){
      state.items = items
    }
  },

  actions: {
    updateItems({commit}, items) {
      commit("mutateItems", items);
    }
  },
  
  getters: {
    itemsList(state) {
      return state.items.objects
    }
  },

  modules: {
  }
})
