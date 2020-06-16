<template>
  <div class="userVue">
    <h1>Bienvenue dans votre espace privé {{$route.params.username}}</h1>
  </div>
  
</template>

<script>

export default {
    name: 'userAccount',
}
</script>