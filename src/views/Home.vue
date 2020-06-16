<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Sarah Z. Vue.js App"/>
     
     <!-- <div id="corps">
      <h2>Connectez-vous à votre espace personnel</h2>
      <p> <router-link to="/login">Clic !</router-link></p>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
 
}
</script>
