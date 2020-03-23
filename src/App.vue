<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'


export default {
  name: 'App',
  mounted(){
    if(window.localStorage.getItem('user') === 'true'){
      this.st_logUser();
      this.$router.push('/').catch(err => {});
    }
    else{
      window.localStorage.setItem('user','false');
      this.$router.push('/log').catch(err => {});
    }
  },
  computed: {
    ...mapState(['st_user'])
  },
  methods: {
    ...mapMutations(['st_logUser'])
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
