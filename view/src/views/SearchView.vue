<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import IconShip from '../components/icons/IconShip.vue'
import IconPlanet from '../components/icons/IconPlanet.vue'
import SearchPlanet from '../components/search/SearchPlanet.vue'
import SearchShip from '../components/search/SearchShip.vue'

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
        <button class="nav-item" :class="[tabActivate('shipTab'), idActive]" @click="activateTab('shipTab')">
            <IconShip/>
            Starship
        </button>
        <button class="nav-item" :class="tabActivate('planetTab')" @click="activateTab('planetTab')">
            <IconPlanet/>
            Planète
        </button>
    </nav>

    <div class="tab-content">
        <div id="shipTab" class="tab-panel" data-tab="pannel">
            <SearchShip/>
        </div>
        
        <div id="planetTab" class="tab-panel d-none" data-tab="pannel">
            <SearchPlanet/>
        </div>
    </div>
</template>