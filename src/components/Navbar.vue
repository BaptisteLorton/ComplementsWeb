<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Navbar</ion-title>
      <ion-buttons slot="end">
        <ion-button :routerLink="{ path: '/login' }">Login</ion-button>
        <ion-button :routerLink="{ path: '/organisations' }">Liste Organisations</ion-button>
        <ion-button :routerLink="{ path: '/teams' }">Liste Teams</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue';
</script>