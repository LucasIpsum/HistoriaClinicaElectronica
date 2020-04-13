<template>
  <div class="container">
    <h2>Buscar paciente</h2>
    <form>
      <input type="text" id="dni-input" placeholder="Ingrese DNI" class="btn"/>
      <button @click="(event) => { filterPatients(event, this.st_allPacientes) }" class="btn btn-primary">Buscar</button>
    </form>

    <div v-if="foundPatient != '' && foundPatient != null" class="d-flex justify-content-center mt-4">
      <Patientbox :paciente="foundPatient[0]"/>
    </div>

    <div v-else-if="foundPatient != null" class="mt-4">
      <div class="btn border border-danger text-danger">No se encontro ningun paciente</div>
      <router-link to="/addpaciente">
        <div class="btn btn-primary mt-2">Agregar paciente</div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Patientbox from '@/components/Patientbox.vue';
import { mapState } from 'vuex';

export default {
  name: "Patientsearch",
  components: {
    Navbar,Patientbox
  },
  data() {
    return {
      foundPatient: null
    };
  },
  computed: {
    ...mapState(['st_allPacientes']),
    // url(){
    //   return '/paciente/' + this.foundPatient[0].id;
    // }
    },
  methods: {
    filterPatients(e, st_allPacientes) {
      console.log(e);
      e.preventDefault();
      this.foundPatient = st_allPacientes.filter(
        el => document.getElementById("dni-input").value == el.documento
      );
    }
  },
}
</script>

<style scoped>
#backbtn{
  position: fixed;
  top: 20px;
  right: 1em;
}
#dni-input{
  width: 40vw;
  background-color: rgb(226, 255, 255);
  border: #007bff solid 1px;
  margin-right: 1em;
}
</style>
