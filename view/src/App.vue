<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import keywords from './keywords.json'
import HeaderContent from './components/Header.vue';
import {useUserAuth} from "./stores/users-store";
const myStore = useUserAuth();

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

