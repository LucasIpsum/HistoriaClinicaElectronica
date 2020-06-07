<template>
    <div>
        <Navbar/>
        <BackBtn />
        <div class="miPerfil">Perfil del paciente</div>
        {{this.st_HCActual.fechaHora}}
        {{this.st_HCActual.motivoConsulta}}
        {{this.st_HCActual.diagnostico}}
        {{this.st_HCActual.temperatura}}
        {{this.st_HCActual.sintomas}}
        {{this.st_HCActual.tratamiento}}
        {{this.st_HCActual.observaciones}}
        {{this.st_HCActual.medicamentos}}
        {{this.st_HCActual.hemograma}}
        {{this.st_HCActual.eritrosedimentacion}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Navbar from '@/components/Navbar.vue';
import BackBtn from '@/components/BackBtn.vue';

export default {
    components: { Navbar, BackBtn },

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