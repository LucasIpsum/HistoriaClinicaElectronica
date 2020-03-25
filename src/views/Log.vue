<template>
<div id="login" class="container bg-greyl">
          <img src="@/assets/logo.png">
          
            <form id="formulario" v-on:submit="login">
              <h2 id="title">Inicia Sesion</h2>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email"
                    value required autofocus placeholder="Email"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password"
                    value required autofocus placeholder="Contraseña"/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Iniciar sesion</button>
                </div>
              </div>
            </form>
            <p id="link">No tienes una cuenta?<router-link to="/register">Registrate</router-link></p>
          
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

  export default {
    name: 'Log',
    methods: {
      ...mapMutations(['st_logUser']),
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
            this.$router.push('/').catch(err => {});
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
  width: 50vw;
  margin: 0 auto;
}
#login{
    height: 100vh;
  }
  .bg-greyl{
    background-color: rgb(216, 216, 216);
  }
  #formulario{
    padding: 0 2em;
    padding-top: 5vh;
  }
  #title{
    margin-bottom: 2rem;
  }
  #link{
    margin-top: 2em;
  }
</style>