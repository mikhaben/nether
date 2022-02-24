import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },

  mutations: {
    mutateItems(state, items) {
      state.items = items;
    },

    addToItems(state, items) {
      console.log(state.items);
      state.items.objects = [...state.items.objects, ...items.objects];
    },
  },

  actions: {
    updateItems({ commit }, items) {
      commit("mutateItems", items);
    },

    pushToItems({ commit }, items) {
      commit("addToItems", items);
    },
  },

  getters: {
    itemsList(state) {
      return state.items.objects;
    },
  },

  modules: {},
});
