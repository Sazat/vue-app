<template>
  <div class="userVue">
    <!-- <h1>Bienvenue dans votre espace privé {{$route.params.username}}</h1> -->
    <h1>Bienvenue dans votre espace privé {{username}}</h1>
  </div>
  
</template>

<script>

export default {
    name: 'userAccount',
    mounted: function(){
     // this.username=this.$route.params.username
    this.username=sessionStorage.getItem("username")
    //  sessionStorage.setItem("username",this.username)
    },
    data: function() {
      var data = {
        username:""
      
      }
      return data
    }
}
</script>