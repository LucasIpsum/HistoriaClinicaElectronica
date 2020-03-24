import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    st_user: false,
    st_misPacientes: {}
  },
  mutations: {
    st_logUser(state){
      state.user = !state.user
    },
    st_cargarMisPacientes(state,database){
      state.st_misPacientes = database;
    }
  },
  actions: {
  },
  modules: {
  }
})
