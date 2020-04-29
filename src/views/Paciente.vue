<template>
  <div>
    <Navbar/>
    <BackBtn />
    <div class="header">
      <div class="miPerfil">Perfil del paciente</div>
      <!-- <h3 v-if="pacienteActual.estado.diagnostico =='Covid-19'" style="background-color:red">Estado: {{pacienteActual.estado.diagnostico}}</h3>
      <h3 v-else style="background-color:#2BFF39">Estado: {{pacienteActual.estado.diagnostico}}</h3> -->
          <div class="nav d-flex justify-content-around align-content-center">

              <label v-if="st_authority == 'MEDICO'">
                <input id="hc" v-model="inputs" type="radio" name="perfil" value="HC">
                <img v-if="this.inputs=='HC'" class="current" src="../assets/HC.svg" alt="RE">
                <img v-else src="../assets/HC.svg" alt="RE">
              </label>

              <label>
                <input id="p" v-model="inputs" type="radio" name="perfil" value="P">
                <img v-if="this.inputs=='P'" class="current" src="../assets/PERFIL.svg" alt="Perfil">
                <img v-else src="../assets/PERFIL.svg" alt="Perfil">
              </label>

              <label>
                <input id="re" v-model="inputs" type="radio" name="perfil" value="RE">
                <img v-if="this.inputs=='RE'" class="current" src="../assets/RE.svg" alt="RE">
                <img v-else src="../assets/RE.svg" alt="RE">
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
import {mapState} from 'vuex';
import Navbar from '@/components/Navbar.vue';
import BackBtn from '@/components/BackBtn.vue';
import HC from '@/components/HC.vue'
import FM from '@/components/FM.vue'
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
          this.pacienteActual = p;
        }
      });
    }
  },
  computed: {
<<<<<<< HEAD
    ...mapState(['st_userInfo', 'st_allPacientes','st_authority']),
=======
    ...mapState(['st_userInfo', 'st_allPacientes', 'st_authority']),
>>>>>>> 8fb1323d20f5bbffe537ca4eb8c75259aeec4655
  },
    created(){
      console.log('aidi bre o' + this.$route.params.id)
   this.cargarActual()
   console.log(this.st_allPacientes)
   console.log(this.pacienteActual)
  },
}

</script>
<style scoped>
  .header{
    height: 30vh;
    width: 100vw;
  }
  .miPerfil{
    background-color: #007bff;
    color:white;
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;
  }
  label img{
    width: 25 vw;
    height: 6.5vh;
    cursor: pointer;
  }
  .nav {
    background-color: rgb(226, 255, 255);
    color: #007bff;
    border:1px solid #007bff;
    height: 30%;
  }
  [type=radio] { 
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
}
  .current{
    filter: invert(50%);
    -webkit-filter: invert(50%);
  }
</style>
