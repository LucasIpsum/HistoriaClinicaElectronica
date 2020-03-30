<template>
  <div class="home">
    <Navbar/>
    <h2 class="">Ultimos Pacientes</h2>
    <Patientbox v-for="(p,k) in st_misPacientes" :key="k" :paciente="p"/>
    <router-link to="/searchpaciente" class="btn btn-blue">Buscar paciente</router-link>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Patientbox from '@/components/Patientbox.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar, Patientbox
  },
  computed:{
    ...mapState(['st_misPacientes']),
  },
  methods: {
    ...mapMutations(['st_cargarMisPacientes']),
    async fetchDataDoc(){
      await fetch('/api/pacientes')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(res)
        }
      }).then(json => this.st_cargarMisPacientes(json.pacientes))
      .catch(error => {
        console.log(error)
      })
    }
  },
  created(){
    this.fetchDataDoc();
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
