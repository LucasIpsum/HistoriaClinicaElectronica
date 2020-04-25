<template>
<div id='userbox'>
  <img class="perfil" src="https://i.ibb.co/Tbt3Cgx/doc.png" alt="foto del user">
  <div class="mt-3 ml-2">
    <div class="nombre">{{`${st_userInfo.apellido}, ${st_userInfo.nombre}`}}</div>
    <div class="tipo">{{st_authority}}</div>
  </div>
  
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: 'Userbox',
computed:{
  ...mapState(['st_userInfo', 'st_authority'])
}
}
</script>

<style scoped>
#userbox{
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  background-color: rgb(226, 255, 255);
  padding: 1em 0;
}
.perfil{
  width: 30%;
  margin: 0.2em;
  border-radius: 0.7em ;
  border: 3px #007bff solid;
}
.nombre{
  text-transform: capitalize;
  font-weight: bold;
}
.tipo{
  text-transform: capitalize;
  color: rgb(15, 165, 252);
}
</style>