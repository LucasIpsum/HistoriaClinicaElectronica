<template>
  <div id="register">
    <BackBtn class="white"/>
    <div class="title">Registrate como: </div>
    <div id="option">
      <router-link to="/register/personal" class="option">
        <img class="icono" src="@/assets/salud.png" alt="simbolo de salud">
        PERSONAL DE SALUD
      </router-link>
      <router-link to="/register/analyst" class="option">
        <img class="icono" src="@/assets/data.png" alt="simbolo de salud">
        ANALISTA DE DATOS
      </router-link>
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
.icono{
  display: none;
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
  .icono{
    display: block;
    width: 100%;
    background-color: white;
    border-radius: 1em;
  }
}
</style>