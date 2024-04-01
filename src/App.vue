<template>
  <ion-app>
    <ion-header>
      <Navbar/>
    </ion-header>
    <ion-content>
      <router-view/>
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import Navbar from './components/Navbar.vue';
</script>