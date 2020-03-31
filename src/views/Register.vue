<template>
  <div id="register" class="container bg-greyl">
     <div id="backbtn" class="btn btn-primary" v-on:click="()=>{$router.go(-1)}">
      <i class="fas fa-angle-double-left fa-2x"></i>
    </div>
            <form id="formulario" v-on:submit.prevent="register">
              <h2 id="title">Complete sus datos:</h2>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name"
                    value required autofocus placeholder="Nombre"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="last_name" type="text" class="form-control" name="last_name"
                    value required autofocus placeholder="Apellido"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="matrícula" type="text" class="form-control" name="matrícula"
                    value required autofocus placeholder="Matricula"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <input id="teléfono" type="number" class="form-control" name="teléfono"
                    value required autofocus placeholder="Telefono"/>
                </div>
              </div>
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
                  <button type="submit" class="btn btn-primary">Registrarse</button>
                </div>
              </div>
            </form>
            <p id="link">Ya tienes una cuenta?<router-link to="/log">Inicia Sesion</router-link></p>
          </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        matrícula: "",
        telephone: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    ...mapMutations(['st_logUser']),
    register(){
      window.localStorage.setItem('user','true');
        this.st_logUser();
        this.$router.push('/').catch(err => {});
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
  #register{
    height: 100vh;
  }
  .bg-greyl{
    background-color: rgb(216, 216, 216);
  }
  #formulario{
    padding: 0 2em;
    padding-top: 15vh;
  }
  #title{
    margin-bottom: 2rem;
  }
  #link{
    margin-top: 2em;
  }
  .fas{
    font-size: 1.5em;
  }
</style>