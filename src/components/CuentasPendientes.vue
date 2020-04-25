<template>
  <div>
    <Navbar />
    <!-- MENU PARA VER ENTRE MEDICO/ENFERMERO -->                            
    <div class="header">
      <div class="miPerfil">Cuentas para autorizar</div>

      <div class="nav d-flex justify-content-around align-content-center">
        <label>
          <input id="M" v-model="seccion" type="radio" name="perfil" value="M"/>
          <img v-if="this.seccion=='M'" class="current" src="../assets/PERFIL.svg" alt="Perfil" />
          <img v-else src="../assets/PERFIL.svg" alt="Perfil" />
        </label>

        <label>
          <input id="E" v-model="seccion" type="radio" name="perfil" value="E"/>
          <img v-if="this.seccion=='E'" class="current" src="../assets/HC.svg" alt="E" />
          <img v-else src="../assets/HC.svg" alt="E" />
        </label>
      </div>
    </div>
    <!-- MENU MEDICO -->
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
      <div class="bg-danger"><h3 v-if="medicosPendientes == ''">No hay solicitudes pendientes</h3></div>
      <div class="cardd" v-for="(i,index) in medicosPendientes" :key="index">
        <p>{{i.nombre}} - {{i.dni}}</p>
        <img @click="mostrarVistaConfirmacion(true, i)" class="check" src="@/assets/check.png" />
        <img @click="mostrarVistaConfirmacion(false, i)" class="check" src="@/assets/cancel.png" />
      </div>
    </template>

    <!-- MENU ENFERMERO -->
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
      <div class="bg-danger"><h3 v-if="enfermerosPendientes == ''">No hay solicitudes pendientes</h3></div>
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
      await fetch ('/admin/alta/medicos')
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

      await fetch ('/admin/alta/enfermeros')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject(res);
          }
        })
        .then(json => (this.enfermerosPendientes = json.enfermeros))
        .catch(error => {
          console.log(error);
        });
    },
    async aprobarMedico(medico) {
      await fetch(`/admin/alta/medicos/${medico.id}`,{
          method: 'PATCH'
      })
      .then(res => {
          if(res.ok){
          return res.json()
          }else{
          return new Promise.reject(res.json())
          }
      })
      .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
      console.log(`Se aprueba al medico de ID ${medico.id}`);
      alert(`Se dio de alta al usuario ${medico.nombre} ${medico.id} con éxito.`)
      this.esconderVistaConfirmacion()
      this.cargarPendientes();
    },
    async rechazarMedico(medico) {
      await fetch(`/admin/eliminar/medicos/${medico.id}`,{
          method: 'DELETE'
      })
      .then(res => {
          if(res.ok){
          return res.json()
          }else{
          return new Promise.reject(res.json())
          }
      })
      .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
      console.log(`Se rechaza al medico de ID ${medico.id}`);
      alert(`Se dio de baja al usuario ${medico.nombre} ${medico.id} con éxito.`)
      this.esconderVistaConfirmacion()
      this.cargarPendientes();
      this.usuarioBuscado = false;
    },
    async aprobarEnfermero(enfermero) {
      await fetch(`/admin/alta/enfermeros/${enfermero.id}`,{
              method: 'PATCH'
          })
          .then(res => {
              if(res.ok){
              return res.json()
              }else{
              return new Promise.reject(res.json())
              }
          })
          .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
      console.log(`Se aprueba al enfermero de ID ${enfermero.id}`);
      alert(`Se dio de alta al usuario ${enfermero.nombre} ${enfermero.id} con éxito.`)
      this.esconderVistaConfirmacion()
      this.cargarPendientes();
      this.usuarioBuscado = false;
    },
    async rechazarEnfermero(enfermero) {
      await fetch(`/admin/eliminar/enfermeros/${enfermero.id}`,{
              method: 'DELETE'
          })
          .then(res => {
              if(res.ok){
              return res.json()
              }else{
              return new Promise.reject(res.json())
              }
          })
          .then(json => console.log(json)).catch(error => error.then(json => console.log(json)))
            this.esconderVistaConfirmacion()
      alert(`Se dio de baja al usuario ${enfermero.nombre} ${enfermero.id} con éxito.`)
      console.log(`Se rechaza al enfermero de ID ${enfermero.id}`);
      this.cargarPendientes();
    },
    filtrarUsuario(usuario) {
        let buscarDNI;
        this.usuarioBuscado = false;
      this.seccion == 'M' ? buscarDNI = document.getElementById("dniMedico"): buscarDNI = document.getElementById("dniEnfermero");
      usuario.forEach(e => {
        if (buscarDNI.value == e.documento) {
          this.usuarioBuscado = e;
        }
      });
      if(!this.usuarioBuscado){
            alert('No se ha encontrado el DNI ingresado.')
      }
      buscarDNI.value = '';
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