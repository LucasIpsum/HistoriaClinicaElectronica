<template>
  <div class="home">
    <Navbar/>
    <h1 class="ml-5 pt-4">Mis Pacientes</h1>
    <Patientbox v-for="(p,k) in st_misPacientes" :key="k" :paciente="p"/>
    <router-link to="/addpaciente" class="btn btn-blue">Agregar paciente</router-link>
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
      await fetch('https://raw.githubusercontent.com/21diego/database/master/pacientes.json')
      .then(response => response.json())
      .then(json => this.st_cargarMisPacientes(json))
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
