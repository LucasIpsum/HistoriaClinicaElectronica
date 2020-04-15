<template>
  <div class="home">
    <Navbar/>
    <template v-if="st_userInfo.tipo == 'MEDICO'">
      <PatientSearch />
      <LastPatients />
    </template>

    <template v-if="st_userInfo.tipo == 'ADMIN'">
      <CuentasPendientes />
    </template>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import LastPatients from '@/components/LastPatients.vue';
import PatientSearch from '@/components/PatientSearch.vue';
import CuentasPendientes from '@/components/CuentasPendientes.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar, PatientSearch, LastPatients, CuentasPendientes
  },
  data(){
    return{
      check: ""
    }
  },
  computed:{
    ...mapState(['st_userInfo', 'st_misPacientes', 'st_allPacientes']),
  },
  methods: {
    ...mapMutations(['st_cargarMisPacientes', 'st_cargarAllPacientes']),
    async fetchDataMyPatients(){
      await fetch('/api/pacientes')
      // await fetch('https://raw.githubusercontent.com/21diego/database/master/misPacientes.json')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(response)
        }
      }).then(json => this.st_cargarMisPacientes(json.pacientes))
      .catch(error => {
        console.log(error)
      })
    },
    async fetchDataAllPatients(){
      await fetch('/api/all/pacientes')
      // await fetch('https://raw.githubusercontent.com/21diego/database/master/pacientes.json')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(response)
        }
      }).then(json => this.st_cargarAllPacientes(json.pacientes))
      .catch(error => {
        console.log(error)
      })
    }
  },
  created(){
    this.fetchDataMyPatients();
    this.fetchDataAllPatients();
  }
  
}
</script>

<style scoped>
.btn-blue{
  background-color: rgb(59, 151, 255);
  color: white;
  padding: 1em 1.3em;
  font-size: 1.2em;
}
</style>
