import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    st_user: false,
    st_userInfo:{
      nombre: 'name',
      apellido: 'lastname',
      tipo: 'medico',
      perfil: 'https://i.ibb.co/Tbt3Cgx/doc.png'
    },
    st_misPacientes: {}
  },
  mutations: {
    st_logUser(state){
      state.user = !state.user
    },
    st_cargarUser(state){
      //aca se guarda la informacion en st_userInfo
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
