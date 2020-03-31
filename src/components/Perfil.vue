<template>
  <div>
      <h3 v-if="patients.estado=='COVID-19 confirmado'" style="background-color:red">Estado: {{patients.estado}}</h3>
      <h3 v-else style="background-color:#2BFF39">Estado: {{patients.estado}}</h3>
        <button type="button" data-toggle="collapse" data-target="#datos" aria-expanded="false" aria-controls="datos">
            DATOS DEL PACIENTE
        </button>
        <div class="collapse show" id="datos">
            <div>
                <div class="cardd">
                    <div>
                         <h3>{{patients.nombre}} {{patients.apellido}} ({{patients.id}})</h3>
                    </div>
                    <div>
                        <b>Documento: </b><p>{{patients.documento}}</p>
                    </div>
                    <div>
                        <b>Sexo: </b><p>{{patients.sexo}}</p>
                    </div>
                    <div>
                        <b>Direccion: </b><p>{{patients.direccion}}</p>
                    </div>
                    <div>
                        <b>Telefono: </b><p>{{patients.telefono}}</p>
                    </div>
                    <div>
                        <b>Email: </b><p>{{patients.email}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <button type="button" data-toggle="collapse" data-target="#anamnesis" aria-expanded="false" aria-controls="anamnesis">Anamnesis</button>
        <div class="collapse" id="anamnesis">
                <div class="cardd" v-for="(i,index) in patients.anamnesis" :key="index">
                    <div v-if="((i!=null) && (i!=0))">
                        <b>{{index}}: </b><p>{{i}}</p>
                    </div>
                </div>
        </div>
        <button type="button" data-toggle="collapse" data-target="#CE" aria-expanded="false" aria-controls="CE">Contactos de Emergencia</button>
        <div class="collapse"  id="CE">
            <div class="cardd" style="border:2px solid black" v-for="(i,index) in patients.contactosEmergencia" :key="index">
                <div v-for="(ind,inde) in i" :key="inde">
                    <b>{{inde}}: </b><p>{{ind}}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Perfil',
  data() {
    return {
      patients: [],
    };
  },
  methods: {
        async fetchDataDoc(){
        await fetch('https://raw.githubusercontent.com/21diego/database/master/pacientes.json')
        .then(response => response.json())
        .then(json => {
          json.forEach(r => {
            if(r.id == 10){
              this.patients = r;
            }
          })
        })
        .catch(error => console.log(error))
      }
  },
    created: function() {
        this.fetchDataDoc();
    }
}
</script>

<style scoped>
    .cardd div{
         background-color: rgb(226, 255, 255);
        display:flex;
        justify-content: center;
        flex-direction: row;
        border:1px solid #007bff;
    }
    button{
        width: 100%;
         background-color: #007bff;
    }
</style>