<template>
  <div class="ion-page">
    <p> {{ mdpOrganisation }}</p>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Organisations</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" color="primary" @click="creerOrganisation">Créer une organisation</ion-button>

      <ion-list>
        <ion-item v-for="organisation in organisations" :key="organisation._id">
          <ion-label>
            <h2>{{ organisation.name }}</h2>
            <p>{{ organisation._id }}</p>
            <ion-button @click="goToOrganisation(organisation._id)">Selectionner</ion-button>
          </ion-label>
        </ion-item>
      </ion-list>

      <PromiseDialog
          ref="createOrganisationDialogRef"
          :title="`Créer une organisation`"
          :inputs="[
            {label: `Nom de l'organisation`, type: 'text', value: '', required: true},
            {label: 'Mot de passe', type: 'text', value: '', required: false},
          ]"
          width="600">
      </PromiseDialog>

      <ErrorDialog
          title="ERROR"
          width="600"
      >
      </ErrorDialog>
    </ion-content>
  </div>
</template>

<script>
import { useGestionStore } from "@/store/gestion.js";
import { useErrorStore} from "@/store/error.js";
import PromiseDialog from "@/components/PromiseDialog.vue";
import ErrorDialog from "@/components/ErrorDialog.vue";
import {onMounted, ref, watch} from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'ListOrgsView',
  components: {
    ErrorDialog,
    PromiseDialog,
  },
  setup() {
    const gestionStore = useGestionStore();
    const errorStore = useErrorStore();
    const organisations = gestionStore.organisations;
    const mdpOrganisation = gestionStore.mdpOrganisation;
    const router = useRouter();
    const createOrganisationDialogRef = ref(null);

    const getOrganisations = () => {
      gestionStore.getOrganisations();
    }

    const creerOrganisation = async () => {
      const values = await createOrganisationDialogRef.value.open();
      console.log('values',values);
      //await gestionStore.createOrganisation();
    }

    const goToOrganisation = async (organisationId) => {
      if (mdpOrganisation === '' || mdpOrganisation === null) {
        await router.push({name: 'login'});
      } else {
        await gestionStore.getOrganisationById({id: organisationId, password: mdpOrganisation});
        if (errorStore.isError) {
          errorStore.pushError("Erreur lors de la récupération de l'organisation");
        } else {
          await router.push({name: 'organisation'});
        }
      }
    }

    onMounted(() => {
      getOrganisations();
    });

    return {
      organisations,
      mdpOrganisation,
      createOrganisationDialogRef,
      getOrganisations,
      creerOrganisation,
      goToOrganisation,
    }
  }
}

</script>