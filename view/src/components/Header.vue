<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconLogin from './icons/IconLogin.vue'
import IconSearch from './icons/IconSearch.vue'
import IconShare from './icons/IconShare.vue'
import IconExplore from './icons/IconExplore.vue'

const props = defineProps({
  keywords: {
    type: Object,
    required: true
  }
})

const text = props.keywords

</script>

<template>

<div>
  <RouterLink to="/">
    <img alt="Sky Hub logo" src="@/assets/logo-sky-hub.svg">
  </RouterLink>
</div>
  
  
    <div class="header-container">
      <div class="header-item">
        <IconLogin/>
        <RouterLink to="/login" class="header-link stretched-link">{{ text.login }}</RouterLink>
      </div>

      <div class="header-item">
        <IconSearch/>
        <RouterLink to="/search" class="header-link stretched-link">{{ text.search }}</RouterLink>
      </div>

      <div class="header-item">
        <IconShare/>
        <RouterLink to="/share" class="header-link stretched-link">{{ text.share }}</RouterLink>
      </div>

      <div class="header-item">
        <IconExplore/>
        <RouterLink to="/explore" class="header-link stretched-link">{{ text.explore }}</RouterLink>
      </div>
    </div>
    
</template>