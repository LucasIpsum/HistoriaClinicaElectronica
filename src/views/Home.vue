<template>
  <div class="home">
    <Navbar/>
    <PatientSearch />
    <!-- <Patientbox v-for="(p,k) in st_misPacientes" :key="k" :paciente="p"/> -->
    <LastPatients />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Patientbox from '@/components/Patientbox.vue';
import LastPatients from '@/components/LastPatients.vue';
import PatientSearch from '@/components/PatientSearch.vue'
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar, Patientbox, PatientSearch, LastPatients
  },
  data(){
    return{
      check: ""
    }
  },
  computed:{
    ...mapState(['st_misPacientes', 'st_allPacientes']),
  },
  methods: {
    ...mapMutations(['st_cargarMisPacientes', 'st_cargarAllPacientes']),
    async fetchDataMyPatients(){
      // await fetch('/api/pacientes')
      await fetch('https://raw.githubusercontent.com/21diego/database/master/misPacientes.json')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(res)
        }
      }).then(json => this.st_cargarMisPacientes(json))
      .catch(error => {
        console.log(error)
      })
    },
    async fetchDataAllPatients(){
      // await fetch('/api/pacientes')
      await fetch('https://raw.githubusercontent.com/21diego/database/master/pacientes.json')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(res)
        }
      }).then(json => this.st_cargarAllPacientes(json))
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
