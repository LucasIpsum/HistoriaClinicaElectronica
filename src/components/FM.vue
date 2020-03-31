<template>
  <div>
      <div class="cardd" v-for="(i,index) in registros.registro" :key="index">
          <div>
            <b>{{index}}: </b><p>{{i}}</p>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FM',
  data() {
    return {
      registros: [],
    };
  },
  methods: {
       async fetchDataDoc(){
        await fetch('https://raw.githubusercontent.com/21diego/database/master/history.json')
        .then(response => response.json())
        .then(json => {
          json.forEach(r => {
            if(r.id == "14"){
              this.registros = r;
            }
          })
        })
        .catch(error => console.log(error))
      }
  },
    created: function() {
        this.fetchDataDoc();
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