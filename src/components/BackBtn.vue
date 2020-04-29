<template>
    <div id="backbtn" v-on:click="()=>{$router.go(-1)}">
      <i class="fas fa-angle-double-left fa-2x"></i>
    </div>
</template>

<script>
    export default {
        name: 'BackBtn'
    }
</script>

<style scoped>
#backbtn{
  position: fixed;
  top: 20px;
  right: 1em;
  z-index: 110;
  color: rgb(48, 130, 253);
    cursor: pointer;
}
@media screen and (min-width: 1000px){
    i {
        display: none;
    }
    #backbtn{
        background-color: #007bff;
        width: 100px;
        height: 2.3em;
        border-radius: 0.3em;
        top: 30px;
        right: 2em;
    }
    #backbtn::after{
        font-size: 1.5em;
        color: white;
        content: "Volver";
    }
}

</style>