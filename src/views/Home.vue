<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Sarah Z. Vue.js App"/>
    <div id="btnPolis">
      <monButton isGreen="true" titleButton="Dis-moi bonjour" type="direBonjour" @direBonjour="direBonjour"></monButton>
<!--      
<br>
<br> -->
      <monButton isGreen="true" titleButton="Dis-moi au revoir" type="direByebye" @direByebye="direByebye"></monButton>
      <!-- <br><br> -->
      <div v-if="showBonjour">{{this.msg}}</div>
      <div v-if="showBye">{{this.msg}}</div>
      
    </div>

    <div id="btnPerso">
      <h3>Bonjour personnalisé</h3>
        <input @input="bjrPerso" type="text" v-model="prenom">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import monButton from '@/components/boutonComponent.vue'

export default {
  name: 'Home',
  data() {
   return {
     prenom:"",
    
      msg:"",
      showBonjour:false,
      showBye:false
   }
},
  components: {
    HelloWorld,
    monButton
  },

 methods: {
   direBonjour() {
    this.showBonjour=true,
    this.showBye=false,
    this.msg="Salut Toi !"
   },
   
   direByebye() {
    this.showBonjour=false,
    this.showBye=true,
    this.msg="Bye-bye !"
   },

   bjrPerso(event){
     this.$emit('input', event.target.value)
     this.msg=""
      this.showBye=false

     if(event.target.value !="") {
       this.showBonjour=true
        this.msg="Bonjour " + this.prenom
     }

     else{
       this.showBonjour=false
     }
   }
 }
}
</script>
<style scoped>
#btnPolis{
  width: 60%;
  text-align: center;
  margin: 20px auto;
  padding: 50px;
  border: 2px dotted #41B883;
  display: block;
}

#btnPerso{
  text-align: center;
  margin: 20px auto;
  padding: 50px; 
}
</style>