<template>
  <div id="app" v-on:bonjour="direBonjour=true">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Votre Espace Sécurisé</router-link> |
      <router-link to="/login" v-if="authenticated"><button v-on:click="logout()">Déconnexion</button></router-link>
    </div>
    
    <router-view @authenticated="setAuthenticated" @username="setUsername"/>
  </div>
</template>

<script>
export default {
  name:'App',
  data() {
    return {
      direBonjour:false,
      authenticated:false,
      username:"",
      users: [
                    {
                        username: "zaza",
                        password: "123zaza"
                    },
                    {
                        username: "toto",
                        password: "toto76Nantes"
                    },
                    ],
    }
  },

  methods: {
    setUsername(status) {
      this.username=status
    },
    setAuthenticated(status) {
      this.authenticated=status
    },
    logout(){
      this.authenticated=false
      this.username=""
      this.$router.replace({ name: 'login'})
    }
  }
}
</script>

<style>

@media (max-width: 640px) {
	* {
		box-sizing: border-box;
    }
  
}
    
@media (max-device-width:768px) and (orientation: landscape) {
  html {
   -webkit-text-size-adjust: 100%;
   -ms-text-size-adjust: 100%;
  }
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 10px auto;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

router-link {
  margin: 5px
}
</style>
