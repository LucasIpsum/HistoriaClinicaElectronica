<template>
  <div id="history">
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseAnanmesis" aria-expanded="false" aria-controls="collapseAnanmesis">Ananmesis</button>
    <div class="collapse box" id="collapseAnanmesis">
      
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.   
      
    </div>
    <button class="btn btn-large" type="button">Registros</button>
    <button class="btn btn-large" type="button" data-toggle="collapse" data-target="#collapseContact" aria-expanded="false" aria-controls="collapseContact">Contactos de Emergencia</button>
    <div class="collapse box" id="collapseContact">
      
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.   
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'History'
  }
</script>

<style scoped>
.btn-large{
  width: 90%;
  background-color: rgb(29, 143, 219);
  margin: 0.5em 0;
}
.box{
  width: 90%;
  margin: 0 auto;
}
</style>