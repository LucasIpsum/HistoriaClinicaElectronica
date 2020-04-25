<template>
<div id="login">
  <img src="@/assets/logo.png">
  
    <form id="formulario" v-on:submit="login">
      <div class="form-group d-flex flex-nowrap">
        <label for="email"><i class="fas fa-envelope"></i></label>
        <input id="email" type="text" class="form-control" name="email" value="" required autofocus placeholder="Email"/>
      </div>
      <div class="form-group d-flex flex-nowrap">
        <label for="password"><i class="fas fa-lock"></i></label>
        <input id="password" type="password" class="form-control" name="password" value="" required autofocus placeholder="Contraseña"/>
      </div>
      <button type="submit" class="btn-sesion">Iniciar sesion</button>
      <router-link to="/register"><button type="submit" class="btn-reg">Registrate</button></router-link>
    </form>
    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';

  export default {
    name: 'Log',
    methods: {
      ...mapMutations(['st_logUser']),
      ...mapActions(['st_loadUser']),
      login(event){
        event.preventDefault()
        let form = event.target
        let formData = new FormData(form)
        fetch("/api/login",{
          method: 'POST',
          body:formData
        }).then(res =>{
          if(res.ok){
            console.log(res)
            window.localStorage.setItem('user','true');
            this.st_logUser();
            this.st_loadUser();
            this.$router.push('/dashboard').catch(err => {});
          }else{
            return Promise.reject(res)
          }
        }).catch(error => {
          console.log(error)
        })
        
      }
    },
  }
</script>

<style scoped>
img {
  padding-top: 5vh;
  width: 200px;
  margin: 0 auto;
}
#login{
  height: 100vh;
  background-color: rgb(13, 123, 202);
}
#formulario{
  padding: 0 2em;
  padding-top: 5vh;
}
#formulario label{
  margin: 0;
}
#formulario .fas{
  color: white;
  font-size: 1.7em;
  border: 1px white solid;
  padding: 0.2em;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-right: 0.4em;
}
.fa-envelope{
  padding-top: 0.3em!important;
}
#formulario input{
  background: none;
  border: none;
  border-bottom: 3px solid white;
  color: white;
  font-size: 1.2em;
}
#formulario input::placeholder{
  color: white;
}
.btn-sesion, .btn-reg{
  border-radius: 1em;
  background: white;
  border: 2px white solid;
  cursor: pointer;
  color: rgb(13, 123, 202);
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.2em 0;
  margin-bottom: 1em;
}
.btn-reg{
  background: rgb(13, 123, 202);
  color: white;
}
</style>