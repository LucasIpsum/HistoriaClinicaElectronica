<template>
<div id='last'>
  <p class="ml-2">Pacientes atendidos recientemente</p>
  <div id="lastbox">
    <Patientbox v-for="(p,k) in lastPatients" :key="k" :paciente="p" />
  </div>

</div>
</template>

<script>
import Patientbox from '@/components/Patientbox.vue';
import { mapState } from 'vuex';


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
#last{
  text-align: left;
}
#last p{
  color: #007bff;
  font-weight: bold;
}

@media screen and (min-width: 1000px){
  #last{
    max-width: 1000px;
    margin: 0 auto;
  }
  #lastbox{
    display: flex;
    justify-content: space-between;
  }
  #lastbox>*{
    width: 33%;
  }

}
</style>