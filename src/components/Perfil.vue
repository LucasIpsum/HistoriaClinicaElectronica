<template v-if="st_misPacientes.length > 0">
  <div>
        <button type="button" data-toggle="collapse" data-target="#datos" aria-expanded="false" aria-controls="datos">
          <div>Perfil del Paciente</div>
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="collapse show" id="datos">
            <div>
                <div class="cardd">
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
        <button type="button" data-toggle="collapse" data-target="#anamnesis" aria-expanded="false" aria-controls="anamnesis">
          <div>Anamnesis</div>
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="collapse" id="anamnesis">
                <div class="cardd" v-for="(i,index) in paciente.anamnesis" :key="index">
                    <div v-if="((i!=null) && (i!=0))">
                        <b>{{index}}: </b><p>{{i}}</p>
                    </div>
                </div>
        </div>
        <button type="button" data-toggle="collapse" data-target="#CE" aria-expanded="false" aria-controls="CE">
          <div>Contactos de Emergencia</div>
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="collapse"  id="CE">
            <div class="cardd contact" v-for="(i,index) in paciente.contactosEmergencia" :key="index">
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
}
</script>

<style scoped>
  .cardd div{
    display:flex;
    width: 90%;
    margin: 0 auto;
    padding: 0.5em;
    justify-content: space-between;
    flex-direction: row;
    border-bottom:1px solid #007bff;
  }
  .cardd p{
    margin:0;
  }
  button{
    position: relative;
    width: 90%;
    background-color: #c4e2ff;
    border: 0;
    border-radius: 0.2em;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #007bff;
    font-size: 1em;
    margin: 0.2em;
    padding: 0.5em 0;
  }
  button i{
    position: absolute;
    font-size: 1.5em;
    top: 0.2em;
    right: 0.5em;
  }
  b{
    color: #007bff;
  }
  .contact{
    border: 2px #007bff solid;
    width: 90%;
    margin: 0 auto;
    border-radius: 0.5em;
    margin-bottom: 0.3em;
  }


</style>