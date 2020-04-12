<template>
    <div>
        <Navbar/>
        <div class="miPerfil">Perfil del paciente</div>
        {{this.st_registroActual.ingreso}}
        {{this.st_registroActual.observaciones}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default {
    components: { Navbar },

    computed: {
  ...mapState(['st_registroActual']),
    },
    created(){
        console.log(st_allPacientes)
    }
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