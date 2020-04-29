<template>
<!-- FALTA GUARDAR EL FORM EN LOS CAMPOS,
  BUTTON SUBMIT-->
  <div class="registerPatient">
    <Navbar />
    <BackBtn />
    <h2>Registro de paciente</h2>
    <form id="formulario" action>
      
      <div id="overflow">
      
      <!-- Usamos una clase "tab" para cada pestaña del formulario (son 3) -->

      <!------------- TAB 1 (Datos personales) ------------>
      <div class="tab">
        <h4>Datos personales:</h4>
        <div class="form-group d-flex flex-nowrap">
          <label for="nombre" class="d-flex align-items-center justify-content-center"><i class="fas fa-user"></i></label>
          <input name="nombre" class="requiredInput form-control" placeholder="Nombre"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="apellido" class="d-flex align-items-center justify-content-center"><i class="fas fa-user"></i></label>
          <input name="apellido" class="requiredInput form-control" placeholder="Apellido"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="documento" class="d-flex align-items-center justify-content-center"><i class="fas fa-address-card"></i></label>
          <input id="dni-input" name="documento" type="number" class="requiredInput form-control" placeholder="DNI"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="email" class="d-flex align-items-center justify-content-center"><i class="fas fa-envelope"></i></label>
          <input name="email" class="requiredInput form-control" placeholder="E-mail"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="telefono" class="d-flex align-items-center justify-content-center"><i class="fas fa-phone"></i></label>
          <input name="telefono" class="requiredInput form-control" placeholder="Teléfono"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="fecha_nacimiento" class="d-flex align-items-center justify-content-center"><i class="fas fa-calendar-alt"></i>Nacimiento:</label>
          <input name="fecha_nacimiento" class="requiredInput form-control w-50" type="date"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="direccion" class="d-flex align-items-center justify-content-center"><i class="fas fa-map-marker-alt"></i></label>
          <input name="direccion" class="requiredInput form-control" placeholder="Direccion"/>
        </div>
        <div class="d-flex justify-content-between">
          <p><i class="fas fa-user"></i>Sexo</p>
          <label class="d-flex align-items-center">
            <input type="radio" name="sexo" value="F" checked class="requiredInput"/>Fem
          </label>
          <label class="d-flex align-items-center">
            <input type="radio" name="sexo" value="M"  class="requiredInput"/>Masc
          </label>
        </div>

      </div>

      <!------------- TAB 2 (Anamnesis 1/3) --------------->
      <div class="tab">
        <h4>Anamnesis 1/3</h4>
        <div class="d-flex justify-content-between">
          <p><i class="fas fa-plane"></i>¿Viajó?</p>
          <label class="d-flex align-items-center">
            <input type="radio" name="viaje" value="true" class="requiredInput" v-on:change="ableTripInput"/>Si
          </label>
          <label class="d-flex align-items-center">
            <input type="radio" name="viaje" value="false" class="requiredInput" checked v-on:change="ableTripInput"/>No
          </label>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="fecha_viaje" class="d-flex align-items-center justify-content-center"><i id="icon-date" class="fas fa-calendar-alt disable"></i>Fecha</label>
          <input id="tripDateInput" name="fecha_viaje" disabled type="date" class="form-control w-50 disable">
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="destino_viaje" class="d-flex align-items-center justify-content-center"><i id="icon-destiny" class="fas fa-map-marker-alt disable"></i></label>
          <input id="tripDestinyInput" name="destino_viaje" disabled type="text" class="form-control disable" placeholder="Destino del viaje">
        </div>
        <div class="d-flex justify-content-between">
          <p><i class="fas fa-baby"></i>¿Embarazo?</p>
          <label class="d-flex align-items-center">
            <input type="radio" name="embarazo" value="true" class="requiredInput" v-on:change="ablePregnancyInput"/>Si
          </label>
          <label class="d-flex align-items-center">
            <input type="radio" name="embarazo" value="false" class="requiredInput" checked v-on:change="ablePregnancyInput"/>No
          </label>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="semanas_gestacion" class="d-flex align-items-center justify-content-center"><i id="icon-time" class="fas fa-calendar-alt disable"></i>Semanas de gestacion: </label>
          <input name="semanas_gestacion" value="" id="pregnancyTimeInput" disabled type="number" class="form-control w-5em disable" placeholder="0"/>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="embarazos_previos" class="d-flex align-items-center justify-content-center"><i id="icon-prev" class="fas fa-baby-carriage disable"></i>Embarazos previos: </label>
          <input name="embarazos_previos" value="" id="previousPregnanciesInput" disabled type="number" class="form-control w-5em disable" placeholder="0"/>
        </div>
        

      </div>
      <!------------- TAB 3 (Anamnesis 2/3) --------------->
      <div class="tab">
        <h4>Anamnesis 2/3</h4>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fas fa-user"></i>
          <p class="m-0">Condiciones preexistentes:</p>
        </div>
        
        <div id="preexistantConditions" class="d-flex justify-content-between">
          <div class="p-0">
            <label><input type="checkbox" name="condiciones_preexistentes" value="DIABETES">Diabetes</label>          
            <label><input type="checkbox" name="condiciones_preexistentes" value="HIPERTENSION">Hipertensión</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="CARDIOPATIAS">Cardiopatías</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="DISLIPIDEMIA">Dislipidemia</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="TABAQUISMO">Tabaquismo</label>
          </div>
          <div class="p-0">
            <label><input type="checkbox" name="condiciones_preexistentes" value="CIRUGIAS">Cirugías</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="TRATAMIENTO_ONCOLOGICO">Trat. Onco.</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="EPOC">Epoc</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="NEUMOPATIAS">Neumopatías</label>
            <label><input type="checkbox" name="condiciones_preexistentes" value="ASMA">Asma</label>
          </div>
        </div>
      </div>

      <!------------- TAB 4 (Anamnesis 3/3) --------------->
      <div class="tab">
        <h4>Anamnesis 3/3</h4>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="medicacion_regular" class="d-flex align-items-center justify-content-center"><i class="fas fa-calendar-alt"></i></label>
          <input name="medicacion_regular" class="form-control" type="text" placeholder="Medicacion regular"/>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="trabajo" class="d-flex align-items-center justify-content-center"><i class="fas fa-calendar-alt"></i></label>
          <input name="trabajo" class="form-control requiredInput" type="text" placeholder="Ocupacion"/>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="convivientes" class="d-flex align-items-center justify-content-center"><i class="fas fa-calendar-alt"></i>Convivientes: </label>
          <input name="convivientes" value="" id="convivientes" type="number" class="requiredInput form-control w-50" placeholder="Cant. de conv."/>
        </div>

        <div class="row m-0">
          <p class="col-6">¿Vacunado contra la gripe?</p>
            <label class="col d-flex align-items-center">
              <input type="radio" name="vacuna_antigripal" value="true" class="requiredInput"/>Si
            </label>
            <label class="col d-flex align-items-center">
              <input type="radio" name="vacuna_antigripal" value="false" checked class="requiredInput"/>No
            </label>
        </div>
        <div class="form-group d-flex flex-nowrap justify-content-between">
          <label for="grupo_sanguineo" class="d-flex align-items-center justify-content-center"><i class="fas fa-calendar-alt"></i>Grupo Sanguineo: </label>
          <select name="grupo_sanguineo" class="requiredInput form-control w-25" id="inputGroupSelect01">
            <option selected value="">...</option>
            <option value="O_NEGATIVO">O -</option>
            <option value="O_POSITIVO">O +</option>
            <option value="A_NEGATIVO">A -</option>
            <option value="A_POSITIVO">A +</option>
            <option value="B_NEGATIVO">B -</option>
            <option value="B_POSITIVO">B +</option>
            <option value="AB_NEGATIVO">AB -</option>
            <option value="AB_POSITIVO">AB +</option>
          </select>
        </div>
      </div>
      <!----------- TAB 5 (Contacto de emergencia)  ------------>
      <div class="tab">
        <h4>Contacto de emergencia</h4>
        <div class="form-group d-flex flex-nowrap">
          <label for="nombreEmergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-user"></i></label>
          <input name="nombreEmergencia" class="requiredInput form-control" placeholder="Nombre"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="apellidoEmergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-user"></i></label>
          <input name="apellidoEmergencia" class="requiredInput form-control" placeholder="Apellido"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="emailEmergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-envelope"></i></label>
          <input id="email" type="email" class="requiredInput form-control" name="emailEmergencia" placeholder="Email"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="telefonoEmergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-phone"></i></label>
          <input id="teléfonoEm" type="number" class="requiredInput form-control" name="teléfonoEmergencia" placeholder="Telefono Fijo"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="telefono2Emergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-phone"></i></label>
          <input id="teléfonoEm2" type="number" class="requiredInput form-control" name="telefono2Emergencia" placeholder="Telefono Celular"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="direccionEmergencia" class="d-flex align-items-center justify-content-center"><i class="fas fa-map-marker-alt"></i></label>
          <input name="direccionEmergencia" class="requiredInput form-control" placeholder="Direccion"/>
        </div>
        <div class="form-group d-flex flex-nowrap">
          <label for="relacion" class="d-flex align-items-center justify-content-center"><i class="fas fa-user"></i></label>
          <input name="relacion" class="requiredInput form-control" placeholder="Relacion con el paciente"/>
        </div>
        </div>
      </div>
      
      <!---------- BOTONES DE CAMBIO DE PESTAÑA ------------->
      <div style="overflow:scroll;">
        <div style="float:right;">
          <button type="button" id="prevBtn" class="btn btn-primary mr-1" v-on:click="nextPrev(-1)">Atras</button>
          <button type="button" id="nextBtn" class="btn btn-primary" v-on:click="nextPrev(1)">Siguiente</button>
          <button id="submit" class="submit btn btn-primary" v-on:click="updateForm">Enviar</button>
        </div>
      </div>

      <!---------- PUNTOS QUE INDICAN EL PROGRESO DEL FORM  ------------>
      <div style="text-align:center;margin-top:40px;">
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
      </div>
    </form>
    <router-link :to="url"></router-link>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BackBtn from '@/components/BackBtn.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: "RegisterPatients",
  components: { Navbar, BackBtn },
  data() {
    return {
      currentTab: 0,
      patientId: ''
    };
  },
  // Al montarse, se muestra la primera pestaña
  mounted: function() {
    this.showTab(this.currentTab);
    this.markRequired();
  },
  computed: {
    ...mapState(['st_allPacientes']),
    url(){
        return '/paciente/' + this.patientId;
      }
  },
  methods: {
    ...mapMutations(['st_cargarAllPacientes']),
    // Muestra la pestaña específica
    showTab(n) {
      var allTabs = document.getElementsByClassName("tab");
      allTabs[n].style.display = "block";
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == allTabs.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submit").style.display = "inline";
      } else {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("submit").style.display = "none";
      }
      // ... Muestra el paso correspondiente
      this.fixStepIndicator(n);
    },

    nextPrev(n) {
      // Se fija qué pestaña hay que mostrar
      var allTabs = document.getElementsByClassName("tab");
      if (n == 1 && !this.validateForm()) return false;
      // Oculta la pestaña actual
      allTabs[this.currentTab].style.display = "none";
      // Incrementa o disminuye la pestaña actual en 1 o en -1
      this.currentTab = this.currentTab + n;
      // Si llegas al final del form, se hace el submit
      if (this.currentTab >= allTabs.length) {
        document.getElementById("regForm").submit();
        return false;
      }
      //Si no, muestra la próxima pestaña
      this.showTab(this.currentTab);
      
    },

    validateForm() {
      var allTabs, allInputs, valid = true;
      allTabs = document.getElementsByClassName("tab");
      allInputs = allTabs[this.currentTab].getElementsByClassName("requiredInput");
      // Loop que checkea los inputs de la pestaña acuatl
      for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
          allInputs[i].className += " invalid";
          valid = false;
        }
        else {
          allInputs[i].classList.remove("invalid");
        }
      }
      // Si value es true, agrega un paso a los puntos de abajo
      if (valid) {
        document.getElementsByClassName("step")[this.currentTab].className +=
          " finish";
          return true;
      } else {
        alert("Faltan campos por rellenar.");
        return false;
      }
    },

    fixStepIndicator(n) {
      var allSteps = document.getElementsByClassName("step");
      for (let i = 0; i < allSteps.length; i++) {
        allSteps[i].className = allSteps[i].className.replace(" active", "");
      }
      allSteps[n].className += " active";
    },

    // Funciones que activan o desactivan inputs en caso de no tener que ser completados
    ableTripInput(e) {
      var isTrueSet = !(e.target.value == "true");
      var destiny = document.getElementById("tripDestinyInput");
      var date = document.getElementById("tripDateInput");
      var iconDate = document.getElementById("icon-date");
      var iconDestiny = document.getElementById("icon-destiny")
      destiny.disabled = isTrueSet;
      destiny.value = '';
      destiny.classList.toggle('disable');
      iconDestiny.classList.toggle('disable');
      date.disabled = isTrueSet;
      date.value = '';
      date.classList.toggle('disable');
      iconDate.classList.toggle('disable');
    },
    ablePregnancyInput(e) {
      var isTrueSet = !(e.target.value == "true");
      var time = document.getElementById("pregnancyTimeInput");
      var prev = document.getElementById("previousPregnanciesInput");
      var iconTime = document.getElementById("icon-time");
      var iconPrev = document.getElementById("icon-prev")
      time.disabled = isTrueSet;
      time.value = '';
      time.classList.toggle('disable');
      iconTime.classList.toggle('disable');
      prev.disabled = isTrueSet;
      prev.value = '';
      prev.classList.toggle('disable');
      iconPrev.classList.toggle('disable');
    },


    // Carga de datos al back
   updateForm(e){
      e.preventDefault();
      let self = this
      if(this.validateForm()){
        let formElem = document.getElementById("formulario")
        let formData = new FormData(formElem)
        
        let object = {};
        object["condiciones_preexistentes"] = []
        formData.forEach((value, key) => {

          if(key == "condiciones_preexistentes"){
            object["condiciones_preexistentes"].push(value)
          }else{
            object[key] = value
          }
          
        });
        let json = JSON.stringify(object);
        
        fetch('/api/pacientes', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: json
        })

        .then(res => {
          if(res.ok){
            return res.json()
          }else{
            return new Promise.reject(res.json())
          }
        })

        .then( jsonPaciente => {
        fetch('/api/all/pacientes')
          .then(response => {
            if(response.ok){
              return response.json()
            }else{
              return Promise.reject(response)
            }
          }).then(json => {
            this.st_cargarAllPacientes(json.pacientes);
            this.$router.push(`/paciente/${jsonPaciente.pacienteId}`).catch(err => {});
            })
        
          .catch(error => {
            console.log(error)
          })

        
        })

        
      }
      else {
        return;
      }
    },
    markRequired(){
      let inputs = document.getElementsByClassName('requiredInput')
      inputs.forEach( input => {
        if(input.type == 'radio'){
          input.parentNode.previousSibling.previousSibling && input.parentNode.previousSibling.previousSibling.childNodes[0] ? input.parentNode.previousSibling.previousSibling.innerHTML += '<span class="markedRequired">* </span>' : null
          
        }
        
        else{
          input.previousSibling.innerHTML += '<span class="markedRequired">* </span>';
        }
      })
    }
  }
};
</script>


<style scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width: 6px;
}

::-webkit-scrollbar:horizontal {
    height: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 10px;
    border: 1px solid #ffffff;
}

::-webkit-scrollbar-track {
    border-radius: 6px;  
    background-color: #ffffff; 
}
#formulario {
  margin: 0 auto;
  padding: 0 2em;
}
#overflow{
  height: 60vh;
  overflow-y: scroll;
  margin-bottom: 1.5em;
  width: 100%;
  padding: 0 0.5em;
}
#formulario .fas{
  color: white;
  background-color: rgb(13, 123, 202);
  font-size: 1.2em;
  border: 1px rgb(13, 123, 202) solid;
  padding: 0.3em;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-right: 0.4em;
}
#formulario .fas.disable{
  background-color: grey;
  border: 1px grey solid;
}
#formulario input{
  background: none;
  border: none;
  border-bottom: 2px solid rgb(13, 123, 202);
  color: rgb(13, 123, 202);
  text-align: left;
  font-size: 1em;
  font-weight: bold;
}
#formulario input::placeholder{
  color: rgba(16, 123, 199, 0.7);
}
#formulario input:focus{
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none;
}
#formulario select:focus{
  outline:none !important;
  outline-width: 0 !important;
  box-shadow: none;
}
.w-5em{
  width: 5em;
}

.markedRequired  {
  font-weight: bold;
  color: red;
}
#formulario input.disable{
  border-bottom: 2px solid grey;
  color: grey;
}
#formulario input.disable::placeholder{
  color: grey!important;
}
input.invalid {
  color: #f03333cb!important;
  background-color: #ffdddd!important;
  border-bottom: 2px solid #fd4d4d!important;
}
#formulario input.invalid::placeholder{
  color: #f03333cb!important;
}
#formulario select.invalid{
  background: #ffdddd!important;
}

#preexistantConditions label {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  align-self: center;
  font-size: 70%;
  
  margin-top: 2rem;
  font-size: larger;
}

#preexistantConditions label input{
  width: auto;
  align-self: center;
  margin: 0;
  margin-right: 0.3rem;
}
.tab {
  display: none;
}
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.3;
}
.step.active {
  opacity: 0.7;
}
.step.finish {
  background-color: #007bff;
}
</style>
