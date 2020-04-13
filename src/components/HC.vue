<template>
  <div>
    <ul>
      <div class="cardd" v-for="(i,index) in registros" :key="index">
            <router-link to="/detalleHC">
            
              <li @click="st_cargarHCActual(i.registro)">{{i.registro.ingreso}}: {{i.registro.observaciones}}</li>
            
            </router-link>
      </div>
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
      registros: []
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
      }).then(json => this.registros= json.sort(this.sortByDate))
      .catch(error => {
        console.log(error)
      })
    },
    sortByDate(a, b){
      return Date.parse(b.registro.ingreso) - Date.parse(a.registro.ingreso);
    }
  },
}
</script>
<style scoped>
      .cardd{
        background-color: rgb(226, 255, 255);
        display:flex;
        justify-content: center;
        flex-direction: row;
        border:1px solid #007bff;
    }
    li{
      cursor: pointer;
    }
</style>