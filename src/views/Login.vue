<template>
  <div class="login">
    <loginComponent></loginComponent>
  </div>
  
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
import loginComponent from '@/components/loginComponent.vue'

export default {
    name: 'Login',
    components : {
         loginComponent
    }
               
}   
</script>