<template>
  <ion-modal :is-open="isError">
    <ion-content class="ion-padding">
      <div class="ion-text-center">
        <h2>{{ title }}</h2>
        <p>{{ errorMsg }}</p>
        <ion-button color="primary" @click="popError">Ok</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ErrorDialog',
  props: {
    title: String,
  },
  setup() {
    const isError = ref(false);
    const errorMsg = ref('');

    const popError = () => {
      isError.value = false;
    }

    return {
      isError,
      errorMsg,
      popError,
    }
  }
};
</script>