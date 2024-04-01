<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Organisation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button v-if="!afficherListe" color="primary" @click="ajouterEquipe">Ajouter une équipe</ion-button>
      <ion-select v-else @IonChange="selectedTeam=$event.target.value" :placeholder="'Sélectionner une équipe'" interface="action-sheet">
        <ion-select-option v-for="team in teamNotInOrganisation" :key="team._id" :value="team._id">{{ team.name }}</ion-select-option>
      </ion-select>
      <ion-button v-if="afficherListe" color="primary" @click="valider">Valider</ion-button>
      <ion-button v-if="afficherListe" color="primary" @click="annuler">Annuler</ion-button>

      <ion-list>
        <ion-item v-for="team in currentOrganisation.teams" :key="team._id">
          <ion-label>{{ team.name }}</ion-label>
          <ion-button slot="end" @click="setCurrentTeam(team)">
            Selectionner
          </ion-button>
          <ion-button slot="end" color="danger" @click="deleteTeam(team._id)">
            Supprimer
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>

    <PromiseDialog
        ref="deleteTeamDialog"
        :title="`Supprimer une équipe d'une organisation`"
        width="600">
    </PromiseDialog>
  </div>
</template>

<script>
import { useGestionStore } from "@/store/gestion.js";
import PromiseDialog from "@/components/PromiseDialog.vue";
import { ref } from 'vue';

export default {
  name: 'OrganisationView',
  components: { PromiseDialog },
  setup() {
    const gestionStore = useGestionStore();
    const currentOrganisation = gestionStore.currentOrganisation;
    const teams = gestionStore.teams;

    const organisationId = ref(null);
    const teamNotInOrganisation = ref(null);
    const selectedTeam = ref(null);
    const afficherListe = ref(false);

    const setCurrentTeam = (team) => {
      gestionStore.updateCurrentTeam(team);
    }

    const deleteTeam = async (teamId) => {
      const result = await this.$refs.deleteTeamDialog.open();
      if (result) {
        await gestionStore.removeTeamToOrganisation(teamId);
      }
    }

    const ajouterEquipe = () => {
      gestionStore.getTeams().then(() => {
        teamNotInOrganisation.value = teams.filter(team => {
          return !currentOrganisation.teams.some((teamInOrg) => {
            return teamInOrg._id === team._id;
          });
        });
        afficherListe.value = !afficherListe.value;
      });
    }

    const valider = async () => {
      await gestionStore.addTeamToOrganisation({idTeam: selectedTeam.value, Orgpassword: currentOrganisation.secret});
      afficherListe.value = !afficherListe.value;
    }

    const annuler = () => {
      afficherListe.value = !afficherListe.value;
    }

    return {
      currentOrganisation,
      teams,
      organisationId,
      teamNotInOrganisation,
      selectedTeam,
      afficherListe,
      setCurrentTeam,
      deleteTeam,
      ajouterEquipe,
      valider,
      annuler,
    }
  }
};
</script>
