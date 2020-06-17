<template>
  <div class="userVue">
    <!-- <h1>Bienvenue dans votre espace privé {{$route.params.username}}</h1> -->
    <h1>Bienvenue dans votre espace privé {{this.username}} </h1>
  </div>
  
</template>

<script>

export default {
    name: 'userAccount',
     mounted() {
       this.username=sessionStorage.getItem("name")
    console.log(sessionStorage.getItem("auth"))
    console.log(sessionStorage.getItem("name"))
  },
      data() {
      return {
        authenticated:false,
        username:"",
      }
    },
    methods: {
      setAuthenticated(status) {
      this.authenticated=status
    },
    setUsername(status) {
      this.username=status
    },
    }
}
</script>