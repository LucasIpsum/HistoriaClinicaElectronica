<template>
    <div id="general">
        <Navbar />
        <div>
            <h2>Registro de pacientes</h2>
        </div>
        <button type="button" data-toggle="collapse" data-target="#personales" aria-expanded="false" aria-controls="personales">
            Personales
        </button>
        <div class="collapse" id="personales">
            <div>
                <div  v-for="(p,index) in paciente" :key="index"> 
                    <label class="d-flex flex-column">{{ index }} <input :type="p" :id="index"></label> 
                </div>
            </div>
        </div>
        
       
        <button type="button" data-toggle="collapse" data-target="#anamnesis" aria-expanded="false" aria-controls="anamnesis">
            Anamnesis
        </button>
        <div class="texto collapse" id="anamnesis">
            <div >
                <div  v-for="(p,index) in Anamnesis" :key="index"> 
                    <label class="d-flex flex-column">{{ index }} <input :type="p" :id="index"></label> 
                </div>
            </div>
        </div>
        <button v-on:click="newContacto" type="button">
            Agregar Contacto De Emergencia
        </button>
        <div>
            <div>
                <div  v-for="(p,index) in contactoDeEmergencia.contactos" :key="index">
                    <div class="contem">
                        <div v-for="(i,ind) in p" :key="ind" >
                            <label class="d-flex flex-column">{{ ind }} <input :type="i" :id="ind+index"></label> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="cargar" v-on:click="cargar">CARGAR</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "RegisterPatients",
  components: {
    Navbar
  },
  data() {
    return {
      cont:0,
      patients: [],
      paciente:{
                Nombre: "text",
                Apellido: "text",
                Email: "text",
                Documento:"number",
                Fecha_de_nacimiento:"date",
                Direccion:"text",
                Sexo:"text"
      },
      contactoDeEmergencia:{
                contactos:[],
      },
      Anamnesis:{
                Viaje:"text",
                Fecha_viaje:"text",
                Destino_Viaje:"text",
                Embarazo:"text",
                Semanas_gestacion:"text",
                Embarazos_previos:"text",
                Antecedentes_Personales:"text",
                Antecedentes_Familiares:"text",
                Medicacion_Regular:"text",
                Trabajo:"text", 
                Convivientes:"text",
                Observaciones:"text",
      },
    //   anamnesisInput:{

    //   }
    };
  },
    methods: {
    async fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => (this.patients = json));
    },
        cargar: function(){
            let check=0;
            for (let i in this.paciente){
                for (let j in this.Anamnesis){
                    if ((document.getElementById(i).value=="") || (document.getElementById(j).value=="")){
                        check++;
                    }
                } 
            }
            if(check==0){
                for (let i in this.paciente){
                      this.paciente[i]=document.getElementById(i).value
                    //   console.log(this.paciente[i])
                }
                for (let i in this.contactoDeEmergencia.contactos){
                    for (let j in this.contactoDeEmergencia.contactos[i]){
                        this.contactoDeEmergencia.contactos[i][j]=document.getElementById(j+i).value
                        // console.log(this.contactoDeEmergencia.contactos)
                    }
                }
                for (let i in this.Anamnesis){
                      this.Anamnesis[i]=document.getElementById(i).value
                    //   console.log(this.paciente[i])
                }
                location.reload();
            }
            else {
                    alert ("llene los campos obligatorios")
            }   
    },
        newContacto: function(){
            this.contactoDeEmergencia.contactos.push(
                {
                Nombre:"text",
                Apellidoo:"text",
                Telefono:"text",
                Telefono_2:"text",
                Email:"text",
                Relacion:"text",
                Direccion:"text"}
                )

            this.cont++
        },
    },
    created: function() {
        this.fetchData();
    }
}

</script>

<style scoped>
    .contem{
        margin:1vh;
        border:solid;
        border-color: rgb(117,170,219)
    }
    .cargar{
        height: 6vh;
        width: 40vw;
    }
    #general{
        width: 90vw;
        height: 90vh;
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around; */
        overflow: scroll;
    }
    button{
        width:60vw;
        height: 8vh;
        font-size: 2.5vh;
    }
</style>