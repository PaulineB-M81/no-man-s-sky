<template>
    <div class="row justify-content-content align-center h-100">
        <form class="form col-4">
            <div class="form-group">
                <label for="inputRegisterEmail" class="form-label">Identifiant</label>
                <input type="email" class="form-control" id="inputRegisterEmail" aria-describedby="emailHelp">
            </div>

            <div class="form-group">
                <label for="inputRegisterPassword" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="inputRegisterPassword">
                <p>Votre mot de passe doit contenir</p>
                <p>Au moins 10 caractèresUne minusculeUne majusculeUn chiffreUn caractère spécial</p>
            </div>

            <div class="form-group">
                <label for="inputRegisterPassword2" class="form-label">Confirmez le mot de passe</label>
                <input type="password" class="form-control" id="inputRegisterPassword2">
            </div>
            
            <div class="btn-group justify-content-end">
                <button type="submit" class="btn btn-primary">S'inscrire</button>
            </div>
        </form>
    </div>
</template>