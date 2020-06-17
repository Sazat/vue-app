<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Sarah Z. Vue.js App"/>
    <div>
      <monButton titleButton="Dis-moi bonjour" type="direBonjour" @direBonjour="direBonjour"></monButton>
     
<br>
<br>
      <monButton titleButton="Dis-moi au revoir" type="direByebye" @direByebye="direByebye"></monButton>
      <br><br>
      <div v-if="showBonjour">{{this.msg}}</div>
      <div v-if="showBye">{{this.msg}}</div>
      
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
     isGreen:true,
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
   }
 }
}
</script>
