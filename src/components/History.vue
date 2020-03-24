<template>
  <div id="history">
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseAnanmesis" aria-expanded="false" aria-controls="collapseAnanmesis">Ananmesis</button>
    <div class="collapse box" id="collapseAnanmesis">  
      {{anam}}
    </div>
    <button class="btn btn-large" type="button">Registros</button>
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseContact" aria-expanded="false" aria-controls="collapseContact">Contactos de Emergencia</button>
    <div class="collapse box" id="collapseContact">
      <div class="row" v-for="(c,k) in contacts" :key="k">
        <div class="col-5">{{k}}</div>
        <div class="col-7">{{c}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'History',
    props: ['anam','contacts']
  }
</script>

<style scoped>
.btn-large{
  width: 90%;
  background-color: rgb(29, 143, 219);
  margin: 0.5em 0;
}
.box{
  width: 90%;
  margin: 0 auto;
}
</style>