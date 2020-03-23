<template>
  <div id="navbar">
    <router-link to="/">Home</router-link>   |
    <button v-on:click="logout">DESLOGEAR</button>  
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

  export default {
    name: 'Navbar',
    methods: {
    ...mapMutations(['st_logUser']),
    logout(){
      window.localStorage.setItem('user','false');
        this.st_logUser();
        this.$router.push('/log').catch(err => {});
    }
  }
  }
</script>

<style scoped>

</style>