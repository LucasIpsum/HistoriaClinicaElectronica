<template>
  <div id="register">
    <div class="title">Registrate como: </div>
    <router-link to="/register/doctor" class="btn btn-blue">Agregar paciente</router-link>
    <router-link to="/register/paciente" class="btn btn-blue">Agregar paciente</router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#register{
  background-color: rgb(216, 216, 216);
  height: 100vh;
  padding-top: 25vh;
}
.btn-blue{
  background-color: rgb(59, 151, 255);
  color: white;
  padding: 1em 1.3em;
  font-size: 1.2em;
  margin: 1em 0;
}
.title{
  font-size: 2em;
  margin-bottom: 1em;
}
</style>