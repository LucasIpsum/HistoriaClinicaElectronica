<template>
  <div id="register">
    <BackBtn />
    <div class="title">Registrate como: </div>
    <router-link to="/register/personal" class="btn btn-blue w-70">PERSONAL DE SALUD</router-link>
    <br>
    <router-link to="/register/analyst" class="btn btn-blue w-70">ANALISTA DE DATOS</router-link>
  </div>
</template>

<script>
  import BackBtn from '@/components/BackBtn.vue'
  export default {
    components: { BackBtn }
  }
</script>

<style scoped>
#backbtn{
  position: fixed;
  top: 20px;
  right: 1em;
}
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
.fas{
  font-size: 1.5em;
}
.w-70{
  width: 70%;
}
</style>