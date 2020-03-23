<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Registrate</div>
          <div class="card-body">
            <form>
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
                  <button type="submit" v-on:click="register" class="btn btn-primary">Registrarse</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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

</style>