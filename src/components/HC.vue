<template>
  <div>
    <ul>
      <li class="cardd" v-for="(i,index) in registro" :key="index">
        <router-link to="/detalleHC">
          <div @click="st_cargarHCActual(i)">{{i.registro.ingreso}}: {{i.registro.observaciones}}</div>
        </router-link>
        <i class="fas fa-caret-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'HC',
  props: ['paciente'],
  data() {
    return {
      registro: []
    };
  },
  created(){
    this.cargarActual()
  },
  methods: {
    ...mapMutations(['st_cargarHCActual']),
    async cargarActual(){
      // await fetch(`/api/pacientes/${this.paciente.id}/hc`)
      await fetch('https://raw.githubusercontent.com/21diego/database/master/history.json')
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(res)
        }
      // }).then(json => this.registros = json.historiasClinicas.sort(this.sortByDate))
      }).then(json => this.registro = json)
      .catch(error => {
        console.log(error)
      })
    },
    sortByDate(a, b){
      return Date.parse(b.fechaHora) - Date.parse(a.fechaHora);
    }
  },
}
</script>
<style scoped>
  .cardd{
    border:1px solid #007bff;
    border-radius: 0.3em;
    margin: 0.3em 0;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }
  ul{
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
  li{
    cursor: pointer;
    list-style: none;
    text-transform: capitalize;
  }
  li i{
    color: #007bff;
    font-size: 1.5em;
  }
</style>