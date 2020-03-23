<template>
  <div class="home">
    <Navbar/>
    <h1>This is Home</h1>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar
  }
  
}
</script>

<style scoped>

</style>
