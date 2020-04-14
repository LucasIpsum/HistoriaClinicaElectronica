<template>
<div>
  <router-link :to="url">
  <div id="patient" class="d-flex align-items-center justify-content-between">
    <div id="perfil" class="mr-1">
      <img src="https://i.ibb.co/7r7FCQf/user-male-icon.png" alt="user-profile">
    </div>
    <div id="info">
      <div class="text">{{`${paciente.apellido},${paciente.nombre}`}}</div>
      <p class="sub-text">DNI: {{paciente.documento}}</p>
    </div>
    <div>
      <i class="fas fa-arrow-circle-right"></i>
    </div>
  </div>
  </router-link>
</div>
  
</template>

<script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Patientbox',
    props: ['paciente'],
    methods: {
    },
    computed: {
      // ...mapState(['st_misPacientes']),
      url(){
        return '/paciente/' + this.paciente.id;
      }
    },
  }
</script>

<style scoped>
#patient{
  width: 100%;
  height: 80px;
  padding: 0 1em;
  /* box-shadow: 0px 2px 5px 1px rgba(8, 127, 238, 0.52); */
  border-top: 3px solid rgba(8, 127, 238, 0.30);
  border-bottom: 3px solid rgba(8, 127, 238, 0.30);
}
.text{
  margin: 0 auto;
  font-size: 1.7em;
}
#perfil{
  height: 60px;
}
#perfil img{
  height: 100%;
  border: 1px #007bff solid;
  border-radius: 0.2em;
}
.sub-text{
  margin-bottom: 0;
}
</style>