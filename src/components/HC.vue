<template>
  <div>
    <ul>
      <li class="cardd" v-for="(registro,index) in registros" :key="index">
        <router-link to="/detalleHC">
          <div @click="st_cargarHCActual(registro)">{{registro.fechaHora}}: {{registro.observaciones}}</div>
        </router-link>
        <i class="fas fa-caret-right"></i>
      </li>
    </ul>
    <router-link :to="'/registerhc/'+paciente.id" class="btn btn-large">+Nueva Historia</router-link>
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
      registros: [],
    };
  },
  created(){
    this.cargarActual()
  },
  methods: {
    ...mapMutations(['st_cargarHCActual']),
    async cargarActual(){
     await fetch(`/api/pacientes/${this.paciente.id}/hc`)
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject(res)
        }
       }).then(json =>{
         this.registros = json.historiasClinicas
          console.log(this.registros)
       }
        )
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