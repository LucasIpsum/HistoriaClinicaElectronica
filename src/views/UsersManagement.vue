<template>
    <div>
        <Navbar />
        <!-- MENU PARA VER ENTRE MEDICO/ENFERMERO -->
        <div class="header">
            <div class="miPerfil">Cuentas registradas</div>
            <div class="nav d-flex justify-content-around align-content-center">
                <label>
                    <input id="M" v-model="seccion" type="radio" name="perfil" value="M" @click="usuarioBuscado = false"/>
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

        <!-- MENU MEDICO -->

        <template v-if="seccion=='M'">
            <label>
                <input type="number" name="dniInput" id="dniMedico" />
            </label>
            <button @click="filtrarUsuario(allMedicos)">Buscar médico</button>

            <div v-if="usuarioBuscado" class="cardd bg-info">
                <h2>Medico Encontrado</h2>
                <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
                <img @click="mostrarVistaConfirmacion(usuarioBuscado, 'M')" class="check" src="@/assets/cancel.png" />
            </div>
            <div class="bg-danger"><h3 v-if="allMedicos == ''">No hay solicitudes pendientes</h3></div>
            <div class="cardd" v-for="(i,index) in allMedicos" :key="index">
                <p>{{i.nombre}} - {{i.matricula}}</p>
                <img @click="mostrarVistaConfirmacion(i, 'M')" class="check" src="@/assets/cancel.png" />
            </div>
        </template>

        <!-- MENU ENFERMERO -->

        <template v-if="seccion=='E'">
            <label>
            <input type="number" name="dniInput" id="dniEnfermero" />
        </label>
        <button @click="filtrarUsuario(allEnfermeros)">Buscar enfermero</button>

        <div v-if="usuarioBuscado" class="cardd bg-info">
            <h2>Enfermero Encontrado</h2>
            <p>{{usuarioBuscado.nombre}} - {{usuarioBuscado.dni}}</p>
            <img @click="mostrarVistaConfirmacion(usuarioBuscado, 'E')" class="check" src="@/assets/cancel.png" />
        </div>
        <div class="bg-danger"><h3 v-if="allEnfermeros == ''">No hay solicitudes pendientes</h3></div>
        <div class="cardd" v-for="(i,index) in allEnfermeros" :key="-(index+1)">
            <p>{{i.nombre}} - {{i.dni}}</p>
            <img @click="mostrarVistaConfirmacion(i, 'E')" class="check" src="@/assets/cancel.png" />
        </div>
        </template>

        <div v-if="confirmacion!=null" id="vistaConfirmacion">
            <div class="cardd">
                <p>¿Está seguro de que desea deshabilitar al usuario {{usuarioPorConfirmar.nombre}}? </p>
                <!-- BOTON SI Y NO MEDICOS -->
                <template v-if="seccion=='M'">
                    <button @click="deshabilitarUsuario(usuarioPorConfirmar, confirmacion)" >Sí</button>
                    <button @click="esconderVistaConfirmacion">No</button>
                </template>
                <!-- BOTON SI  Y NO ENFERMEROS -->
                <template v-else>
                    <button @click="deshabilitarUsuario(usuarioPorConfirmar, confirmacion)">Sí</button>
                    <button @click="esconderVistaConfirmacion">No</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'UsersManagement',
    components: {
        Navbar,
    },
    data(){
        return{
            seccion: "M",
            usuarioBuscado: false,
            confirmacion: null,
            usuarioPorConfirmar: null,
            allMedicos: [],
            allEnfermeros: []
        };
    },
    methods: {
        async cargarUsuarios(){
            await fetch('/api/all/medicos')
            .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(res);
            }
            })
            .then(json => (this.allMedicos = json.medicos))
            .catch(error => {
            console.log(error);
            });

            await fetch ('/api/all/enfermeros')
            .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(res);
            }
            })
            .then(json => (this.allEnfermeros = json.enfermeros))
            .catch(error => {
            console.log(error);
            });
        },
        filtrarUsuario(usuarios) {
            let buscarDNI;
            this.usuarioBuscado = false; //
            this.seccion == 'M' ? buscarDNI = document.getElementById("dniMedico"): buscarDNI = document.getElementById("dniEnfermero");
            usuarios.forEach(e => {
                if (buscarDNI.value == e.documento) {
                    this.usuarioBuscado = e;
                }
            });
            if(!this.usuarioBuscado){
                alert('No se ha encontrado el DNI ingresado.')
            }
            buscarDNI.value = '';
        },
        async deshabilitarUsuario(usuario, tipoUsuario) {
            let url;
            if(tipoUsuario=='M'){
                url=`/admin/baja/medicos/${usuario.id}`
            } else if(tipoUsuario=='E'){
                url=`/admin/baja/enfermeros/${usuario.id}`
            }
            await fetch(url,{
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
            this.esconderVistaConfirmacion()
            console.log(`Se deshabilita al usuario de ID ${usuario.id}`);
            alert(`Se deshabilita al usuario ${usuario.nombre} ${usuario.id} con éxito.`)
            this.usuarioBuscado=false;
            this.cargarUsuarios();
        },
        mostrarVistaConfirmacion(usuario, tipoUsuario){
            this.usuarioPorConfirmar = usuario;
            this.confirmacion = tipoUsuario;
        },
        esconderVistaConfirmacion(){
            this.confirmacion=null;
        }
    },
    created(){
        this.cargarUsuarios();
    }
}
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