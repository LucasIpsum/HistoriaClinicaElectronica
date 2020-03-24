<template>
  <div class="container">
    <Navbar />
    <h1>Registro médico</h1>
    <h5>{{this.foundPatient.name}}</h5>

    <div v-if="adding">
      <h4>Nueva consulta</h4>
      <label for="diagnosis"><p class="m-0 p-0">Diagnóstico</p>
          <textarea id="diagnosisInput" name="diagnosis" type="text" rows="4" cols="25" autofocus placeholder="Ingrese diagnóstico del paciente" required></textarea>
      </label>
      <label for="physical-exams">Exámenes físicos
          <textarea id="physicalExamsInput" name="physical-exams" type="text" rows="4" cols="25" placeholder="Ingrese exámenes físicos"></textarea>
      </label>
      <label for="observations">Observaciones
          <textarea id="observationsInput" name="observations" type="text" rows="4" cols="25" placeholder="Ingrese observaciones del paciente"></textarea>
      </label>
      <div class="d-flex justify-content-around">
        <div>
          <button v-on:click="submitRecord" class="btn btn-success mr-1">Enviar</button>
          <button v-on:click="cancelSubmit" class="btn btn-danger ml-1">Cancelar</button>
        </div>
      </div>
    </div>
    <div v-else>
      <button v-on:click="()=> {adding=true}" class="btn btn-primary">Agregar consulta</button>
      <div>{{this.patientRecords[recordIndex].fecha}} - {{this.patientRecords[recordIndex].medico}}</div>

      <div id="divsContainer">
        <div class="recordsDiv">
          <h3>Diagnóstico</h3>
          <div id="diagnosisDiv">
            {{this.patientRecords[recordIndex].diagnostico}}
          </div>
        </div>
        <div class="recordsDiv">
          <h3>Examenes físicos</h3>
          <div id="physicalExamsDiv">
            {{this.patientRecords[recordIndex].examenes_fisicos}}
          </div>
        </div>
        <div class="recordsDiv">
          <h3>Observaciones</h3>
          <div id="observationsDiv">
            {{this.patientRecords[recordIndex].observaciones}}
          </div>
        </div>
      </div>

      <div id="recordsNav" class="d-flex w-100 justify-content-center fixed-bottom mb-2">
        <div class="d-flex justify-content-between col-6">
          <img v-if="recordIndex==0" class="lowOpacity" src="../assets/backArrow.png" alt="Flecha para atras">
          <img v-else v-on:click="()=> recordIndex--" src="../assets/backArrow.png" alt="Flecha para atras">

          {{this.recordIndex + 1}} / {{this.patientRecords.length}}

          <img v-if="recordIndex == patientRecords.length -1" class="lowOpacity" src="../assets/forwardArrow.png" alt="Flecha para adelante">
          <img v-else v-on:click="()=> recordIndex++" src="../assets/forwardArrow.png" alt="Flecha para adelante">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: "PatientRecord",
  components:{
    Navbar
  },
  data() {
    return {
      foundPatient: '',
      patientRecords: [{
        fecha: '22-3-2020',
        medico: 'Robertito Lopez',
        diagnostico: 'Dificultad respiratoria y fiebre alta',
        examenes_fisicos: 'Tomografía',
        observaciones: 'mmmm quedandola'
      },
      {
        fecha: '23-3-2020',
        medico: 'George Selva',
        diagnostico: 'Ninguno',
        examenes_fisicos: 'Radiografía',
        observaciones: 'None'
      }],
      newRecord: {
        fecha: '',
        medico: '',
        diagnostico: '',
        examenes_fisicos: '',
        observaciones: ''
      },
      recordIndex: 0,
      adding: false,
    };
  },
  methods: {
    async fetchData() {
      await fetch("https://raw.githubusercontent.com/21diego/database/master/pacientes.json")
        .then(response => response.json())
        .then(json => {
            this.patients = json
            this.foundPatient = this.patients[0]
        });
    },
    assignIndex(){
      this.recordIndex = this.patientRecords.length - 1
    },
    cancelSubmit(e){
      e.preventDefault();
      this.adding=false;
    },
    submitRecord(){
      let d = new Date();
      this.newRecord = {
        fecha: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`,
        // medico: '', MEDICO LOGGEADO
        diagnostico: document.getElementById("diagnosisInput").value,
        examenes_fisicos: document.getElementById("physicalExamsInput").value,
        observaciones: document.getElementById("observationsInput").value
      }
      this.adding=false;
      this.patientRecords.push(this.newRecord)
      this.recordIndex = this.patientRecords.length - 1
    }
  },

  created: function() {
    this.fetchData();
    this.assignIndex();
  }
};
</script>

<style scoped>
#dni-input{
  width: 40vw;
}
img{
  height: 5vh;
}
.lowOpacity{
  opacity: 0.4;
}
#diagnosisDiv, #physicalExamsDiv, #observationsDiv{
  width: 100%;
  min-height: 10vh;
  margin: 2vh 0vw;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 0.5em;
}
#divsContainer{
  overflow: auto;
  height: 65vh;
}
input{
  border: 1px solid black;
  height: 16vh;
  width: 70vw;
}
label{
  font-size: x-large;
}
textarea{
  font-size: medium;
}
</style>
