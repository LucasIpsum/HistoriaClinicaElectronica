<template>
<div id='last' class="mt-5">
  <h2>Ultimos pacientes</h2>
  <Patientbox v-for="(p,k) in st_misPacientes" :key="k" :paciente="p" />
</div>
</template>

<script>
import Patientbox from '@/components/Patientbox.vue'
import { mapState } from 'vuex'


export default {
name: 'Lastpatients',
data(){
  return {
    historias : null
  }
},
components: { Patientbox },
computed: {
  ...mapState(['st_misPacientes']),
  lastPatients(){
    this.cargarRegistro();
    let aux = []
    
  },
},
methods: {
  async cargarRegistro(){
    await fetch('https://raw.githubusercontent.com/21diego/database/master/history.json')
    .then(response => response.json())
    .then(json => {this.historias = json})
    .catch(error => console.log(error))
  }
}
}
</script>

<style scoped>

</style>