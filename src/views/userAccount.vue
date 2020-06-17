<template>
  <div class="userVue">
    <!-- <h1>Bienvenue dans votre espace privé {{$route.params.username}}</h1> -->
    <h1>Bienvenue dans votre espace privé {{this.$parent.username}} </h1>
  </div>
  
</template>

<script>

export default {
    name: 'userAccount',
     mounted: function() {
       if(!this.$parent.authenticated) {
            this.$router.replace({name: "Login"})
  }},
      data() {
      return {
       
      }
    },
 
}
</script>