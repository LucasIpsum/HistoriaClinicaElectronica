<template>
<div>
  <router-link :to="url">
  <div id="patient" class="container btn btn-primary pt-2 pb-2">
    <div class="text">{{`${paciente.apellido},${paciente.nombre}`}}</div>
    <p class="text">DNI: {{paciente.documento}}</p>
  </div>
  </router-link>
</div>
  
</template>

<script>
  export default {
    name: 'Patientbox',
    props: ['paciente'],
    computed: {
      url(){
        return '/paciente/' + this.paciente.id;
      }
    }
  }
</script>

<style scoped>

#patient{
  width: 90vw;
  margin: 1em 1em;
  padding: 0 1em;
  box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.52);
}
.text{
  margin: 0 auto;
  font-size: 1.7em;
}
</style>