import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cantidad: 5,
  },
  getters: {
    cantidad(state) {
      return state.cantidad;
    },
  },
  mutations: {
    cantidad(state, cantidad) {
      state.cantidad = cantidad;
    },
  },
  actions: {
    cantidad({commit}, cantidad) {
      commit('cantidad', cantidad);
    },
  },
  modules: {
  },
});
