<template>
  <div id="navbar">
    <div id="button" v-on:click="show">
      <img src="https://ps.w.org/wpdevart-vertical-menu/assets/icon-128x128.png?rev=1808074" alt="menu_icon">
    </div>
    <div id="back" v-on:click="hide"></div>
    <div id="slide">
      <router-link to="/">Home</router-link>   |
      <button v-on:click="logout">DESLOGEAR</button> 
    </div>
     
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
    },
    show(){
      let element = document.querySelector('#slide');
      element.classList.toggle('active');
      let back = document.querySelector('#back');
      back.classList.toggle('active');
    },
    hide(){
      let element = document.querySelector('#slide');
      element.classList.toggle('active');
      let back = document.querySelector('#back');
      back.classList.toggle('active');
    }
  }
  }
</script>

<style scoped>
#button{
  position: fixed;
  width: 60px;
  top: 20px;
  left:1em;
}
img{
  width: 100%;
}
#back{
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  opacity: 0.5;
  z-index: 100;
}
#back.active{
  display: block;
}
#slide{
  position: absolute;
  width: 70vw;
  height: 100vh;
  background-color: white;
  box-shadow: 10px 2px 15px -6px rgba(0,0,0,0.75);
  margin-left: -100vw;
  transition: all 0.3s;
  z-index: 150;
}
#slide.active{
  margin-left: 0;
}
</style>