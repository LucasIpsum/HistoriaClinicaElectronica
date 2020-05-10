<template>
  <div>
<!--    <transition name="slide-fade">-->
      <div id="backappNav" v-if="noUser"></div>
      <div id="backapp" v-else></div>
      <div id="app">
          <router-view/>
      </div>

<!--    </transition>-->
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'App',
    data(){
      return{
          noUser: false
      }
    },
  mounted(){
    if(window.localStorage.getItem('user') === 'true'){
        this.noUser = true;
      this.st_logUser();
      this.$router.push('/dashboard').catch(err => {});
    }
    else{
      window.localStorage.setItem('user','false');
        this.noUser = false;
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

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
    @media screen and (min-width: 1000px){
        #backappNav {
          background-color: #007bff;
          width: 100vw;
          height: 90px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
      #backapp{
        background: linear-gradient(to bottom, rgba(11,97,189,1) 0%, rgba(73,155,234,1) 25%, rgba(73,155,234,1) 50%, rgba(73,155,234,1) 75%, rgba(11,97,189,1) 100%);;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
        #app {
            max-width: 1000px;
            margin: 0 auto;
        }
    }
</style>
