<template>
  <div id="search" class="container">
    <form id="searchbox" class="d-flex align-items-center">
      <input type="text" id="dni-input" placeholder="Ingrese DNI" class="pl-3 pt-1 pb-1" @keyup.enter="(event) => { filterPatients(event, this.st_allPacientes) }"/>
      <div id="searchbtn" @click="(event) => { filterPatients(event, this.st_allPacientes) }">
        <i class="fas fa-search"></i>
      </div>
    </form>
    
    <div v-if="foundPatient != '' && foundPatient != null" class="mt-1 searchresultbox">
      <div id="exit" @click="hide">
        <i class="fas fa-times-circle fa-2x mb-2"></i>
      </div>
      <Patientbox :paciente="foundPatient[0]"/>
    </div>

    <div v-else-if="foundPatient != null" class="mt-1 searchresultbox">
      <div id="exit" @click="hide">
        <i class="fas fa-times-circle fa-2x mb-2"></i>
      </div>
      <div class="btn border border-danger text-danger mr-1">No se encontro ningun paciente</div>
      <router-link to="/addpaciente">
        <div class="btn btn-primary">Agregar</div>
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
      e.preventDefault();
      this.foundPatient = st_allPacientes.filter(
        el => document.getElementById("dni-input").value == el.documento
      );
    },
    hide(){
      this.foundPatient = null;
    }
  },
}
</script>

<style scoped>
#searchbox{
  position: absolute;
  top: 25px;
  right: 1em;
  z-index: 100;
}

#dni-input{
  width: 10em;
  border: #007bff solid 1px;
  margin-right: 0.3em;
  border-radius: 2em;
  color: #007bff;
}
#dni-input:focus{
  outline: none;
}
#searchbtn{
  font-size: 1.3em;
  color: rgb(48, 130, 253);
}
.searchresultbox{
  border: 2px rgb(48, 130, 253,0.5) solid;
  border-radius: 0.3em;
  padding: 0.5em 0;
  margin-bottom: 1em;
}
</style>
