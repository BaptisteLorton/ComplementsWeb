<template>
  <ion-app>
    <ion-header>
      <Navbar/>
    </ion-header>
    <ion-content>
      <ErrorDialog
          title="ERROR"
          width="600"
      >
      </ErrorDialog>
      <router-view/>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import Navbar from './components/Navbar.vue';
import ErrorDialog from "./components/ErrorDialog.vue";
</script>