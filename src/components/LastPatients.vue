<template>
<div id='last' class="mt-5">
  <h2>Ultimos pacientes</h2>
  <Patientbox v-for="(p,k) in lastPatients" :key="k" :paciente="p" />
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
    return this.st_misPacientes.slice().sort(this.ingresocmp).slice(0,10)
  },
},
methods: {
  ingresocmp(a, b){
    //FORMATO DE FECHA ISO 8601 YYYY-MM-DD
  return Date.parse(b.estado.fechaHora) - Date.parse(a.estado.fechaHora)
  }
}

}
</script>

<style scoped>

</style>