<template>
  <div class="loginComponent">
    <h1>Connexion</h1>
   
    <form v-if="!connexion">
        <input type="text" id="username" v-model="input.username" ><br>
        <input type="text" id="password" v-model="input.password" ><br>
        <button type="button" v-on:click="login()">Connexion</button>
    </form>

    <div v-if="connexion">
        <p>Vous êtes déjà connecté !</p>
        <p>Hop ! <router-link to="/userAccount/:name">C'est par ici</router-link></p>
    </div>
  </div>
  
</template>

<script>
export default {
        name: 'loginComponent',
        
        props: {
            auth:{
                type: Boolean,
                //required: true
            }
        },

        mounted: function() {
            console.log("auth : " + this.auth)
        },

       
        watch: {
        

            connection() {
                if(this.connexion) {
                    this.auth=this.connexion
                    return this.auth
                }
                else {
                    return this.auth
                }
                
            },
        },
            
                data: function() {

                    var data = {
                        msg:"hello",
                        connexion: false,
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

                // verif() {
                //     console.log(this.auth)
                // },

                login() {
                  
                    if(this.input.username != "" && this.input.password != "") {
                        
                        this.users.forEach(user => {
                            if(this.input.username == user.username && this.input.password == user.password)  {
                                this.connexion = true
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
 
                async testRouter() {
                    let name = this.input.username
                  //  await this.connection();
                    this.$router.push({ name : 'userAccount', params: { username: name }
                    })
                
                },
             }
       


}
</script>