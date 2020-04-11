<template>
  <div class="container">
    <h2>Buscar paciente</h2>
    <form>
      <input type="text" id="dni-input" placeholder="Ingrese DNI" />
      <button v-on:click="filterPatients">Buscar</button>
    </form>

    <div v-if="foundPatient != '' && foundPatient != null" class="d-flex justify-content-center mt-4">
      <Patientbox :paciente="foundPatient[0]"/>
    </div>

    <div v-else-if="foundPatient != null" class="d-flex justify-content-center mt-4">
      <div class="card bg-danger text-black mb-3 col-8">
        <div class="card-body">
          <h5 class="card-title">No se encontró al paciente</h5>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Patientbox from '@/components/Patientbox.vue';

export default {
  name: "Patientsearch",
  components: {
    Navbar,Patientbox
  },
  data() {
    return {
      patients: [],
      foundPatient: null
    };
  },
  computed: {
    url(){
      return '/paciente/' + this.foundPatient[0].id;
    }
    },
  methods: {
    async fetchData() {
      await fetch("https://raw.githubusercontent.com/21diego/database/master/pacientes.json")
        .then(response => response.json())
        .then(json => (this.patients = json));
    },

    filterPatients(e) {
      e.preventDefault();
      this.foundPatient = this.patients.filter(
        e => document.getElementById("dni-input").value == e.documento
      );
    }
  },
  created: function() {
    this.fetchData();
  }
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
}
</style>
