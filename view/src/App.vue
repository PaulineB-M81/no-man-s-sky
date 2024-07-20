<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import keywords from './keywords.json'
import HeaderContent from './components/Header.vue';
// import {useblogPost} from "./stores/user-profil";
// const myStore = useblogPost();
// console.log(myStore.getBlogPost())

</script>

<template>
  <header class="app-header">
    <HeaderContent :keywords="keywords.menu"/>
  </header>
   
  <main class="app-main">
      <RouterView/>
  </main>
</template>

<style scoped lang="scss">
</style>

