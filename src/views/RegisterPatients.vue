<template>
  <div class="mama de mati">
    <Navbar />
    <h2>Registro de paciente</h2>
    <form id="regForm" action>
      
      <div id="overflow">
        <!-- One "tab" for each step in the form: -->
      <div class="tab">

        <h4>Datos personales:</h4>
        
          <input class="requiredInput btn" placeholder="Nombre"/>
        
        
          <input class="requiredInput btn" placeholder="Apellido"/>
        
        
          <input class="requiredInput btn" placeholder="DNI"/>
        
        
          <input class="requiredInput btn" placeholder="E-mail"/>
        
          <input class="requiredInput btn" placeholder="Teléfono"/>
        Fecha de nacimiento:
        
          <input class="requiredInput btn" type="date"/>
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
        
      </div>

      <div class="tab">
        <h4>Login Info:</h4>
        
          <input class="requiredInput" placeholder="Username..." oninput="this.className = ''" />
        
        
          <input class="requiredInput" type="password" placeholder="Password..." oninput="this.className = ''" />
        
      </div>
      </div>
      

      <div style="overflow:auto;">
        <div style="float:right;">
          <button type="button" id="prevBtn" class="btn btn-primary mr-1" v-on:click="nextPrev(-1)">Atras</button>
          <button type="button" id="nextBtn" class="btn btn-primary" v-on:click="nextPrev(1)">Siguiente</button>
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
import { mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar
  },
  name: "Register",
  data() {
    return {
        currentTab: 0,
        form: {
        first_name: "",
        last_name: "",
        matrícula: "",
        telephone: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  mounted: function() {
    this.showTab(this.currentTab);
  },

  methods: {
    ...mapMutations(["st_logUser"]),
    register() {
      window.localStorage.setItem("user", "true");
      this.st_logUser();
      this.$router.push("/").catch(err => {});
    },

    showTab(n) {
      // This function will display the specified tab of the form ...
      var x = document.getElementsByClassName("tab");
      x[n].style.display = "block";
      // ... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Enviar";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      // ... and run a function that displays the correct step indicator:
      this.fixStepIndicator(n);
    },

    nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !this.validateForm()) return false;
      // Hide the current tab:
      x[this.currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      this.currentTab = this.currentTab + n;
      // if you have reached the end of the form... :
      if (this.currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
      }
      // Otherwise, display the correct tab:
      this.showTab(this.currentTab);
    },

    validateForm() {
      // This function deals with validation of the form fields
      var x,
        y,
        i,
        valid = true;
      x = document.getElementsByClassName("tab");
      y = x[this.currentTab].getElementsByClassName("requiredInput");
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false:
          valid = false;
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[this.currentTab].className +=
          " finish";
      }
      else{
          // pops up an alert about an empty field
          alert('Faltan campos por rellenar.')
      }
      return valid; // return the valid status
    },

    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i,
        x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class to the current step:
      x[n].className += " active";
    },

    ableTripInput(e){
      var isTrueSet = !(e.target.value == 'true');
      document.getElementById('tripDestinyInput').disabled = isTrueSet
      document.getElementById('tripDateInput').disabled = isTrueSet
    },
    ablePregnancyInput(e){
      var isTrueSet = !(e.target.value == 'true');
      document.getElementById('pregnancyTimeInput').disabled = isTrueSet
      document.getElementById('previousPregnanciesInput').disabled = isTrueSet
    },
    ableIsuranceInput(e){
      var isTrueSet = !(e.target.value == 'true');
      document.getElementById('isuranceInput').disabled = isTrueSet
    },
    
  },
  computed:{

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
