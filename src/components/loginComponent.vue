<template>
  <div class="loginComponent">
    <h1>Connexion</h1>
   
    <form>
        <input type="text" id="username" v-model="input.username" ><br>
        <input type="text" id="password" v-model="input.password" ><br>
        <button type="button" v-on:click="login()">Connexion</button>
    </form>
  </div>
  
</template>

<script>
export default {
        name: 'loginComponent',
      

        // mounted: function() {
        //     console.log("valeur session : "+ sessionStorage.getItem("authTest"))
        //     console.log("connex" + this.connexion)
        //     this.connexion = sessionStorage.getItem("authTest")
        
        //     console.log("val connexion ap " + this.connexion)

        // },

       
        // watch: {
        

        //     connection() {
        //         if(this.connexion) {
        //             this.auth=this.connexion
        //             return this.auth
        //         }
        //         else {
        //             return this.auth
        //         }
                
        //     },
        // },
            
                data: function() {

                    var data = {

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
                    input: {
                        username: "",
                        password: ""
                    }
                    }
                    return data
                },
            
                

            methods: {

                login() {
                  
                    if(this.input.username != "" && this.input.password != "") {
                        
                        this.users.forEach(user => {
                            if(this.input.username == user.username && this.input.password == user.password)  {
                               
                                this.testRouter()
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
 
                testRouter() {
                    let name = this.input.username
                    sessionStorage.setItem("auth", true)
                  sessionStorage.setItem("username", name)
                    this.$router.push({ name : 'userAccount'
                    //, params: { username: name }
                    })
                
                },
             }
       


}
</script>