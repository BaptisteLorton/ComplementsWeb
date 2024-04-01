<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row justify-content-center>
          <ion-col size="12" size-sm="8" size-md="6" size-lg="4">
            <ion-card>
              <ion-card-content>
                <h2>Login:</h2>
                <ion-item>
                  <ion-input type="text" @IonChange="password=$event.target.value" placeholder="Entrez votre mot de passe"></ion-input>
                </ion-item>
                <ion-button expand="block" color="primary" @click="modifyOrganisationPassword">
                  Log In
                </ion-button>
                <p v-if="mdpOrganisation">Your password has been saved</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </div>
</template>

<script>
import { useGestionStore } from "@/store/gestion.js";
import { ref } from 'vue';

export default {
  name: 'LoginView',
  setup() {
    const gestionStore = useGestionStore();
    const mdpOrganisation = gestionStore.mdpOrganisation;
    const updateMdpOrganisation = gestionStore.updateMdpOrganisation;
    const password = ref('');

    const modifyOrganisationPassword = async () => {
      await updateMdpOrganisation(password.value);
    }

    return {
      mdpOrganisation,
      modifyOrganisationPassword,
      password,
    }
  }
};
</script>