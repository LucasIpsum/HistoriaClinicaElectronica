<template v-if="st_misPacientes.length > 0">
  <div>
        <button type="button" data-toggle="collapse" data-target="#datos" aria-expanded="false" aria-controls="datos">
            DATOS DEL PACIENTE
        </button>
        <div class="collapse show" id="datos">
            <div>
                <div class="cardd">
                    <div>
                         <h3>{{paciente.nombre}} {{paciente.apellido}} ({{paciente.id}})</h3>
                    </div>
                    <div>
                        <b>Documento: </b><p>{{paciente.documento}}</p>
                    </div>
                    <div>
                        <b>Sexo: </b><p>{{paciente.sexo}}</p>
                    </div>
                    <div>
                        <b>Direccion: </b><p>{{paciente.direccion}}</p>
                    </div>
                    <div>
                        <b>Telefono: </b><p>{{paciente.telefono}}</p>
                    </div>
                    <div>
                        <b>Email: </b><p>{{paciente.email}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <button type="button" data-toggle="collapse" data-target="#anamnesis" aria-expanded="false" aria-controls="anamnesis">Anamnesis</button>
        <div class="collapse" id="anamnesis">
                <div class="cardd" v-for="(i,index) in paciente.anamnesis" :key="index">
                    <div v-if="((i!=null) && (i!=0))">
                        <b>{{index}}: </b><p>{{i}}</p>
                    </div>
                </div>
        </div>
        <button type="button" data-toggle="collapse" data-target="#CE" aria-expanded="false" aria-controls="CE">Contactos de Emergencia</button>
        <div class="collapse"  id="CE">
            <div class="cardd" style="border:2px solid black" v-for="(i,index) in paciente.contactosEmergencia" :key="index">
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
  props: ['paciente'],
  data(){
    return {
    }
  },
  mounted(){
    console.log(this.paciente)
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