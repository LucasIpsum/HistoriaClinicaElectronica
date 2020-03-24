<template>
  <div>
    <div id="header">
      <h2 id="nameTitle">{{current.name}}</h2>
      <div class="row">
        <div v-on:click="routeHistory" class="col-6 text">Historia Clinica</div>
        <div v-on:click="routeNurse" class="col-6 text">Registro de Enfermeria</div>
        <Component is="" />
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'Paciente',
    data(){
      return {
        currtentPage: null
      }
    },
    computed: {
      ...mapState(['st_misPacientes']),
      current(){
        return this.st_misPacientes[this.$route.params.id - 1];
      }
    },
    methods: {
      routeHistory(){

      }
    }
  }
</script>

<style scoped>
  #header{
    background-color: rgb(57, 158, 252);
    margin-top: 1em;
  }
  #nameTitle{
    font-size: 2.3em;
    padding-top: 0.5em;
  }
  .text{
    font-size: 1.5em;
    padding: 0 1em;
  }
  .row div {
    border: 2px black solid
  }
</style>