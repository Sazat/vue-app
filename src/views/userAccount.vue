<template>
  <div class="userAccount">
    <userAccountComponent></userAccountComponent>
  </div>
  
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
import userAccountComponent from '@/components/userAccountComponent.vue'

export default {
    name: 'userAccount',
    components : {
         userAccountComponent
    }
               
}   
</script>