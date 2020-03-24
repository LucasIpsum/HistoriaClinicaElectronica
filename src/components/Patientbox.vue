<template>
<div>
  <router-link :to="url">
  <div id="patient" class="container">
    <h2 >{{this.nombre}}</h2>
    <p id="dni">dni: {{this.dni}}</p>
  </div>
  </router-link>
</div>
  
</template>

<script>
  export default {
    name: 'Patientbox',
    props: ['nombre','dni','id'],
    computed: {
      url(){
        return '/paciente/' + this.id;
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
#dni{
  margin: 0 auto;
  font-size: 1.7em;
}
</style>