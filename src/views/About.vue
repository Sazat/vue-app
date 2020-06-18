<template>
  <div class="about">
    <h1>A propos de Sarah Z.</h1>
    <monButton titleButton="Tout savoir !" type="toutSavoir" @toutSavoir="toutSavoir"></monButton>

    <div class="infos" v-if="savoir">
      <p>Vient de : {{admin.origine}}</p>
      <p>Age : {{admin.age}} ans</p>
      
      <h2>Aime : </h2>
      
      <ul class="liste">  
        <li v-for="activite in activites" :key="activite.nomAct">{{activite.nomAct}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import monButton from '@/components/boutonComponent.vue'


export default {
  name:'About',
  data() {
    return {
      savoir:false,

      admin: {
        origine: "Rouen",
        age: 18,
        
      },
      activites: [
      {nomAct: "lecture"}, 
      {nomAct: "voyages"},
      {nomAct: "manger"},
      {nomAct: "dormir"}],

      hate: ["les cyclistes sur les trottoirs", "le sucré"]
    }
  },
  components: {
    monButton
  },

  methods: {
  toutSavoir(){
      this.savoir=true
      this.show()
      
    },
  
  async show() {
   // let frame = document.querySelector('.infos')
   
    await this.activites.forEach(activite => {
      const container = document.createElement('div')
      const p = document.createElement('p')
      p.textContent=activite
      container.appendChild(p)
      document.querySelector('.infos').appendChild(container)
    });

    
    
    
      
  }
  }
}
</script>

<style scoped>
.liste {
  list-style: none;
}

.infos {
  width: 60%;
  margin: 30px auto;
  padding: 15px;
  border: 2px double rgb(170, 57, 57);
  border-radius: 30px;
}
</style>