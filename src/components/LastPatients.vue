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
components: { Patientbox },
computed: {
  ...mapState(['st_misPacientes']),
  lastPatients(){
  }
}
}
</script>

<style scoped>

</style>