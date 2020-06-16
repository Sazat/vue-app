<template>
  <div class="login">
    <h1>Connexion</h1>
   
  <form>
    <input type="text" id="username" v-model="input.username" ><br>
    <input type="text" id="password" v-model="input.password" ><br>
    <button type="button" v-on:click="login()">Connexion</button>
  </form>
  </div>
  
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
        export default {
                name: 'Login',
                
                data: function() {

                    var data = {
                        msg:"hello",
                        authentification: false,
                        compteur: 0,
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
                   // console.log(this.msg)
                   console.log(this.input.username)
                    if(this.input.username != "" && this.input.password != "") {
                        this.users.forEach(user => {
                            if(this.input.username == user.username && this.input.password == user.password)  {
                           
                                console.log("ok")
                                this.authentification= true
                                this.compteur++
                                
                            }
                            else {
                                console.log("mauvais mdp ou username")
                            }
                        });
                        
                    } else {
                        console.log("erreur sur formulaire")
                        //message erreur infos non-complétées
                    }

                    if(this.authentification) {
                        console.log("yahoo")
                        console.log("Compteur :" + this.compteur)
                    }
                }
             }
       
        }

        
</script>