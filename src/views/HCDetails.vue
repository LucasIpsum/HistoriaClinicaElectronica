<template>
    <div>
        <Navbar/>
        <div class="miPerfil">Perfil del paciente</div>
        {{this.st_HCActual.fechaHora}}
        {{this.st_HCActual.motivoConsulta}}
        {{this.st_HCActual.diagnostico}}
        {{this.st_HCActual.temperatura}}
        {{this.st_HCActual.sintomas}}
        {{this.st_HCActual.tratamiento}}
        {{this.st_HCActual.observaciones}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default {
    components: { Navbar },

    computed: {
  ...mapState(['st_HCActual']),
    },
}
</script>

<style scoped>
    .miPerfil{
    background-color: #007bff;
    color:white;
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;
  }
</style>