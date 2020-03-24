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
    <div id="state">Estado: <span :class="historia?historia.estado:null">{{historia?historia.estado:null}}</span></div>
    <History v-if="currtentPage == 'history'" :anam="historia.clinico.anamnesis" :contacts="current.contact"/>
    <Nurse v-if="currtentPage == 'nurse'" :registro="historia.registro"/>
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
        currtentPage: 'history',
        historia: null
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
      },
      async cargarRegistro(){
        await fetch('https://raw.githubusercontent.com/21diego/database/master/history.json')
        .then(response => response.json())
        .then(json => this.historia = json[this.$route.params.id - 1])
        .catch(error => console.log(error))
      }
    },
    created(){
      this.cargarRegistro();
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