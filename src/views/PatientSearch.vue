<template>
  <div class="container">
    <Navbar />
    <h1>Buscar paciente</h1>
    <form>
      <input type="text" id="dni-input" placeholder="Ingrese DNI" />
      <button v-on:click="filterPatients">Buscar</button>
    </form>

    <div v-if="foundPatient != '' && foundPatient != null" class="d-flex justify-content-center mt-4">
      <div class="card bg-primary text-black mb-3 col-8">
        <div class="card-body">
          <h5 class="card-title">{{this.foundPatient[0].name}}</h5>
          <p class="card-text">{{this.foundPatient[0].id}}</p>
        </div>
      </div>
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

export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      patients: [],
      foundPatient: null
    };
  },
  methods: {
    async fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => (this.patients = json));
    },

    filterPatients(e) {
      e.preventDefault();
      this.foundPatient = this.patients.filter(
        e => document.getElementById("dni-input").value == e.id
      );
    }
  },

  created: function() {
    this.fetchData();
  }
};
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
