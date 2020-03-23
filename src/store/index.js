import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    st_user: false
  },
  mutations: {
    st_logUser(state){
      state.user = !state.user
    }
  },
  actions: {
  },
  modules: {
  }
})
