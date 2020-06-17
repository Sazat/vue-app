<template>
  <div class="loginComponent">
    <h1>Connexion</h1>
   
    <form>
        <input type="text" name="username" v-model="input.username" ><br>
        <input type="text" name="password" v-model="input.password" ><br>
        <button type="button" v-on:click="login()">Connexion</button>
    </form>

  
  </div>
  
</template>

<script>
export default {
        name: 'login',    
        mounted() {
    if(this.$parent.authenticated){
      this.$router.replace({ name: 'userAccount'})
    }
    // else {
    //   this.$router.replace({ name: 'login'})
    // }
    
  },
        
        data() {
            return {
                input: {
                    username:"",
                    password:""
                }
            }
        },           

            methods: {

                login() {
                  
                    if(this.input.username != "" && this.input.password != "") {
                        
                        this.$parent.users.forEach(user => {
                            if(this.input.username == user.username && this.input.password == user.password)  {
                                this.$emit("authenticated", true)
                                this.$emit("username", user.username)
                                this.$router.replace({name: "userAccount", params: { "username": user.username}})
                            }
                            else {
                            
                                console.log("mauvais mdp ou username")
                          
                            }
                        });
                        
                    } else {
                        
                        console.log("erreur sur formulaire")
                        //message erreur infos non-complétées
                    }
                },
             }
       


}
</script>