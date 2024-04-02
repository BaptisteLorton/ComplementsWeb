<template>
  <ion-alert
      :is-open="dialog"
      :header="title"
      :message="text"
      :buttons="[
        { text: 'Cancel', handler: cancel, cssClass: 'secondary' },
        { text: 'Ok', handler: accept }
      ]"
  ></ion-alert>
</template>

<script setup>
import { ref } from 'vue';
import { useErrorStore } from '@/store/error.js';

const dialog = ref(false);
const resolve = ref(null);
const reject = ref(null);

const open = () => {
  dialog.value = true;
  return new Promise((res, rej) => {
    resolve.value = res;
    reject.value = rej;
  });
}

const accept = () => {
  resolve.value(true);
  dialog.value = false;
}

const cancel = () => {
  reject.value(false);
  dialog.value = false;
}

</script>