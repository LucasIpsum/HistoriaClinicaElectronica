<template>
  <div>
      <div class="cardd" v-for="(i,index) in historia" :key="index">
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
  name: 'HC',
  data() {
    return {
      historia: {},
    };
  },
  mounted(){
    this.cargarActual()
  },
  methods: {
    cargarActual(){
      this.st_misPacientes.forEach(p => {
        if(p.id == this.$route.params.id){
          p.estado != null ? this.historia = p.estado : null;
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