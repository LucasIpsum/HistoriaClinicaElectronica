import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    st_user: false,
    st_userInfo: {},
    st_authority: '',
    st_misPacientes: [],
    st_allPacientes: [],
    st_HCActual: {},
    st_REActual: {},
  },
  getters:{
    getTipo: state => {
      return state.st_userInfo.tipo
    }
  },
  mutations: {
    st_logUser(state){
      state.user = !state.user
    },
    st_cargarUserInfo(state, info){
      state.st_userInfo = info
    },
    st_cargarAutoridad(state, info){
      state.st_authority = info
    },
    st_cargarMisPacientes(state,database){
      state.st_misPacientes = database;
      console.log(state.st_misPacientes)
    },
    st_cargarAllPacientes(state, database){
      state.st_allPacientes = database;
      console.log(state.st_allPacientes)
    },
    st_cargarHCActual(state, database){
      state.st_HCActual = database;
    },
    st_cargarREActual(state, database){
      state.st_REActual = database;
    }
  },
  actions: {
    st_loadUser({ commit }) {
       fetch("/api/user")
      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          return Promise.reject(res.json())
        }
      })
      .then(json => {
        commit('st_cargarUserInfo', json.userData)
        commit('st_cargarAutoridad', json.authorities[0])
      })
      .catch(error => {
        error.then(json => console.log(json))
      })
      
    }
  },
  modules: {
  }
})
