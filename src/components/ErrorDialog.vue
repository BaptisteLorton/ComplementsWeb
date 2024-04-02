<template>
  <ion-alert
      :is-open="isError"
      :message="errorMsg.toString()"
      :buttons="['OK']"
      @ionAlertDidDismiss="popError"
  ></ion-alert>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useErrorStore } from '@/store/error.js';
import {IonAlert} from "@ionic/vue";

const errorStore = useErrorStore();

let isError = computed(() => errorStore.isError);
let errorMsg = computed(() => errorStore.errorMsg);
let popError = errorStore.popError;
</script>