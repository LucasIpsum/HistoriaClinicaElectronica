<template>
  <div>
    <Navbar />
    <div id="header">
      <h2 id="nameTitle" class="ml-5">{{current.name}}</h2>
      <div class="row">
        <div v-on:click="change('history')" class="col-6 text">Historia Clinica</div>
        <div v-on:click="change('nurse')" class="col-6 text">Registro de Enfermeria</div>
      </div> 
    </div>
    <div id="state">Estado: <span :class="current.state">{{current.state}}</span></div>
    <History v-if="currtentPage == 'history'"/>
    <Nurse v-if="currtentPage == 'nurse'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import History from '@/components/History.vue'
import Nurse from '@/components/Nurse.vue'
import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'Paciente',
    components: {
      History, Nurse, Navbar
    },
    data(){
      return {
        currtentPage: 'history'
      }
    },
    computed: {
      ...mapState(['st_misPacientes']),
      current(){
        return this.st_misPacientes[this.$route.params.id - 1];
      }
    },
    methods: {
      change(text){
        this.currtentPage = text;
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
  .row div:hover {
    background-color: rgba(51, 185, 141, 0.986);
  }
  #state{
    font-size: 1.5em;
  }
  .baja{
    color: green;
  }
  .alta{
    color: rgb(255, 208, 0);
  }
  .confirmado{
    color: red;
  }
</style>