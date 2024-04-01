<template>
  <ion-modal :is-open=dialog>
    <ion-content class="ion-padding">
      <div class="ion-text-center">
        <h5>{{ title }}</h5>
        <p>{{ text }}</p>
        <div v-for="input in inputs" :key="input.label">
          <ion-label>{{ input.label }}</ion-label>
          <ion-input v-model="input.value" :type="input.type" :required="input.required"></ion-input>
        </div>
        <ion-button color="primary" @click="accept">Ok</ion-button>
        <ion-button color="secondary" @click="cancel">Cancel</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PromiseDialog',
  props: {
    title: String,
    text: String,
    width: String,
    inputs: Array,
  },
  setup() {
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

    return {
      dialog,
      open,
      accept,
      cancel,
    }
  }
};

</script>