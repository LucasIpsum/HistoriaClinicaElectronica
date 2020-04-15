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

      <div v-if="usuarioBuscado" class="cardd bg-info">
        <h2>Medico Encontrado</h2>
        <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
        <img @click="mostrarVistaConfirmacion(true, usuarioBuscado)" class="check" src="@/assets/check.png" />
        <img @click="mostrarVistaConfirmacion(false, usuarioBuscado)" class="check" src="@/assets/cancel.png" />
      </div>

      <div class="cardd" v-for="(i,index) in medicosPendientes" :key="index">
        <p>{{i.nombre}} - {{i.dni}}</p>
        <img @click="mostrarVistaConfirmacion(true, i)" class="check" src="@/assets/check.png" />
        <img @click="mostrarVistaConfirmacion(false, i)" class="check" src="@/assets/cancel.png" />
      </div>
    </template>

    <!-- Del enfermero -->
    <template v-if="seccion=='E'">
        <label>
          <input type="number" name="dniInput" id="dniEnfermero" />
      </label>
      <button @click="filtrarUsuario(enfermerosPendientes)">Buscar enfermero</button>

      <div v-if="usuarioBuscado" class="cardd bg-info">
        <h2>Enfermero Encontrado</h2>
        <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
        <img @click="mostrarVistaConfirmacion(true, usuarioBuscado)" class="check" src="@/assets/check.png" />
        <img @click="mostrarVistaConfirmacion(false, usuarioBuscado)" class="check" src="@/assets/cancel.png" />
      </div>

      <div class="cardd" v-for="(i,index) in enfermerosPendientes" :key="-(index+1)">
        <p>{{i.nombre}} - {{i.dni}}</p>
        <img @click="mostrarVistaConfirmacion(true, i)" class="check" src="@/assets/check.png" />
        <img @click="mostrarVistaConfirmacion(false, i)" class="check" src="@/assets/cancel.png" />
      </div>
    </template>

    <div v-if="confirmacion!=null" id="vistaConfirmacion">
      <div class="cardd">
        <p>¿Está seguro de que desea {{confirmacion ? 'dar de alta' : 'rechazar el alta' }} al usuario {{usuarioPorConfirmar.nombre}}? </p>
        <!-- BOTON SI(APROBAR & RECHAZAR) Y NO MEDICOS -->
        <template v-if="seccion=='M'">
          <button v-if="confirmacion" @click="aprobarMedico(usuarioPorConfirmar)" >Sí</button>
          <button v-else @click="rechazarMedico(usuarioPorConfirmar)" >Sí</button>
          <button @click="esconderVistaConfirmacion">No</button>
        </template>
          <!-- BOTON SI (APROBAR & RECHAZAR) Y NO ENFERMEROS -->
        <template v-else>
          <button v-if="confirmacion" @click="aprobarEnfermero(usuarioPorConfirmar)">Sí</button>
          <button v-else @click="rechazarEnfermero(usuarioPorConfirmar)">Sí</button>

          <button @click="esconderVistaConfirmacion">No</button>
        </template>

      </div>
    </div>

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
      confirmacion: null,
      usuarioPorConfirmar: null
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
      alert(`Se dio de alta al usuario ${medico.nombre} ${medico.id} con éxito.`)
      this.esconderVistaConfirmacion()
      this.cargarPendientes();
    },
    async rechazarMedico(medico) {
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
      console.log(`Se rechaza al medico de ID ${medico.id}`);
      alert(`Se dio de baja al usuario ${medico.nombre} ${medico.id} con éxito.`)
      this.esconderVistaConfirmacion()
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
      alert(`Se dio de alta al usuario ${enfermero.nombre} ${enfermero.id} con éxito.`)
      this.esconderVistaConfirmacion()
      this.cargarPendientes();
    },
    async rechazarEnfermero(enfermero) {
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
            this.esconderVistaConfirmacion()
      alert(`Se dio de baja al usuario ${enfermero.nombre} ${enfermero.id} con éxito.`)
      console.log(`Se rechaza al enfermero de ID ${enfermero.id}`);
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
            alert('No se ha encontrado el DNI ingresado.')
            buscarDNI.value = ''
      }
    },
    mostrarVistaConfirmacion(aprobar, usuario){
      this.confirmacion = aprobar;
      this.usuarioPorConfirmar = usuario;
    },
    esconderVistaConfirmacion(){
      this.confirmacion=null;
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

#vistaConfirmacion{
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: #0000005d;
  
}
</style>