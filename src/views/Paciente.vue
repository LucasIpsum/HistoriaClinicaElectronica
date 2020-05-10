<template>
  <div>
    <Navbar/>
    <BackBtn />
    <div class="header">
      <div class="miPerfil">
        <div id="perfilph"></div>
        <div id="information">
          <div id="estado">{{pacienteActual.estado}}</div>
          <div id="id">{{pacienteActual.apellido}}, {{pacienteActual.nombre}}</div>
        </div>
      </div>
          <div id="btn-perfil" class="nav d-flex justify-content-around align-content-center">
              <label id="labelHC" v-if="st_authority == 'MEDICO'">
                <input id="hc" v-model="inputs" type="radio" name="perfil" value="HC">
                <i v-if="this.inputs=='HC'" class="current fas fa-notes-medical"></i>
                <i v-else class="fas fa-notes-medical"></i>
                <span class="leyenda">Historias Clinicas</span>
              </label>

              <label id="labelP">
                <input id="p" v-model="inputs" type="radio" name="perfil" value="P">
                <i v-if="this.inputs=='P'" class="current fas fa-user"></i>
                <i v-else class="fas fa-user"></i>
                <span class="leyenda">Perfil del Paciente</span>
              </label>

              <label id="labelRE">
                <input id="re" v-model="inputs" type="radio" name="perfil" value="RE">
                <i v-if="this.inputs=='RE'" class="current fas fa-file-medical-alt"></i>
                <i v-else class="fas fa-file-medical-alt"></i>
                <span class="leyenda">Registros de Enfermeria</span>
              </label>
          </div>
      </div>
      <div v-if="inputs=='HC'"> 
        <HC :paciente="pacienteActual"/>
      </div>
      <div v-else-if="inputs=='RE'">
        <FM :paciente="pacienteActual"/>
      </div>
      <div v-else>
        <Perfil :paciente="pacienteActual"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {  mapState } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import BackBtn from '@/components/BackBtn.vue';
import HC from '@/components/HC.vue'
import FM from '@/components/RE.vue'
import Perfil from '@/components/Perfil.vue'

export default {
  name: 'Paciente',
  components: { Navbar, BackBtn, HC, FM, Perfil },
  data() {
    return{
      pacienteActual: '',
      inputs:"P",
    }
  },
  methods: {
    cargarActual(){
      this.st_allPacientes.forEach(p => {
        if(p.id == this.$route.params.id){
          console.log("se carga" + p)
          this.pacienteActual = p;
        }
      });
    },
      labelCurrent(){
        let labels = document.querySelectorAll('label');
        labels.forEach(label => {label.classList.remove('current')})
        let i = document.querySelector('.current');
        i.parentElement.classList.add('current');
      }
  },
  computed: {
    ...mapState(['st_userInfo', 'st_allPacientes','st_authority'])
  },
    created(){
      this.cargarActual();
      console.log("paciente se crea");
    // this.fetchDataAllPatients()
  },
    mounted(){
      this.labelCurrent();
    },
    updated(){
      this.labelCurrent();
    }
}

</script>
<style scoped>
  .header{
    height: 160px;
    width: 100%;
    margin-bottom: 0.5em;
  }
  .miPerfil{
    background-color: white;
    color:black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
  }
  .miPerfil>*{
    text-align: left;
  }
  #perfilph{
    width: 80px;
    height: 80px;
    border: 3px solid #007bff;
    border-radius: 50%;
    background-color: #65acf8;
  }
  #information{
    height: 80px;
    width: 70%;
  }
  #estado{
    color: red;
    border: 2px red solid;
    border-radius: 1em;
    padding: 0.2em 1em;
  }
  #id{
    font-size: 1.5em;
    padding: 0.2em 0.5em;
  }
  .nav {
    background-color: #007bff;
    color: white;
    height: 60px;
    font-size: 2em;
  }
  label{
    width: 30%;
    margin: 0;
    height: 60px;
    cursor: pointer;
  }
  label.current{
    background-color: #005abf;
    border-bottom: 10px solid white;
    border-top-right-radius: 0.2em;
    border-top-left-radius: 0.2em;
  }
  label:hover{
    background-color: #005abf;
    border-bottom: 10px solid white;
    border-top-right-radius: 0.2em;
    border-top-left-radius: 0.2em;
  }
  [type=radio] { 
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
}
  .leyenda{
    display: none;
  }
@media screen and (min-width: 1000px){
  .leyenda{
    display: inline;
    font-size: 0.7em;
    padding-left: 0.5em;
  }
}
</style>
