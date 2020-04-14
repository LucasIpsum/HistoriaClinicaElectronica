<template>
  <div>
    <Navbar />

    <div class="header">
      <div class="miPerfil">Cuentas para autorizar</div>

      <!-- <h3 v-if="pacienteActual.estado.diagnostico =='Covid-19'" style="background-color:red">Estado: {{pacienteActual.estado.diagnostico}}</h3>
      <h3 v-else style="background-color:#2BFF39">Estado: {{pacienteActual.estado.diagnostico}}</h3>-->
      <div class="nav d-flex justify-content-around align-content-center">
        <label>
          <input id="p" v-model="seccion" type="radio" name="perfil" value="M" @click="usuarioBuscado = false"/>
          <img v-if="this.seccion=='M'" class="current" src="../assets/PERFIL.svg" alt="Perfil" />
          <img v-else src="../assets/PERFIL.svg" alt="Perfil" />
        </label>

        <label>
          <input id="E" v-model="seccion" type="radio" name="perfil" value="E" @click="usuarioBuscado = false"/>
          <img v-if="this.seccion=='E'" class="current" src="../assets/HC.svg" alt="E" />
          <img v-else src="../assets/HC.svg" alt="E" />
        </label>
      </div>
    </div>
    <!-- Del medico -->
    <template v-if="seccion=='M'">
      <label>
        <input type="number" name="dniInput" id="dniMedico" />
      </label>
      <button @click="filtrarUsuario(medicosPendientes)">Buscar médico</button>

      <div v-if="usuarioBuscado" class="cardd bg-danger">
        <h2>Medico Encontrado</h2>
        <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
        <img @click="aprobarMedico(usuarioBuscado)" class="check" src="@/assets/check.png" />
      </div>

      <div class="cardd" v-for="(i,index) in medicosPendientes" :key="index">
        <p>{{i.nombre}} - {{i.dni}}</p>
        <img @click="aprobarMedico(i)" class="check" src="@/assets/check.png" />
      </div>
    </template>

    <!-- Del enfermero -->
    <template v-if="seccion=='E'">
        <label>
          <input type="number" name="dniInput" id="dniEnfermero" />
      </label>
      <button @click="filtrarUsuario(enfermerosPendientes)">Buscar enfermero</button>

      <div v-if="usuarioBuscado" class="cardd bg-danger">
        <h2>Enfermero Encontrado</h2>
        <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
        <img @click="aprobarEnfermero(usuarioBuscado)" class="check" src="@/assets/check.png" />
      </div>

      <div class="cardd" v-for="(i,index) in enfermerosPendientes" :key="-(index+1)">
        <p>{{i.nombre}} - {{i.dni}}</p>
        <img @click="aprobarEnfermero(i)" class="check" src="@/assets/check.png" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      medicosPendientes: [],
      enfermerosPendientes: [],
      seccion: "M",
      usuarioBuscado: false,
    };
  },
  methods: {
    async cargarPendientes() {
      // await fetch ('/api/alta/medicos')
      await fetch(
        "https://raw.githubusercontent.com/21diego/database/master/autorizarMedico.json"
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject(res);
          }
        })
        .then(json => (this.medicosPendientes = json.medicos))
        .catch(error => {
          console.log(error);
        });

      // await fetch ('/api/alta/enfermeros')
      await fetch(
        "https://raw.githubusercontent.com/21diego/database/master/autorizarEnfermeria.json"
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject(res);
          }
        })
        .then(json => (this.enfermerosPendientes = json.medicos))
        .catch(error => {
          console.log(error);
        });
    },
    async aprobarMedico(medico) {
      // await fetch(`/api/alta/medicos/${medico.id}`,{
      //     method: 'POST'
      // })
      // .then(res => {
      //     if(res.ok){
      //     return res.json()
      //     }else{
      //     return new Promise.reject(res.json())
      //     }
      // })
      // .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
      console.log(`Se aprueba al medico de ID ${medico.id}`);
      this.cargarPendientes();
    },
    async aprobarEnfermero(enfermero) {
      //     await fetch(`/api/alta/enfermeros/${enfermero.id}`,{
      //         method: 'POST'
      //     })
      //     .then(res => {
      //         if(res.ok){
      //         return res.json()
      //         }else{
      //         return new Promise.reject(res.json())
      //         }
      //     })
      //     .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
      console.log(`Se aprueba al enfermero de ID ${enfermero.id}`);
      this.cargarPendientes();
    },
    filtrarUsuario(usuario) {
        let buscarDNI;
      this.seccion == 'M' ? buscarDNI = document.getElementById("dniMedico"): buscarDNI = document.getElementById("dniEnfermero");  
      console.log(buscarDNI.value)
      usuario.forEach(e => {
        if (buscarDNI.value == e.dni) {
          this.usuarioBuscado = e;
        }
        // console.log(buscarDNI.value, e.dni)

      });
      console.log(buscarDNI)
      if(!this.usuarioBuscado){
            alert('Ponelo bien salamin')
            buscarDNI.value = ''
      }
    }
    
  },
  created() {
    this.cargarPendientes();
  }
};
</script>

<style scoped>
.header {
  height: 30vh;
  width: 100vw;
}
.miPerfil {
  background-color: #007bff;
  color: white;
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
}
label img {
  width: 25 vw;
  height: 6.5vh;
  cursor: pointer;
}
.miPerfil {
  background-color: #007bff;
  color: white;
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
}
.check {
  height: 4vh;
  padding-left: 2vw;
  cursor: pointer;
}
.cardd {
  align-items: center;
  padding-top: 2vh;
}
.cardd p {
  display: inline;
}
[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.current {
  filter: invert(50%);
  -webkit-filter: invert(50%);
}
</style>