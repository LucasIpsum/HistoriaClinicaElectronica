<template>
<div>
  <router-link :to="url">
  <div id="patient" class="container">
    <div class="text">{{`${paciente.apellido}, ${paciente.nombre}`}}</div>
    <p class="text">dni: {{paciente.documento}}</p>
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
  background-color: rgb(41, 195, 223);
  margin: 1em 1em;
  padding: 0 1em;
  border-radius: 0.5em;
  box-shadow: 0px 8px 19px -5px rgba(0,0,0,0.52);
}
.text{
  margin: 0 auto;
  font-size: 1.7em;
}
</style>