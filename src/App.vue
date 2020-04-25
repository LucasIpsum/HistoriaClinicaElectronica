<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'


export default {
  name: 'App',
  mounted(){
    if(window.localStorage.getItem('user') === 'true'){
      this.st_logUser();
      this.$router.push('/dashboard').catch(err => {});
    }
    else{
      window.localStorage.setItem('user','false');
      this.$router.push('/').catch(err => {});
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
@import '~bootstrap/dist/css/bootstrap.css';

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
.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .3s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
