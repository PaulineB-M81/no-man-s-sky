<script setup lang="ts">
import { ref } from 'vue'
import { useUserAuth } from "@/stores/users-store";

// Post register data to store

const identifiant = defineModel('identifiant', { required: true });
const password = defineModel('password', { required: true });

function postUserData() {
    const registerData = {identifiant: identifiant.value, password: password.value};
  
    const userStore = useUserAuth();
  
        userStore.register(registerData);
        
  
}

</script>

<template>
    <div class="row justify-content-content align-center h-100">
        <form class="form col-4">
            <div class="form-group">
                <label for="inputRegisterEmail" class="form-label">Identifiant</label>
                <input v-model="identifiant" type="text" class="form-control" id="inputRegisterEmail" aria-describedby="emailHelp" required>
            </div>

            <!-- <div class="form-group">
                <label for="inputRegisterPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="inputRegisterPassword">
                <p>Votre mot de passe doit contenir</p>
                <p>Au moins 10 caractèresUne minusculeUne majusculeUn chiffreUn caractère spécial</p>
            </div> -->

            <div class="form-group">
                <label for="inputRegisterPassword2" class="form-label">Confirmez le mot de passe</label>
                <input v-model="password" type="password" class="form-control" id="inputRegisterPassword2" required>
            </div>
            
            <div class="btn-group justify-content-end">
                <button type="submit" class="btn btn-primary" @click="postUserData()">S'inscrire</button>
            </div>
        </form>
    </div>
</template>