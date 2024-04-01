import { defineStore } from 'pinia'

export const useErrorStore = defineStore({
  id: 'error',
  state: () => ({
    isError: false,
    errorMsg: '',
  }),
    actions: {
        pushError(error){
            this.errorMsg = error.data
            this.isError = true
        },
        popError() {
            this.isError = false
        },
    },
})