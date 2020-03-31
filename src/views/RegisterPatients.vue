<template>
<!-- FALTA GUARDAR EL FORM EN LOS CAMPOS,
  BUTTON SUBMIT-->
  <div class="registerPatient">
    <Navbar />
    <h2>Registro de paciente</h2>
    <form id="regForm" action>
      
      <div id="overflow">
      
      <!-- Usamos una clase "tab" para cada pestaña del formulario (son 3) -->

      <!------------ TAB 1 (Datos personales) ----------------->
      <div class="tab">

        <h4>Datos personales:</h4>
        
          <input class="requiredInput btn" placeholder="Nombre"/>
        
        
          <input class="requiredInput btn" placeholder="Apellido"/>
        
        
          <input class="requiredInput btn" placeholder="DNI"/>
        
        
          <input class="requiredInput btn" placeholder="E-mail"/>
        
          <input class="requiredInput btn" placeholder="Teléfono"/>
        
        Fecha de nacimiento:
          <input class="requiredInput btn" type="date"/>

          <input name="direccion" class="requiredInput" type="text" placeholder="Direccion"/>
         
        
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="btn btn-primary" for="inputGroupSelect01">Sexo</label>
          </div>
          <select name ="Sexo" class="custom-select" id="inputGroupSelect01">
            <option selected>Elegir...</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
          </select>
        </div>
      </div>

      <!------------- TAB 2 (Anamnesis) --------------->
      <div class="tab">
        <h4>  Anamnesis:</h4>
        
        <div class="row m-0">
          <p class="col-6">¿Viajó?</p>
            <label class="col d-flex align-items-center">
              <input type="radio" name="viaje" value="true" v-on:change="ableTripInput"/>Si
            </label>
            <label class="col d-flex align-items-center">
              <input type="radio" name="viaje" value="false" checked v-on:change="ableTripInput"/>No
            </label>
        </div>
        
        <label>Fecha de viaje<input id="tripDateInput" disabled type="date" class="btn"></label>
        
        <label>Destino de viaje<input id="tripDestinyInput" disabled type="text" class="btn"></label>
        
        <div class="row m-0">
          <p class="col-6">Embarazo</p>
            <label class="col d-flex align-items-center">
              <input type="radio" name="embarazo" value="true" v-on:change="ablePregnancyInput"/>Si
            </label>
            <label class="col d-flex align-items-center">
              <input type="radio" name="embarazo" value="false" checked v-on:change="ablePregnancyInput"/>No
            </label>
        </div>

        <label>Semanas de gestación<input id="pregnancyTimeInput" disabled type="number" class="btn" /></label>
          
        <label>Embarazos previos<input id="previousPregnanciesInput" disabled type="number" class="btn" /></label>
        
        <label >Antecedentes personales<textarea class="requiredInput btn" rows='4' cols='26' type="text" /></label>
      
        <label>Antecedentes familiares<textarea class="requiredInput btn" rows='4' cols='26' type="text" /></label>

        <label>Medicacion regular<input class="requiredInput btn" type="text" /></label>

        <label>Trabajo<input class="requiredInput btn" type="text" /></label>

        <label>Convivientes<input class="requiredInput btn" type="text" /></label>

      <div class="row m-0">
          <p class="col-6">Obra social</p>
            <label class="col d-flex align-items-center">
              <input type="radio" name="obraSocial" value="true" v-on:change="ableIsuranceInput"/>Si
            </label>
            <label class="col d-flex align-items-center">
              <input type="radio" name="obraSocial" value="false" checked v-on:change="ableIsuranceInput"/>No
            </label>
        </div>

        <label>Nombre de obra social<input disabled id="isuranceInput" class="btn"></label>
        
        <label>Observaciones<input class="requiredInput btn" type="text" /></label>
        
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="btn btn-primary" for="inputGroupSelect01">Grupo Sanguineo</label>
          </div>
          <select name ="Sexo" class="custom-select" id="inputGroupSelect01">
            <option selected>Elegir...</option>
            <option value="0-">O negativo</option>
          <option value="0+">O positivo</option>
          <option value="A-">A negativo</option>
          <option value="A+">A positivo</option>
          <option value="B-">B negativo</option>
          <option value="B+">B positivo</option>
          <option value="AB-">AB negativo</option>
          <option value="AB+">AB positivo</option>
          </select>
        </div>

      </div>
      <!----------- TAB 3 (Contacto de emergencia)  ------------>
      <div class="tab">
        <h2>Contacto de emergencia</h2>
        <label>
          Nombre
          <input name="nombreEmergencia" class="requiredInput btn" type="text" />
        </label>
        <label>
          Apellido
          <input name="apellidoEmergencia" class="requiredInput btn" type="text" />
        </label>
        <label>
          Email
          <input name="emailEmergencia" class="requiredInput btn" type="text" />
        </label>
        <label>
          Teléfono fijo
          <input name="telefonoEmergencia" class="requiredInput btn" type="text" />
        </label>
        <label>
          Teléfono celular
          <input name="telefono2Emergencia" class="requiredInput btn" type="text" />
        </label>
        <label>
          Relación
          <input name="relacion" class="requiredInput btn" type="text" />
        </label>
        <label>
          Direccion
          <input name="direccionEmergencia" class="requiredInput btn" type="text" />
        </label>
        
      </div>
      </div>
      

      <div style="overflow:auto;">
        <div style="float:right;">
          <button type="button" id="prevBtn" class="btn btn-primary mr-1" v-on:click="nextPrev(-1)">Atras</button>
          <button type="button" id="nextBtn" class="btn btn-primary" v-on:click="nextPrev(1)">Siguiente</button>
          <button id="submit" class="submit btn btn-primary" v-on:click="updateForm">Enviar</button>
        </div>
      </div>

      <!-- Circles which indicates the steps of the form: -->
      <div style="text-align:center;margin-top:40px;">
        <span class="step"></span>
        <span class="step"></span>
        <span class="step"></span>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "RegisterPatients",
  components: {
    Navbar
  },
  data() {
    return {
      currentTab: 0,
      error: null
    };
  },
  // Al montarse, se muestra la primera pestaña
  mounted: function() {
    this.showTab(this.currentTab);
  },

  methods: {
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
      allInputs = x[this.currentTab].getElementsByClassName("requiredInput");

      // Loop que checkea los inputs de la pestaña acuatl
      for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
          allInputs[i].className += " invalid";
          valid = false;
        }
      }
      // Si value es true, agrega un paso a los puntos de abajo
      if (valid) {
        document.getElementsByClassName("step")[this.currentTab].className +=
          " finish";
      } else {
        alert("Faltan campos por rellenar.");
      }
    },

    fixStepIndicator(n) {
      var allSteps = document.getElementsByClassName("step");
      for (i = 0; i < allSteps.length; i++) {
        allSteps[i].className = allSteps[i].className.replace(" active", "");
      }
      allSteps[n].className += " active";
    },

    // Funciones que activan o desactivan inputs en caso de no tener que ser completados
    ableTripInput(e) {
      var isTrueSet = !(e.target.value == "true");
      document.getElementById("tripDestinyInput").disabled = isTrueSet;
      document.getElementById("tripDateInput").disabled = isTrueSet;
    },
    ablePregnancyInput(e) {
      var isTrueSet = !(e.target.value == "true");
      document.getElementById("pregnancyTimeInput").disabled = isTrueSet;
      document.getElementById("previousPregnanciesInput").disabled = isTrueSet;
    },
    ableIsuranceInput(e) {
      var isTrueSet = !(e.target.value == "true");
      document.getElementById("isuranceInput").disabled = isTrueSet;
    },


    // Carga de datos al back
    async updateForm(e){
      let formElem = document.getElementById("regForm")
      e.preventDefault();
      await fetch('api/pacientes', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: new FormData(formElem)
      })

      .then(res => {
        if(res.ok){
          return res.json()
        }else{
          throw new Error()
        }
      })

      .then(json => console.log(json)).catch(error => console.log('fail'))
    }

  }
};
</script>


<style scoped>
#regForm {
  background-color: #ffffff;
  margin: 0 auto;
  width: 70%;
  min-width: 300px;
  
}
#overflow{
  background-color: rgb(228, 228, 228);
  height: 60vh;
  overflow-y: scroll;
  margin-bottom: 1.5em;
  width: 100%;
  border-radius: 0.3em;
  padding: 0 0.5em;
}

/* Style the input fields */
input, textarea {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #007bff;
  background-color: rgb(226, 255, 255);
  margin-bottom: 0.2em;
}
input[disabled], textarea[disabled]{
  background-color: rgb(211, 211, 211);
  border: 1px solid #707070;
}
/* Mark input boxes that gets an error on validation: */
input.invalid, textarea.invalid {
  background-color: #ffdddd;
  border: 1px solid #fd4d4d;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

/* Make circles that indicate the steps of the form: */
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

/* Mark the active step: */
.step.active {
  opacity: 0.7;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #007bff;
}
</style>
