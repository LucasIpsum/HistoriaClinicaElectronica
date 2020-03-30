<template>
  <div id="navbar">
    <div id="relleno"></div>
    <div id="backbtn" class="btn btn-primary" v-on:click="()=>{$router.go(-1)}">
      <i class="fas fa-undo-alt fa-2x"></i>
    </div>
    <div id="button" class="btn btn-primary" v-on:click="show">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <div id="back" v-on:click="hide"></div>
    <div id="slide" class="d-flex flex-column align-items-start">
      <div class="row m-0 p-0">
        <i class="blue fas fa-users fa-2x col-3"></i>
        <router-link to="/" class="menu-item col-9">Mis Pacientes</router-link>
      </div>
      <div class="row m-0 p-0">
        <i class="blue fas fa-sign-out-alt fa-2x col-3"></i>
        <button v-on:click="logout" class="menu-item col-9">Salir</button>
      </div> 
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
      fetch('/api/logout',{
        method: 'POST',
      }).then(res => {
        if(res.ok){
          window.localStorage.setItem('user','false');
          this.st_logUser();
          this.$router.push('/log').catch(err => {});
        }else{
          return Promise.reject(res)
        }
      }).catch(error => console.log(error))
      
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
#backbtn{
  position: fixed;
  top: 20px;
  right: 1em;
}
#relleno{
  width: 100vw;
  height: 90px;
}
#button{
  position: fixed;
  top: 20px;
  left:1em;
}
.fas{
  width: 100%;
  color: white;
}
#back{
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  opacity: 0.5;
  z-index: 100;
}
#back.active{
  display: block;
}
#slide{
  position: absolute;
  top: 0;
  width: 70vw;
  height: 100vh;
  background-color: white;
  box-shadow: 10px 2px 15px -6px rgba(0,0,0,0.75);
  margin-left: -100vw !important;
  padding-top: 5em !important;
  transition: all 0.3s;
  z-index: 150;
}
#slide.active{
  margin-left: 0 !important;
}
.menu-item{
  text-decoration: none;
  border: none;
  background-color: white;
  font-size: 1.5em;
  margin-bottom: 0.5em;
}
.row {
  width: 100%;
}
.blue {
  color: rgb(48, 130, 253);
}
</style>