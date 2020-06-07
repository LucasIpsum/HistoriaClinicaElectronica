<template>
  <div class="home">
    <Navbar/>
    <template v-if="st_authority == 'MEDICO' || st_authority == 'ENFERMERO'">

      <LastPatients />
    </template>

    <template v-if="st_authority == 'ADMIN'">
      <CuentasPendientes />
    </template>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import LastPatients from '@/components/LastPatients.vue';
import CuentasPendientes from '@/components/CuentasPendientes.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar , LastPatients, CuentasPendientes
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapState(['st_userInfo', 'st_misPacientes', 'st_allPacientes', 'st_authority']),
  },
  methods: {
    ...mapMutations(['st_cargarMisPacientes', 'st_cargarAllPacientes']),
    fetchDataMyPatients(){
      if(this.st_authority == 'MEDICO' || this.st_authority == 'ENFERMERO'){
        fetch('/api/pacientes')
        //fetch('https://raw.githubusercontent.com/21diego/database/master/misPacientes.json')
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
      }
    },
    fetchDataAllPatients(){
      if(this.st_authority == 'MEDICO' || this.st_authority == 'ENFERMERO'){
        fetch('/api/all/pacientes')
        //fetch('https://raw.githubusercontent.com/21diego/database/master/pacientes.json')
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
