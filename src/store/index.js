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
    st_misPacientes: [],
    st_allPacientes: []
  },
  mutations: {
    st_logUser(state){
      state.user = !state.user
    },
    st_cargarUser(state){
      fetch("/api/user")
      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          return Promise.reject(res.json())
        }
      })
      .then(json => {
        state.st_userInfo.nombre = json.userData.nombre
        state.st_userInfo.apellido = json.userData.apellido
        state.st_userInfo.tipo = json.authorities[0]
      })
      .catch(error => {
        error.then(json => console.log(json))
      })
    },
    st_cargarMisPacientes(state,database){
      state.st_misPacientes = database;
    },
    st_cargarAllPacientes(state, database){
      state.st_allPacientes = database;
    },
    st_agregarMiPaciente(state, database){
      console.log('AGREGAR PACIENTE A _MIS PACIENTES_ EN DB');
      
    }
  },
  actions: {
  },
  modules: {
  }
})
