<template>
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <img src="@/assets/logo.png">
          <div class="card-header">Logueate</div>
          <div class="card-body">
            <form>
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
                  <button type="submit" v-on:click="login" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <p>No tienes una cuenta?<router-link to="/register">Registrate</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

  export default {
    name: 'Log',
    methods: {
      ...mapMutations(['st_logUser']),
      login(){
        window.localStorage.setItem('user','true');
        this.st_logUser();
        this.$router.push('/').catch(err => {});
      }
    },
  }
</script>

<style scoped>
img {
  width: 50vw;
  margin: 0 auto;
}
</style>