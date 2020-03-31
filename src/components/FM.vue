<template>
  <div>
      <div class="cardd" v-for="(i,index) in registro" :key="index">
          <div>
            <b>{{index}}: </b><p>{{i}}</p>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';

export default {
  name: 'FM',
  data() {
    return {
      registro: [],
    };
  },
  mounted(){
    this.cargarActual()
  },
  methods: {
    cargarActual(){
      this.st_misPacientes.forEach(p => {
        if(p.id == this.$route.params.id){
          p.registro != null ? this.registro = p.registro : null;
        }
      });
    }
  },
  computed: {
    ...mapState(['st_misPacientes']),
  }
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
</style>