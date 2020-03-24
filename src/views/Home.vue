<template>
  <div class="home">
    <Navbar/>
    <h1>Mis Pacientes</h1>
    <Patientbox v-for="(p,k) in st_misPacientes" :key="k" :nombre="p.name" :dni="p.website" :id="p.id"/>
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
      await fetch('https://jsonplaceholder.typicode.com/users')
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

</style>
