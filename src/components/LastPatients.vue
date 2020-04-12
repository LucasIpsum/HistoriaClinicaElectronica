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
created(){this.cargarRegistros()},
components: { Patientbox },
computed: {
  ...mapState(['st_misPacientes']),
  lastPatients(){
    let aux = []
    if(!!this.historias){
      this.historias.forEach(el => {
        let paciente = this.st_misPacientes.find( e => e.id === el.id)
        if( !!paciente && aux.length <= 10){
          aux.push(paciente);
        }
      })
    }
    
    return aux;
  },
},
methods: {
  async cargarRegistros(){
    await fetch('https://raw.githubusercontent.com/21diego/database/master/history.json')
    .then(response => response.json())
    .then(json => {//filtrar historias por los pacientes asociados al doctor
      this.historias = json.sort(this.ingresocmp)
      })
    .catch(error => console.log(error))
  },
  ingresocmp(a, b){
    //FORMATO DE FECHA ISO 8601 YYYY-MM-DD
  return Date.parse(b.registro.ingreso) - Date.parse(a.registro.ingreso)
  }
}

}
</script>

<style scoped>

</style>