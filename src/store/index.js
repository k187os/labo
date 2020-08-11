import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bigMsg: "Hellow from the store"
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getBigMsg(state) {
      return state.bigMsg;
    }
  }
});
