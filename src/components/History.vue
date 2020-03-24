<template>
  <div id="history">
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseAnanmesis" aria-expanded="false" aria-controls="collapseAnanmesis">Ananmesis</button>
    <div class="collapse box" id="collapseAnanmesis">
      <table class="table">
          <tbody>
            <tr v-for="(v,i) in anam" :key="i"><td>{{i}}</td><td>{{v}}</td></tr>
          </tbody>
        </table>
    </div>
    <router-link to="/record" class="btn btn-large">Registros</router-link>
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseContact" aria-expanded="false" aria-controls="collapseContact">Contactos de Emergencia</button>
    <div class="collapse box" id="collapseContact">
      <div v-for="(c,k) in contacts" :key="k">
        <table class="table">
          <thead>
            <tr>
              <th colspan="2">{{`${c.apellido}, ${c.nombre}`}}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Relacion</td><td>{{c.relacion}}</td> </tr>
            <tr><td>Email</td><td>{{c.email}}</td> </tr>
            <tr><td>Tel1</td><td>{{c.telefono}}</td> </tr>
            <tr><td>Tel2</td><td>{{c.telefono2}}</td> </tr>
            <tr><td>Direccion</td><td>{{c.direccion}}</td> </tr>
          </tbody>
        </table>
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
  width: 100%;
  margin: 0 auto;
}
table{
  width: 90%;
  margin: 0 auto;
  border: 2px solid rgb(29, 143, 219);
}
</style>