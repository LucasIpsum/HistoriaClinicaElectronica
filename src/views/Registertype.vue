<template>
  <div id="register">
    <BackBtn class="white"/>
    <div class="title">Registrate como: </div>
    <div id="option">
      <router-link to="/register/personal" class="option">PERSONAL DE SALUD</router-link>
      <router-link to="/register/analyst" class="option">ANALISTA DE DATOS</router-link>
    </div>

  </div>
</template>

<script>
  import BackBtn from '@/components/BackBtn.vue'
  export default {
    components: { BackBtn }
  }
</script>

<style scoped>
#register{
  background-color: white;
  height: 100vh;
  padding-top: 25vh;
}
.title{
  font-size: 2em;
  margin-bottom: 1em;
  color: rgb(13, 123, 202);
}
.option{
  display: inline-block;
  background: rgb(13, 123, 202);
  border-radius: 1em;
  border: 2px rgb(13, 123, 202) solid;
  cursor: pointer;
  color: white;
  width: 90%;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  margin: 1em 0;
}
@media screen and (min-width: 1000px){
  #option{
    display: flex;
    justify-content: center;
  }
  #option>*{
    width: 20%;
    margin: 1em 2em;
  }
}
</style>