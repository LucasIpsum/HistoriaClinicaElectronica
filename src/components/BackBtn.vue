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
}
</style>