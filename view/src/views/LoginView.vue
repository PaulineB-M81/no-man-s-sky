<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="row justify-content-content align-center h-100">
        <form class="form col-4">
            <div class="form-group">
                <label for="inputLoginEmail" class="form-label">Identifiant</label>
                <input type="email" class="form-control" id="inputLoginEmail" aria-describedby="emailHelp">
            </div>

            <div class="form-group">
                <label for="inputLoginPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="inputLoginPassword">
            </div>
            
            <div class="btn-group justify-content-end">
                <button type="submit" class="btn btn-primary">Connexion</button>
                <RouterLink to="/register" class="btn btn-outline">Inscription</RouterLink>
            </div>
        </form>
    </div>
</template>