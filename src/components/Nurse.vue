<template>
  <div>
    <div>Fecha de Ingreso: {{registro.ingreso}}</div>
    <div class="row">
      <div class="caja p-0 m-0 col-2">FR</div>
      <div class="col-4 p-0 m-0 content">{{registro.f_respiratoria}} ppm</div>
      <div class="caja p-0 m-0 col-2">FC</div>
      <div class="col-4 p-0 m-0 content">{{registro.f_cardiaca}} ppm</div>
    </div>
    <div class="row">
      <div class="caja p-0 m-0 col-2">TA</div>
      <div class="col-4 p-0 m-0 content">{{registro.t_arterial}}</div>
      <div class="caja p-0 m-0 col-2">T</div>
      <div class="col-4 p-0 m-0 content">{{registro.temperatura}}°C</div>
    </div>
    <div>
      <div class="title">Observaciones</div>
      <div class="card">{{registro.observaciones}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nurse',
    props: ['registro']
  }
</script>

<style scoped>
.row{
  width: 90%;
  margin: 1em auto;

}
.caja {
  background-color: rgb(0, 140, 255);
  font-size: 1.5em;
}
.content{
  font-size: 1.2em;
}
.title{
  background-color: rgb(0, 140, 255);
  color: white;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.3em;
  font-size: 1.7em;
}
.card{
  font-size: 1.3em;
}

</style>