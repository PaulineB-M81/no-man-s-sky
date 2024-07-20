<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SearchPlanet from '../components/SearchPlanet.vue'
import SearchShip from '../components/SearchShip.vue'

const idActive = ref<string>('active');
const pannels = ref([]);

onMounted(() => {
    pannels.value = Array.from(document.querySelectorAll('[data-tab="pannel"]')); 
})

const tabActivate = (id: string) => idActive.value === id ? 'active' : '';

const activateTab = (id: string) => {
    idActive.value = id;
    pannels.value.map((item: HTMLElement) => {
        item.id == id ? item.classList.remove('d-none') : item.classList.add('d-none')    
    })

}
</script>

<template>
    <nav class="nav-tab">
        <div class="nav-item" :class="[tabActivate('shipTab'), idActive]" @click="activateTab('shipTab')">Tab Ship</div>
        <div class="nav-item" :class="tabActivate('planetTab')" @click="activateTab('planetTab')">Tab Planet</div>
    </nav>

    <div class="tab-content">
        <div id="shipTab" class="tab-panel" data-tab="pannel">panel ship</div>
        <div id="planetTab" class="tab-panel d-none" data-tab="pannel">panel planet</div>
    </div>
</template>